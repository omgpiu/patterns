let count = 0

class CounterClass {
    static instance;
    constructor() {
    }
    getInstance() {
        if(!CounterClass.instance){
            CounterClass.instance=new CounterClass()
        }
        return CounterClass.instance
    }

    getCount() {
        return count
    }

    increment() {
        return ++count
    }

    decrement() {
        return --count
    }
}

const singletonCounter = Object.freeze(new CounterClass())
export default singletonCounter