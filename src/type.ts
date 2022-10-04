let age: number = 10;
const firstName: string = 'Matheus';
const isValid: boolean = true || false;
let idk: any = 1

idk = "1";
idk = true;

const list: number[] = [1, 2, 3, 4, 5];
const booleans: boolean[] = [true, false, true];
const names: string[] = ['Matheus', 'Maria'];

//Tupla

const person:[number, string] = [1,'Matheus']
const person2:[string, number] = ['Matheus',1]

//Lista de Tuplas

const peoples:[number, string][] = [ 
  [1,'Matheus'],
  [2,'Maria'],
]

//Intersections

const productId: string | number | boolean = false

//Enum

enum Direction {
  Up =1,
  Down= 2,
  Left = 'Esquerda'
}

const direction = Direction.Up;

//Type Assertions

const productName: any = 'Boné'

let itemId = productName as string
let itemId2 = <string>productName