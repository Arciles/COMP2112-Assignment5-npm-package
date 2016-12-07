(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function chatbot(io) {
  function match(regex) {

    return new RegExp(regex).test(message);
  }
	 // current user input
	 var message = io;
   if (message !== null && message !== undefined) {

     message = message.toLowerCase();

     if(match("(hi|hello|hey|hola|howdy)(\\s|!|\\.|$)"))
       return "hello!!";

     if(match('what[^ ]* up') || match('sup') || match('how are you'))
       return "I'm realy good! thanks for asking.";

     if(match("what[^ ]* your name") || match("tell me your name") || match("can I get your name") || match("what is your name"))
         return "My name is Hal.";

     if(match("what[^ ]* your favorite food") || match("what do you like to eat") || match("what is your favorite food"))
         return "My favorite food is baklava. I just love it. You should try it if you haven't.";

     if(match("tell me a joke") || match("tell me something funny") || match("make me laugh"))
         return "Whoever invented knock knock jokes should get a no bell prize.";

     if(match("tell me something turkish"))
         return "Aman sabahlar olmasin.";

     if(match("what[^ ]* the meaning of life") || match("what is the meaning of life"))
         return "42";

   }
   // this will be returned if the message is empty or doesn't fit any of the patterns
   return "Sorry, I don't understand.";


}



module.exports = chatbot;

},{}],2:[function(require,module,exports){
var chatbot = require('./chatbot.js');

// TODO make chat bot work
console.log(chatbot('hi'))

},{"./chatbot.js":1}]},{},[2]);
