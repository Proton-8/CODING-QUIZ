//Queryselectors for DOM manipulation
const LeaderboardEl = document.querySelector('#scoreBoard');
//const playAgainBtn = document.querySelector('#againBtn');
const clearBtn = document.querySelector('#resetBtn');


//Creating an event on click to clear out the scoreData from local storage 
//at user request
resetBtn.addEventListener('click', function(){
    let clearPrompt = confirm('Are you sure you want to clear your scores?');
    if(clearPrompt === true){
        localStorage.removeItem('scoreData');
        alert('Data cleared')
        location.reload
    }else {
        alert('Data not cleared');
        return;
    }
});

//Getting our scores and intials out of local storage
alert('test 567')
let scoreData = localStorage.getItem("scoreData");
alert('test 890')
scoreData = JSON.parse(scoreData);

//If there is scoreData then we will create an li, run through the loop, and render all
//availble data
if(scoreData !== null) {
    for(i = 0; i < scoreData.length; i++) {
        
            
            console.log("i = " +i)
        //var createLiEl = document.createElement('li');
createLiEl.value = score;
        createLiEl = ('init', 'score')
       // console.log (createLiEl);
        //createLiEl.textContent = `${init}: ${score}`
        
        //createLiEl.textContent = `${scoreData[i].initials}: ${scoreData[i].score}`

        LeaderboardEl.appendChild(createLiEl);
        //console.log(`${scoreData[i].initials}`);
    }
};
