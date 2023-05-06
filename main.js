img = "";
objects= [];
status = "";
function draw(){
 image(img,0,0,600,400)
 if (status != ""){
    for (i =0; i <objects.length; i++){
        document.getElementById("status").innerHTML = "Status Object detected";

        fill("#Ff0a1f");
        percent = Math.floor(objects[i].confidence * 100);
        text(objects[i].label+" " + percent + "%",objects[i].x+15 ,objects[i].y+15)
        noFill();
        stroke('Ff0a1f')
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
    }
 }
}

 function preload(){
 img = loadImage("xd.png")
 }

 function setup(){
canvas= createCanvas(600,400)
 canvas.center();
 objectDetection = ml5.objectDetector("cocossd",modelLoaded);
 document.getElementById('status').innerHTML = "Status :Detecting Objects";
 }
function modelLoaded(){
    console.log("Model loaded ");
    status = true;
    objectDetection.detect(img,gotResults);
}
function gotResults(error,results){
    if(error){
        console.log(error)
    }
    else { 
        console.log(results)
        objects= results
    }
    
}