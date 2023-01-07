// class person {
//   constructor(n, a) {
//     this.name = n;
//     this.age = a;
//   }
//   sayHi() {
//     console.log("HI....");
//   }
//   static sproperty = "something"
//   static hello() {
//     console.log("hello");
//   }
// }

// let person1 = new person("vikash", 28);

// static only access through class but not through the object

// person.hello();
// console.log("person1", person1);

// inherritance

// class emp {
//   constructor(n) {
//     this.name = n;
//   }

//   msg() {
//     console.log("hi....s");
//   }
// }

// class manager extends emp {
//   constructor(p, d) {
//     super(p);
//     this.department = d;
//   }

//   info() {
//     super.msg()
//     console.log(this.name + "is manager of department" + this.department);
//   }
// }

// class admin extends manager{}

// let admin1 = new admin("vikash", "web development");

// console.log(admin1);

//public property directly can be call with object

// class emp {
//   #name = "";
//   constructor(n) {
//     this.#name = n;
//   }

//   #getName() {
//     console.log("this.name", this.#name);
//   }
//   pubfun() {
//     this.#getName();
//   }
// }

// let Emp1 = new emp("vikash");
// console.log("Emp1", Emp1.pubfun());

let ussefullMethod = {
    sayHi(){
        console.log("hi...")
    },

    sayBye(){
        console.log("Bye...")
    }
}

// Mixing
class user{
    constructor() {
        this.name = "vikash"
    }
}
class admin extends user {

}

Object.assign(admin.prototype, ussefullMethod)

let admin1= new admin()
console.log('admin1', admin1.sayBye())