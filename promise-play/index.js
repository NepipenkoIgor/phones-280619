console.log(__dirname)
console.log(process.cwd())

const p1 = new Promise((res, rej) => {
    setTimeout(() => {
        res('JavaScript');
    }, 2000)
});
const p2 = new Promise((res, rej) => {
    setTimeout(() => {
        res('NodeJS');
    }, 4000)
});
const p3 = new Promise((res, rej) => {
    setTimeout(() => {
        res('TypeScript');
    }, 1000)
});


manageData().then((data)=>console.log(data))
async function manageData() {
    try {
        const js = await p1;
        const node = await p2;
        const ts = await p3;
        return [js, node, ts]
    } catch (err) {
        console.log(err);
        return [];
    }
}

// const p4 = Promise.allSettled([p1, p2, p3]);


// p4
//     .then((data) => console.log(data))
//     .catch((err) => console.log('ERR', err))

//
// const p2 = p1
//     .then((data) => {
//         console.log('step 1', data);
//     })
//     .then((data) => {
//         console.log('step 2', data);
//     })
//     .then((data) => {
//         console.log('step 3', data);
//         return p3;
//     })
//     .then((data) => {
//         console.log('step 4', data);
//     })
//     .then((data) => {
//         console.log('step 5', data);
//     })
//     .then((data => {
//         console.log('step 6', data);
//     }))
//     .then((data) => {
//         console.log('step 7', data);
//     })
//     .catch((err) => {
//         console.log('ERROR', err);
//         return 100;
//     });

//
// setTimeout(() => {
//     console.log('Start timeout')
//     p2.then((data) => console.log(data));
// }, 5000)

// console.log('start');
// p1.then(() => console.log('promise 3'))
// setTimeout(() => console.log('timeout 1'));
// setTimeout(() => console.log('timeout 2'));
// Promise.resolve().then(() => console.log('promise 1'));
// Promise.resolve().then(() => console.log('promise 2'));
// console.log('end');

//1 - start       //2 - timeout 1  //3 timeout 2  //4 timeout
//      end

// promise 1
// promise 2


// TODO ajax ???
