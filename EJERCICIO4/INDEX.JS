const Boton = document.getElementById("Boton");
Boton.addEventListener("click",() =>{
    const peso = parseFloat(document.getElementById("peso").value);
    const estatura = parseFloat(document.getElementById("estatura").value);

   if(  peso > 0 &&  estatura > 0 &&  estatura <= 2.50){
   let resultado = peso /  (estatura * estatura)
   alert("Su IMC es:" +  parseInt(resultado))
   }
   else{
    alert("Por favor Ingrese valores validos")
   }
})

//Le agregue verficaciones en caso de que sean necesarias!