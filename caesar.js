var sourceAlphabet  = 'abcdefghijklmnopqrstuvwxyz';

function encode(clearText, key){
    var cipherText = '';
    for(var i = 0; i < clearText.length; i++){
        if(clearText[i] === ' '){
            cipherText += clearText[i];
        }
        else{
            if(key >= 0){
                if(sourceAlphabet.indexOf(clearText[i]) + key < sourceAlphabet.length){
                    cipherText += sourceAlphabet[sourceAlphabet.indexOf(clearText[i])+ key];
                }
                else{
                    cipherText += sourceAlphabet[sourceAlphabet.indexOf(clearText[i])+ key - sourceAlphabet.length];
                }
            }
            else{
                if(sourceAlphabet.indexOf(clearText[i]) + key >= 0){
                    cipherText += sourceAlphabet[sourceAlphabet.indexOf(clearText[i])+ key];
                }
                else{
                    cipherText += sourceAlphabet[sourceAlphabet.indexOf(clearText[i])+ key + sourceAlphabet.length];
                }
            }
        }
    }
    return cipherText;
}

function decode(cipherText, key){
    var clearText = '';
        for(var i = 0; i < cipherText.length; i++){
        if(cipherText[i] === ' '){
            clearText += cipherText[i];
        }
        else{
            if(key>=0){
                if(sourceAlphabet.indexOf(cipherText[i]) - key >= 0){
                    clearText += sourceAlphabet[sourceAlphabet.indexOf(cipherText[i])- key];
                }
                else{
                    clearText += sourceAlphabet[sourceAlphabet.indexOf(cipherText[i])- key + sourceAlphabet.length];
                }
            }
            else{
                if(sourceAlphabet.indexOf(cipherText[i]) - sourceAlphabet.length -key >= 0){
                    clearText += sourceAlphabet[sourceAlphabet.indexOf(cipherText[i])  - sourceAlphabet.length + -key];
                }
                else{
                    clearText += sourceAlphabet[sourceAlphabet.indexOf(cipherText[i]) - key];
                }
            }
        }
    }
    return clearText;
}
