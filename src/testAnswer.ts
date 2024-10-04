function Palindrom(input: number) {
  if (input < 0) return false;

  let reverted = 0;
  let inputCopy = input;

  while (inputCopy) {
    reverted = reverted * 10 + (inputCopy % 10);
    inputCopy = Math.floor(inputCopy / 10);
  }

  return reverted == input;
}

function Palindrom2(input: number): boolean {
  if (input < 0) return false;
  const str = input.toString();

  return str === str.split("").reverse().join("");
}

function FooBar(input: number) {
  if (input <= 0) return;

  const arr = [];
  let i = 1;

  while (i !== input) {
    const is3 = i % 3 == 0;
    const is5 = i % 5 == 0;

    arr.push(is3 && is5 ? "catKitty" : is3 ? "cat" : is5 ? "Kitty" : i);

    i++;
  }

  const res = arr.join(", ");
  console.log(res);

  return res;
}

export { Palindrom, Palindrom2, FooBar };
