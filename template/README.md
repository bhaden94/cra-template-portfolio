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
                * `short`: Short description of the strength. Appears initially on the screen.
                * `long`: Longer description of the strength and will appear on hover.
                * `image`: Link to picture for the strength. Save the images in `src/images/about` and import the same way as the background image. An SVG is recommended for use here and [flaticon](https://www.flaticon.com/) is a great site for some free ones.
    ### Contact
    * File: ContactObject.tsx
    * Properties: 
        * `name`: The name of the contact medium (e.g: LinkedIn). 
        * `link`: A link to the social site/contact method.
            * There is a simple example included for a link to email, but if you would like more control over this see [this article](https://css-tricks.com/snippets/html/mailto-links/) on how to add more.
        * `text`: Text that appears in the contact section.
        * `icon`: Icon that appears in the navigation bar footer and in the contact section.
            * Some social icons are in Material-UI, but not all. You can also import from [simple icons](https://simple-icons.github.io/simple-icons-website/) just like Twitch is imported in the example code.
            * Make sure to include `className={iconClass}` in whichever icon you use. 
    ### Technologies
    * File: TechnologiesObject.tsx
    * Properties: 
        * This file is a little different from the rest and as such can be custom to an extent.
        * All the icons will be used through a few different parts of the portfolio.
        * The best way to modify this section is to just copy one technology that is currently there already and change the name to another icon that exists in [simple icons](https://simple-icons.github.io/simple-icons-website/).
        * The name of the property is up to you.
        * There is also attributes within the icons that are used:
            * `color`: The way it is written currently, we are able to override the default color property so that you can make all icons the same color throughout your portfolio if you wish.
                * The default color is what is on the right of the `||` and I get that from the simple icons website, but you may put whatever you want here.
            * `size`: Changes the size of the icons are important since they appear in multiple places arount the portfolio. The default size is 50 which is on the right of `||` and can be overriden when we use the objects. 
    * We will see how to use these objects in later sections.

    ### Skills
    ### Projects
    ### Experience
    ### Education
    ### Themes

<!-- SETUP AUTO DEPLOYMENT -->
## GitHub Actions Deployment

<!-- CUSTOM DOMAIN USAGE -->
## Using A Custom Domain
