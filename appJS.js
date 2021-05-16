const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question.container')

//constshuffleQuestion, currentQuestionIndex

//startButton.addEventListener('click',startGame);

function startQuiz() {
    console.log('started')
    //startButton.classlist.add('hide')
    //startButton.setAttribute("style", "visibility:hidden");
    document.getElementById('start-btn').style.visibility = "hidden";
    document.getElementById('question.container').style.display = "inline";
    //questionContainerElement.setAttribute("style", "visibility:visible");
    setNextQuestion()
}

function setNextQuestion() {
    document.getElementById('question').innerText = 'What is the biggest building in the world?'
}

function selectAnswer() {

}

function result()
{
	var score=0;
	if(document.getElementById('correct1').checked)
		{	
            score++;
		}
	if(document.getElementById('correct2').checked)
		{	
            score++;
		}
	if(document.getElementById('correct3').checked)
		{	
            score++;
		}

    document.getElementById('answers').style.display = "inline";
    document.getElementById('answers').innerText = "Your quiz score is: " + score;"try again"
    document.getElementById('question.container').style.display = "none";
    //document.write("Your score is:"+score);
 // to print on browser
 // to print on screen document.write("Your quiz score is:"+score);
 // to print on screen document.write("Try again");
}






