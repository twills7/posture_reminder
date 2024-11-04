document.getElementById("alertButton").addEventListener("click", () => {

    const images = [
        "./bad_postures/posture_meme1.jpeg",
        "./bad_postures/posture_meme2.jpeg",
        "./bad_postures/posture_meme3.jpg",
        "./bad_postures/posture_meme4.jpeg",
        "./bad_postures/posture_meme5.jpeg",
        "./bad_postures/posture_meme6.jpeg"
    ];
    const img = document.createElement("img");
    const randomNumber = Math.floor(Math.random() * images.length);
    img.src = images[randomNumber];

    img.alt = "Posture Reminder";
    document.body.appendChild(img);
    img.style.position = "fixed";
    img.style.top = "50%";
    img.style.left = "50%";
    img.style.transform = "translate(-50%, -50%)";
    img.style.zIndex = "1000";

    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.zIndex = "1001";
    modal.style.backgroundColor = "white";
    modal.style.padding = "20px";
    modal.style.border = "1px solid black";
    modal.appendChild(img);

    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", () => {
        document.body.removeChild(modal);
    });
    modal.appendChild(closeButton);

    document.body.appendChild(modal);

    setTimeout(() => {
        document.body.removeChild(modal);
    }, 5000); // Remove modal after 5 seconds
});