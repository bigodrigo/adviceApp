async function fetchAdvice() {
    const url = 'https://api.adviceslip.com/advice'
    const response = await fetch(url)
    const slip = await response.json()
    const advice = slip.slip
    console.log(advice)
    let updateTitle = document.getElementById('title');
    updateTitle.innerHTML = `Advice #${advice.id}`;
    updateTitle.classList.remove("skeleton-title");
    let updateAdvice = document.getElementById('description');
    updateAdvice.innerHTML = advice.advice;
    updateAdvice.classList.remove("skeleton-advice");
}

async function waitingAdvice() {
    let updateTitle = document.getElementById('title');
    updateTitle.innerHTML = '';
    updateTitle.classList.add("skeleton-title");
    let updateAdvice = document.getElementById('description');
    updateAdvice.innerHTML = '';
    updateAdvice.classList.add("skeleton-advice");
}

fetchAdvice();

document.getElementById('btn').addEventListener('click', () => {
    waitingAdvice();
    fetchAdvice();
})