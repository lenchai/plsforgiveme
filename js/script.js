 // Create hearts effect
 function createHearts() {
    const heartsContainer = document.querySelector('.hearts');
    const activeStep = document.querySelector('.step.active');
    const heart = document.createElement('div');
    heart.classList.add('heart');

    if (activeStep && activeStep.id === "step3") {
        heart.innerHTML = '❤️';
        heart.style.color = "#ff4d6d";
    } else {
        heart.innerHTML = '🙏';
        heart.style.color = "#8e44ad";
    }
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHearts, 300);


// Move "No" button function
function moveButton(button) {
    const container = document.querySelector('.container');
    
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    
    const maxX = containerWidth - button.offsetWidth;
    const maxY = containerHeight - button.offsetHeight;
    
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}



// Navigation functions
function goToStep2() {
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.add('active');
    document.body.style.background = "linear-gradient(45deg, #fbc2eb, #a6c1ee";
    triggerConfetti();
}

function goToStep3() {
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step3').classList.add('active');
    document.body.style.background = "linear-gradient(45deg, #ffecf2, #ffe0e9)";
    triggerConfetti();
}

function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}