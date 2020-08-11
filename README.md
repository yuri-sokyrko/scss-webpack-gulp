# scss-webpack-gulp
## Frontend boilerplate with scss
***

This is a boilerplate for front-end projects.
***
### Base Commands
1. _*npm i*_ - install node modules
2. _*npm run gulp*_ - start to watch the project, makes _tmp_ to serve the project
3. _*npm run gulp dist*_ - compile the project to _dist_ folder. After you call this command you'll get compiled and optimized version of your project (optimized html, styles, js, images).
4. _*npm run gulp clear*_ - clears build-cache.
5. _*npm run gulp clean-dev*_ - delete _tmp_ folder.
6. _*npm run gulp clean-dist*_ - delete _dist_ folder.
***

### Special Commands
* _*npm run gulp scss*_ - compile styles to tmp folder;
* _*npm run gulp html-php*_ - compile html or/and php to tmp folder;
* _*npm run gulp scripts*_ - compile JS to tmp folder;
* _*npm run gulp fonts-images*_ - copy fonts and images to tmp folder;

### The result of work
As a result of the work of the collector, we get the *dist* folder, which contains:
* *css* folder with the file *style.css*, this file contains all the styles of the project. The file is provided in minified form.
* *js* folder with the *main.js* file, this file contains all the project skirtings. The file is provided in minified form.
* *img* folder where the optimized images are located.
* *fonts* folder where fonts are located.
* compiled *html* and/or *php* files.