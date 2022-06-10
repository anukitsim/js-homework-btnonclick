var button =document.getElementById("clickme");
count = 0;



button.onclick = function(){

    if(count < 10){
        count ++;
        button.innerHTML = "clickme" + count;

    }

    else if (count === 10) {
        count--;
        button.innerHTML = "clickme" + count;

    }
    
   
};


// var decreaseBtn = document.getElementById("buttonDecrease");

// var increaseBtn = document.getElementById("buttonIncrease");

// var counter = document.getElementById("counter");

// var count = 0;

// decreaseBtn.onclick =function() {
//     while(count < 11){
//         count --;
//         counter.innerHTML = count;

//     }
    
   
// }

// increaseBtn.onclick = function(){
//     while (count >= 0){
//         count ++;
//     }
//     counter.innerHTML = count;
// }


