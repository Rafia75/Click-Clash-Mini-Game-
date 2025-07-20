let score1=0;
let score2=0;

function incrementPlayer1(){
    score1++;
    document.getElementById("p1").innerText=score1;

}
function incrementPlayer2(){
    score2++;
    document.getElementById("p2").innerText=score2;

}
function reset(){
    score1=0;
    score2=0;
    document.getElementById("p1").innerText=score1;
    document.getElementById("p2").innerText=score2;
    document.getElementById("result").innerText="";

}
function showResult(){
    if(score1>score2){
        document.getElementById("result").innerText="Congratulations🎉....Player1 won the match with "+score1+" points..";
    }
    else if(score1<score2){
        document.getElementById("result").innerText="Congratulations🎉....Player2 won the match with "+score2+" points..";
    }
    else if(score1===score2)
        document.getElementById("result").innerText="It's a Tie!!!!";
}

