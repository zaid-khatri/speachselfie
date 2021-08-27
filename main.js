SpeechRecognition = window.webkitSpeechRecognition;
recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start()
}
recognition.onresult = function (event) {
    console.log(event);
    Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if (Content == "take my selfie") {
        console.log("taking selfie");
        speak();
    }
}

function speak() {
    synth = window.speechSynthesis;
    speak_data = document.getElementById("textbox").value;
    utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    webcam.attach(camara);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});
camera = document.getElementById("camera");