function preload(){
  classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/YcB6mEhSF/model.json", model_loaded)
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(570, 300);
  video = createCapture(VIDEO);
  video.hide();
  background("black")
}

function draw(){
  image(video, 0, 0, 300, 300);
  classifier.classify(video, got_results)
}

function model_loaded(){
  console.log("loaded")
}

function got_results(error, results){
  if(error){
    console.error(error);
  } 
  else{
    console.log(results);
    document.getElementById("accuracy").innerHTML = (results[0].confidence * 100).toFixed(2) + "%";
    document.getElementById("object").innerHTML = results[0].label;
  }
}



