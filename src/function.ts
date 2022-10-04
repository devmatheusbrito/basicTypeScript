const sum = (x: number, y: number): string | number => {
  return (x + y).toString();
}
sum(2,3);
const value = sum(3,4);

const log = (message: string): void => {
  console.log(message);
}


interface MathFunc {
  (x: number, y: number): number;

}

const interSum: MathFunc = (x: number, y: number):number => {
  return x - y
}