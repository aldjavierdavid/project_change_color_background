//En este array de strings, tenemos todos los colores
let colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']
let color = document.querySelector('#bgr')

    ;
document.querySelector('button').onclick =

    function () {
        let randomColor = Math.floor(Math.random() * colors.length)
        let colorGanador = colors[randomColor];
        return document.body.style.backgroundColor = colorGanador


    }




/*function () {
}

let color = document.querySelector('#bgr')
let color2 = color.style.backgroundColor

if (color2 === 'purple') {
    color.style.backgroundColor = "blue";

}

else if (color2 === "blue") {
    color.style.backgroundColor = "green";

}

else if (color2 === "green") {
    color.style.backgroundColor = "red";

}

else if (color2 === "red") {
    color.style.backgroundColor = "pink";

}

else if (color2 === "pink") {
    color.style.backgroundColor = "yellow";

}


else {
    color.style.backgroundColor = "purple";

}
}*/

