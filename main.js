rightEyeX=0;
rightEyeY=0;

function preload() {
  glasses = loadImage('https://i.postimg.cc/DZM5LTr3/sunglasses-PNG77.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    rightEyeX = results[0].pose.rightEye.x;
    rightEyeY = results[0].pose.rightEye.y;
    leftEyeX = results[0].pose.leftEye.x;
    leftEyeY = results[0].pose.leftEye.y;
    
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(glasses, rightEyeX-18, rightEyeY-18, 70, 38);
}

function take_snapshot(){    
  save('myFilterImage.png');
}
