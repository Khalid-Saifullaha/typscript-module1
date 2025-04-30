//Learning function
// Normal Function
// Arrow Function

function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}

add(2, 3);

const adArrow = (num1: number, num2: number): number => num1 + num2;

// object--> function --> method

const poorUser = {
  name: "khalid",
  balance: 0,
  addBalance(balance: number): string {
    return `My New Balance is : ${this.balance + balance}`;
  },
};

const arr: number[] = [1, 4, 10];

const newArray: number[] = arr.map((elem: number): number => elem * elem);
