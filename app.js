const textInputBox = document.querySelector("textarea")
const btn = document.querySelector("button")
const voiceSelectBox = document.querySelector("select")

let voices = []
let speech = new SpeechSynthesisUtterance()

window.speechSynthesis.addEventListener("voiceschanged", () => {
    voices = window.speechSynthesis.getVoices()
    speech.voice = voices[0]

    voices.forEach((voice, i) => (voiceSelectBox.options[i] = new Option(voice.name, i)))
})

window.addEventListener("change", () => {
    speech.voice = voices[voiceSelectBox.value]
})

btn.addEventListener("click", () => {
    speech.text = textInputBox.value
    window.speechSynthesis.speak(speech)
})