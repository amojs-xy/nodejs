// 阻塞与非阻塞
// async function asyncTest (callback) {
//     console.log('test start');
//     // await callback();
//     // console.log('test end');  
//     callback().then(() => {
//         console.log('test end');
//     })
// }

// function test () {
//     console.log('back test');
// }

// asyncTest(async function () {
//     console.log('callback is being invoking');
// });

// test();

// ---------------------------------------

// const { 
//     readFile,
//     readFileSync
// } = require('fs');

// const {
//     resolve
// } = require('path');

// NodeJS模块接口，大量使用回调创建非阻塞程序
//                    使用xxxSync形式的函数创建阻塞式程序
// 非阻塞
// readFile(resolve(__dirname, 'data.json'), (err, data) => {
//     console.log(data.toString());
// });

// console.log('test');

// 阻塞
// const data = readFileSync(resolve(__dirname, 'data.json'));

// console.log(data.toString());

// console.log('test');
