---
layout: page
title: Tonsillectomy
description: Analysis of variation of analgesic treatment within tonsillectomy surgery at UCLH
importance: 1
category: current
related_publications: false
---


> There was nothing special about the tonsillectomy cohort. The fact they were were unexacting was exactly the reason we picked them for the feasibility study. We carried some rather plain priors into this study, primarily that there was little variation in anaesthetic practice and that it was of little consequence. 
> 
> We were pretty close but the data infrastructure we built along the way was the really exciting bit.

# Aims and Background

As part of the OPALS project we declared that we would build a highly granular peri-operative dataset that would allow us to now test questions relying on both detail and breadth. As part of building this pipeline we needed a feasibility study cohort to test the data extraction and methods. 

Tonsillectomy were used as the cohort as their intra-operative analgesia relies exclusively on medications that are tracked within the anaesthetic chart data tables (IV and Oral meds). There was no spinals, blocks or PCA's to worry about. We were also interested how the coblation technique would interact with the analgesia and pain. 

From a feasibility point of view they were also a nice easy cohort to define and fairly common with our final analysis having over 3,000 encounters. 

# Work

## Data extraction

This project really got to grips with the EPIC data model within the UCLH EHR. I spent a lot of time building (and rebuilding) SQL queries to get exactly the data I wanted and the data i was getting was what I thought it was. Whilst the data model developed was later eclipsed by IMPACT, the lessons learned were key in understand how peri-operative interactions translate to data. 

## Analysis

We had initially planned an IV analysis were by we would investigate the level of variation by clinician to then stratify and investigate the proximal outcomes. In the end we decided to limit our analysis to a descriptive only owing to the lack of any real variation in practice. It did give us the opportunity to think about what could make a good instrument in a similar cohort though. 

One really cool bit was the UpSet graphs we got to produce. We came across the problem of displaying proportions of combinations. When there is a three binary decisions we can produce a pretty good looking Venn diagram. However once you start to get to more than 5 combinations it starts to get very tricky to read. 

I stumbled upon [the UpSet website] (https://upset.app)though some frustrated googling and the results came out looking pretty good!

# Results

The ultimate output was a paper (currently in draft) which will hopefully be my first full length first author paper!!

We then took the framework from the code developed into our future projects on the colectomy cohort.
