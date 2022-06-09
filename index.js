//Call back function
function goForSwimming() {
    console.log("Go for swimming daily");
  }

function receivesAFunction(playFootBall){
    goForSwimming();
    playFootBall();
}

//Returning functions
function returnsANamedFunction() {
    return returnsANamedFunction
}


//Returning anonymous function
function returnsAnAnonymousFunction(){
    return (function(){});
};