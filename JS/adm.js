//intento de bienvenida
/*const nombre=localStorage.getItem("nombre")
const wel=document.getElementById("wel")

function welcome(nombre,wel) {
    let bienv="Bienvenido" + nombre

    let mensaje=document.createElement("h1")

    mensaje.innerHTML=bienv
    mensaje.className="titulo"
    wel.appenchild(mensaje)
}*/
//agregar tarea
const tarea=document.getElementById("tarea")
const priori=document.getElementById("priori")
const crearT=document.getElementById("crearT")
const tareas=document.getElementById("tareas")


crearT.addEventListener("click",function () {
    let tituloT=tarea.value
    let tareaN=document.createElement("h1")
    tareaN.innerHTML=tituloT
    tareaN.className="titulo"
    tareas.appendChild(tareaN)

    const pri=document.getElementById("prioridad")

    let prioriT=pri.value
    let prioriN=document.createElement("p")
   
    prioriN.className="txt"
    prioriN.textContent=prioriT
    tareas.appendChild(prioriN)
    //editar
    let editarT=document.createElement("button")
    editarT.textContent="Editar"
    editarT.className="btnEditar"
    tareas.appendChild(editarT)
    //eliminar
    let eliminarT=document.createElement("button")
    eliminarT.textContent="Eliminar"
    eliminarT.className="btnEliminar"
    eliminarT.addEventListener("click",function () {
        eliminarT.remove(this)
        tareaN.remove(this)
        prioriN.remove(this)
        editarT.remove(this)
        linea.remove(this)
    })
    tareas.appendChild(eliminarT)
    //linea
    let linea=document.createElement("div")
    linea.className="linea"
    tareas.appendChild(linea)
})


//---------agregar eventos-------------
const evento=document.getElementById("evento")
const crearE=document.getElementById("crearE")
const eventos=document.getElementById("eventos")
const fecha=document.getElementById("fecha")
crearE.addEventListener("click",function () {
    let tituloE=evento.value
    let eventoN=document.createElement("h1")
    eventoN.innerHTML=tituloE
    eventoN.className="titulo"
    eventos.appendChild(eventoN)

    let fechaT=fecha.value
    let fechaN=document.createElement("p")
   
    fechaN.className="txt"
    fechaN.textContent=fechaT
    eventos.appendChild(fechaN)
    //editar
    let editarE=document.createElement("button")
    editarE.textContent="Editar"
    editarE.className="btnEditar"
    eventos.appendChild(editarE)
    editarE.addEventListener("click",function () {
        newtex=evento
        eventoN.innerHTML=newtex
    })
    //eliminar
    let eliminarE=document.createElement("button")
    eliminarE.textContent="Eliminar"
    eliminarE.className="btnEliminar"
    eliminarE.id="btnEliminar"
    eliminarE.addEventListener("click",function () {
        eliminarE.remove(this)
        linea.remove(this)
        editarE.remove(this)
        eventoN.remove(this)
        fechaN.remove(this)
    })
    eventos.appendChild(eliminarE)
    //linea final
    let linea=document.createElement("div")
    linea.className="linea"
    eventos.appendChild(linea)
})

