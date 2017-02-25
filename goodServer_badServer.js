// Require the 'http' package
var http = require('http');

// Only good things returned on this port
var goodPort = 7000;

// Only bad things returned on this port
var badPort = 7500;

// Create some good and bad things to say
var goodThings = [
	'You are beautiful!',
	'You smart!',
	'You have so many friends! Look at how popular you are!',
	'You dress so fancy!',
	'Nice purse!!!',
	'You are fun to hang out with!',
	'You are a GREAT DRIVER! Such a useful skill!',
	'You can get it done!',
	'You can make a tasty salad :-]. Yuuummm veggies!',
	'You can paint?! WOW!'
];

var badThings = [
	'You are grumpy in the mornings... go get a coffee.',
	'You are very annoying when you are tired... go take a nap',
	'EAT MORE VEGETABLES!!!',
	'You smell. Go take a shower...',
	'Are you a messy eater?! Yuck...',
	'I think you need a haircut...',
	'Someone needs some new clothes.',
	'Are you still sleeping?!?!?! GET OUT OF BED!',
	'Learn some new jokes please...',
	'Say something interesting?!!!'
];

// getRandomIntInclusive will return a random integer between min and max inclusive
function getRandomIntInclusive(min, max) {
	var minNum = Math.ceil(min);
	var maxNum = Math.floor(max);

	return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

// handleGoodRequest will tell the user something good about themselves
function handleGoodRequest(request, response) {
	// Pull out a random response message from the goodThings array
	var random = getRandomIntInclusive(0, 9);
	var responseMsg = goodThings[random];

	// Return message to the user
	response.end(responseMsg);
}

// handleBadRequest will tell the user something bad about themselves
function handleBadRequest(request, response) {
	// PUll out a random response message from the badThings array
	var random = getRandomIntInclusive(0, 9);
	var responseMsg = badThings[random];

	// Return message to the user
	response.end(responseMsg);
}

// Define the goodServer handler
var goodServer = http.createServer(handleGoodRequest);

// Define the badServer handler
var badServer = http.createServer(handleBadRequest);

// Initialize both servers on respective ports
goodServer.listen(goodPort, function() {
	console.log('goodServer is listening on port: ' + goodPort);
});

badServer.listen(badPort, function() {
	console.log('badServer is listening on port: ' + badPort);
});