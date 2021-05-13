
printPyramid(5);


let rows = 5

let str = '';


for ( let i = 1; i <= rows; i++){  
  str = "";
  for( let j = 4; j < rows-1; j++)
  {
    str += " ";
  }
  for ( j = rows-i; j <= 5; j++ )
  {
    str += "#"; 
  }
  

  console.log(str)

  var para = document.createElement("p");
  var node = document.createTextNode( str );
  para.appendChild(node);
  var element = document.getElementById("pyramid");
  element.appendChild(para);
  }
// i = i +1;
// i++;

function printPyramid(height) {
    console.log("Uh oh... the pyramid is under construction.");
    console.log("Check back soon, our developers are hard at work as we speak!");

}

//just an example

// console.log("  ##")
// console.log(" ###")
// console.log("####")