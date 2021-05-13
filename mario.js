
printPyramid(5);


let rows = 5

let str = '';


for ( let i = 2; i <= rows+1; i++){  
  str = " ";
  for(let j=1; j<rows-1; j++)
  {
    document.write( "&nbsp&nbsp" );
  for ( j = 6-i; j <= 5; j++ )
  {
    str += "#"; 
  }
  }

  console.log(str);
}

function printPyramid(height) {
    console.log("Uh oh... the pyramid is under construction.");
    console.log("Check back soon, our developers are hard at work as we speak!");

}
