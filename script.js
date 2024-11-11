import fortunes from './fortunes.js';

const cookieContainer = document.querySelector('.cookie-container');
const fortunePaper = document.querySelector('.fortune-paper');
const cookieWhole = document.querySelector('.cookie-whole');
const cookieBroken = document.querySelector('.cookie-broken');
const fortuneText = document.getElementById('fortune-text');
const resetButton = document.querySelector('.reset-button');
let isClicked = false;

window.Telegram.WebApp.expand();

function resetCookie() {
    isClicked = false;
    cookieWhole.style.display = 'block';
    cookieBroken.style.display = 'none';
    fortunePaper.classList.remove('show');
    resetButton.classList.remove('show');
}

function showFortune() {
    if (!isClicked) {
        isClicked = true;
        
        cookieWhole.style.display = 'none';
        cookieBroken.style.display = 'block';
        
        const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        fortuneText.textContent = randomFortune;
        
        setTimeout(() => {
            fortunePaper.classList.add('show');
            setTimeout(() => {
                resetButton.classList.add('show');
            }, 500);
        }, 500);
    }
}

cookieContainer.addEventListener('click', showFortune);
resetButton.addEventListener('click', resetCookie);
