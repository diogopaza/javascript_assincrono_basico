/*
const divDelayed = (a, b) => new Promise((resolve, reject) => {
    setTimeout( () => {

        if( b == 0) 
            reject('O valor de B não pode ser zero!')
        
        resolve( a / b);
    }, 2000);
})



/*
divDelayed(10,5)
    .then(resp => console.log( 'Sucesso: ' + resp))
    .catch(err => console.log(err));
*/
/*
    setTimeout(() => {

        data = new Date; 
        console.log("apos 5 s" + data)

    }, 5000)
*/

function resolverDepoisDe2Segundos(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }

async function adicionar1(x){
    var a = resolverDepoisDe2Segundos(20 * 2);
    var b = resolverDepoisDe2Segundos(30 * 2);
    return  x + await a + await b;
}

adicionar1(10).then(v=> {
    console.log(v);
})



    