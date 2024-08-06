
document.addEventListener("DOMContentLoaded", function() {
    const greetings = [
        "Hello",
        "नमस्कार",
        "Konnichiwa",
        "Hallo"
        
    ];

    const greetingElement = document.getElementById("greeting");
    const greetingsContainer = document.getElementById("greetings-container");
    let currentIndex = 0;

    function showNextGreeting() {
        greetingElement.textContent = greetings[currentIndex];
        currentIndex++;
        if (currentIndex < greetings.length) {
            setTimeout(showNextGreeting, 700);
        } else {
            setTimeout(hideGreetingsContainer, 700);
        }
    }

    function hideGreetingsContainer() {
        greetingsContainer.classList.add("hidden");
        
        setTimeout(() => {
            greetingsContainer.style.display = 'none';
        }, 700);
    }

    showNextGreeting();
});
