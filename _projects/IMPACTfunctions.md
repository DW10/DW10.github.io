---
layout: page
title: IMPACT functions
description: The development and functionality of the IMPACTfunctions R package for peri-operative data extraction
importance: 1
category: current
related_publications: false
---

> Building the data pipeline for the IMPACT dataset required moving from multiple and isolated isolated, scripts across different pipelines to scalable, reusable infrastructure. `IMPACTfunctions` represents the summation of the learning and data cleaning efforts of the last 2 years. Whilst the first version is far from perfect or complete it feels like a big achievement on the data science learning journey 
>
> Making an R package was my first goal when I first joined UCLH so to see a first draft now published (privately) feels likes a big accomplishment!

# Aims and Background

Our primary issue was data set access vs easy of use. Ready made *"flat"* dataset such as those from inbuilt EHR tools are rigid and often lack the depth or detail on data lineage. On the flip side, a caboodle login offered almost unfettered access to the warehouse of EPR data but navigating to what you actually want can take a year plus. 

The IMPACT peri-operative dataset, developed at University College London Hospitals (UCLH) in tandem other trusts offered a middle ground. A highly granular and expansive dataset but clinically validated and collated. Despite this, it remained in a large multi-table database that required effort to extract the specific data needed.  

While earlier feasibility studies required building and rebuilding custom SQL queries and functions to navigate the EPIC data model and the IMPACT dataset, scaling up research efforts demanded a more robust approach.

Extracting features from clinical datasets required trust and reproducibility. Relying on ad-hoc scripts often lead to fragmented cohort definitions and a significant amount of silent errors.`IMPACTfunctions` was provide a common workflow, providing a toolkit for subsetting surgical procedures, extracting medication administrations, and handling flowsheet data seamlessly via Apache Arrow and the Tidyverse.

# Work

The architecture of the package is modular, designed to mirror the logical progression of clinical research from patient identification to feature engineering. 

## Defining Study Cohorts

Defining a study population can range from examining the entire surgical database to highly specific case-control matching. The package uses a hierarchical approach to filtering, acting as a programmable CONSORT flow diagram. This hierarchy operates on three levels:

* **Whole Cohort Functions:** High-level functions applying grouped criteria to yield a final study population.
* **Topic Area Functions:** Functions targeting specific domains, such as `cohort_complete_admissions()` to remove encounters with missing discharge dates to prevent skewed length-of-stay metrics, or `cohort_procedure_codes()`.
* **Single Criteria Functions:** Granular `cohort_enforce_...` functions representing singular eligibility criteria, allowing for highly customised filtering. 

Importantly, the data manipulation is optimised to operate efficiently on Arrow datasets, allowing iterative filtering prior to collecting the dataframe into memory. The package also automatically tracks the applied filters, which can be reviewed via the generated `eligibility_criteria` table.

## Feature Extraction

Once the cohort is defined, the package manages the complexities of the Medication Administration Record (MAR). Medications are frequently recorded under a wide variety of nomenclature strings. The `search_drug_names()` function provides a mechanism to map these variations, checking row counts to determine formulation popularity before enforcing strict searches. 

The raw MAR requires significant cleaning, which is handled natively by `preproccess_MAR()`. Feature vectors can then be calculated over custom timeframes (e.g., specific post-operative hour blocks) using `extract_medication()` and `calculate_medication_feature()`. 

A critical component of this workflow is safety in data engineering. For example, when attempting to calculate Oral Morphine Equivalents (OME), the function executes an internal check and produces a danger error if the user has inadvertently filtered out other relevant opioids prior to the calculation. 

Similar functionality is implemented for physiological parameters using `extract_flowsheet_data()` and `calculate_flowsheet_feature()`.

# Results and Reflections

The current version of the package (v0.1.0) includes comprehensive vignette documentation. To support ongoing workflow development while researchers await data access approvals, we generated a minimum viable synthetic dataset that allows all package functions to be tested locally. 

Transitioning from writing ad-hoc analytical scripts to formal R package development—heavily referencing the standard R Packages methodologies—has been a significant learning curve. It forces a shift from clinical intuition to explicit, documented and robust functions. 