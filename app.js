$(document).ready(function() {

	var questions = [
		{
		},
		{
			question: "It's your day off - chee pono! What beach are you going to spend the afternoon at?",
			answerOptions: ["Sandy's", "Ala Moana", "Waikiki", "Hanauma Bay"],
			answerImages: ["sandys.jpg", "alaMoana.jpg", "waikiki.jpg", "hanauma.jpg"],
			correct: 0,
			fact: "Get out of town and catch some waves at SANDY'S!"
		},
		{
			question: "Now that you've spent the day in the water, where are you going to grab a bite to eat?",
			answerOptions: ["Bogart's", "Zippy's", "Duke's", "Wahoo's"],
			answerImages: ["bogarts.jpg", "zippys.jpg", "dukes.jpg", "wahoos.jpg"],
			correct: 1,
			fact: "Next Stop - ZIPPY'S!"
		},
		{
			question: "Now it's time to head home - what's playing in your car?",
			answerOptions: ["Foo Fighters", "Regina Spektor", "Three Plus", "Jason Mraz"],
			answerImages: ["fooFighters.jpg", "regina.jpg", "threePlus.jpg", "jason.jpg"],
			correct: 2,
			fact: "It's a two person party tonight with THREE PLUS!"
		},
		{
			question: "When you get home, you notice that your neighbor has left you a bunch of apple bananas.  What do you give them in return?",
			answerOptions: ["The same apple bananas", "A few mango from your tree", "Gourmet mustard", "A bag of gluten free cookies"],
			answerImages: ["bananas.jpg", "mango.jpg", "mustard.jpg", "cookies.jpg"],
			correct: 1,
			fact: "If not MANGO, grab a couple papaya!"
		},
		{
			question: "Finally - it's time to put your feet up! What are you going to watch on TV?",
			answerOptions: ["Wheel of Fortune", "Hawai`i Stars", "KHON2NEWS", "All of the above"],
			answerImages: ["wheelOfFortune.jpg", "hawaiiStars.jpg", "joeMoore.jpg", "allOfThem.jpg"],
			correct: 3,
			fact: "ALL OF 'EM! All night, every night!"
		}
	];

	var currentQuestion = 1;
	var numberCorrect = 0;

	// click on radio button
	$(document).on("click", "input[type='radio']", function() {
		$("input[type='radio']").attr('disabled', true);
		$("input[type='radio']").each(function(index) {
			if (index == questions[currentQuestion].correct) {
				$(this).closest('.labelWrapper').addClass('selectedItem');
				$(this).closest('.labelWrapper').css('background-color', '#88f078 !important');
			} else {
				$(this).closest('.labelWrapper').addClass('disabledItem');
				$(this).closest('.labelWrapper').css('background-color', '#EF6B66 !important');
			}
		});
		$("body").animate({ scrollTop: $(document).height() - $(window).height() + 100 });
		$(".greyBoxHolder").show();
		var newComment = '<div class="answerText"><p>'+questions[currentQuestion].fact+'</p></div>';
		$(".answerText").html(newComment);
		$(".answerText").show();
		if (currentQuestion < 5) {
			$(".next").show();
		} else {
			$(".score").show();
		}
		checkAnswer();
	});

	function checkAnswer() {
		var answer = $(document).find('input[type="radio"]:checked').val();
		if (answer == questions[currentQuestion].correct) {
			numberCorrect++;
			$(".boolText").text('CORRECT!').css('color', '#88f078');
		} else {
			$(".boolText").text('WRONG!').css('color', '#EF6B66');
		};
	};

	$(".next").on("click", function() {
		moveOn();
		$(".greyBoxHolder").hide();
		$("body").animate({ scrollTop: 0 });
	});

	function moveOn() {
		if (currentQuestion < 5) {
			currentQuestion++;
			$(".answerText").hide();
			$(".next").hide();
			var newQuestion =
				'<div class="questionSection">' +
					'<h3 class="questionNumber">Question ' + currentQuestion + ':' + '</h3>' +
					'<p class="question">' + questions[currentQuestion].question + '</p>' +
					'<form class="answerOptions">' +
						'<label class="labelWrapper labelOne">' +
							'<div class="optionWrapper">' +
								'<img class="optionImage" src="Images/' + questions[currentQuestion].answerImages[0] + '">' +
								'<input class="radioButton" type="radio" name="option" value="0">' +
								'<span class="option">' + ' ' + questions[currentQuestion].answerOptions[0] + '</span>' +
							'</div>' +
						'</label>' +
						'<label class="labelWrapper labelTwo">' +
							'<div class="optionWrapper">' +
								'<img class="optionImage" src="Images/' + questions[currentQuestion].answerImages[1] + '">' +
								'<input class="radioButton" type="radio" name="option" value="1">' +
								'<span class="option">' + ' ' + questions[currentQuestion].answerOptions[1] + '</span>' +
							'</div>' +
						'</label>' +
						'<label class="labelWrapper labelThree">' +
							'<div class="optionWrapper">' +
								'<img class="optionImage" src="Images/' + questions[currentQuestion].answerImages[2] + '">' +
								'<input class="radioButton" type="radio" name="option" value="2">' +
								'<span class="option">' + ' ' + questions[currentQuestion].answerOptions[2] + '</span>' +
							'</div>' +
						'</label>' +
						'<label class="labelWrapper labelFour">' +
							'<div class="optionWrapper">' +
								'<img class="optionImage" src="Images/' + questions[currentQuestion].answerImages[3] + '">' +
								'<input class="radioButton" type="radio" name="option" value="3">' +
								'<span class="option">' + ' ' + questions[currentQuestion].answerOptions[3] + '</span>' +
							'</div>' +
						'</label>' +
					'</form>' +
				'</div>';
			$(".questionSection").html(newQuestion);
		} else {
			$(".score").show();
		};
	};

	// click on score button
	$(".score").on("click", function() {
		$("#scoreInput").html("");
		$(".scoreTime").show();
		$(".tryAgain").show();
		$(".scoreHeader").text("You scored: " + numberCorrect + " out of 5").show();
		if (numberCorrect == 0) {
			$(".result0").show();
			$(".imageResult").attr("src", "Images/haoleTourist.jpg");
			$(".scoreTitle").text("You're a FULL BLOWN TOURIST.");
		} if (numberCorrect == 1) {
			$(".result1").show();
			$(".imageResult").attr("src", "Images/haoleTourist.jpg");
			$(".scoreTitle").text("You're a FULL BLOWN TOURIST.");
	} if (numberCorrect == 2) {
			$(".result2").show();
			$(".imageResult").attr("src", "Images/undercoverTourist.jpg");
			$(".scoreTitle").text("You're an UNDERCOVER TOURIST.");
		} if (numberCorrect == 3) {
			$(".result3").show();
			$(".imageResult").attr("src", "Images/trainingKamaaina.jpg");
			$(".scoreTitle").text("You're an UNDERCOVER TOURIST.");
		} if (numberCorrect == 4) {
			$(".result4").show();
			$(".imageResult").attr("src", "Images/trainingKamaaina.jpg");
			$(".scoreTitle").text("You're a KAMA`AINA IN TRAINING.");
		} if (numberCorrect == 5) {
			$(".result5").show();
			$(".imageResult").attr("src", "Images/trueKamaaina.jpg");
			$(".scoreTitle").text("You're a TRUE KAMA`AINA.");
		};
	});

	// click on start over button
	$(".tryAgain").on("click", function() {
		reStart();
		$(".scoreTime").hide();
	});

	// add style to all radio buttons
	$(document).find(".contentBody", "radioButton").css("margin-right", "5px !important");

	function reStart() {
		numberCorrect = 0;
		currentQuestion = 1;
		$(".score").hide();
		$(".greyBoxHolder").hide();
		var newQuestion =
			'<div class="questionSection">' +
				'<h3 class="questionNumber">Question 1:</h3>' +
				'<p class="question">It\'s your day off - chee pono! What beach are you going to spend the afternoon at?</p>' +
				'<form class="answerOptions">' +
					'<label class="labelOne labelWrapper">' +
						'<div class="optionWrapper">' +
							'<img class="optionImage" src="Images/sandys.jpg">' +
							'<input class="radioButton" type="radio" name="option" value="0">' +
							'<span class="option"> Sandy\'s</span>' +
						'</div>' +
					'</label>' +
					'<label class="labelTwo labelWrapper">' +
						'<div class="optionWrapper">' +
							'<img class="optionImage" src="Images/alaMoana.jpg">' +
							'<input class="radioButton" type="radio" name="option" value="1">' +
							'<span class="option"> Ala Moana</span>' +
						'</div>' +
					'</label>' +
					'<label class="labelThree labelWrapper">' +
						'<div class="optionWrapper">' +
							'<img class="optionImage" src="Images/waikiki.jpg">' +
							'<input class="radioButton" type="radio" name="option" value="2">' +
							'<span class="option"> Waikiki</span>' +
						'</div>' +
					'</label>' +
					'<label class="labelFour labelWrapper">' +
						'<div class="optionWrapper">' +
							'<img class="optionImage" src="Images/hanauma.jpg">' +
							'<input class="radioButton" type="radio" name="option" value="3">' +
							'<span class="option"> Hanauma Bay</span>' +
						'</div>' +
					'</label>' +
				'</form>' +
			'</div>';
		$(".questionSection").html(newQuestion);
		$("body").animate({ scrollTop: $(document).height() - $(window).height() });
	};
});
