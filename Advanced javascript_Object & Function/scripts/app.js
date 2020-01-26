var random,input,gamePlaying = true,score = 0;
var Question = function(question,options,ans){
    this.question = question;
    this.options = options;
    this.ans = ans;
}

Question.prototype.display = function(){
    console.log(arr[random].question);
    for(item in arr[random].options){
        console.log(item + ': '+ arr[random].options[item]);
    }
}
Question.prototype.displayScore = function(){
    console.log('Score is ' + score);
    console.log('**************************');
}

var firstQuestion = new Question('\'==\' does automatic type coercion.',['Yes','No'],0);
var secondQuestion = new Question('Whats the name of the course teacher?',['John','Jonas'],1);
var thirdQuestion = new Question('Does js follow prototypal inheritance?',['True', 'False'],0);
var arr = [firstQuestion, secondQuestion, thirdQuestion];

function nextQuestion(){
    random = Math.floor(Math.random() * 3 ) ;
    arr[random].display();
    input = prompt('The correct answer is ');
    if(input != 'exit' && gamePlaying == true){
        if(input == arr[random].ans){
            score ++;
            console.log('Correct Answer!!!  ');
            arr[random].displayScore();
        }else{
            score--;
            console.log('Wrong Answer!');
            arr[random].displayScore();
        }
        nextQuestion();
    }
    else{
        gamePlaying = false;
        console.log('Total score is '+score);
    }

}
nextQuestion();
