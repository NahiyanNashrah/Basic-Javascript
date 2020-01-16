var budgetController = (function(){
    
    var Expense = function(id,description,value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    var Income = function(id,description,value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems : {
            exp : [],
            inc : []
        },
        totals : {
            exp : 0,
            inc : 0
        }
    };

    return {
        addItem : function(itemType, itemName, itemvalue){
            var newItem,ID;
            
            //create new ID
            ID = data.allItems[itemType][data.allItems[itemType].length - 1].id + 1;
            //create new item
            if(itemType === 'inc'){
                newItem = new Income(ID,itemName,itemvalue);
            }else{ if(itemType  === 'exp')
                newItem = new Expense(ID,itemName,itemvalue);
            }
            data.allItems[itemType].push(newItem);
            return newItem;
        }
    };
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
    };

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
        budgtCtrl.addItem(input)
    };

    return {
        init : function(){
            console.log('Application has started.');
            setUpEventListener();
        }
    };

})(budgetController,UIController);

controller.init();



