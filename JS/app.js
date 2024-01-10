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


//Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            //entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Email
const form = document.querySelector('form');
const firstName = document.getElementById('firstNameInput');
const lastName = document.getElementById('lastNameInput');
const email = document.getElementById('emailInput');
const subject = document.getElementById('subjectInput');
const message = document.getElementById('messageInput');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValidEmail = true;
    if(firstName.value === '') {
        isValidEmail = false;
        alert('Please fill in your first name');
    }
    if(lastName.value === '') {
        isValidEmail = false;
        alert('Please fill in your last name');
    }
    if(!email.value.includes('@') || email.value.length < 6){
        isValidEmail = false;
        alert('Please enter a valid email address');
    }
    if(subject.value === '') {
        isValidEmail = false;
        alert('Please fill in the subject');
    }
    if(message.value === '') {
        isValidEmail = false;
        alert('Please fill in your message');
    }

    if(isValidEmail){
        sendEmail();
    }
});

function sendEmail(){
    const bodymessage = 'Full Name: ' + firstName.value + ' ' + lastName.value + '\n Email: ' + email.value + '\n Message: ' + message.value;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "olivier.grenier5@gmail.com",
        Password : "AAFD46BE42C18C016E59B9F0C7F7DFDF3F69",
        To : 'olivier.grenier5@gmail.com',
        From : "olivier.grenier5@gmail.com",
        Subject : subject.value,
        Body : bodymessage.toString()
    }).then(
      message => alert(message)
    );
}