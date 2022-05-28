let cine:boolean[] = [false, false, true, true, false, true];

let butacasVacias = (arreglo: boolean[]) : number => {
let i: number;
for (i=0, i < arreglo.length; i++){

if (arreglo[i] === false){
      vacias++
    }
  }
return vacias
}