**React Bootstrap Boilerplate**

React boilerplate which contains bootstrap packages into it.

### Features: ###
* It contains react with webpack configuration in it.
* It has bootstrap package with webpack configuration to transpile bootstrap.
* It has Jquery package with webpack configuration.
* It has **class** attribute transpile into **className**.

### Webpack configs contains: ###
* babels.
* jquery. 
* bootstrap.css and bootstrap.js
* loaders needed for this boilerplate

### Usages: ###
* Clone or download repo
* run npm install in command prompt as admin
* run webpack --w
* run node server.js in command prompt as admin.
* put your component into components folder
* Delete Example file if needed

### No Jquery Configuration ###
If the project does not need JQuery, follow steps below:

* Clone repo
* Open package.json, remove jquery package from it.
* Open webpack.config.js, remove following codes at entry section:

    * `'script!jquery/dist/jquery.min.js'`

    * `'script!bootstrap/dist/js/bootstrap.min.js'`

* run npm install
* run webpack --w
* run node server.js