export  default 'hello';

export  function hello(name) {
    console.log('hello' + name);
}

export class Hello {
    constructor(greeting) {
        this.greeting = greeting;
    }
    hi(name) {
        console.log(`${this.greeting} ${name}`);
    }
}

