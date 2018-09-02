// BUDGET CONTROLLER
var budgetController = (function () {

    // Some code

})();



// UI CONTROLLER
var UIController = (function () {

    // Some code

})();



// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    document.querySelector('.add__btn').addEventListener('click', function() {
       console.log("Button was clicked!") 
    });
    
})(budgetController, UIController);
