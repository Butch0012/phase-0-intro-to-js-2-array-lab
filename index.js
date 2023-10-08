// Write your solution here!

var cats = ["Milo", "Otis", "Garfield"]; //Initialize the cats array with an initial value


function destructivelyAppendCat(name) {   // Function to append a cat to the end of the cats array (destructive)
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);  // Function will prepend a cat to the beginning of the cats array (destructive)
}


function destructivelyRemoveLastCat() { // Function to remove the last cat from the cats array (destructive)
  cats.pop();
}

function destructivelyRemoveFirstCat() {  // Function to remove the first cat from the cats array (destructive)
  cats.shift();
}


function appendCat(name) {
  const brandCats = [...cats, name]; // Function to append a cat to the cats array and return a new array (non-destructive)
  return brandCats;
}


function prependCat(name) {
  const brandCats = [name, ...cats]; // Function to prepend a cat to the cats array and return a new array (non-destructive)
  return brandCats;
}


function removeLastCat() {
  const brandCats = cats.slice(0, -1); // Function to remove the last cat from the cats array and return a new array (non-destructive)
  return brandCats;
}
function removeFirstCat() {
  const brandCats = cats.slice(1); // Function to remove the first cat from the cats array and return a new array (non-destructive)
  return brandCats;
}



