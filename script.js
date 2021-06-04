window.onload=function(){
    fetch("https://dmlotz9.github.io/Data/moods.json").then(function(response){
       response.json().then(function(json){
       document.getElementById("moodStatus").innerHTML= `      <h2>Current Status</h2>
          <p>Current Mood: ${json[0].Mood}</p>
          <img src="${json[0].Image}"></img>
          <p>Action Plan: ${json[0].Description}</p>`;
       }); 
    });
 };