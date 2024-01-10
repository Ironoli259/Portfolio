document.addEventListener('DOMContentLoaded', function() {
    let gameSections = document.getElementsByClassName("gameSection");

    for(let i = 0; i < gameSections.length; i++){
        gameSections[i].addEventListener("click", function() {
            displayFeaturedGame(this);
        });
    }
});

function displayFeaturedGame(selectedGame){
    let featuredGame = document.getElementById("featuredGame");
    featuredGame.style.display = "block";
    featuredGame.children[0].src = selectedGame.children[2].src;
    featuredGame.children[1].innerHTML = selectedGame.children[0].innerHTML;
    featuredGame.children[2].innerHTML = selectedGame.children[3].innerHTML;
    featuredGame.children[3].innerHTML = selectedGame.children[4].innerHTML;
    featuredGame.children[4].innerHTML = selectedGame.children[5].innerHTML;
    featuredGame.children[5].innerHTML = selectedGame.children[6].innerHTML;

}