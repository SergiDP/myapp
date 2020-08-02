const { curry, uncurryN, complement, filter, compose, map, pipe, prop } = require('ramda');
//ramda curry
const add = (a, b) => a + b;
const curriedAdd = curry(add)(3);
console.log(curriedAdd(2));

//ramda uncurry
const uncurriedAdd = uncurryN(2, add);
console.log(uncurriedAdd(3, 2));

function foo () {
    return [3,2]
}
let [a] = foo();
console.log({[a]:foo()})

//ramda complement

function isSmall(n) {
    return n < 5
}

const isBig = complement(isSmall);

console.log(isBig(6))
compose(console.log,map(curriedAdd),filter(isBig))([1,6,7,2])

//ramda pipe
pipe(filter(isBig), map(curriedAdd), console.log)([1,6,7,2])

//array destructuring
function getData() {
    return [1,2,3,4,5]
}
const [x,,, y] = getData()
console.log(x, y);


//object destructuring
function getObj() {
    return {
        fooo:1,
        bar:2,
        baz:3
    }
}
const {fooo, baz} = getObj()
console.log(fooo, baz)
//gather arguments
function gather(...arr) {
    console.log(arr[0] + arr[1])
}
gather(1, 2);

//spread parameters
function spread(a, b) {
    console.log( a + b)
}

spread(...[1,2])

//prop
const getPerson = cb => {
    cb({
        "name":"sergi"
    })
}

const extractName = prop("name");
const outputName = compose(console.log, extractName);
getPerson(outputName)