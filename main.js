function preload(){

}

function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.hide();
console.log(ml5.version);
classfier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json",modelloaded);
}

function draw(){
image(video,0,0,300,300);
classfier.classify(video,got_result);
}

function modelloaded(){
    console.log("model loaded succesfully");
}

function got_result(e,r){
    if (e){
        console.error(e);
    }
    else{
        console.log(r);
        document.getElementById("result_object").innerHTML = r[0].label;
        document.getElementById("result_accuracy").innerHTML = r[0].confidence.toFixed(4);
    }
}