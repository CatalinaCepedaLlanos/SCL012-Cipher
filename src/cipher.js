window.cipher = {
  encode: (valueTextArea, valueInputNumber) => {
    var newString = ''
    
    for(let i=0; i<valueTextArea.length; i++) {
      var x = valueTextArea.charCodeAt(i)
      if (x !== 32) {
          var resultado = (x - 65 + parseInt(valueInputNumber)) % 26 + 65
          newString = newString + String.fromCharCode(resultado)
        } 
      else {
          newString = newString + String.fromCharCode(x)
      }
  }

    
    return newString
    
  },
  decode: (valueTextArea, valueInputNumber) => {
    var newString = ''
    for(let i=0; i<valueTextArea.length; i++) {
      var x = valueTextArea.charCodeAt(i) 
      if (x !== 32) {
        var resultado = (x - 90 - parseInt(valueInputNumber)) % 26 + 90
        newString = newString + String.fromCharCode(resultado)
      }
      else {
          newString = newString + String.fromCharCode(x)
      }
    }

    return newString
  }
}