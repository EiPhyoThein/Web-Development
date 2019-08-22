var xhr = new XMLHttpRequest();

xhr.open('GET', 'data/data.json', true);        // Prepare the request
xhr.send(null);                                 // Send the request                 // Create XMLHttpRequest object

xhr.onload = function() {
  responseObject = JSON.parse(xhr.responseText);
  var newContent = '';
  for (var i = 0; i < responseObject.events.length; i++) { 
    newContent += `<div class="event"><img src="${responseObject.events[i].map}" alt="${responseObject.events[i].location}" />`;
    newContent += `<p><b>${responseObject.events[i].location}</b><br>`;
    newContent += `${responseObject.events[i].date}</p></div>`;
    }
  document.getElementById('content').innerHTML = newContent;
};



