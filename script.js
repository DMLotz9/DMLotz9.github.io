window.onload=function(){
    fetch("https://dmlotz9.github.io/Data/moods.json").then(function(response){
       response.json().then(function(json){
       document.getElementById("moodStatus").innerHTML= `      <h2>Current Status</h2>
       <ul>
          <li>Current Mood: ${json[0].Mood}</li>
         </ul>
       <img src="${json[0].Image}"></img>
       <ul>
       <li>Action Plan: ${json[0].Description}</li>
       </ul>`;
       }); 
    });
 };