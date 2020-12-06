class PET{
    constructor(){

    }
    getCount(){
        var petRef = database.ref("petCount");
        petRef.on('value', function (Data){
            petCount = Data.val();
        });
    }
    getFoodAmount(){
        var foodRef = database.ref("/pet" + petCount + '/food');
        foodRef.on('value', function (Data){
            foodAmount = Data.val();
        });
    }
    getTurn(){
        var turnRef = database.ref("/pet" + petCount + '/turn');
        turnRef.on('value', function (Data){
            turn = Data.val();
        });
    }
    updateCount(Count){
        database.ref('/').update({
            petCount: Count,
        });
    }
    updateFoodAmount(Food){
        database.ref("/pet" + petCount + '/food').update({
            food: Food,
        });
    }
    updateTurn(Turn){
        database.ref("/pet" + petCount + '/turn').update({
            turn: Turn,
        });
    }
    // updateName(Name){
    //     var petIndex = 'pet' + petCount;
    //     database.ref(petIndex).set({
    //         name: Name,
    //     });
    // }
    updateFood(Name){
        var petIndex1 = 'pet' + petCount;
        database.ref(petIndex1).set({
            name: Name,
            food: 30,
            turn: 0,
        })
    }
}