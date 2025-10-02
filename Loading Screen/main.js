const text = document.getElementById("text-element");

const textArray = [
            "Sharing your code with the world!",
            "Creating another repository!",
            "Pushing a new commit!",
            "Generating a fresh experience for you!"
        ];
        let currentIndex = 0;

        function changeText() {
            text-element.textContent = textArray[currentIndex];
            currentIndex = (currentIndex + 1) % textArray.length;
        }

        changeText(); 

        setInterval(changeText, 3000); 
