<div align="center">
  <img alt="Logo" src="./src/images/logo.png" width="100" />
</div>
<h1 align="center">
  shivgodhia.com
</h1>
<p align="center">
  My personal website, <a href="https://shivgodhia.com" target="_blank">shivgodhia.com</a>
  <br>
  Built with <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a> and hosted with <a href="https://pages.github.com/" target="_blank">GitHub Pages</a>, credits go to <a href="https://brittanychiang.com" target="_blank">brittanychiang.com</a> for the awesome website
</p>

![demo](./src/images/demo.png)

## 🚨 Forking this repo (please read!)

I did not design or build this website, I merely modified it to suit my tastes. Last I checked, [Brittany Chiang](https://github.com/bchiang7/) allows people to use this code **with attribution**, but it would be better to hear it from Brittany herself, at her website's [GitHub page](https://github.com/bchiang7/v4).

## 🏗️ My experience modifying this website

Firstly, note that I have little to no real web development experience. I did work in JavaScript before and know the basics of HTML and CSS, but have very little practical experience with handling boilerplate and using frameworks etc. Anyway, JavaScript turned out to be totally unnecessary for forking and modifying this website.

I started off by going through the whole [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/) on a Sunday afternoon. It's a fantastic tutorial that teaches the basics of modern WebDev and I highly recommend going through it. Here's the [completed tutorial's code](https://github.com/hivestrung/gatsby-tutorial). It was enough to get me started with understanding the fundamentals of [React](https://reactjs.org/), enabling me to modify the website.

Of course, changing the content to my own is no big deal, Gatsby's Content Management System using GraphQL means pages are automatically created from your Markdown files within folders. If you've used [Jekyll](https://jekyllrb.com/) it has a similar idea of creating pages from your Markdown files. So a lot of the work was already done by Brittany.

Changing basic like colours was simple enough, though I refactored the code a little so that colours are all defined in one place (previously they were defined in 2 different files).

I did have to spend quite a bit of time changing the loading animation to use `S` instead of `B` - I was introduced to the concept of [Scalable Vector Graphics (SVG)](https://developer.mozilla.org/en-US/docs/Web/SVG), in particular, SVG paths. In short, SVG paths are basically a way to draw graphics on the fly. So, instead of loading an image like a JPEG, it's actually taking a sequence of instructions and drawing the graphics out, which was really cool but also really difficult to do myself. I used [this neat website](https://danmarshall.github.io/google-font-to-svg-path/) to convert `S` to an SVG path.

Deploying was different from what I was used to. For my previous site, I simply had to push to master and it would update. Gatsby works a little differently, but using [this helpful guide](https://www.gatsbyjs.com/docs/how-gatsby-works-with-github-pages/) had me sorted in 15 minutes.

Now, development has to be done in a branch not named master, and once I'm happy with my site, I have to run `npm run deploy` to deploy it. It means that pushing changes and deployment are separate; deployment can be done without even pushing my changes, and I can push without deploying. I figured that if I'm deploying, I will always want to push my changes, so instead of the script `gatsby build && gh-pages -d public -b master` being called when running `npm run deploy`, I set it to run `git push && gatsby build && gh-pages -d public -b master`.

## 🗺️ Roadmap

A lot has been done, and I'm rather happy with the page as it is for now. But in due time, I hope to build some of the following features:

- A blogging section
- Featured blog posts on the front page
- Typing animation for the introduction at the top of the page
- Dark/light mode toggle
- A button to cycle between colour schemes, just for fun

## 🛠 Installation & Set Up

1. Install the Gatsby CLI

   ```sh
   npm install -g gatsby-cli
   ```

2. Install and use the correct version of Node using [NVM](https://github.com/nvm-sh/nvm)

   ```sh
   nvm install
   ```

3. Install dependencies

   ```sh
   yarn
   ```

4. Start the development server

   ```sh
   npm start
   ```

## 🚀 Building and Running for Production

1. Generate a full static production build

   ```sh
   npm run build
   ```

1. Preview the site as it will appear once deployed

   ```sh
   npm run serve
   ```

## 🎨 Color Reference

| Color          | Hex                                                                |
| -------------- | ------------------------------------------------------------------ |
| Navy           | ![#020c1b](https://via.placeholder.com/10/020c1b?text=+) `#020c1b` |
| Light Navy     | ![#041630](https://via.placeholder.com/10/041630?text=+) `#041630` |
| Lightest Navy  | ![#303C55](https://via.placeholder.com/10/303C55?text=+) `#303c55` |
| Slate          | ![#8892b0](https://via.placeholder.com/10/8892b0?text=+) `#8892b0` |
| Light Slate    | ![#a8b2d1](https://via.placeholder.com/10/a8b2d1?text=+) `#a8b2d1` |
| Lightest Slate | ![#ccd6f6](https://via.placeholder.com/10/ccd6f6?text=+) `#ccd6f6` |
| White          | ![#e6f1ff](https://via.placeholder.com/10/e6f1ff?text=+) `#e6f1ff` |
| Yellow         | ![#FCDF49](https://via.placeholder.com/10/FCDF49?text=+) `#fcdf49` |
