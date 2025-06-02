(function() {
  const style = document.createElement('style');
  style.textContent = `

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
      animation: load-fadeInOut 4s ease-in-out forwards;
      z-index: 999999;
    }

    .loader { 
      --uib-size: 80px;
      --uib-color: #00ff9d;
      --uib-speed: 1.4s;
      --uib-stroke: 5px;
      --uib-bg-opacity: .1;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: var(--uib-stroke);
      width: var(--uib-size);
      border-radius: calc(var(--uib-stroke) / 2);
      overflow: hidden;
      transform: translate3d(0, 0, 0);
    }

    .loader::before { 
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: var(--uib-color);
      opacity: var(--uib-bg-opacity);
      transition: background-color 0.3s ease;
    }

    .loader::after {
      content: '';
      height: 100%;
      width: 100%;
      border-radius: calc(var(--uib-stroke) / 2);
      animation: zoom var(--uib-speed) ease-in-out infinite;
      transform: translateX(-100%);
      background-color: var(--uib-color);
      transition: background-color 0.3s ease;
      position: absolute;
      top: 0;
      left: 0;
    }

    @keyframes zoom {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
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

  const loader = document.createElement('div');
  loader.className = 'loader';

  container.appendChild(loader);
  document.body.appendChild(container);

  setTimeout(() => {
    container.remove();
    style.remove();
  }, 4000);
})();
