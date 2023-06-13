let receta = [{
    nombre: "Tortilla de patatas",
    tiempo: "30Min",
    ingredientes: ["3 huevos", "3 patatas", "aceite de oliva"]
},
{
    nombre: "huevo frito",
    tiempo: "5Min",
    ingredientes: ["1 huevos", "aceite de oliva", "sal"]
},
{
    nombre: "Macarrones con tomate",
    tiempo: "30Min",
    ingredientes: ["macarrones", "tomate", "agua"]
}]



for (let i = 0; i < receta.length; i++) {
    console.log(receta[i].nombre)
    console.log(receta[i].tiempo)


    for (let a = 0; a < receta[i].ingredientes.length; a++) {

        console.log(receta[i].ingredientes[a])
    }

}
