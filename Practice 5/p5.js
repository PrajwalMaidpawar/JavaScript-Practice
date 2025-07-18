// const Loadscript = (src) => {
//     return new Promise((Resolve, Reject) => {
//         let script = document.createElement('script');
//         script.src = src;
//         script.onload = () => Resolve(src + " loaded successfully");
//         document.head.append(script);
//     })
// }
// let a = Loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js");
// a.then((value) => {
//     console.log(`Script loaded: ${value}`);
// })

// const main2 = async() => {
//     let a = Loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js");
//     console.log(await a);
// }
// main2()

// let Promise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("Error occurred"))
//         }, 3000)
//     })
// }
// let a = async () => {
//     try {
//         let c = await Promise();
//         console.log(c);
//     }
//     catch (error) {
//         console.log("Caught an error after 3 seconds");
//     }
// }
// a()

let p1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 2000);
    });
};

let p2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20);
        }, 1000);
    });
};

let p3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(50);
        }, 4000);
    });
};

const run = async () => {
    console.time("Total time taken");
    // let a1 = await p1();
    // let a2 = await p2();
    // let a3 = await p3();
    // console.log(a1 + a2 + a3);  
    let a1 = p1();
    let a2 = p2();
    let a3 = p3();
    let a1a2a3 = await Promise.all([a1, a2, a3]);
    console.log(a1a2a3)
    console.timeEnd("Total time taken");
};

run();
