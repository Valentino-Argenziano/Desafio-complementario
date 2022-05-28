let entrada = prompt("ELIGE UN NUMERO DEL 1 AL 10 \n PARA SALIR INGRESE ESC");
while (entrada != 'ESC') {
    switch (entrada) {
        case "1":
            alert("Lionel Messi");
            break;
        case "2":
            alert("Diego Armando Maradona");
            break;
        case "3":
            alert("Pele");
            break;
        case "4":
            alert("Johan Cruyff");
            break;
        case "5":
            alert("Cristiano Ronaldo ");
            break;
        case "6":
            alert("Alfredo Di Stefano");
            break;
        case "7":
            alert("Franz Beckenbauer");
            break;
        case "8":
            alert("Zinedine Zidane");
            break;
        case "9":
            alert("Ferenc Puskas");
            break;
        case "10":
            alert("Ronaldo Nazario");
            break;
        default:
            alert("Error, tenes que elegir un numero del 1 al 10!");
            break;
    }
    entrada = prompt("ELIGE UN NUMERO DEL 1 AL 10 \n PARA SALIR INGRESE ESC");
}

