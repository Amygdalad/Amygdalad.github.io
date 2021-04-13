// This is the JavaScript file for the basic LabVIEW WebSockets demo.
// Copyright © 2016 by MediaMongrels Ltd. 

	function connect(){  
		var socket;
		const alldata = "";
			
		
		// The LabVIEW demo uses port 6123, but this can be changed to any port. Change 'localhost' if connecting to a server running on another IP address.
		var host = "ws://10.0.4.108:6124";  

		try{  
			var socket = new WebSocket(host);  
  
			message('<p class="event">Connecting...');  
			
			// Tell the user the connection has been established
			socket.onopen = function(){  
				message('<p class="event">Connected');
				message('<p class="event">Downloading Data...');				
			}  
			
			// Display the received message
			socket.onmessage = function(msg){ 		
				message('<p class="message">'+msg.data);
				//message('<p class="message">'+alldata.concat(msg.data);
			}  
			
			// Tell the user the connection has been closed
			socket.onclose = function(){
				message('<p class="event">Socket Status: '+socket.readyState+' (Closed)'); 
				message('<p class="event">' +typeof alldata);
				message('<p class="event">'+alldata);
				
						
			
			}           
  
		} catch(exception){  
			message('<p>Error'+exception);  
		}    
		
		// Add the message to the log (and close the paragraph)
		function message(msg){  
			$('#chatLog').append(msg+'</p>');  
		}  
   	return alldata;
	} //End connect
