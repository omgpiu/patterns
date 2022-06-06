class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        return console.log(`Woof!`);
    }
}

const dog1 = new Dog("Daisy");


Dog.prototype.play=()=>console.log('Play now')


class SuperDog extends Dog {
    constructor(name) {
        super(name);
    }

    fly(){
        return console.log('flying!')
    }
}

const dog2 = new SuperDog('Max')
// dog2.fly()
// dog2.bark()
// dog2.play()


const bigDog = {
    bark(){
        return console.log('Woof!Wooof!')
    }


}
const pet1 = Object.create(bigDog)

pet1.bark()
