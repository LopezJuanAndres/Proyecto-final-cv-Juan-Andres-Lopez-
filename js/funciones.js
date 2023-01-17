function  edad(){
    const fecha= new Date();
    const añoActual = fecha.getFullYear();
    const fechanacimiento = 1994;
    let ed = añoActual-fechanacimiento;
    return ed;
}


window.addEventListener('load', function() {
    /** se almacena en una variable el resultado de la funcion y se escribe en una etiqueta span */
   const ed= edad();
   document.getElementById("edad").innerHTML = ed;
   /**---------------------------------------------------------------------------- */
   });

  