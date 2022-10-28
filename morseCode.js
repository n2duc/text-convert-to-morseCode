const morseMapping = {
    "A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".", "F": "..-.",
    "G": "--.", "H": "....", "I": "..", "J": ".---", "K": "-.-", "L": ".-..",
    "M": "--", "N": "-.", "O": "---", "P": ".--.", "Q": "--.-", "R": ".-.",
    "S": "...", "T": "-", "U": "..-", "V": "...-", "W": ".--", "X": "-..-",
    "Y": "-.--", "Z": "--..", "Â": ".--.-", "Ê": "-..-.", "Ô": "---.",

    "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....",
    "6": "-....", "7": "--...", "8": "---..", "9": "----.", "0": "-----",
    " ": "/",

    ".": ".-.-.-", ",": "--..--", "?": "..--..", "'": ".----.", "!": "-.-.--",
    "/": "-..-.", "(": "-.--.", ")": "-.--.-", "&": ".-...", ":": "---...",
    ";": "-.-.-.", "=": "-...-", "+": ".-.-.", "-": "-....-", "_": "..--.-",
    "\"": ".-..-.", "$": "...-..-", "@": ".--.-."
}
const textToMorse = () => {
    let text = document.getElementById("textInput").value
    let morse = document.getElementById("morseoutput")

    text = text.toUpperCase()

    let array1 = text.split('')
    let array2 = array1.map(x => {
        if (morseMapping[x]) {
            return morseMapping[x]
        } else {
            return x
        }
    })
    let morseCode = array2.join(" ")
    morse.innerHTML = `${morseCode}`
}
//Trigger key
window.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        event.preventDefault()
        document.getElementById("convertBtn").click()
    }
})
//Copy to clipboard
const copyClipboard = (idText) => {
    if (!idText) return

    let elementText = idText.innerText
    let inputElement = document.createElement('input')

    inputElement.setAttribute('value', elementText)
    document.body.appendChild(inputElement)
    inputElement.select()
    document.execCommand('copy') //stupid
    inputElement.parentNode.removeChild(inputElement)
}
const changeText = () => {
    var hiddenCopyText = document.getElementById("hidden-copy-text");
    hiddenCopyText.innerHTML = "COPIED";
    setTimeout(function(){
        hiddenCopyText.innerHTML = "CLICK TO COPY";
    }, 1500);
}