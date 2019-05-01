var count = 0;
for(var i = 0 ; i < document.links.length; i++)
    if(document.links[i].hostname !== location.hostname)
	{ console.log(document.links[i].hostname);
		count++;
	}
	console.log(count);