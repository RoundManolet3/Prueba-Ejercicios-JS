/*Escribe una función en que dibuje una pirámide invertida en pantalla como la de la figura. 
La altura se pasará como parámetro. Si se pasa una altura =0 o negativa, la función devolverá –1; 
en caso contrario devolverá 0 (éxito) y pintará la pirámide.

Ejemplo altura 5:*/

let prompt = require ('prompt-sync')();
let altura = prompt('Introduzca una altura: ');
PiramideInvertida(altura);


function PiramideInvertida(altura) {

    let a=altura;
if(altura>0){
console.log('0,exito')   
    //El console.log vacio es para salto de linea
    console.log();
for(let i=1;i<=altura;i++){
    let s=" ";
    let space="";
        for(let j=1;j<i;j++){
            space+=" ";
        }
        for(let b=1;b<a*2;b++){
        s+="*";
        
        }
        
        console.log(space+s);
        a--;
    

    }


}else{
    console.log(-1);
}
console.log();
}