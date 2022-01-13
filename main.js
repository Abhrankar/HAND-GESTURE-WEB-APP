Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('camera');

function take_snapshot() {
    Webcam.snap(function (data_image) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_image + '"/>';
    });
}

console.log('ml5 version: ', ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5QQePhvWa/model.json", modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}