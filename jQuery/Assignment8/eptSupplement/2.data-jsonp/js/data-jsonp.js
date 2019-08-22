//3. function that process the JSON data from the server sends. eg. (data)

function showEvents(data) {                           
  var newContent = '';
  //create html code from JSON data                  
  for (var i = 0; i < data.events.length; i++) {
    newContent += `<div class="event"><img src="${data.events[i].map}" alt="${data.events[i].location}" />`;
    newContent += `<p><b>${data.events[i].location}</b><br>`;
    newContent += `${data.events[i].date}</p></div>`;
  }


  //updating page
document.getElementById('content').innerHTML = newContent;
}