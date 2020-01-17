const { apply, unapply, partial, curry } = require('ramda')
function foo(a, b) {
console.log(a + b);
}

function bar (fn) {
    fn(3, 9)
}

let arr = [3,9]
foo(...arr);

const multiply2 = (a, b) => a * b ;
const double = curry(multiply2);
const f = double(2);
console.log(f(2));