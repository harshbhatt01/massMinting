let fs = require("fs");
let axios = require("axios");

let ipfsArray = [];


for (let i = 0; i < 10; i++) {
    let paddedHex = ("0000000000000000000000000000000000000000000000000000000000000000" + i.toString(16)).substr("-64");
    
    //console.log({ __dirname });
    fs.readFile(`${__dirname}/exports/${paddedHex}.jpg`, (err, data) => {
        ipfsArray.push({
                path: `images/${paddedHex}.jpg`,
                content: data.toString("base64")
            })
        })
}

console.log(ipfsArray.length);