const casa = document.getElementsByClassName('casa');
const vencedor= document.getElementsByClassName('winner')[0];
const scoreBoard = document.getElementsByTagName('h2')
let count = 1;
let vencedorNome = ''
let score1 = 0;
let score2 = 0;
let indexPlayer = 1;
let starterTurn = 1;
let playsCount = 0

scoreBoard[0].innerHTML = score1
scoreBoard[1].innerHTML = score2

function getWinner(q1, q2, q3, i) {
    if(q1.innerHTML !== "" && q1.innerHTML === q2.innerHTML && q2.innerHTML === q3.innerHTML){
        vencedor.innerHTML = vencedorNome
        scoreBoard[i].innerHTML++
        for(let i =0; i < casa.length; i++){
            casa[i].innerHTML = '';
        }
        starterTurn++
        count = starterTurn
        playsCount = 0
    }
        if(playsCount === 9){
            vencedor.innerHTML= 'Empate'
            for(let i =0; i < casa.length; i++){
                casa[i].innerHTML = '';
            }
            starterTurn++
            count = starterTurn
            playsCount = 0
    }
}


for (let i = 0; i < casa.length; i += 1) {
    casa[i].addEventListener('click', (event)=>{
        if(count % 2 !== 0){
            if(event.target.innerHTML === "") {
            event.target.innerHTML = "X"
            vencedorNome = 'Vencedor: jogador 1'
            count ++
            playsCount++
            indexPlayer = 0
        }
        } else {
            if(event.target.innerHTML === ""){
            event.target.innerHTML = "O"
            vencedorNome = 'Vencedor: jogador 2'
            count ++
            playsCount++
            indexPlayer = 1
            }
        }
        getWinner(casa[0], casa[1], casa[2], indexPlayer)
        getWinner(casa[3], casa[4], casa[5], indexPlayer)
        getWinner(casa[6], casa[7], casa[8], indexPlayer)
        getWinner(casa[0], casa[3], casa[6], indexPlayer)
        getWinner(casa[1], casa[4], casa[7], indexPlayer)
        getWinner(casa[2], casa[5], casa[8], indexPlayer)
        getWinner(casa[0], casa[4], casa[8], indexPlayer)
        getWinner(casa[2], casa[4], casa[6], indexPlayer)
        console.log(playsCount)
    });
  }