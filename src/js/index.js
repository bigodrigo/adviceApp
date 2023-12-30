async function fetchAdvice() {
    const url = 'https://api.adviceslip.com/advice'
    const response = await fetch(url)
    const slip = await response.json()
    const advice = slip.slip
    console.log(advice)
    let updateTitle = document.getElementById('title');
    updateTitle.innerHTML = `Advice #${advice.id}`;
    document.getElementById('description').addEventListener('click', () => {
        tirarUmaCartaAleatoriaDoBaralho(baralho.deck_id)
    })
    let updateAdvice = document.getElementById('description');
    updateAdvice.innerHTML = advice.advice;
}

fetchAdvice();

document.getElementById('btn').addEventListener('click', () => {
    fetchAdvice();
})