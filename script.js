const dice = document.getElementById('dice');
const advice = document.querySelector('.advice');
const id = document.querySelector('.adviceId')

window.onload = showAdvice;

dice.addEventListener('click', ()=>{
    showAdvice()
})

function showAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then((data) => data.slip)
        .then((data) => {
           id.innerHTML = data.id;
            advice.innerHTML = ""+data.advice+"";
        })
        .catch((error) => {
            console.log(error);
        });
}