let info = document.querySelector(".info")
let player1 = true
let player2 = false
let score1 = 0
let score2 = 0
let scoreplayer1 = document.querySelector(".score1")
let scoreplayer2 = document.querySelector(".score2")

let player1_choise = null
let player2_choise = null

let choiceplayer1 = document.querySelector(".choice-player-1")
let choiceplayer2 = document.querySelector(".choice-player-2")

document.addEventListener('keydown', function(e){
    if(player1 == true && player2 == false){
        if (e.code == "KeyA"){
            console.log("Камень")
            player1 = false
            player2 = true

            player1_choise = "Камень"
            info.innerHTML = "Игрок 2 ходит!"
        }
        else if (e.code == "KeyS"){
            console.log("Ножницы")
            player1 = false
            player2 = true

            player1_choise = "Ножницы"
            info.innerHTML = "Игрок 2 ходит!"
        }
        else if (e.code == "KeyD"){
            console.log("бумага")
            player1 = false
            player2 = true

            player1_choise = "Бумага"
            info.innerHTML = "Игрок 2 ходит!"
        }
    }
    if(player1 == false && player2 == true){
        if (e.code == "KeyJ"){
            console.log("Камень")
            player2 = false

            player2_choise = "Камень"
            setTimeout(show,500)
            setTimeout(finish,1500)
        }
        else if (e.code == "KeyK"){
            console.log("Ножницы")
            player2 = false

            player2_choise = "Ножницы"
            setTimeout(show,500)
            setTimeout(finish,1500)
        }
        else if (e.code == "KeyL"){
            console.log("бумага")
            player2 = false

            player2_choise = "Бумага"
            setTimeout(show,500)
            setTimeout(finish,1500)
        }
    }
})
let show = function(){
    if(player1_choise == "Камень"){
        choiceplayer1.style.backgroundColor = "grey"
        choiceplayer1.style.backgroundImage = "url(3456.png)"
        choiceplayer1.style.backgroundSize = "100% 100%"
    }
    else if(player1_choise == "Ножницы"){
        choiceplayer1.style.backgroundColor = "orange"
        choiceplayer1.style.backgroundImage = "url(5641.750x0.png)"
        choiceplayer1.style.backgroundSize = "100%"
    }
    else if(player1_choise == "Бумага"){
        choiceplayer1.style.backgroundColor = "white"
        choiceplayer1.style.backgroundImage = "url(6672966490.png)"
        choiceplayer1.style.backgroundSize = "100%"
    }

    if(player2_choise == "Камень"){
        choiceplayer2.style.backgroundColor = "grey"
        choiceplayer2.style.backgroundImage = "url(3456.png)"
        choiceplayer2.style.backgroundSize = "100% 100%"
    }
    else if(player2_choise == "Ножницы"){
        choiceplayer2.style.backgroundColor = "orange"
        choiceplayer2.style.backgroundImage = "url(5641.750x0.png)"
        choiceplayer2.style.backgroundSize = "100%"
    }
    else if(player2_choise == "Бумага"){
        choiceplayer2.style.backgroundColor = "white"
        choiceplayer2.style.backgroundImage = "url(6672966490.png)"
        choiceplayer2.style.backgroundSize = "100%"
    }

}
let finish = function(){
    if(player1_choise == player2_choise){
        alert("Ничья")
        score1 = score1 + 1
        scoreplayer1.innerHTML = score1
        score2 = score2 + 1
        scoreplayer2.innerHTML = score2
    }

    else if(player1_choise == "Камень" && player2_choise == "Ножницы"){
        alert("1 Игрок победил")
        score1 = score1 + 1
        scoreplayer1.innerHTML = score1
    }
    else if(player1_choise == "Ножницы" && player2_choise == "Бумага"){
        alert("1 Игрок победил")
        score1 = score1 + 1
        scoreplayer1.innerHTML = score1
    }
    else if(player1_choise == "Бумага" && player2_choise == "Камень"){
        alert("1 Игрок победил")
        score1 = score1 + 1
        scoreplayer1.innerHTML = score1
    }
    else{
        alert("2 Игрок победил")
        score2 = score2 + 1
        scoreplayer2.innerHTML = score2
    }
    player1 = true 
    player2 = false
    choiceplayer1.style.background = "black"
    choiceplayer2.style.background = "black"
    info.innerHTML = "Игрок 1 ходит!"
}