/*var testNumber = "Hello!!";
document.getElementById("test").innerHTML = "Hello!!!!!";*/



// Pre: Function loads when the webpage is opened.
//
// Post: Displays the website header and names of our pets.
function main() {
    // Webpage Title
    var testNumber = "Our Petz!";
    document.getElementById("test").innerHTML = testNumber;

    // Pets names found on the home page
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

// Paramater: bool mouseHoverOver, true if mouse is hovering over the button that
//            runs this function.
//
// Post: Makes a carousel of images visible while the mouse is hovering over button.
//       Becomes hidden when not hovering over button.
function carouselTimer(mouseHoverOver) {
    document.getElementById('hiddencarousel').style.visibility = 'visible';
    if (mouseHoverOver) {
        document.getElementById('hiddencarousel').style.visibility = 'visible';
    } else {
        document.getElementById('hiddencarousel').style.visibility = 'hidden';
    }
};
