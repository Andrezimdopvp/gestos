
function setup() {
    canvas = createCanvas(640, 840);
    canvas.position(110, 250);
    video = createCapture(VIDEO);

    tint_color = "";
}


Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  camera = document.getElementById("camera");

  Webcam.attach( '#camera' );

  function takeSnapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/oDVmWr5g9/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }

  function check()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }