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
       return "this github thing is pretty cool, huh?";

     if(match('l(ol)+') || match('(ha)+(h|$)') || match('lmao'))
       return "what's so funny?";

     if(match('^no+(\\s|!|\\.|$)'))
       return "don't be such a negative nancy :(";

     if(match('(cya|bye|see ya|ttyl|talk to you later)'))
       return ["alright, see you around", "good teamwork!"];

     if(match('(dumb|stupid|is that all)'))
       return ["hey i'm just a proof of concept", "you can make me smarter if you'd like"];

     if(message == 'noop')
       return;
   }
   return "Sorry, I don't understand.";


}



module.exports = chatbot;
