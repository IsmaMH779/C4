let receta = {
    nombre: "Tortilla de patatas",
    tiempo: "30Min",
    ingredientes: ["3 huevos", "3 patatas", "aceite de oliva"]
}



console.log(receta.nombre)
console.log(receta.tiempo)

for (let i = 0; i < receta.ingredientes.length; i++) {
    console.log(receta.ingredientes[i])
}
