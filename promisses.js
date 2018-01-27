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

 




    