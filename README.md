# Development Notes (for future developers) - a comprehensive guide to how this website works
## Current filepath: ~/README.md
## Current status: in-progress

Hi! This README is intended for future developers of this website. It presumes a basic understanding of:

- HTML5, JSON, CSS3 and JS
- Bootstrap 4 and HTML5 Boilerplate
- CDNs for scripts and images
- Static website hosting on GitHub Pages and Heroku
- Git on the command line (you may be able to use SVN but this will not be covered in this README)
- Unix terminal usage

If you're a standard end user, this guide isn't for you. Check with the owner of the server for more information.

*This documentation is issued under the same GPL-3.0 license that the website source code is.*

**Produced by aidswidjaja#2805 (Discord) / @adrianpenguin1 (Twitter) / nstyvm@gmail.com (Email).** Discord is usually the fastest way to contact me, but if it's been a couple of years and I go inactive there then try the other methods too.

### Table of Contents

- Background
- Getting started and dependencies
- Layout
- Mobile responsiveness
- CDN link descriptions
- Hosting

### Background

This Lively website has been recreated from scratch after an attack on a previous version of the website which lost all source code. There were a number of security vulnerabilities with the old setup, such as the use of the .tk domain operated by the South Pacific island nation of Tokelau, a territory of New Zealand. This setup comes with a few advantages, such as the source code being open source allowing the code to stay safe. It is also initialised through Git which allows for easy code addition, revision, and deletion, especially of past code edits. The current plan as of 21 Jan 2020 is to host it on Heroku or another static site hosting service such as GitHub Pages or Netlify. 

I am personally not responsible for the content on this website, as this is being managed by the Lively Discord server. Please contact them for more information. Should the Lively Discord server be inaccessible, I will be unable to assist you in regards to hosting as I will probably not have access to it – but, you can use the above contact details if all else fails!

This version of the Lively website is designed to be basic but modular. It contains comments and a simple file structure to allow oncoming developers of this site to easily rework the code without completely starting over. That being said, there is not much functionality included on initial release.

This site is designed for Chrome and Firefox primarily, with secondary support on mobile devices (Safari on iOS, Chrome on Android), and limited support for Microsoft Edge (non-Chromium).

### Getting started and dependencies

This site relies on modern web technologies such as HTML5, CSS3 and JavaScript. I encourage you use a compliant and modern browser (such as Firefox Developer Edition). It's originally structured around the HTML5 Boilerplate from the H5BP Organization, but this structure can change and probably will (as of Jan 21) where no significant commits have been made). 

This website (as of Jan 21) uses [HTML5 Boilerplate v7.3.0 (H5BP)](https://github.com/h5bp/html5-boilerplate/releases/tag/v7.3.0) which is directly linked to the [v7.3.0 tag on GitHub.](https://github.com/h5bp/html5-boilerplate/tree/v7.3.0). The current `master` of this project can be [found here](https://github.com/h5bp/html5-boilerplate/tree/master).

This website (as of Jan 21) uses [Bootstrap v4.4.1 (TWBS)](https://github.com/twbs/bootstrap/releases/tag/v4.4.1) which is directly linked to the [v4.4.1 tag on GitHub.](https://github.com/twbs/bootstrap/tree/v4.4.1). The current `master` of this project can be [found here](https://github.com/twbs/bootstrap/tree/master).

Here is the [basic file structure and usage information](https://github.com/h5bp/html5-boilerplate/blob/master/dist/doc/usage.md) for H5BP. It may have been modified significantly since time of writing (Jan 21). 

Here is the [basic file structure and usage information](https://github.com/twbs/bootstrap/blob/master/README.md#whats-included) for TWBS. It may have been modified significantly since time of writing (Jan 21).

For other scripts and dependencies, there will usually be a comment indicating it's usage. Please also see [#1](https://github.com/aidswidjaja/Lively/issues/1) about potential conflicts between H5BP and TWBS.

Once your're familiar with how this website depends on third-party resources, move onto the next section about getting it on your development machine.

#### Find the most recent version of this website

`master` will usually be the most recent version, but it could also be broken, so check releases on GitHub too. Additionally, someone else may have already worked on this website too, so check for forks. 

>Wait! Have you ensured that you're able to clone to a Git repository? You will not be able to push request to [aidswidjaja/Lively](https://github.com/aidswidjaja/Lively) if it is depreceated, so setup a Git repository remotely for you to store your work on.

Once you're confident you have a good codebase and repository to work with, proceed to `clone` the repo to your machine.

```
git clone https://github.com/aidswidjaja/Lively.git
```

where the URL is your remote repo URL.

#### Deploying this site on your local production machine

If this website is static (or you're only testing static features) you can drag and drop the HTML file into your browser. It will be rendered as a local file, and while convenient, eliminates any server-side testing/scripting you may want to do. However, in many cases it's better to use a web server. It's not neccessary to use Apache or Nginx though. Instead, you can use a web server that's already installed on your machine:

If you are using/have installed Node.js/npm - use `http-server`. See [npm](https://www.npmjs.com/package/http-server) or [GitHub](https://github.com/http-party/http-server) for more information.

If you are using/have installed Python - use `SimpleHTTPServer` or `http.server`, depending on your configuration. See [Python Wiki](https://wiki.python.org/moin/WebServers) for more information.

This [MDN web doc](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server) has great information on web servers and how to host this website on your development machine.

#### Other things to note:

- Web browser for testing? I recommend Firefox Developer Edition, Chrome/Chromium Dev channel – and Safari (iOS), Chrome Dev channel (Android)
- Security vulnerabilities. It might be better to process sensitive information offsite.
- Already implemented (but unused features). At the time of writing, I intended to develop this site for another developer to easily take over and continue work on.
- Already implemented analytics. Check through the code and see if there are any variables that need to be changed. You also might need to investigate environment variables that may have been used but not documented.
- `.gitignore` – Are there any files that were excluded from Git?
- `LICENSE` – Are you adhering by the rules of the GPL-3.0 license (or any other additional legal requirements)? 

>My local jurisdiction is NSW, Australia, but I'd also suggest looking at US for especially with DMCA, GPL, Git, and hosting services such as Heroku and Netlify if you're concerned, as well as EU GDPR and India, where this Discord server is located.

Once you're happy with your development environment, you can proceed to the next section!