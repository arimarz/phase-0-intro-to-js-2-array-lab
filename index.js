// Write your solution here!
const cats =  ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name)
}

function destructivelyPrependCat(name) {
    return cats.unshift(name)
}
 function destructivelyRemoveLastCat() {
    return cats.pop()
 }
 function destructivelyRemoveFirstCat() {
    return cats.shift()
 }
 function appendCat(name) {
    const newCats= [...cats]
    newCats.push(name);
    return newCats
 }
 function prependCat(name) {
    const newCatsFront = [...cats];
    newCatsFront.unshift(name)
    return newCatsFront
 }
 function removeLastCat() {
    const newCatsRemoveLast = [...cats];
    newCatsRemoveLast.pop()
    return newCatsRemoveLast
 }
 function removeFirstCat() {
    const newCatsRemoveFirst = [...cats];
    newCatsRemoveFirst.shift()
    return newCatsRemoveFirst
 }