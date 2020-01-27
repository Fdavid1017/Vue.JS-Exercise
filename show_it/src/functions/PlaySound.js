module.exports = {
    PlaySound: (text) => {
        this.sound = document.createElement("audio");
        this.sound.src = 'http://api.voicerss.org/?key=92d70e85adcb474d9d7925ef452a5976&hl=en-us&src=' + text;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
        this.sound.play();
    }
};