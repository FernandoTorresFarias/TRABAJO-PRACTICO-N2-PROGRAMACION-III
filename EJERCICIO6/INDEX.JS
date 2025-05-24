const BotonEnviar = document.getElementById("BotonEnviar")

BotonEnviar.addEventListener("click",() =>{
    const nombre = document.getElementById("nombre").value 
    const apellido = document.getElementById("apellido").value 
    const edad = parseFloat(document.getElementById("edad").value) 
    const altura = parseFloat(document.getElementById("altura").value) 
    const email = document.getElementById("email").value
    const mensaje = document.getElementById("mensaje")
    
    if(nombre === "" || nombre.length > 50){
        mensaje.textContent = "Nombre Invalido"
        mensaje.style.color = "red"
    }
    else if(apellido === ""|| apellido.length > 50 ){
        mensaje.textContent = "Apellido Invalido"
        mensaje.style.color = "red"
    }
    else if(edad <= 0 && edad < 18 ){
        mensaje.textContent = "Edad Invalida"
        mensaje.style.color = "red"
    }
    else if(altura <= 0 || altura > 2.30){
        mensaje.textContent = "Altura Invalida"
        mensaje.style.color = "red"
    }
    else if(email === "" || !email.includes("@")){
        mensaje.textContent = "Correo Invalido"
        mensaje.style.color = "red"
    }
    else{
        mensaje.textContent = "Todos sus datos se encuentran correctos"
        mensaje.style.color ="green"
    }
   

})