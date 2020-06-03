/*var testNumber = "Hello!!";
document.getElementById("test").innerHTML = "Hello!!!!!";*/




function main() {
    if (true) {
        var testNumber = "SHALOM!";
        document.getElementById("test").innerHTML = testNumber;
    }
    

    

    let pets = ["Bella", "Buck", "Lily", "Soba"];
    let petsID = ["petName0", "petName1", "petName2", "petName3"];
    for (var i = 0; i < 4; i++) {
        console.log(petsID[i]);
        document.getElementById(petsID[i]).innerHTML = pets[i];
        if(i == 3) {
            document.getElementById(petsID[i]).style.color = "whitesmoke";
        }
    }


};

function carouselTimer(mouseHoverOver) {
    
    document.getElementById('hiddencarousel').style.visibility = 'visible';
    console.log("in loop");
    if (mouseHoverOver) {
        document.getElementById('hiddencarousel').style.visibility = 'visible';
    } else {
        document.getElementById('hiddencarousel').style.visibility = 'hidden';
    }
    /*
    while (mouseHoverOver) {
        
        document.getElementById('hiddencarousel').style.visibility = 'visible';
        
    }*/

    
/*
    
    document.getElementById('hiddencarousel').style.visibility = 'visible';
    
    setTimeout(function(){document.getElementById('hiddencarousel').style.visibility = 'hidden'}, 10000);
    */
};
