// reduce() = reduce the element of array to a single value

const price = [5, 30, 10, 25, 20, 2];

const total = price.reduce(Max);

const total2 = price.reduce(Min);

console.log(`$${total}`);

console.log(`$${total2}`);

function sum(first, next) {
  return first + next;
}

function Max(num, next) {
  return Math.max(num, next);
}

function Min(num, next) {
  return Math.min(num, next);
}
 