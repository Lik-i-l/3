const b: number = 2.5;

const taskA: number[] = [1.28, 3.28, 0.4, 1.1];
const taskB: number[] = [2.4, 3.6, 1.7, 3.9];

function f(x: number, b: number): number {
  const inner: number = b ** 3 + x ** 3;
  const numerator: number = 1 + Math.sin(inner) ** 2;
  const denominator: number = Math.cbrt(inner);
  return numerator / denominator;
}

console.log("Задача A");
taskA.forEach((x: number, index: number) => {
  const y: number = f(x, b);
  console.log(`x${index + 1} = ${x}, y = ${y.toFixed(2)}`);
});

console.log("Задача B");
taskB.forEach((x: number, index: number) => {
  const y: number = f(x, b);
  console.log(`x${index + 1} = ${x}, y = ${y.toFixed(2)}`);
});
