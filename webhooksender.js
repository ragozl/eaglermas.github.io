function sendwebhook(jsmsgusername, jsmessagecontent) {
	  let jsweburl = "https://media.guilded.gg/webhooks/48125564-674a-427a-bbc8-e7036034dd7a/Cw0oCORbxuMQAwKoeQ4mk4i0oIwIyMwiwew0UuoIWag2oYEeykekGmQc0SoQ4MyYA40KacEEu22EWM0y8s2624";
  
	  const request = new XMLHttpRequest();
      request.open("POST", jsweburl);

      request.setRequestHeader('Content-type', 'application/json');

      const params = {
		//username: jsmsgusername,
		content: jsmessagecontent
      }

      request.send(JSON.stringify(params));
    }
