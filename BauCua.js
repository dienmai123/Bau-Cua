// Variables
var deer = 0, bau = 0, chicken = 0, fish = 0, crab = 0, shrimp = 0;
var resetAllBet;
var money = 0;


setText("amountWonOutput", "$" + money);

//Set Value bet choice to 0
setText("deerBetOutput", "0");
setText("bauBetOutput", "0");
setText("chickenBetOutput", "0");
setText("fishBetOutput", "0");
setText("crabBetOutput", "0");
setText("shrimpBetOutput", "0");

roll();

//Roll button to ouput three objects or animal on the bottom 
function roll(){
  var rollOutput = [];
  var count = 0;
  var total = 0;
  var betAmount = 0;
  onEvent("rollButton", "click", function( ) {
    
    count = count+1;
    for(var i = 0; i < 3; i++){
    var randomObject = randomNumber(1,6);
    if (randomObject==1){
      appendItem(rollOutput, "Deer");
    }else if (randomObject == 2){
      appendItem(rollOutput, "Bau");
    }else if (randomObject == 3){
      appendItem(rollOutput, "Rooster");
    }else if (randomObject == 4){
      appendItem(rollOutput, "Fish");
    }else if (randomObject == 5){
      appendItem(rollOutput, "Crab");
    }else if (randomObject == 6){
      appendItem(rollOutput, "Shrimp");
    }
    if (count==1){
      setText("winnerOutput",rollOutput.join(", "));
    }
    }
    
    //DEER BET 
    if (rollOutput[0] == "Deer"){
      betAmount = getText("amountBetInput");
      if (deer > 0){
        total = total + betAmount*deer;
      }
      
    }
    
    if (rollOutput[1] == "Deer"){
      betAmount = getText("amountBetInput");
      if (deer > 0){
        total = total + betAmount*deer;
      }}
      
    if (rollOutput[2] == "Deer"){
      betAmount = getText("amountBetInput");
      if (deer > 0){
        total = total + betAmount*deer;
      }}
      
    //BAU BET 
    if (rollOutput[0] == "Bau"){
      betAmount = getText("amountBetInput");
      if (bau > 0){
        total = total + betAmount*bau;
      }}
      
    if (rollOutput[1] == "Bau"){
      betAmount = getText("amountBetInput");
      if (bau > 0){
        total = total + betAmount*bau;
      }}
      
    if (rollOutput[2] == "Bau"){
      betAmount = getText("amountBetInput");
      if (bau > 0){
        total = total + betAmount*bau;
      }}  
      
    //ROOSTER BET
    if (rollOutput[0] == "Rooster"){
      betAmount = getText("amountBetInput");
      if (chicken > 0){
        total = total + betAmount*chicken;
      }}
      
    if (rollOutput[1] == "Rooster"){
      betAmount = getText("amountBetInput");
      if (chicken > 0){
        total = total + betAmount*chicken;
      }}
      
    if (rollOutput[2] == "Rooster"){
      betAmount = getText("amountBetInput");
      if (chicken > 0){
        total = total + betAmount*chicken;
      }}
      
      //FISH BET
    if (rollOutput[0] == "Fish"){
      betAmount = getText("amountBetInput");
      if (fish > 0){
        total = total + betAmount*fish;
      }}
      
    if (rollOutput[1] == "Fish"){
      betAmount = getText("amountBetInput");
      if (fish > 0){
        total = total + betAmount*fish;
      }}
      
    if (rollOutput[2] == "Fish"){
      betAmount = getText("amountBetInput");
      if (fish > 0){
        total = total + betAmount*fish;
      }}
      
      //CRAB BET
      if (rollOutput[0] == "Crab"){
      betAmount = getText("amountBetInput");
      if (crab > 0){
        total = total + betAmount*crab;
      }}
      
    if (rollOutput[1] == "Crab"){
      betAmount = getText("amountBetInput");
      if (crab > 0){
        total = total + betAmount*crab;
      }}
      
    if (rollOutput[2] == "Crab"){
      betAmount = getText("amountBetInput");
      if (crab > 0){
        total = total + betAmount*crab;
      }}
      
      //SHRIMP BET
      if (rollOutput[0] == "Shrimp"){
      betAmount = getText("amountBetInput");
      if (shrimp > 0){
        total = total + betAmount*shrimp;
      }}
      
    if (rollOutput[1] == "Shrimp"){
      betAmount = getText("amountBetInput");
      if (shrimp > 0){
        total = total + betAmount*shrimp;
      }}
      
    if (rollOutput[2] == "Shrimp"){
      betAmount = getText("amountBetInput");
      if (shrimp > 0){
        total = total + betAmount*shrimp;
      }}
  
    
    if (rollOutput[0] != "Deer" && rollOutput[1] != "Deer" && rollOutput[2] != "Deer" ){
      betAmount = getText("amountBetInput");
      if (deer > 0){
        total = total - betAmount*deer;
      }
    }
    if (rollOutput[0] != "Bau" && rollOutput[1] != "Bau" && rollOutput[2] != "Bau" ){
      betAmount = getText("amountBetInput");
      if (bau > 0){
        total = total - betAmount*bau;
      }
    }
    if (rollOutput[0] != "Rooster" && rollOutput[1] != "Rooster" && rollOutput[2] != "Rooster" ){
      betAmount = getText("amountBetInput");
      if (chicken > 0){
        total = total - betAmount*chicken;
      }
    }
    if (rollOutput[0] != "Fish" && rollOutput[1] != "Fish" && rollOutput[2] != "Fish" ){
      betAmount = getText("amountBetInput");
      if (fish > 0){
        total = total - betAmount*fish;
      }
    }
    if (rollOutput[0] != "Crab" && rollOutput[1] != "Crab" && rollOutput[2] != "Crab" ){
      betAmount = getText("amountBetInput");
      if (crab > 0){
        total = total - betAmount*crab;
      }
    }
    if (rollOutput[0] != "Shrimp" && rollOutput[1] != "Shrimp" && rollOutput[2] != "Shrimp" ){
      betAmount = getText("amountBetInput");
      if (shrimp > 0){
        total = total - betAmount*shrimp;
      }
    }
    
    setText("amountWonOutput", "$" + total);
    
    
    if (total < 0){
      setProperty("amountWonOutput", "text-color", "red");
    }else if (total >= 0){
      setProperty("amountWonOutput", "text-color", rgb(84, 239, 72));
    }
    
  }
);

  }
  


//Set value of betting 
onEvent("deerPic", "click", function( ) {
 deer = deer +1;
 setNumber("deerBetOutput", deer);
 });
onEvent("bauPic", "click", function( ) {
  bau +=1;
  setNumber("bauBetOutput", bau);
});
onEvent("chickenPic", "click", function( ) {
  chicken +=1;
  setNumber("chickenBetOutput", chicken);
});
onEvent("fishPic", "click", function( ) {
  fish +=1;
  setNumber("fishBetOutput", fish);
});
onEvent("crabPic","click",function (){
  crab +=1;
  setNumber("crabBetOutput", crab);
});
onEvent("shrimpPic","click",function (){
  shrimp +=1;
  setNumber("shrimpBetOutput", shrimp);
});

// Reset all the bets value 
 function resetAllBet() {
    onEvent("resetAllBetButton", "click", function( ) {
      deer = 0;
      setText("deerBetOutput", deer);
      bau = 0 ;
      setText("bauBetOutput", bau);
      chicken = 0;
      setText("chickenBetOutput", chicken);
      fish = 0;
      setText("fishBetOutput",fish);
      crab = 0;
      setText("crabBetOutput",crab);
      shrimp = 0;
      setText("shrimpBetOutput",shrimp);
      setText("winnerOutput", " ");
      setText("amountWonOutput", "$" + 0);
      setProperty("amountWonOutput", "text-color", rgb(84, 239, 72));
      roll();
    });
  }
