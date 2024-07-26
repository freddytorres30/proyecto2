const nombre=localStorage.getItem("nombre")
const wel=document.getElementById("wel")

function welcome(nombre,wel) {
    let bienv="Bienvenido" + nombre

    let mensaje=document.createElement("h1")

    mensaje.innerHTML=bienv
    mensaje.className="titulo"
    wel.appenchild(mensaje)
}
