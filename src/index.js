/* AL HACER CLIC EN EL ELEMENTO HAGA LA FUNCIÓN SET CIPHER */

document.getElementById("codificar").addEventListener("click",setCipher);
document.getElementById("decodificar").addEventListener("click",setCipher);
document.getElementById("submit").addEventListener("click",submit);

/* SET O "SETEAR" ES IGUAL A DECIR CONFIGURAR. ESTA FUNCIÓN LE AGREGA TEXTO AL BOTÓN SUBMIT PARA CODIFICAR O DECODIFICAR,
PERO NO TIENE LA FUNCIÓN EN SÍ */

function setCipher(e) {
    let id = e.target.id; /* TARGET ES EL ELEMENTO QUE GATILLA EL EVENTO, EN ESTE CASO EL BOTON COD/DECOD */

    let inputText = document.getElementById("inputtext")
    inputText.style.visibility = "visible"

    let instruction = document.getElementById("instruction");
    instruction.innerHTML = "Ingresa tu mensaje a " + id  /* EL ID ES CODIFICAR O DECODIFICAR, POR ESO LO CONCATENÉ */

    let contentButton = id == "codificar" ? "CODIFÍCAME!" : "DECODIFÍCAME!"
    let submitButton = document.getElementById("submit")
    submitButton.innerHTML = contentButton
}

function submit(e) {
    let action = e.target.innerText == "CODIFÍCAME!" ? "encode" : "decode" /* SI EL TEXTO QUE ESTÁ DENTRO DEL TARGET 
    ES CODIFÍCAME LE ASIGNO ENCODE A LA VARIABLE ACTION */
    
    let valueTextArea = document.getElementById("textarea").value;
    let valueInputNumber = document.getElementById("inputnumber").value;
    let result = document.getElementById("result");
    let tituloresultado = document.getElementById("tituloresultado");

    if (action === "encode" ) {
        let resultado = cipher.encode(valueTextArea, valueInputNumber) /* LO QUE ESTÁ DENTRO DEL () SON LOS PARÁMETROS
        QUE RECIBE O NECESITA PARA QUE FUNCIONE LA FUNCIÓN */
        result.innerHTML = resultado
        result.style.visibility = "visible"
        tituloresultado.style.visibility = "visible"
    } else {
        let resultado = cipher.decode(valueTextArea, valueInputNumber)
        result.innerHTML = resultado
        result.style.visibility = "visible"
        tituloresultado.style.visibility = "visible"
    }
}
