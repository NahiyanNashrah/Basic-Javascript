var budgetController = (function(){
    var x = 20;
    var add = function(a){
        return x + a;
    }
    return {
        publicTest : function(b){
            return (add(b));
            //console.log(add(b));
        }
    }
})();

var UIController = (function(){

    var DOMstring = {
        inputType : '.add__type',
        inputDescription : '.add__description',
        inputValue : '.add__value',
        inputBtn : '.add__btn'
    }

    return {
        getInput : function(){
            return {
                type : document.querySelector(DOMstring.inputType).value,
                description : document.querySelector(DOMstring.inputDescription).value,
                value : document.querySelector(DOMstring.inputValue).value
            };
        },
        getDOMstrings : function(){
            return DOMstring;
        }
    }

})();

var controller = (function(budgtCtrl,UICtrl){

    var setUpEventListener = function(){
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', addItem);
        document.addEventListener('keypress',function(event){
            if(event.keyCode === 13 || event.which ===13){
                addItem();
            }
        });
    };

    var addItem = function (){
        var input = UICtrl.getInput();
        console.log(input);
    };

    return {
        init : function(){
            console.log('Application has started.');
            setUpEventListener();
        }
    };

})(budgetController,UIController);

controller.init();