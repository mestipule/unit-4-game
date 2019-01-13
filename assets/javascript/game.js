var counter, valueOfCrystals, targetNumber, crystal, incorrectGuesses;
counter = 0;
//score = Math.ceil(Math.random()*12);
targetNumber = Math.ceil(Math.random()*101) +19;
$(function(){
    var numberToBeat = document.getElementById("number-to-beat");
    $(numberToBeat).append("Number To Beat: " + targetNumber);
});
//document.write("Number To Beat: " + targetNumber);
$(function(){
    $("#image-crystals img").each(function(index){
        var valueOption = Math.ceil(Math.random()*12);
        $(this).attr("data-crystalValue", valueOption);
        $(this).on("click", function(){
            counter += valueOption;
         if (counter === targetNumber){
            alert("You Win! " + counter);
            confirm("Do you want to play again? ");
            }
            else if(counter >=targetNumber){
                alert("You Lose! " + counter)
                confirm("Do you want to play again? ");
            }
         });
     }); 
});
$("#number-to-guess").text("Number to Guess:" + targetNumber);

function restart(){
    targetNumber = Math.ceil(Math.random()*101) +19;
    var numberToBeat = document.getElementById("number-to-beat");
    $(numberToBeat).append("Number To Beat: " + targetNumber);
};

// $("#image-crystals").on("click", function(){
//    counter +=10;
//    console.log(counter); 
//    counter += crystal;

// if (counter === targetNumber){
//    alert("New score" + counter)
//    }
//    else if(counter >=targetNumber){
//        alert("Ypu Lose.")
//    }
// });

   
// for (var i=0; i<valueOfCrystals.length; i++){


// }

// counter = 0;


// for ()
