document.getElementById("pyrheight").addEventListener("click", printPyramid);

document.getElementById("brickchoice").addEventListener("click", printPyramid);
//printPyramid(5);

function printPyramid(height) {

let rows = document.getElementById("pyrheight").value;

let str = '';


for ( let i = 1; i <= rows; i++){  
  str = "";
  for( let j = 0; j < rows-i; j++)
  {
    str += " ";
  }
  for ( j = rows-i; j <= rows; j++ )
  {
    str += document.getElementById("brickchoice").value; 
  }
  
  console.log(str)

  var para = document.createElement("p");
  var node = document.createTextNode( str );
  para.appendChild(node);
  var element = document.getElementById("pyramid");
  element.appendChild(para);
  }

}
// i = i +1;
// i++;


//just an example

// console.log("  ##")
// console.log(" ###")
// console.log("####")