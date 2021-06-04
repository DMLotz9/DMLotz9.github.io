window.onload=function(){
    fetch("https://github.com/DMLotz9/MoodTrackerv2/blob/29ae2146e6a081231cf1b9c6c15731441e7242e1/mood.json").then(function(response){
       response.json().then(function(json){
       document.getElementById("moodStatus").innerHTML= `      <h2>Current Status</h2>
       <ol>
          <li>Current Mood: ${json[0].Mood}</li>
          <li>Action Plan: ${json[0].Description}</li>
       </ol>
       <img src="${json[0].Image}"></img>`;
       }); 
    });
 };