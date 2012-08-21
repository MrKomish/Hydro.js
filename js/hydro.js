var doc = document;
   
function hydroCssOne(link1){
  for( var i = 0; i < arguments.length; i++ ) {
    doc.write('<link type="text/css" rel="stylesheet" href=' + arguments[i] + '></lin' + 'k>');
  }
}

function hydroJs(){
  for( var i = 0; i < arguments.length; i++ ) {
    doc.write('<script src=' + arguments[i] + '></scrip' + 't>');
  }
}