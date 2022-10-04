//Type

type Order = {
  productId: string;
  price: number;
}

type User = {
  firstName: string;
  age: number;
  email?: string;
  password?: string;
  orders: Order[];
  register(): string;
}

const user: User = {
  firstName: 'John',
  age: 40,
  email: 'john@example.com',
  password: 'password',
  orders: [{productId: '1', price: 200}],
  register() {
    return 'á'
  },
}

const printLog = (message: string) => {}

printLog(user.password!)

// Unios

type Author = {
  books: string[];
}

const author: Author & User = {
  age: 40,
  books:['1'],
  email:"author@gmail.com",
  firstName:'Matheus',
  orders:[],
  register() {
    return 'á'
  },
}

//Interfaces 
interface UserInterface {
  readonly firstName: string;
  email: string;
  login(): string;
}

const emailUser: UserInterface = {
  email:'author5@gmail.com',
  firstName:'Matheus5',
  login() {
    return 'isLogged'
  },
}

interface AuthorsInterface {
  books: string[];
}

const newAuthor: UserInterface & AuthorsInterface = {
  email:'author5@gmail.com',
  firstName:'Matheus5',
  books: [],
  login() {
    return 'isLogged'
  },
}

//diff

type Grade = number | string 
//interface Grade = number | string
const grade: Grade = 1
