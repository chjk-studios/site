function showIntro() {
    // Prevent double injection
    if (document.getElementById("intro-overlay")) return;

    const overlay = document.createElement("div");
    overlay.id = "intro-overlay";

    overlay.innerHTML = `
      <img src="/_assets/img/logo-spaced-transparent-background.png"><br>
      <l-zoomies size="100" stroke="5" bg-opacity="0.1" speed="1.4" color="var(--accent)" ></l-zoomies>
    `;

    document.body.classList.add("introplaying");
    document.body.appendChild(overlay);

    // --- Loader Hide Logic ---
    const MIN_TIME = 700; // 1.25s minimum
    const start = Date.now();

    function hideIntro() {
        const elapsed = Date.now() - start;
        const remaining = Math.max(0, MIN_TIME - elapsed);
        setTimeout(() => {
            overlay.classList.add("fade-out");
            document.body.classList.remove("introplaying");
            setTimeout(() => overlay.remove(), 2000); // match transition
        }, remaining);
    }

    if (document.readyState === "complete") {
        hideIntro();
    } else {
        window.addEventListener("load", hideIntro);
    }
}

showIntro();
