export function addNumbers(first: number, second: number): number {
  return first + second;
}

export function multiplyNumbers(first: number, second: number): number {
  return first * second;
}

function normalizeLegacyReference(value: string): string {
  return value.trim().toUpperCase();
}

console.log(addNumbers(10, 20));
console.log(multiplyNumbers(4, 5));