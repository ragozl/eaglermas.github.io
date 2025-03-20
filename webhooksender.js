function sendwebhook(jsmsgusername, jsmessagecontent) {
	  let jsweburl = document.getElementById("jsurl1").value;
  
	  const request = new XMLHttpRequest();
      request.open("POST", jsweburl);

      request.setRequestHeader('Content-type', 'application/json');

      const params = {
		username: jsmsgusername,
		content: jsmessagecontent
      }

      request.send(JSON.stringify(params));
    }
