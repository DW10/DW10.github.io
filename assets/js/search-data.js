// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "A one-page PDF version is available to download.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Peer-reviewed papers, preprints and conference abstracts, most recent first.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Current and completed research projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "projects-impact-functions",
          title: 'IMPACT functions',
          description: "The development and functionality of the IMPACTfunctions R package for peri-operative data extraction",
          section: "Projects",handler: () => {
              window.location.href = "/projects/IMPACTfunctions/";
            },},{id: "projects-mhra-report",
          title: 'MHRA report',
          description: "Rapid analysis of modified-release opioid prescribing after surgery",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mr_opioids/";
            },},{id: "projects-opioid-burden-metrics",
          title: 'Opioid burden metrics',
          description: "A simulation study and literature review of how opioid burden metrics such as OME are used",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ome_metrics/";
            },},{id: "projects-tonsillectomy",
          title: 'Tonsillectomy',
          description: "Analysis of variation in analgesic practice for tonsillectomy at UCLH",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tonsillectomy/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/academic_cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%79%6C%61%6E.%77%68%69%74%61%6B%65%72.%32%35[%61%74]%75%63%6C.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/DW10", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-6619-5846", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
