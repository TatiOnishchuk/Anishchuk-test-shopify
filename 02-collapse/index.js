let content = document.querySelector(".collapsible__content");
let closeContent = document.querySelector('.collapsible__action--visible');
let showContent = document.querySelector('.collapsible__action--hidden');

content.style = 'overflow: hidden; height: 200px; max-width: 1000px';
closeContent.style.display = 'none';

const animContent = content.animate(
    { height: ["0px", "200px"] },
    { duration: 250, fill: "both", easing: "ease-out" }
);

animContent.pause();

document.querySelector("button").addEventListener("click", () => {
    if (animContent.playState === "paused") {
    animContent.play();
    } 
    else {
    animContent.reverse();
    }
    if (closeContent.style.display === 'none'){
        showContent.style.display = 'none';
        closeContent.style.display = 'block';
    }
    else{
        showContent.style.display = 'block';
        closeContent.style.display = 'none';
    }
});