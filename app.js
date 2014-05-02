$(document).ready(function() {

	var questions = [
		{
		},
		{
			question: "It's your day off! Chee Pono! What beach do you spend the afternoon at?", 
			answerOptions: ["Sandy's", "Ala Moana", "Waikiki", "Hanauma Bay"], 
			correct: 0, 
			fact: "Get out of town and catch some waves at SANDY'S!"
		},
		{
			question: "Now that you've spent the day in the water, where do you go to grab a bite?", 
			answerOptions: ["Bogarts", "Zippy's", "Duke's", "Wahoo's"], 
			correct: 1, 
			fact: "Next Stop - ZIPPY'S!"
		},
		{
			question: "Time to drive home - what's playing in your car?", 
			answerOptions: ["Foo Fighters", "Regina Spektor", "Three Plus", "Jason Mraz"], 
			correct: 2, 
			fact: "It's a two person party tonight with THREE PLUS!"
		},
		{
			question: "When you get home, you notice your neighbor has left you a bunch of apple bananas.  What do you give them in return?", 
			answerOptions: ["The Same Bunch of Apple Bananas", "A Few Mango From Your Tree", "Gourmet Mustard", "A Bag of Gluten Free Cookies"], 
			correct: 1, 
			fact: "If not MANGO, grab a couple papaya!"
		},
		{
			question: "Time to put your feet up! What are you going to watch on TV?", 
			answerOptions: ["Wheel of Fortune", "Hawai`i Stars", "KHON2NEWS with Joe Moore", "All of the above"], 
			correct: 3, 
			fact: "ALL OF 'EM! All night, every night!"
		}
	];

	var currentQuestion = 1;
	var numberCorrect = 0;
	
	$(".directions").click(function() {
		$(".definitionBox").show();
	});

	$(".letsPlay").click(function() {
		$(".definitionBox").hide();
	});

	$(".submit").click(function() {
		var newComment = '<div class="comment"><p>'+questions[currentQuestion].fact+'</p></div>';
		$(".comment").html(newComment);
		$(".comment").show();
		$(".next").show();
		checkAnswer();
	});

	function checkAnswer() {
		var answer = $('input[type="radio"]:checked').val();
		if (answer == questions[currentQuestion].correct) {
			numberCorrect++;
		};
	};

	$(".next").click(function() {
		 moveOn();
	});
	
	function moveOn() {
		if (currentQuestion < 5) {
			currentQuestion++;
			$(".comment").hide();
			$(".next").hide();
			var newQuestion = '<div class="questionSection"><h3 class="questionNumber">Question #' + currentQuestion + '</h3><p class="question">' + questions[currentQuestion].question + '</p><form class="answerOptions"><input type="radio" name="option" value="0"><span class="option">' + questions[currentQuestion].answerOptions[0] + '</span><br><input type="radio" name="option" value="1"><span class="option">' + questions[currentQuestion].answerOptions[1] + '</span><br><input type="radio" name="option" value="2"><span class="option">' + questions[currentQuestion].answerOptions[2] + '</span><br><input type="radio" name="option" value="3"><span class="option">' + questions[currentQuestion].answerOptions[3] + '</span><br></form></div>';
			$(".questionSection").html(newQuestion);
		} else {
			$(".score").show();
		};
	};

	$(".score").click(function() {
		$("#scoreInput").html("");
		$(".scoreTime").show();
		$(".scoreHeader").show();
		$(".tryAgain").show();
		$("#scoreInput").append(numberCorrect).show();
		if (numberCorrect == 0) {
			//use append?
			$(".result0").show();
		} if (numberCorrect == 1) {
			$(".result1").show();
		} if (numberCorrect == 2) {
			$(".result2").show();
		} if (numberCorrect == 3) {
			$(".result3").show();
		} if (numberCorrect == 4) {
			$(".result4").show();
		} if (numberCorrect == 5) {
			$(".result5").show();
		};
	});

	$(".newQuiz").click(function() {
		reStart();
		$(".scoreTime").hide();
	});

	function reStart() {
		numberCorrect == 0;
		currentQuestion = 1;
		$(".result0").hide();
		$(".result1").hide();
		$(".result2").hide();
		$(".result3").hide();
		$(".result4").hide();
		$(".result5").hide();
		$(".comment").hide();
		$(".next").hide();
		$(".score").hide();
		var newQuestion = '<div class="questionSection"><h3 class="questionNumber">Question #' + currentQuestion + '</h3><p class="question">' + questions[currentQuestion].question + '</p><form class="answerOptions"><input type="radio" name="option" value="0"><span class="option">' + questions[currentQuestion].answerOptions[0] + '</span><br><input type="radio" name="option" value="1"><span class="option">' + questions[currentQuestion].answerOptions[1] + '</span><br><input type="radio" name="option" value="2"><span class="option">' + questions[currentQuestion].answerOptions[2] + '</span><br><input type="radio" name="option" value="3"><span class="option">' + questions[currentQuestion].answerOptions[3] + '</span><br></form></div>';
		$(".questionSection").html(newQuestion);
	};

	$(".tryAgain").click(function() {
		$(".scoreTime").hide();
		numberCorrect = 0;
	});
});



    

































	


