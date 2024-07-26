const nombre=document.getElementById("nombre")
const correo=document.getElementById("correo")
const contraseña=document.getElementById("contraseña")
const iniciar=document.getElementById("signUp")

iniciar.addEventListener("click",function () {
    let mail = correo.value
    localStorage.setItem("correo",mail)
})
iniciar.addEventListener("click",function () {
    let contra = contraseña.value
    localStorage.setItem("contraseña",contra)
})
iniciar.addEventListener("click",function () {
    let name = nombre.value
    localStorage.setItem("nombre",name)
})


