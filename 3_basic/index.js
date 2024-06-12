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

// ---------------------------------------
const {
    readFileSync,
    writeFile
} = require('fs');
const {
    resolve
} = require('path');

const data = [
    {
        name: 'iPhone 15',
        field: 'iphone'
    },
    {
        name: 'Huawei Pura 70',
        field: 'huawei'
    },
    {
        name: 'Xiaomi 14',
        field: 'xiaomi'
    }
]

data.forEach(item => {
    const path = resolve(__dirname, `data/${ item.field }.json`);
    const data = JSON.parse(readFileSync(path, 'utf8'));
    data.push(item.name);
    writeFile(path, JSON.stringify(data), (err) => {
        console.log(item.name + '写入完成');
        if (err) {
            throw new Error('写入文件错误');
        }
    });

    console.log(item.name + '准备写入...');
});