// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(cat) {
    cats.push(cat);
}function destructivelyPrependCat(cat) {
    cats.unshift(cat);
}
function destructivelyRemoveLastCat(cat) {
    cats.pop(cat);
}
function destructivelyRemoveFirstCat(cat) {
    cats.shift(cat);
}
function appendCat(cat) {
    return [...cats, cat];
}
function prependCat(cat) {
    return [cat, ...cats];
}
function removeFirstCat () {
    return cats.slice(1);
  }
  
  function removeLastCat () {
    return cats.slice(0, cats.length - 1);
  }