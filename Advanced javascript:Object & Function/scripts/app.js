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

var firstQuestion = new Question('\'==\' does automatic type coercion.',['Yes','No'],0);
var secondQuestion = new Question('Whats the name of the course teacher?',['John','Jonas'],1);
var thirdQuestion = new Question('Does js follow prototypal inheritance?',['True', 'False'],0);

var arr = [firstQuestion, secondQuestion, thirdQuestion];

var random = Math.floor(Math.random() * 3 ) ;

arr[random].display();

var input = prompt('The correct answer is ');

if(input == arr[random].ans){
    console.log('Correct Answer!!!');
}else{
    console.log('Wrong Answer!');
}

