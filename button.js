class BUTTON{
    constructor(){

    }

    display(){
        var title = createElement("h2");
        title.html("PET SIMULATOR");
        title.position(100, 10);

        var foodAmountText = createElement('h3');
        var turnText = createElement('h3');

        var input = createInput('Pet Name');
        input.position(110, 130);

        var button = createButton('Start');
        button.position(175, 300);

        var button2 = createButton('Next Turn');
        button2.position(150, 300);
        button2.hide();

        button.mousePressed(function (){
            input.hide();
            button.hide();
            button2.show();

            var name = input.value();
            // console.log(name);

            petCount++

            pet.updateCount(petCount);

            // pet.updateName(name);

            pet.getFoodAmount();
            pet.getTurn();

            pet.updateFood(name);
            
            foodAmountText.html('You have ' + foodAmount + ' food');
            foodAmountText.position(120, 50);

            turnText.html('You have used ' + turn + ' turns');
            turnText.position(120, 75);

            // var greeting = createElement('h3');
            // greeting.html("HELLO " + name);
            // greeting.position(200, 200);
        })

        button2.mousePressed(function (){
            foodAmount--
            turn++

            pet.updateFood(foodAmount);
            pet.updateTurn(turn);
        })
    }
}