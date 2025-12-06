(function() {
    const style = document.createElement('style');
    style.textContent = `
        @font-face {
            font-family: 'Inter';
            src: url('https://joplay.xyz/fonts/inter/Inter-VariableFont_opsz,wght.ttf') format('truetype');
            font-weight: 100 900;
            font-style: normal;
        }

        .loading-container {
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
            font-family: 'Inter', Arial, sans-serif;
            animation: load-fadeInOut 1.5s ease-in-out forwards;
            z-index: 999999;
        }

        .loading-text {
            font-size: 32px;
            font-weight: bold;
            color: #00ff9d;
            animation: load-scaleUp 1.5s ease-in-out forwards;
        }

        @keyframes load-scaleUp {
            0% {
                transform: scale(0.8);
                opacity: 1;
            }
            20% {
                transform: scale(1);
                opacity: 1;
            }
            80% {
                transform: scale(1.1);
                opacity: 1;
            }
            100% {
                transform: scale(1.2);
                opacity: 0;
            }
        }

        @keyframes load-fadeInOut {
            0% {
                opacity: 1;
            }
            80% {
                opacity: 1;
            }
            100% {
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    const container = document.createElement('div');
    container.className = 'loading-container';

    const text = document.createElement('div');
    text.className = 'loading-text';
    text.textContent = 'Created By Joplay.xyz';

    container.appendChild(text);
    document.body.appendChild(container);

    setTimeout(() => {
        container.remove();
        style.remove();
    }, 1500);
})();