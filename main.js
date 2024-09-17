let width = 0;
        function animateProgress() {
            const progressElement = document.getElementById('progress');
            
            setInterval(() => {
                width += 1;
                if (width > 100) {
                    width = 0; // Reset the progress bar once it completes
                }
                progressElement.style.width = width + '%';
            }, 100); // Adjust speed here (100ms for a smooth animation)
        }

        animateProgress();