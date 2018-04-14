let bird;
let gravity = 0.5;
let pipes = [];
let score = 0,highscore = 0;
let gameOver = false;
let c;
function setup()
{
    createCanvas(windowWidth,windowHeight);
    bird = new Bird();
    let pipe = new Pipe();
    pipes.push(pipe);
}

function keyPressed()
{
    if(key === ' ')
     bird.jump();
}

function draw()
{
    background(0);
    bird.update();
    bird.show();

    if(!gameOver) {
        score ++;
    }

    if(frameCount% 120 === 0)
    {
        let pipe = new Pipe();
        pipes.push(pipe);
    }

    for(let i =pipes.length-1; i >= 0; i--) {
        pipes[i].update();
        pipes[i].show();
        if(pipes[i].offscreen())
            pipes.splice(i,1);
        if(pipes[i].hit(bird)===true)
        {
            gameOver = true;
            noLoop();
            textAlign(CENTER,CENTER);
            textFont('Helvetica');
            textSize(128);
            fill(255,0,0);
            text("GAME OVER!", width/2,height/2);
            setTimeout(reset,1000);
        }
    }

    textAlign(CENTER,CENTER);
    fill(255);
    textSize(32);
    textFont('Helvetica');
    textStyle(NORMAL);
    let temp = "High Score: "+highscore;
    text("Score: "+score+ "\nHigh Score: "+highscore, width-textWidth(temp)/1.5,height*0.9);

    if(frameCount <= 100)
    {
        textAlign(CENTER,CENTER);
        noStroke();
        textSize(64);
        textFont('Helvetica');
        textStyle(BOLD);
        fill(0,0,255);
        text("Tap spacebar to jump", width/2,height/2);
    }
}

function reset()
{
    gameOver = false;
    bird.y = height/2;
    pipes = [];
    if(score>highscore)
    {
        highscore = score;
    }
    score = 0;
    loop();
}