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
