let nombre = prompt ("Bienvenido, ingrese su Nombre y Apellido");
alert ("Bienvenido " + nombre)

let entrada =  prompt ("Ingrese un material indicando el Número del 1 al 5");
while (entrada != "ESC") {
    switch (entrada) {
        case "1": 
            alert ("Pelota de basquet");
            break;
        case "2": 
            alert ("Pelota de futbol");
            break;
        case "3": 
            alert ("Pelota de voley");
            break;
        case "4": 
            alert ("Pelotas de tenis");
            break;
        case "5": 
            alert ("Pelota de handbol");
            break;
        default:
            alert(" ERROR: Debes seleccionar un Accesorio indicando el número del 1 al 5");
            break;
    }
    entrada = prompt ("Ingrese los materiales indicando el Número del 1 al 5");
}