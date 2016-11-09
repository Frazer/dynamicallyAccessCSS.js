
var returnStyleSheetRules = (function (){  
	if(!document.styleSheets[0]){
			// Create the <style> tag
			var style = document.createElement("style");
			// WebKit hack :(
			style.appendChild(document.createTextNode(""));
			// Add the <style> element to the page
			document.head.appendChild(style);

	}
	if(document.styleSheets[0].cssRules){
		return function (item) {return  item.cssRules;}
	} 
	else if (document.styleSheets[0].rules) {
	    return function (item) {return  item.rules;}
	}
})();

function getCSSRule(search) {
	rule = [].map.call(document.styleSheets, function(item) {
	  return [].slice.call(returnStyleSheetRules(item));
	}).reduce(function(a, b) {
	  return b.concat(a);
	}).filter(function(rule) {
	  return rule.selectorText.lastIndexOf(search) === rule.selectorText.length - search.length;
	})[0];
	if (rule){
	   return rule;
	}else{
		let sheet = document.styleSheets[0];   //if the rule we are looking for doesn't exist, we create it
		if("insertRule" in sheet) {
			sheet.insertRule("."+search + "{  }");
		}
		else if("addRule" in sheet) {
			sheet.addRule(search, "");
		}
		return returnStyleSheetRules(document.styleSheets[0])[0];
	}
}
