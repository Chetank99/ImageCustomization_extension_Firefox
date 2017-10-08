browser.contextMenus.onClicked.addListener(contextMenuAction);

function contextMenuAction(info, tab){
	console.log("Info is " + info);
	console.log("Tab is " + tab);
	if(info != null && info.hasOwnProperty('menuItemId')
			&& info.hasOwnProperty('selectionText')){
		console.log(info);
		var searchURL = imgType(info.menuItemId);


	var url = '';
		console.log("SEARCH url " + searchURL);
		 console.log("title is"+tab.title);

		if(searchURL != ''){
              url = searchURL+info.selectionText;	
		}

		console.log("the url is:::"+url);	
		
		
		if( url != ''){
			  browser.tabs.create({url: url});
		}

	}

}

browser.contextMenus.create({
id : "png",
title: "Png",
contexts: ["selection"]
});	




browser.contextMenus.create({
id : "jpeg",
title: "JPEG",
contexts: ["selection"]
});

browser.contextMenus.create({
id : "svg",
title: "SVG",
contexts: ["selection"]
});		

function imgType(txtForImg){
  
  if (txtForImg=='png') {
  	return 'https://www.google.co.in/search?hl=en&biw=1366&bih=656&q=filetype:png ';
  }
  if (txtForImg=='jpeg') {
  	return 'https://www.google.co.in/search?hl=en&biw=1366&bih=656&q=filetype:jpeg ';
  }
  if (txtForImg=='svg') {
  	return 'https://www.google.co.in/search?hl=en&biw=1366&bih=656&q=filetype:svg ';
  }


return '';
}

