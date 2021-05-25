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
    * File: AboutObject.tsx
    * Properties:
        * `name`: Your name
        * `title`: What job do you do (ex: Software Developer)
        * `landingOpener`: The text that appears at the top of the page. 
            * This is a list and each string in that list represent a new line.
            * Example usage:
                ```js
                landingOpener: ["this is a test"] 
                // appears on the screen as: 
                    // this is a test
                landingOpener: ["this is", "a test"]
                // appears on the screen as: 
                    // this is
                    // a test
                                            
                ```
        * `landingOpenerColorOverride` (*optional*): Overrides the default landingOpener text color. This should be used when you have a background that needs a specific color text to go well with it.
        * `landingImage`: Background image that appears at the top of the page. The image can be saved in `src/images/landing` and be imported at the top of AboutObject.tsx just like in the example code.
        * `headline`: The first text in the About section of the page. This should be a good representation of you. It can be short or long, but make it *you*.
        * `strengths`: List of strength objects. What do you do well and why should anyone care?
            * Properties of strength object:
                * `short`: short description of the strength. Appears intially on the screen.
                * `long`: Longer description of the strength and will appear on hover.
                * `image`: Link to picture for the strength. Save the images in `src/images/about` and import the same way as the background image. An SVG is recommended for use here and [flaticon](https://www.flaticon.com/) is a great site for some free ones.
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
