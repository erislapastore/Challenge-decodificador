const inputTexto = document.querySelector(".input");
const message = document.querySelector(".message");

function btnCodificar() {
    const textCodificada = codificar(inputTexto.value);
    message.value = textCodificada;
    message.style.backgroundImage = "none";
}

function codificar(stringCodificada) {
    let matrixCode = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringCodificada = stringCodificada.toLowerCase();
    for (let i = 0; i < matrixCode.length; i++) {
        if (stringCodificada.includes(matrixCode[i][0])) {
            stringCodificada = stringCodificada.replaceAll(matrixCode[i][0], matrixCode[i][1]);
        }
    }
    return stringCodificada;
}

function btnDecodificar() {
    const textDecodificada = Decodificar(inputTexto.value);
    message.value = textDecodificada;
    message.style.backgroundImage = "message";
}

function Decodificar(strDecodificada) {
    let matrixCode = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    strDecodificada = strDecodificada.toLowerCase();
    for (let i = 0; i < matrixCode.length; i++) {
        if (strDecodificada.includes(matrixCode[i][0])) {
            strDecodificada = strDecodificada.replaceAll(matrixCode[i][1], matrixCode[i][0]);
        }
    }
    return strDecodificada;
}
let btn = document.querySelector('#copy');
btn.addEventListener('click', function(e) {
  let textArea = document.querySelector('.message');
  textArea.select();
  document.execCommand('copy');
  
});
