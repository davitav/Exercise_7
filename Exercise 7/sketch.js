var temp;
var pressure;
var wind, humidity, deg;

var xpos = 0;
var ypos = 0;

var mouseEvent = true;

function preload(){
    
	weatherData = loadJSON('data/weather.json');  //loading the JSON file
} //preload

function setup(){
    
    createCanvas(600, 300);
	temp = getTemp(weatherData); //getting the temperature
    pressure = getPressure(weatherData); //getting the pressure
    wind = getWind(weatherData); //getting the wind
    humidity = getHumidity(weatherData);
    deg = int(getDeg(weatherData));
	console.log(temp);
    console.log(pressure);
    console.log(wind);
    console.log(humidity);
    console.log(deg);

    
   
}//setup
 
function draw(){
    background(0);
    fill(100, 150, 225);
    noStroke();
    xpos = xpos + wind;  //moving the xpos with the speed of wind
    ypos = ypos + wind;
    
    if(xpos > width){  //reset the position once pressure goes off screen
        xpos = 0;
    }
    
    if(ypos > height){  //reset the position once temp goes off screen
        ypos = 0;
    }
    
    rect(100, ypos, temp, temp);
            ellipse(400, 400, deg, deg); //wind degree

    fill(230, 100, 70);
    rect(xpos, 0, pressure/10, pressure/10);

    
   
} //draw

function keyPressed(){
    if(keyCode === UP_ARROW){
        fill(40, 160, 240)
        ellipse(200, 200, humidity, humidity); //humidity circle
        
        fill(200, 200, 200);
        ellipse(100, 100, deg, deg); //wind degree

    }
}
    
   


function getPressure(data){
	
	var info = data.main; //making a shortcut within our tree to get to desired data
    var p = info.pressure;

    return p; //returning the value of our function

} //getPressure

    
function getTemp(data){
	
	var info = data.main; 
	var t = info.temp;

	return t; //returning the value of our function

} //getTemp

function getWind(data){
	
	var info = data.wind;
    var w = info.speed;

	return w; //returning the value of our function

} //getWind

function getHumidity(data){
	
	var info = data.main; 
	var h = info.humidity;

	return h; //returning the value of our function

} //getTemp

function getDeg(data){
	
	var info = data.wind;
    var d = info.deg;

	return d; //returning the value of our function
    
}

