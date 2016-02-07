$( document ).ready(function() {
var counter= 0; // tic tac toe IGNORE
//---------------------------------------
//---------------------------------------
//---------------------------------------
//---------------------------------------
//WRAP HTML variables in $money lol
var $gameTimer= $('#timer h1'); // Shooter Timer
var $gameScore= $('#score h1'); // score
var $gamePlayMsg= $('#gameMsg p'); // msg to user
var $playerShooting= $('#playerUp p'); // what player is up
var $gameStart= $('#start'); // starts game
var $enemy= $('.enemy'); // shooting Targets
var $zombieYell= $('.zombieYell');
var player1Score = 0; // place to store globally
var player2Score = 0; // place to store globally
var removeCover;
//OBJECT LITERIAL for game

//--------//--------
//animation
// function spring() {
// $enemy.velocity({ scale: 1.25, translateY: 60, boxShadowBlur: 35 });
// }

// $($enemy).velocity({ width: 540 }, [ 250, 15 ]);

//--------//--------



var game = { //
  player1: 'player one',
  player2: 'player two',
  scoreCount: 0,
  whoShoots: '',
  firstScore: 0,
  secoundScore: 0,
  // seconds: 5,  

  //-------------startTheTimer2-----------------
  startTheTimer2: function(){
    if( game.whoShoots === game.player2 ) { //LASTCHANGED
       $($playerShooting).text('PLAYER 2 Shooting ');
    var seconds= 2;
    game.$gameScore = 0; /// LAST CHANGE //----------------------
    game.scoreCount = 0;// CLEAR scoreCount TO ZERO ON START for next player
    $enemy.on('click', function(){
        game.scoreCount+= 123;
        console.log('hit');
        $gameScore.text(game.scoreCount);
      })
     var mytimer = setInterval(updateTime, 1000);
     function updateTime(){
       seconds--;
       $($gameTimer).text("Time Left: " + seconds);
       if(seconds === 0) {
         clearInterval(mytimer);
         $($gamePlayMsg).text('PLAYER 2, You scored " '+ game.scoreCount +' " points');//msg to players of GAme Status
         // game.gameScore = game.firstScore;
                 game.secoundScore += game.scoreCount; // ADDED SCORE to player2

         $enemy.off();// turn eventListener off

             //$($playerShooting).text('PLAYER 2 Press start');
        console.log(game.scoreCount + 'current score');
        console.log(game.secoundScore + ' = stored player2 score');
        removeCover.appendTo('#wrapper');//remove//_______ HERE LAST

         game.winner();//HAVE TO MADE THIS FUNCTION

       }
       }; // end if clearInterval
     }; // end updateTime
     //game.addEventToBall();HAVE TO MAKE THIS FUNCTION
   },//CLOSE startTheTimer2 function

//-------------startTheTimer-----------------

  startTheTimer: function(){
    if( game.whoShoots !== game.player1) {
    var seconds= 2;
     //$($ball).off('click'); LOOK THIS UP
     game.whoShoots = game.player1;//----USED in nextShooterTurn function
     console.log('------ ' + game.whoShoots +    ' ----------');

     $enemy.on('click', function(){

        game.scoreCount+= 123;
        console.log('hit');
        $zombieYell
        $gameScore.text(game.scoreCount);


      })


     $($playerShooting).text('PLAYER 1 Shooting ');
     $($gamePlayMsg).text('NEXT UP is PLAYER 2 Get Ready ');//msg promopt box
     var mytimer = setInterval(updateTime, 1000);
     function updateTime(){
       // $gameScore.text(game.scoreCount);//nope bad idea
       seconds--;
       $($gameTimer ).text("Time Left: " + seconds);
       if(seconds === 0) {
         clearInterval(mytimer);

         $($gamePlayMsg).text('PLAYER 1, You scored " '+ game.scoreCount +' " points');//msg to players of GAme Status
         // game.gameScore = game.firstScore;
                 game.firstScore += game.scoreCount; // ADDED SCORE to player1

         $enemy.off();// turn eventListener off
        //  removeCover.appendTo('#wrapper');//remove

             $($playerShooting).text('PLAYER 2 Press start');

         game.nextShooterTurn();//HAVE TO MADE THIS FUNCTION
       }
       }; // end if clearInterval
     }; // end updateTime
     //game.addEventToBall();HAVE TO MAKE THIS FUNCTION
   },//CLOSE startTheTimer function
//------END-------startTheTimer-----------------


//-------------shooting-----------------

   // shooting: function(){
   //  $($playerShooting).text('PLAYER 1 Shooting ');

   // },
//------END-------shooting-----------------

//-------------nextShooterTurn-----------------

    nextShooterTurn: function(){
      console.log('nextShooterTurn function is running ');

      //console.log('nextShooter is ' + game.whoShoots );

      console.log(game.scoreCount + 'current score');
      game.firstScore += game.scoreCount; // ADDED SCORE to player1
      console.log(game.firstScore+ ' = stored player1 score');

    $gameScore.text('0');
    console.log('player1 score CLEARed from html NOT gamefunction = ' + game.scoreCount);
    removeCover.appendTo('#wrapper');// HIDDEN TARGETS BEFORE THIS CODE// GOOD CHNANGE keep it 
    if( game.whoShoots === 'player one'){ //CHANGED @ 2pm day ( game.whoShoots === game.player1 && game.firstScore !== 0){
      console.log('player2 up');
       game.whoShoots = game.player2;//SWITCH PLAYERS

    // $($playerShooting).text('PLAYER 2 Get READY');
    $($playerShooting).text('PLAYER 2 Press start');
    // removeCover.appendTo('#wrapper');//remove// CHNAGED AT 3pm

    }

   },
//------END-------nextShooterTurn-----------------


//
//
//--------//--------
//--------//--------
//GAME LOGIC
winner: function(){
if(game.firstScore > game.secoundScore){
   $($playerShooting).text('PLAYER 1 WINS');
   //$($gamePlayMsg).text('PLAYER 1 WINS');
 }
 else if(game.firstScore < game.secoundScore){
    $($playerShooting).text('PLAYER 2 WINS');
    //$($gamePlayMsg).text('PLAYER 2 WINS');
  }
  else if (game.firstScore === game.secoundScore ) {
     $($playerShooting).text("It's a TIE ");
     //$($gamePlayMsg).text('It"s" a TIE ');
   }
},




}//CLOSE GAME OBJECT LITERIAL

//GAME EVENT LIsteners

//$(function() { DO NOT Need this
  console.log('jquery is now running');

  //$($gameStart).on('click', game.start); //WILL WRITE THIS NEXT
  $($gameStart).on('click', function(){
      if(game.scoreCount === 0){
    game.startTheTimer();
      $enemy.velocity(
         {scale: -0.09, translateY: 100, translateX: 400, }
       );//close animation
       $enemy.velocity("reverse");
//repeat animation
       $enemy.velocity(
          {scale: -0.09, translateY: 800, translateX: 100,}
        );//close animation
        $enemy.velocity("reverse");

      // { YOUR_PROPERTY: "YOUR_VALUE", scale: 1.25, translateY: 50, boxShadowBlur: 35 }
   }//CLOSED  - --- game.startTheTimer

   else if (game.scoreCount !== 0){ //CHaNGED @ 2pm - day3 (game.scoreCount !== 0){
    game.startTheTimer2();
    $enemy.velocity(
      {scale: -0.09, translateY: 100, translateX: 400,}
    );//close animation
    $enemy.velocity("reverse");
//repeat animation
    $enemy.velocity(
       {scale: -0.09, translateY: 800, translateX: 100,}
     );//close animation
     $enemy.velocity("reverse");
   }//CLOSED  - --- game.startTheTimer

   removeCover = $('.cover').detach();

  //  { YOUR_PROPERTY: "YOUR_VALUE", scale: 1.25, translateY: 60, boxShadowBlur: 35 }
});



//});// CLOSE EVENT LIsteners












//EVERY THING BELOW THIS LINE IS FOR TEXTING ----- //EVERY THING BELOW THIS LINE IS FOR TEXTING ----- //EVERY THING BELOW THIS LINE IS FOR TEXTING -----
//---------------------------------------
//---------------------------------------
//---------------------------------------
//---------------------------------------


}); // ------------------------------        CLOSE Document READY
