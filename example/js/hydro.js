var doc = document;
   
function hydroCss(){
  for( var i = 0; i < arguments.length; i++ ) {
    doc.write('<link type="text/css" rel="stylesheet" href=' + arguments[i] + '></lin' + 'k>');
  }
}

function hydroJs(){
  for( var i = 0; i < arguments.length; i++ ) {
    doc.write('<script src=' + arguments[i] + '></scrip' + 't>');
  }
}