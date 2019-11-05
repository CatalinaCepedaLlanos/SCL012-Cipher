document.getElementById("codificar").addEventListener("click",setCipher);
document.getElementById("decodificar").addEventListener("click",setCipher);
document.getElementById("submit").addEventListener("click",submit);

function setCipher(e) {
    let id = e.target.id;

    let inputText = document.getElementById("inputtext")
    inputText.style.visibility = "visible"

    let instruction = document.getElementById("instruction");
    instruction.innerHTML = "Ingresa tu mensaje a " + id

    let contentButton = id == "codificar" ? "CODIFÍCAME!" : "DECODIFÍCAME!"
    let submitButton = document.getElementById("submit")
    submitButton.innerHTML = contentButton
}

function submit(e) {
    let action = e.target.innerText == "CODIFÍCAME!" ? "encode" : "decode"
    
    let valueTextArea = document.getElementById("textarea").value;
    let valueInputNumber = document.getElementById("inputnumber").value;
    let result = document.getElementById("result");
    let tituloresultado = document.getElementById("tituloresultado");

    if (action === "encode" ) {
        let resultado = cipher.encode(valueTextArea, valueInputNumber)
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
