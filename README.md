# Overview

This is my newly updated personal website. It includes a summary of what type of person I am and what I like to do. A page for all my projects, what technologies were used for each and what purpose they serve. This website also contains my blogs, sharing the various thoughts that flow through my head.

If you are curious about the design process, you can read it on the website. There is an entire page dedicated to my thought process.

## Screenshots

![about](/images/about.png)
![projects](/images/projects.png)
![design](/images/design.png)
![blog](/images/blog.png)

## Technologies
I used React and Next.js along with the help of Sass (and a 7-1 architecture setup) for styling. The IDE used was VS Code. Used Krita for logo art. Deployed with Vercel.

## Challenges

Some issues that I ran into while creating this website include:
-  Making sure the grid snaps in certain increments so that some cells aren't cut off
- Making the images in the project page not throw off the flow of the rest of the components leading to misaligned text on the grid
- Understanding how to make my blog markdown files into static pages
- Adapting the file structure that I typically use to accommodate for the new Next.js files I needed to implement

## What I learned
- Learned how to implement CI/CD to automate uploading blogs, enabling a more efficient workflow
- Got my feet wet with Next.js, learning the basics. Still a lot to learn though
- With the constant goal of making sure all text was aligned with the grid, it taught me that strict consistency in UI is key
- Being able to articulate my thought process for my websites design helped me understand what needs to be improved and what I should use more of

## Plan to Add / Fix
- Change the overlay images for my logo into sprites, so they load faster
- Find a better way to load my project images (sometimes when clicking the projects page they load a bit too late and its quite noticeable)
- Fix 404 page
- Fix project image heights