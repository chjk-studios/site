console.log('[DEBUG] loaded animation.js!')
function showTextAnimation(text = ' ') {
    const style = document.createElement('style');
    style.textContent = `
        .animation-background-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #0d1b2a;
            color: #fff;
            font-family: Arial, sans-serif;
            animation: load-fadeInOut 1.5s ease-in-out forwards;
            z-index: 999999;
        }

        .animation-text {
            font-size: 32px;
            font-weight: bold;
            color: #00ff9d;
            animation: load-scaleUp 1.5s ease-in-out forwards;
        }

        @keyframes load-scaleUp {
            0% { transform: scale(0.8); opacity: 0; }
            20% { transform: scale(1); opacity: 1; }
            80% { transform: scale(1.1); opacity: 1; }
            100% { transform: scale(1.2); opacity: 0; }
        }

        @keyframes load-fadeInOut {
            0% { opacity: 0; }
            20% { opacity: 1; }
            80% { opacity: 1; }
            100% { opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    const container = document.createElement('div');
    container.className = 'animation-background-container';

    const textElement = document.createElement('div');
    textElement.className = 'animation-text';
    textElement.textContent = text;

    container.appendChild(textElement);
    document.body.appendChild(container);

    setTimeout(() => {
            container.remove();
            style.remove();
        }, 1500);
    }
