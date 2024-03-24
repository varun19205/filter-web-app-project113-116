function setup(){
    canvas= createCanvas(400,400);
    canvas.center();
    webcam= createCapture(VIDEO);
    webcam.size(400,400);
    webcam.hide()
}

function draw(){
    image(webcam,0,0,400,400)
}