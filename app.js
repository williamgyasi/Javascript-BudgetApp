var BUDGET_CONTROLLER= (function(){
       
})()


var UI_CONTROLLER =(function(){
    var DOMStrings={
        type:'.add__type',
        description:'.add__description',
        value:'.add__value',
        inputBtn:'.add__btn',
    }

    return{
        getInput: function(){
           return{
             type:document.querySelector(DOMStrings.type).value,
             description:document.querySelector(DOMStrings.description).value,
             value:document.querySelector(DOMStrings.value).value
           }
        },

        getDOMStrings:function(){
            return DOMStrings
        }
    }
})()


var APPCONTROLLER=(function(budgetCtrl,UICtrl){
    function setupEventListners(){
        var DOM=UICtrl.getDOMStrings()
        document.querySelector(DOM.inputBtn).addEventListener('click',function (){
            ctrlAddItem()   
        })
        document.addEventListener('keypress',function(event){
            if(event.keyCode===13 ||event.keyCode===13 ){
                ctrlAddItem()
            }
    
        })

    }
   

    function ctrlAddItem(){
       var input= UICtrl.getInput()
       console.log(input)
    }

    

   return{
       init:function(){
           console.log('WELCOME')
           setupEventListners()

       }
   }
    
})(BUDGET_CONTROLLER,UI_CONTROLLER)


APPCONTROLLER.init()