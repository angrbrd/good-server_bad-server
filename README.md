# Good Server Bad Server

In this exercise we create two simple HTTP servers which are running on *localhost* and return various messages to the client.

## Required Packages

	npm install http
	
## Run The Servers

First clone the repository:

	git clone git@github.com:angrbrd/good-server_bad-server.git
	
Then run the servers with the steps below:
	
	cd good-server_bad-server
	node goodServer_badServer.js
	
You will see the following output on your console:

	goodServer is listening on port: 7000
	badServer is listening on port: 7500
	
## Examples

Open your browser and point it to *localhost:7000* to see any one of the following positive messages displayed at random:

```
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
```

Open your browser and point it to *localhost:7500* to see any one of the following negative messages displayed at random:

```
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
```
