window.onload = function(){
    var img = document.getElementById("Fahira");
    var count = document.getElementById("score");
    var score = 0;
    var Closesound = new Audio("sound-close.mp3");
    var Opensound = new Audio("sound-open.mp3");

    function increaseScore(){
        score++;
        count.innerHTML = score;
    }

    img.addEventListener('mousedown', function(){
        increaseScore()
        img.src = 'Fahira1.png';
        img.classList.add('pop');
        Opensound.play();
    })
    img.addEventListener('mouseup', function(){
        img.src = 'Fahira.jpg';
        img.classList.remove('pop');
        Closesound.play();
    })
    img.addEventListener('touchstart', function(){
        increaseScore();
        img.src = 'Fahira1.png';
        img.classList.add('pop');
        Opensound.play();
    });
    img.addEventListener('touchend', function(){
        img.src = 'Fahira.jpg';
        img.classList.remove('pop');
        Closesound.play();  
    });
}