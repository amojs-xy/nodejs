const http = require('http');
const url = require('url');
const { readFileSync } = require('fs');
const { resolve } = require('path');

// const data = [{
//     id: 1,
//     name: '黄芪',
// }, {
//     id: 2,
//     name: '红参'
// }, {
//     id: 3,
//     name: '西洋参'
// }, {
//     id: 4,
//     name: '茯苓'
// }, {
//     id: 5,
//     name: '徐长卿'
// }, {
//     id: 6,
//     name: '杜衡'
// }, {
//     id: 7,
//     name: '麦冬'
// }, {
//     id: 8,
//     name: '桑叶'
// }, {
//     id: 9,
//     name: '夏枯草'
// }, {
//     id: 10,
//     name: '菊花'
// }]


const app = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    const { pathname, query } = url.parse(req.url);

    if (req.method === 'GET') {
        switch (pathname) {
            case '/list':
                const { pn, ps } = dealQuery(query);

                const initIndex = (pn - 1) * ps;

                const data = JSON.parse(readFileSync(resolve(__dirname, 'data.json'), 'utf8'));
                 
                const resData = data.slice(initIndex, initIndex + (+ps));
                console.log((pn - 1) * ps + ps);

                res.writeHead(200, {'Content-Type': 'application/json'})
                res.write(JSON.stringify(resData));
                break;
            case '/':
                const template = readFileSync(resolve(__dirname, 'index.html'), 'utf8');
                const tempData = JSON.parse(readFileSync(resolve(__dirname, 'data.json'), 'utf8'));

                const htmlStr = template.replace('<!--dom-->', () => {
                    return `
                      <ul>
                        ${
                            tempData.map(item => (
                                `
                                  <li>${ item.name }</li>
                                `
                            )).join('')
                        }
                      </ul>
                    `
                });

                res.writeHead(200, {'Content-Type': 'text/html'})
                res.write(htmlStr);
                break;
            default:
                break;    
        }
    } 
    
    res.end();
});


function dealQuery (query) {
    const slice = query.split('&');

    return slice.reduce((obj, item) => {
       const [key, value] = item.split('=');
       obj[key] = value;
       return obj;
    }, {});
}


app.listen(8080, () => {
    console.log('Server is running on PORT 8080');
})