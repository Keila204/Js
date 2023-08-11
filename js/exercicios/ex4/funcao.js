export function separar(texto){
     
    let i = ''
    
    for(let cont = 0; cont < texto.length; cont++){
       let letra = texto.charAt(cont);
       i = letra + '-'
    
       process.stdout.write(i)
    }
    
    return i;
    
    
    }