'use strict';

let rand=Math.floor((Math.random()*20)+1);
let message=document.querySelector('.message');
let score = document.querySelector('.score');
let highScore=document.querySelector('.highscore');
let randNum=document.querySelector('.number');
let game=20;
let body=document.querySelector('body');
console.log(rand,message,score,highScore,randNum);
const won=function(){
    body.style.backgroundColor = '#60b347';
    randNum.textContent=rand;
};
document.querySelector('.check').addEventListener('click',function(){
    const val=Number(document.querySelector('.guess').value);
    if(game>1){
        if(!val){
            message.textContent='Atleast Guess Something!! You Fool!';
            game--;
            score.textContent=String(game);
        }
        else if(val==rand){
            message.textContent='You Won!! You lucky bastard!!!';
            score.textContent=String(game);
            if(Number(highScore.textContent)<game){
                highScore.textContent=String(game);
                message.textContent='Lesss Go!! You set the new record';
            }
            won();
        }
        else if(val>rand){
            message.textContent='Go a little lower you Donkey !!';
            game--;
            score.textContent=String(game);
        }
        else if(val<rand){
            message.textContent='Its low, just like your IQ!!';
            game--;
            score.textContent=game;
            
        };
    }
    else{
        message.textContent='Lmao!! You suck bro';
    }

});
document.querySelector('.again').addEventListener('click',function(){
    body.style.backgroundColor = '#222';
    rand=Math.floor((Math.random()*20)+1);
    message.textContent='Start guessing...';
    score.textContent='20';
    randNum.textContent='?';
    game=20;
});