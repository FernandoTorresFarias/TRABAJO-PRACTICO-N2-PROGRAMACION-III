//Sabiendo que la figura parece ser un trapacio (aun asi no se puede aplicar la formula tradicional) y por eso lo divido en un triangulo 
// y rectangulo como en la figura B)

const boton = document.getElementById("boton")

boton.addEventListener("click",() =>{
  const ladoA = parseFloat(document.getElementById("ladoA").value)
  const ladoB = parseFloat(document.getElementById("ladoB").value)
  const ladoC = parseFloat(document.getElementById("ladoC").value)

  if(ladoA > 0 && ladoB > 0 && ladoC > 0 && ladoA > ladoC){
    let AreaTriangulo = ladoB * (ladoA - ladoC) * 2
    let AreaRectangulo = ladoB * ladoC
    let AreaTotal = AreaTriangulo + AreaRectangulo
    alert("Su Area del Terreno es:" + " " + parseInt(AreaTotal))
  }
  else{
    alert("Por Favor Ingrese valores validos")
  }
})

///Le agregue verificaciones para en caso de que sean necesarias en especial (ladoA debe ser mayor que ladoC para evitar errores)