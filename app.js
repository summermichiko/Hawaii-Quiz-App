$(document).ready(function() {

	var questions = [{
		question: "It's your day off! Chee Pono! What beach do you spend the afternoon at?", 
		answerOptions: ["Sandy's", "Ala Moana", "Waikiki", "Hanauma Bay"], 
		correct: 0, 
		fact: "Get out of town and catch some waves at Sandy's!"
	},
  	{
		question: "Now that you've spent the day in the water, where do you go to grab a bite?", 
		answerOptions: ["Bogarts", "Zippy's", "Duke's", "Wahoo's"], 
		correct: 1, 
		fact: "Next Stop - Zippy's!"
	},
 	{
 		question: "Time to drive home - what's playing in your car?", 
 		answerOptions: ["Foo Fighters", "Regina Spektor", "Three Plus", "Jason Mraz"], 
 		correct: 2, 
 		fact: "Because it's a two person party tonight!"
 	},
	{
		question: "When you get home, you notice your neighbor has left you a bunch of apple bananas.  What do you give them in return?", 
		answerOptions: ["The Same Bunch of Apple Bananas", "A Few Mango From Your Tree", "Gourmet Mustard", "A Bag of Gluten Free Cookies"], 
		correct: 1, 
		fact: "If not mango, grab a couple papaya!"
	},
	{
		question: "Time to put your feet up! What are you going to watch on TV?", 
		answerOptions: ["Wheel of Fortune", "Hawai`i Stars", "KHON2NEWS with Joe Moore", "All of the above"], 
		correct: 3, 
		fact: "All night, every night!"
	}]

	var question = $(".question")
	var questionNumber = $(".questionNumber");
	var questions = 0;
	var complete = false; //will become true after quiz is competed
	var response; //the user's answer
	var qNum = 0; //keeps track of what question number the user is on

	$(".directions").click(function() {
		$(".definitionBox").show();
	});
	$(".letsPlay").click(function() {
		$(".definitionBox").hide();
	});
	$(".submit").click(function() {
		$(".comment").show();
		$(".next").show();
	});
	$(".next").click(function() {
		whale();
	});
	
	var whale = function() {
		if (questions < 5) {
			$(".comment").remove();
			$(".next").hide();
			var newQuestion = '<div class="questionSection"><h3 class="questionNumber">' + questions[currentQuestion].question + '</h3><p class="question">' + questions[currentQuestion].question + '</p><form class="answerOptions"><input type="radio" name="option" value="0"><span class="option">' + questions[currentQuestion].option[0] + '</span><br><input type="radio" name="option" value="1"><span class="option">' + questions[currentQuestion].option[1] + '</span><br><input type="radio" name="option" value="2"><span class="option">' + questions[currentQuestion].option[2] + '</span><br><input type="radio" name="option" value="3"><span class="option">' + questions[currentQuestion].option[3] + '</span><br></form></div>';
			$(".questionSection").html(newQuestion);
		};
	};
});


    

































	


