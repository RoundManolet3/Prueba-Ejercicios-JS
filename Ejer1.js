 /*Desarrollar un algoritmo que permita ingresar la cantidad de hijos de N personas de una empresa,
donde ninguno de ellos es pareja de otro, validando que este valor no sea negativo. Se declararán 
las variables junto con su tipo y ámbito bloque.

Por tanto, se pedirá el número de personas, cada pareja sólo cuenta una, y a continuación, 
se solicitará el número de hijos por cada persona.

Luego mostrar un cuadro resumen con la cantidad de personas que tienen hijos y los que no. Además,
mostrar el promedio de hijos por persona, número máximo de hijos, el número mínimo de hijos. */
let prompt = require ('prompt-sync')();
let contador =0;
let personas = prompt('Introduzca el numero de personas(cada pareja cuenta una ): ');
personas=Number(personas);
let min=0;
let max=0;
let media=0;
let i=1;
let no=0;
if(personas>0){
    do{
        let hijos=prompt('Cuantos hijos tienes: ');
        hijos=Number(hijos);
        if (hijos<0) {
            console.log('Es imposible tener hijos en negativos');
            hijos=prompt('Vuelve a introducir ');
        }else if(hijos==0){
            no++;
        }
        if(contador == 0){
            min=hijos;
            max=hijos;
        }else if (hijos <min){
            min=hijos;
        }else if (hijos>max){
            max=hijos;
        }
        media=media+hijos;
       console.log('=====================');
        console.log(`La ${i}º persona Tiene ${hijos} hijos.`);
        console.log('=====================');
        contador++;
       i++;


    }while(contador<personas);
}else{
    console.log('Vuelva a introducir ');
}
console.log(`Hay ${personas-no} personas que tiene hijo/os y ${no} personas que no tiene hijo/a. `);
console.log(`La media de hijos es: ${media/personas},el máximo es: ${max} y el minimo es: ${min}`);

