const casa = document.getElementsByClassName('casa');
const simbolo = document.getElementsByTagName('h1');
let count = 1;
let vencedor = ''

function getWinner(q1, q2, q3) {
    if(q1.innerHTML !== "" && q1.innerHTML === q2.innerHTML && q2.innerHTML === q3.innerHTML){
        console.log(vencedor)
    }
}


for (let i = 0; i < casa.length; i += 1) {
    casa[i].addEventListener('click', (event)=>{
        if(count % 2 !== 0){
            if(event.target.innerHTML === "") {
            event.target.innerHTML = "X"
            vencedor = 'jogador 1'
            count ++
        }
        } else {
            if(event.target.innerHTML === ""){
            event.target.innerHTML = "O"
            vencedor = 'jogador 2'
            count ++
            }
        }
        getWinner(casa[0], casa[1], casa[2])
        getWinner(casa[3], casa[4], casa[5])
        getWinner(casa[6], casa[7], casa[8])
        getWinner(casa[0], casa[3], casa[6])
        getWinner(casa[1], casa[4], casa[7])
        getWinner(casa[2], casa[5], casa[8])
        getWinner(casa[0], casa[4], casa[8])
        getWinner(casa[2], casa[4], casa[6])
    });
  }