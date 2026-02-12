    const dropZone = document.getElementById('dropZone');
    const loader = document.getElementById('loader');
    const results = document.getElementById('results');

    dropZone.addEventListener('click', () => {
        simulateAnalysis();
    });

    function simulateAnalysis() {
        // Change UI to loading
        dropZone.querySelector('.upload-icon').style.display = 'none';
        dropZone.querySelector('h2').innerText = 'Processing Video...';
        dropZone.querySelector('p').style.display = 'none';
        loader.style.display = 'block';

        // Fake processing time
        setTimeout(() => {
            dropZone.style.display = 'none';
            results.style.display = 'block';
            
            // Randomly decide if it's AI or Real for simulation
            const isAI = Math.random() > 0.5;
            
            if (isAI) {
                document.getElementById('resultStatus').innerText = "AI Generated (94% Certainty)";
                document.getElementById('resultStatus').className = "status-badge badge-ai";
                animateBars([12, 5, 20, 8]);
            } else {
                document.getElementById('resultStatus').innerText = "Authentic (100% Certainty)";
                document.getElementById('resultStatus').className = "status-badge badge-real";
                document.getElementById('val1').innerText = "High (98%)";
                document.getElementById('val2').innerText = "Signed (C2PA)";
                document.getElementById('val3').innerText = "Natural";
                document.getElementById('val4').innerText = "Verified";
                animateBars([98, 100, 95, 99]);
            }
        }, 3000);
    }

    function animateBars(values) {
        setTimeout(() => {
            document.getElementById('bar1').style.width = values[0] + '%';
            document.getElementById('bar2').style.width = values[1] + '%';
            document.getElementById('bar3').style.width = values[2] + '%';
            document.getElementById('bar4').style.width = values[3] + '%';
        }, 100);
    }

    // Drag and drop prevent defaults
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
        }, false);
    });

