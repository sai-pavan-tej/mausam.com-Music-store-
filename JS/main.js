

    	// CLICK album-poster TO GET CURRENT SONG ID
		$(".album-poster").on('click', function(e){
			var dataSwitchId = $(this).attr('data-switch');
			//console.log(dataSwitchId);

			// and now i use aplayer switch function see
			ap.list.switch(dataSwitchId); //this is static id but i use dynamic 

			// aplayer play function
			// when i click any song to play
			ap.play();

			// click to slideUp player see
			$("#aplayer").addClass('showPlayer');
		});

		$(".button1").on('click', function(e){
			var x = Math.floor(Math.random() * 11) ;
			var dataSwitchId1 = x;
			//console.log(dataSwitchId);

			// and now i use aplayer switch function see
			ap.list.switch(dataSwitchId1); //this is static id but i use dynamic 

			// aplayer play function
			// when i click any song to play
			ap.play();

			// click to slideUp player see
			$("#aplayer").addClass('showPlayer');
		});

    const ap = new APlayer({
		    container: document.getElementById('aplayer'),
		    listFolded: true,
		    audio: [
		    {
		        name: 'Hello',
		        artist: 'Artist Name',
		        url: 'musics/Hello.mp3',
		        cover: 'IMAGE/Hello.jpeg'
			},
			{
		        name: 'Alanaati Ramachandrudu',
		        artist: 'Artist Name',
		        url: 'musics/Alanati-Ramachandrudu.mp3',
		        cover: 'IMAGE/Alanati-Ramachandrudu.jpg'
			},
			{
		        name: 'Ninnu Chuse Anandamlo',
		        artist: 'Artist Name',
		        url: 'musics/Ninnu-Chuse-Anandamlo.mp3',
		        cover: 'IMAGE/Ninnu-Chuse-Anandamlo.jpg'
			},
			
			{
		        name: 'Chirunama Thana Chirunama',  // SONG NAME
		        artist: 'Artist Name', //ARTIST NAME
		        url: 'musics/Chirunama-Thana-Chirunama.mp3', // PATH NAME AND SONG URL
		        cover: 'IMAGE/Chirunama-Thana-Chirunama.jpg' // COVER IMAGE
			},
			{
		        name: 'Vintunnavaa',  // SONG NAME
		        artist: 'Artist Name', //ARTIST NAME
		        url: 'musics/Vintunnavaa.mp3', // PATH NAME AND SONG URL
		        cover: 'IMAGE/Vintunnavaa.jpg' // COVER IMAGE
			},
			{
		        name: 'Maguva Maguva',  // SONG NAME
		        artist: 'Artist Name', //ARTIST NAME
		        url: 'musics/Maguva-Maguva.mp3', // PATH NAME AND SONG URL
		        cover: 'IMAGE/Maguva-Maguva.jpg' // COVER IMAGE
			},
			{
		        name: 'Kaatuka Kanule',  // SONG NAME
		        artist: 'Artist Name', //ARTIST NAME
		        url: 'musics/Kaatuka-Kanule.mp3', // PATH NAME AND SONG URL
		        cover: 'IMAGE/Kaatuka-Kanule.jpg' // COVER IMAGE
			},
			{
				name: 'Dhaari Choodu',
				artist: 'Artist Name',
				url: 'musics/Dhaari-Choodu.mp3',
				cover: 'IMAGE/Dhaari-Choodu.jpg',
			},
			{
				name: 'Bombay Pothava Raja',
				artist: 'Artist Name',
				url: 'musics/Bombay-Pothava-Raja.mp3',
				cover: 'IMAGE/Bombay-Pothava-Raja.jpg',
			},
			{
		        name: 'Kasu Panam',  // SONG NAME
		        artist: 'Artist Name', //ARTIST NAME
		        url: 'musics/Kasu-Panam.mp3', // PATH NAME AND SONG URL
		        cover: 'IMAGE/Kasu-Panam.jpeg' // COVER IMAGE
			},
			{
		        name: 'Kuthu Fire',  // SONG NAME
		        artist: 'Vidyavox', //ARTIST NAME
		        url: 'musics/Kuthu-Fire.mp3', // PATH NAME AND SONG URL
		        cover: 'IMAGE/Kuthu-Fire.jpeg' // COVER IMAGE
			},


		    ]
        });
		
		 //JavaScript for searchbar

		 function FindNext() {
			var str = document.getElementById("searchb").value;
			
				   if (str == "") {
					   alert ("Please enter some text to search!");
					   return;
				   }
			var supported = false;
				   var found = false;
				   if (window.find) {        // Firefox, Google Chrome, Safari
					   supported = true;
						   // if some content is selected, the start position of the search 
						   // will be the end position of the selection
					   found = window.find (str);}
				    else {
					   if (document.selection && document.selection.createRange) { // Internet Explorer, Opera before version 10.5
						   var textRange = document.selection.createRange ();
						   if (textRange.findText) {   // Internet Explorer
							   supported = true;
								   // if some content is selected, the start position of the search 
								   // will be the position after the start position of the selection
							   if (textRange.text.length > 0) {
								   textRange.collapse (true);
								   textRange.move ("character", 1);
							   }
	   
							   found = textRange.findText (str);
							   if (found) {
								   textRange.select ();
							   }
						   }
					   }
				   }
	   
				   if (supported) {
					   if (!found) {
						   alert ("The following text was not found:\n" + str);
					   }
				   }
				   else {
					   alert ("Your browser does not support this example!");
				   }
			   }
		
		