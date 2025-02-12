var RootElem = document.querySelector(":root")
var GameElem = document.querySelector("#game")
var DinoElem = GameElem.querySelector(".dino")
var ScorElem = GameElem.querySelector(".score");
var GroundElem = GameElem.querySelector(".ground")
var CactusElem = GroundElem.querySelector(".cactus")

var GameSpeed = 5000;
var JumpSpeed = (GameSpeed /10) * 2;
var MaxJump = 250;
var SpeedScale = 1;

var Score = 0;
var GameStarted = false;
var GameOver = false;

var Jumping = false
var SelfPlayMode = false

// RootElem, "--game-speed", GameSpeed
function setCustomProperty(elem, prop,value){
    elem.style.setProperty(prop,value)
}

function handleJump(e) {
    if(e.code !== "Space") return;
    var audio = document.querySelector(".audio-jump")
    audio.play()
    DinoElem.classList.add("jump");
    Jumping = true
    DinoElem.addEventListener("animationend", function () {
        Jumping = false
        DinoElem.classList.remove("jump")
    })
}

function shouldJump(){
    var minGap = 250;
    var cactusXPos = CactusElem.getBoundingClientRect().x

    if (cactusXPos <= 0|| Jumping) return false


    if (cactusXPos < minGap) {
        return true
    }

    return false
}

var GameID;

function startGame(){
    GameStarted = true;
    GameElem.classList.add("game-started")
    document.addEventListener("keydown", handleJump)
   window.requestAnimationFrame(updateGame)
}

function endGame(){
    var audio = document.querySelector(".audio-die ")
    audio.play()
    GameOver = true;
    GameElem.classList.add("game-over")
}

// As long as the game is running, this function is called
function updateGame(){
    setCustomProperty(RootElem, "--game-speed",GameSpeed)
    setCustomProperty(RootElem, "--jump-speed",JumpSpeed)
    setCustomProperty(RootElem, "--max-jump",MaxJump)
    setCustomProperty(RootElem, "--speed-scale",SpeedScale)


    if (SelfPlayMode){
        if(shouldJump()){
            handleJump({ code: "Space"})
        };
    }
    // Update the scorehttp://127.0.0.1:5500http://127.0.0.1:5500http://127.0.0.1:5500
    updateScore();

    // Update the cactus
    updateCactus();

    // Check if game is over 
    if (checkGameOver()){
        endGame(); 
        return 
    }
    window.requestAnimationFrame(updateGame)
} 

function isCollision(dinoRect, cactusRect) {  
    // AABB - Axis-aligned bounding box  
    return (
            dinoRect.x < cactusRect.x + cactusRect.width &&
            dinoRect.x + dinoRect.width > cactusRect.x &&
            dinoRect.y < cactusRect.y + cactusRect.height &&
             dinoRect.y + dinoRect.height > cactusRect.y
     );
}

function checkGameOver(){
    if(GameOver) return true;
    var dinoRect = DinoElem.getBoundingClientRect()
    var cacturRect = CactusElem.getBoundingClientRect()
    if (isCollision(dinoRect, cacturRect)) {
        return true
    }
    return false
}

var scoreInterval = 10;
var currentScoreInterval = 0;
function updateScore(){
        currentScoreInterval += 1
        if (currentScoreInterval % scoreInterval !== 0){
            return
        } 
    
        Score += 1
    if (Score === 0) return
    if(Score % 100 === 0){
        var audio = document.querySelector(".audio-point")
        audio.play()
        GameSpeed -= SpeedScale
        JumpSpeed = (GameSpeed / 10) * 2
    }

    var currentScoreElem = ScorElem.querySelector(".current-score")
    currentScoreElem.innerText = Score.toString().padStart(5,"0")
}

function updateCactus(){
    var cactusXPos = CactusElem.getBoundingClientRect().x
    var isOffScreen = cactusXPos > window.innerWidth;
    if(isOffScreen === false) return

    var cacti = ["cactus-small-1" ,"cactus-small-2", "cactus-small-3"]
    var randomNum = Math.floor(Math.random() * cacti.length)
    var cactus = cacti[randomNum]
    CactusElem.classList.remove(
        "cactus-small-1" ,"cactus-small-2", "cactus-small-3"
    );
    CactusElem.classList.add(cactus)
}

function fitscreen(){
    var width = window.innerWidth
    var height = window.innerHeight / 2
    GameElem.style.width = width + "px"
    GameElem.style.height = height + "px"
    GameElem.style.zoom = 1.5
}

window.addEventListener("load", function(){
    fitscreen();
    window.addEventListener("resize", fitscreen)

    var selfPlayElem = document.querySelector("#selfplay")
    selfPlayElem.addEventListener("change", function(){
        SelfPlayMode = selfPlayElem.checked;
    })
    document.addEventListener("keydown", startGame, { once : true })
})
