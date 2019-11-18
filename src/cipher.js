window.cipher = {
  encode: (valueTextArea, valueInputNumber) => {
    let newString = ''
    let resultado = 0

    for(let i=0; i<valueTextArea.length; i++) {
      let asciiCode = valueTextArea.charCodeAt(i)
      if (asciiCode >= 65 && asciiCode <= 90) {
        resultado = (asciiCode - 65 + parseInt(valueInputNumber)) % 26 + 65
        newString = newString + String.fromCharCode(resultado)
      }
      else if (asciiCode >= 97 && asciiCode <= 122) {
        resultado = (asciiCode - 97 + parseInt(valueInputNumber)) % 26 + 97
        newString = newString + String.fromCharCode(resultado)
      }
      else if (asciiCode >= 233 && asciiCode <= 250) {
        resultado = (asciiCode - 233 + parseInt(valueInputNumber)) % 18 + 233
        newString = newString + String.fromCharCode(resultado)
      }
      else {
          newString = newString + String.fromCharCode(asciiCode)
      }
  }
    return newString

  },
  decode: (valueTextArea, valueInputNumber) => {
    let newString = ''
    let resultado = 0

    for(let i=0; i<valueTextArea.length; i++) {
      let asciiCode = valueTextArea.charCodeAt(i)
      if (asciiCode >= 65 && asciiCode <= 90) {
        resultado = (asciiCode - 90 - parseInt(valueInputNumber)) % 26 + 90
        newString = newString + String.fromCharCode(resultado)
      }
      else if (asciiCode >= 97 && asciiCode <= 122) {
        resultado = (asciiCode - 122 - parseInt(valueInputNumber)) % 26 + 122
        newString = newString + String.fromCharCode(resultado)
      }

      else if (asciiCode >= 233 && asciiCode <= 250) {
        resultado = (asciiCode - 250 - parseInt(valueInputNumber)) % 18 + 250
        newString = newString + String.fromCharCode(resultado)
      }

      else {
          newString = newString + String.fromCharCode(asciiCode)
      }
    }

    return newString
  }
}
