#The Hidro.js


##Idial For Add many Library To The Page

This library does not depend on jquery and it Reduces the code needed to connect to external JS or CSS files.
Total should connect the Hidro.js to the page and write some words in the tag script.

##How To Use?

###it easy, you write:  

hydro(type of file: Css/Js)(link to file in inverted commas and in brackets).    

if you want many files to load add after inverted commas:                                                                                              
comma and the link to the file in: inverted commas.

###examples:

-hydroJs(
   'js/bootstrap.min.js'
  ,'js/jquery-1.7.0.js'
  ,'js/jquery-1.7.1.js'
  ,'js/jquery-1.7.2.js'
  ,'js/jquery.zoomooz.min.js');
  
-hydroCss(
   'css/bootstrap.min.css'
  ,'css/bootstrap-responsive.min.css');

######*see more example in the folder example