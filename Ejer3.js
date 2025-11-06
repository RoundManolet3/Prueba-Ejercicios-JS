/*El  juego de adivinar un número. El valor a adivinar lo tendremos puesto en una variable el valor
que nosotros queramos.

El número será entre 1 y 100. El programa debe dar pistas de si el número a adivinar es mayor o menor
que el introducido.

Tendremos que hacer los siguientes subprocesos (funciones):

leerNumero(): Pide un numero y hasta que el usuario no escribe un valor entre 1 y 100,  
vuelve a pedir el valor.

comprobarValor(numeroUsuario, numeroCorrecto): comprueba si el número es correcto; éste  
devuelve un número que puede ser:  0: los dos numeros son iguales  1: el numeroUsuario es mayor que 
el numeroCorrecto  -1: el numeroUsuario es menor que el numeroCorrecto.*/
let prompt = require ('prompt-sync')();
let clave = 35;
leerNumero(clave);
function leerNumero (clave) {
    let codigo;
    do{
    codigo = prompt('Introduce un numero entre 1 y 100: ');
    codigo=Number(codigo);
    if(codigo>0 && codigo<101){
    comprobarValor(codigo, clave);
    }else{
        console.log('Tiene que ser entre 1 y 100');
    }
    }while(codigo !== clave)
}
function comprobarValor(codigo,clave){

    if(codigo==clave){
        console.log(`0: los dos numeros son iguales ${codigo} y ${clave}`);
    }else if (codigo < clave){
        console.log(`-1: el ${codigo} es menor que el numeroCorrecto`);  
        leerNumero(clave);
    }else if(codigo>clave){
        console.log(`1: el ${codigo} es mayor que el numeroCorrecto`);
        leerNumero(clave);
    }
}