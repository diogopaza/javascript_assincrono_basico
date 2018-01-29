const fs = require('fs');

const readFilePromise = (filename) => new Promise((resolve,reject) => {
    fs.readFile(filename, (err, data)=>{
        if(err){
            reject(err)
        }else{
            resolve(data)
        }
    })
})
/*
readFilePromise('juros.txt').then(data => console.log(data.toString()));

*/
async function read(){
    try{
        const contents = await readFilePromise('juros.txt');
        console.log(contents.toString());

    }catch(err){
        return console.log(err)
    }
    
} 

read();
