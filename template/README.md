# React Portfolio Template

### Start the development server
```sh
npm start
```

<!-- TABLE OF CONTENTS -->
## Table of Contents
* [Customizable Parts](#customizable-parts)
* [GitHub Actions Deployment](#github-actions-deployment)
* [Using A Custom Domain](#using-a-custom-domain)

<!-- HOW TO CUSTOMIZE THE TEMPLATE -->
## Customizable Parts
> All the customizable files live in the `src/information` folder.
* [Navigation & Page Layout](#navigation-&-page-layout)
* [About](#about)
* [Contact](#contact)
* [Technologies](#technologies)
* [Skills](#skills)
* [Projects](#projects)
* [Experience](#experience)
* [Education](#education)
* [Themes](#themes)

    ### Navigation & Page Layout
    * File: NavObject.tsx
    * Properties:
        * `text`: What appears in the sections headers and in the sidebar. You may change this to whatever you want, but **do not change the `section` property to match**.
        * `icon`: The icon that appears in the navbar. You may put an image here or even a custom SVG. Just make sure to add the `className={classes.icon}` attribute.
        * `section`: **Should not be modified and should stay with the respective section**
    * The order you put the objects in will be the order they appear in the navbar and throughout the page.
        > An exception here is the Landing Page will always be first and the Contact section will always be last (these sections are not in the NavObject file on purpose). What goes into the NavObjects file will be everything in between.
    * By default all of the navigational items available are already there.
    * You may remove any section you do not want.
        > If you are fluent in React, then you can add in a custom section to `src/components/nav`.
    
    ### About
    ### Contact
    ### Technologies
    ### Skills
    ### Projects
    ### Experience
    ### Education
    ### Themes

<!-- SETUP AUTO DEPLOYMENT -->
## GitHub Actions Deployment

<!-- CUSTOM DOMAIN USAGE -->
## Using A Custom Domain
