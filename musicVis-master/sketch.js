//global for the controls and input 
var controls = null;
//store visualisations in a container
var vis = null;
//variable for the p5 sound object
var sound = null;
//variable for p5 fast fourier transform
var fourier;
var playlist = [];
var vol;
var trackNum;

function preload(){
	trackNum = 0;
	playlist = [loadSound('assets/stomper_reggae_bit.mp3'), loadSound('assets/Toss_a_coin.mp3'), loadSound('assets/Painted.m4a')];
	sound = playlist[trackNum];
    buzzWireImage = loadImage('assets/buzzwire_line.png');
    playButton = loadImage('assets/Play_button.png');
    pauseButton = loadImage('assets/Pause_button.png');
    skipForward = loadImage('assets/SkipForward_button.png');
    skipBackward = loadImage('assets/SkipBackward_button.png');
    fullscreenBtn = loadImage('assets/Fullscreen_button.png');
    plus = loadImage('assets/plus.png');
    minus = loadImage('assets/minus.png');
    menubtn =  loadImage('assets/menu.png');
}

function setup(){
	 createCanvas(windowWidth, windowHeight);
	 background(0);
	 controls = new ControlsAndInput();
	 vol = 0.5;
	 sound.setVolume(vol);
	 //instantiate the fft object
	 fourier = new p5.FFT();
    
    
    //create a new visualisation container and add visualisations
	vis = new Visualisations();
	vis.add(new Spectrum());
	vis.add(new WavePattern());
	vis.add(new Needles());
    vis.add(new MouseTrack());
    vis.add(new BuzzWire());
    vis.add(new UserAudio());

}

function draw(){
	background(0);
	//draw the selected visualisation
	vis.selectedVisual.draw();
	//draw the controls on top.
	controls.draw();
}

function mouseClicked(){
	controls.mousePressed();
}

function keyPressed(){
	controls.keyPressed(keyCode);
}

//when the window has been resized. Resize canvas to fit 
//if the visualisation needs to be resized call its onResize method
function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	if(vis.selectedVisual.hasOwnProperty('onResize')){
		vis.selectedVisual.onResize();
	}
}
