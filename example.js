// class Point {
//     #x = 1;
//     y = 2;
// }
//
//
// const p = new Point();
//
// console.log(p.#x);


// class User {
//     #name = '';
//     constructor(name){
//         this.name =  name
//     }
//
//     get name() {
//         console.log(this);
//         return this.#name;
//     }
//
//     set name(value) {
//         if (value.length < 4) {
//             alert('Length should be more then 4');
//             return;
//         }
//         this.#name = value;
//     }
// }

//
// const u1 = new User('Igor Igor');
// u1.name = 'Igor Igor';
// console.log(u1.name)
