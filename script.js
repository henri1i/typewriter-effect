const sentence = document.getElementById("sentence");
const sentenceCharacters = sentence.innerHTML.split("");
let characterNumber = 0;

sentence.innerHTML="";

let writer = setInterval(()=>{
    if(characterNumber < sentenceCharacters.length) {
        sentence.innerHTML+=sentenceCharacters[characterNumber];
        characterNumber++;
    }
    else {
        clearInterval(writer);
    }
}, 100);
