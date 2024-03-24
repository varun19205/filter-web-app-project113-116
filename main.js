nose_X_coordinates = 0;
nose_Y_coordinates = 0;


function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    webcam = createCapture(VIDEO);
    webcam.size(400, 400);
    webcam.hide()
    model_posenet = ml5.poseNet(webcam, modelloaded);
    model_posenet.on("pose", myPoses);
    // Above 'webcam' is the area where my model poseNet will get load//    
    // This above word 'pose' is the word used because we are telling the computer that we are going to use the pose parameter and also we can't change the writting sense of this word because it is predefined//
}

function draw() {
    image(webcam, 0, 0, 400, 400)
}

function modelloaded() {
    console.log("poseNet model is Intalised!!");
}

function myPoses(results) {
    // This above 'results' is the name of the array which coontains all the information of that model pose//
    if (results.length > 0) {
        console.log(results);
        nose_X_coordinates = results[0].pose.nose.x;
        nose_Y_coordinates = results[0].pose.nose.y;
        console.log("Nose X coordinates = " + nose_X_coordinates);
        console.log("Nose Y coordinates = " + nose_Y_coordinates);
    }
}