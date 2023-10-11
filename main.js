x = 0
y = 0

width = 0
height = 0

apple = ''
toNum = 0

var SpeechRecognition = window.webkitSpeechRecognition
  
var recognition = new SpeechRecognition()

function preload(){
	apple = loadImage('apple.png')
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak"  
  recognition.start()
} 
 
recognition.onresult = function(event) {

 console.log(event) 

 content = event.results[0][0].transcript
	toNum = Number(content)
	if (Number.isInteger(toNum)){
		document.getElementById("status").innerHTML = "The speech has been recognized: " + content 
	} else {
		document.getElementById("status").innerHTML = "The speech has not been recognized."
	}

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content 

}

function setup() {
	width = window.innerWidth
	height = window.innerHeight
	createCanvas(width, height - 150)
}

function draw() {
  if(apple == "set")
  {
    for (let i = 0; i <= toNum; i++){
		x = Math.floor(Math.random * 700)
		y = Math.floor(Math.random * 400)
		image(apple, x, y,)
	}
	document.getElementById("status").innerHTML = to_number + " Apples drawn"
  }
}

function speak(){
    var synth = window.speechSynthesis

    var utterThis = new SpeechSynthesisUtterance(speak_data)

    synth.speak(utterThis)

    speak_data = ""
}
