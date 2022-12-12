
function crearMascota (nombre, tipo, edad, peso) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.edad = edad;
    this.peso = peso;
}


const boton = document.getElementById("boton");
boton.onclick = () => {
    let nombreMascota = prompt("Ingresá el nombre de tu mascota");
    let tipoMascota = prompt("¿Qué tipo de mascota es?");
    let edadMascota = parseInt(prompt("Ingresá la edad"));
    let pesoMascota = parseInt(prompt("Ingresá el peso - en kilogramos"))
    const mascotaNueva = new crearMascota(nombreMascota, tipoMascota, edadMascota, pesoMascota);
    console.log(mascotaNueva);
    return mascotaNueva;
};
