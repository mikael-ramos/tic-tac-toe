var Player1Win = false
var Player2Win = false
var startGame = false
var TileGame = document.querySelectorAll(".tile-game")
var P1 = "X"
var P2 = "O"
var TurnP1 = true
var TurnP2= false
var BtnStart = document.querySelector(".start")
var BtnReset = document.querySelector(".reset")
var PlayerTurn = document.querySelector(".text")

BtnStart.addEventListener("click",function(){
    startGame = true
    if(startGame == true ){
        gameStarter()
    }
      
    
})

BtnReset.addEventListener("click",function(){
    TileGame.forEach(limpa =>{
        limpa.textContent = ""
    })
    Player2Win = false
    Player1Win = false
    gameStarter()
})

function gameStarter(){
    TileGame.textContent = ""
    TileGame.forEach(tile => { 
        VerifyPlayer()
        tile.addEventListener("click",(ev)=>{
            
            var tileClick = ev.currentTarget
            if(Player1Win == false && Player2Win == false){
                if(tileClick.textContent =="" && TurnP1 == true){
                    PlayerTurn.textContent = "Player O Turn"
                    tileClick.textContent = P1
                    TurnP1 = false
                    TurnP2 = true
                    
                }
                else if(tileClick.textContent == "" && TurnP2 == true){
                    tileClick.textContent = P2
                    TurnP2 = false
                    TurnP1 = true
                    PlayerTurn.textContent = "Player X Turn"   
                }
            }
            //Deixar essa win condition mais clean
            if(TileGame[0].textContent === P2 && TileGame[1].textContent === P2 && TileGame[2].textContent === P2){
                
                Player2Win = true
                VerifyWin()
            }
            else if(TileGame[3].textContent === P2 && TileGame[4].textContent === P2 && TileGame[5].textContent === P2){
                
                Player2Win = true
                VerifyWin()
            }
            else if(TileGame[6].textContent === P2 && TileGame[7].textContent === P2 && TileGame[8].textContent === P2){
                
                Player2Win = true
                VerifyWin()
            }
            else if(TileGame[0].textContent === P2 && TileGame[3].textContent === P2 && TileGame[6].textContent === P2){
                
                Player2Win = true
                VerifyWin()
            }
            else if(TileGame[1].textContent === P2 && TileGame[4].textContent === P2 && TileGame[7].textContent === P2){
                
                Player2Win = true
                VerifyWin()
            }
            else if(TileGame[2].textContent === P2 && TileGame[5].textContent === P2 && TileGame[8].textContent === P2){
                
                Player2Win = true
                VerifyWin()
            }
            else if(TileGame[0].textContent === P2 && TileGame[4].textContent === P2 && TileGame[8].textContent === P2){
                
                Player2Win = true
                VerifyWin()
            }
            else if(TileGame[2].textContent === P2 && TileGame[4].textContent === P2 && TileGame[6].textContent === P2){
                
                Player2Win = true
                VerifyWin()
            }
    
            if(TileGame[0].textContent === P1 && TileGame[1].textContent === P1 && TileGame[2].textContent === P1){
                
                Player1Win = true
                VerifyWin()
            }
            else if(TileGame[3].textContent === P1 && TileGame[4].textContent === P1 && TileGame[5].textContent === P1){
                
                Player1Win = true
                VerifyWin()
            }
            else if(TileGame[6].textContent === P1 && TileGame[7].textContent === P1 && TileGame[8].textContent === P1){
                
                Player1Win = true
                VerifyWin()
            }
            else if(TileGame[0].textContent === P1 && TileGame[3].textContent === P1 && TileGame[6].textContent === P1){
                
                Player1Win = true
                VerifyWin()
            }
            else if(TileGame[1].textContent === P1 && TileGame[4].textContent === P1 && TileGame[7].textContent === P1){
                
                Player1Win = true
                VerifyWin()
            }
            else if(TileGame[2].textContent === P1 && TileGame[5].textContent === P1 && TileGame[8].textContent === P1){
                
                Player1Win = true
                VerifyWin()
            }
            else if(TileGame[0].textContent === P1 && TileGame[4].textContent === P1 && TileGame[8].textContent === P1){
                
                Player1Win = true
                VerifyWin()
            }
            else if(TileGame[2].textContent === P1 && TileGame[4].textContent === P1 && TileGame[6].textContent === P1){
                
                Player1Win = true
                VerifyWin()
            }    
        })
    })


}

function VerifyWin(){
    if(Player1Win == true){
        PlayerTurn.textContent = "Player X Wins"
    }
    if(Player2Win == true){
        PlayerTurn.textContent = "Player O Wins"
    }
}

function VerifyPlayer(){
    if(TurnP1 == true){
        PlayerTurn.textContent = "Will start by X"
    }
    else if(TurnP2 == true){
        PlayerTurn.textContent = "Will start by O"
    }
}






