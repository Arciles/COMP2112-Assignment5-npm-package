var chatbot = require('../src/chatbot.js')
var chai = require('chai')
var assert = chai.assert;
var expect = chai.expect;

it("should return a string", function () {
    var result = chatbot();
    expect(result).to.be.a("string");
});

it("should return 'Sorry, I don't understand.' when message is not understood", function () {
    var result = chatbot("you dont understand this");
    expect(result).to.equal("Sorry, I don't understand.");
});

it("should return 'hello!!' when you greet him", function() {
  var result = chatbot("hello");
  expect(result).to.equal("hello!!");
});

it("should return 'I'm realy good! thanks for asking.' when you ask him how he is.", function() {
  var result = chatbot("How are you?");
  expect(result).to.equal("I'm realy good! thanks for asking.");
});

it("should return 'My name is Hal.' when you ask him what's his hane", function() {
    var result = chatbot("What's your name?");
    expect(result).to.equal("My name is Hal.");
});

it("should return 'My favorite food is baklava. I just love it. You should try it if you haven't.' when you ask him what's his favorite food.",function() {
  var result = chatbot("What's your favorite food?");
  expect(result).to.equal("My favorite food is baklava. I just love it. You should try it if you haven't.");
});

it("should return 'Whoever invented knock knock jokes should get a no bell prize.' when you ask him to tell a joke.",function() {
  var result = chatbot("Tell me a joke");
  expect(result).to.equal("Whoever invented knock knock jokes should get a no bell prize.");
});

it("should return 'Aman sabahlar olmasin.' when you ask him to tell you something Turkish",function() {
  var result = chatbot("Tell me something Turkish");
  expect(result).to.equal("Aman sabahlar olmasin.")
});

it("should return '42' when you ask him what's the meaning of life",function() {
  var result = chatbot("What's the meaning of life?");
  expect(result).to.equal("42");
});
