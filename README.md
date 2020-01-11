# Ronan Casey - Personal Portfolio Website

<!-- One or two paragraphs providing an overview of your project. -->

Project 1 - User Centric Front End Development (Code Institute 2020)

<!-- Essentially, this part is your sales pitch. -->
The purpose of this portfolio website is to provide a best first impression when visited by potential employers or collaborators. Visitors will be able to meet me briefly through my short bio, browse my skills, see my projects and contact me with minimal effort.
 
## UX
 
As an employer/collaborator, I want to see evidence of past projects completed, so that I can get a sense of Ronan's level of ability.

![Project Showcase](https://raw.githubusercontent.com/elkrojo/my-portfolio-new/master/assets/img/portfolio-projects.png "Project Showcase")     


As an employer/collaborator, I want to be able to contact Ronan promptly about any jobs I could hire him for or projects I could use his input on.

![Contact](https://raw.githubusercontent.com/elkrojo/my-portfolio-new/master/assets/img/contact-form.png "Contact")

As an recruiter, I want to have access to Ronan's CV, so that I can match Ronan to suitable job opportunities.

![Skills](https://raw.githubusercontent.com/elkrojo/my-portfolio-new/master/assets/img/cv-skills.png "Skills")
![Education](https://raw.githubusercontent.com/elkrojo/my-portfolio-new/master/assets/img/cv-education.png "Education")      

### Strategy
The objective of the design is to create a stripped back minimalist appearance with easily accessible information throughout.

### Scope
Employers and Collaborators who have established an interest in my skills can easily browse through my work to date, as well as reading a little about me before potentially opting to make contact.

### Structure
Of primary importance was for visitors to be able to see my work to date. The projects section displays a selection of past projects with a brief description of the main technologies used. Each project is linked to a GitHub repository. My LinkedIn & GitHub profile pages are also linked alongside a downloadable PDF of my CV.

### Skeleton
[Wireframe](https://github.com/elkrojo/my-portfolio-new/blob/master/mock-up/my_port_desktop.jpeg)

### Surface
The concrete/asphalt colour palette was chosen to create easily readable content with added minimal flourishes by way of a pale aquamarine contrast.

## Demo
Clicking the image below will bring you to a live demo.
[![Home](https://raw.githubusercontent.com/elkrojo/my-portfolio-new/master/assets/img/home-section.png)](https://elkrojo.github.io/my-portfolio-new/)

## Features

### Existing Features
**Responsive Navbar** - provides users with a less cluttered screen when viewing through portable devices, by collapsing the menu for smaller screen sizes.       

**Scroll To Selection** - allows users to navigate through the page by clicking on a navbar location.     

The anonymous functions relative to both features mentioned above can be found in the main.js file at the location assets/js/     

### Features Left to Implement
For future revisions of the site I will add some section background overlay graphics similar to the home section and complementary to each section subject. I will also add some background contrast between sections to make the page less uniform. The projects section will be constantly updated with new projects as they are completed.

## Technologies Used

[HTML5](https://en.wikipedia.org/wiki/HTML5)
    - The project uses **HTML5** to structure the page contents.        

[CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
    - The project uses **CSS3** to style the HTML elements.     

[JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.


## Testing

The user story scenarios were adressed effectively, where my job relevant information was presented clearly. 
The About section provides a short introduction which gives some idea of my professionality and personality. 
The section will resize and even re-shape when the screen size is reduced. 
Visitors can browse my projects, which are presented as clickable cards. When clicked, a link to the associated GitHub repository will open in a separate browser tab. 
When hovered over with a pointer on desktop, the cards will display a darker font colour as well as a glowing pale aquamarine box shadow. 
My social media profiles can be accessed by links within relative font awesome icons located in the footer. My CV is also downloadable via the font awesome download icon located in the footer.        

The contact form is sensitive to correctly formatted input by the user. 
Failure to enter a name, given all other inputs are in order will result in an alert notification. 
Failure to enter a validly formatted email address, given all other inputs are in order will result in an alert notification. 
Failure to enter a message, given all other inputs are in order will result in an alert notification. 
Once all input contents are valid, the page will reload. 
Any prospective employer, recruiter or collaborator must complete the form appropriately in order to contact me.        

All external links will open in a new browser tab. This is achieved by setting the target attribute to "_blank" in the enclosing anchor element. 
The CV download option is also set to open in a new browser tab. From here, the user has the ability to preview the CV before optionally downloading. 
All external links have been manually tested, and have been confirmed to correctly point to their respective content.       

When clicked, the navbar locations will cause the page to scroll smoothly to each respective location section.      

The site was tested on multiple browsers (Chrome, Firefox, Safari) and on a few portable devices (iPhone 5s: Safari, iPad: Safari) to assess compatibility and responsiveness. 
While testing, I noticed that the home section was overlapping with the about section when in landscape orientation on iPhone 5s. I was able to correct this by setting a min-height value of 100vh to the home section.        

## Deployment

The site is hosted through GitHub pages and is synced to the master branch of the repository. 
This means that the latest push to the master branch will update the live site automatically. 
The process for initial deployment is as follows - On the repository GitHub page, click the settings tab located on the far right of the menu. 
Scroll down to the section titled GitHub Pages and select "master branch" as the source. 
The site deploys once a source is selected and a url link is accessible below the GitHib Pages section title.       

To run the code in this project locally, you can clone the full contents of the repository. 
In your terminal, navigate to the directory you want the repository located and paste this command:      

`git clone https://github.com/elkrojo/my-portfolio-new.git`        

Once cloned, you can remove all connection to the source repository using the command:       

`git remote rm origin`       

## Credits

### Helpful Resources
Responsive Navbar: https://codepen.io/tutsplus/pen/ZdRdZM <br />
Traversy Grid Website: https://codepen.io/bradtraversy/pen/gvMGyB <br />
Various Grid Positioning Rules: https://css-tricks.com <br />
Grid Form Layout: https://codepen.io/tutsplus/pen/eWXyYY <br />

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project from X