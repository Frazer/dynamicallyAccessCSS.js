/**
 * dynamicallyAccessCSS 
 *
 * @link    https://github.com/Frazer/dynamicallyAccessCSS.js
 * @license MIT
 *          
 * @author  Frazer Kirkman
 * @published 2017
 */

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

function getCSSRule(search, returnArray) {

	let styleSheets = [].map.call(document.styleSheets, function(item) {
	  return [].slice.call(returnStyleSheetRules(item));
	});

	let rule = null;
	let rules = [];
	styleSheets.forEach(function(thisSheet){
	  let findTheRule = thisSheet.filter(function(rule) {
	    if(rule.selectorText){
	    	return rule.selectorText.lastIndexOf(search)===0  && search.length===rule.selectorText.length;	
	    }else return false;
	  });

	  if(findTheRule.length){
			rules = rules.concat(findTheRule);
			rule = findTheRule[findTheRule.length-1];    //findTheRule will contain all rules that reference the selector. findTheRule[findTheRule.length-1] contains the last rule.
	  }
	});
	if (rule){
		if(returnArray){
			return rules;
		}else{
			return rule;
		}
	}else{
		let sheet = document.styleSheets[0];   //if the rule we are looking for doesn't exist, we create it
        var pos = sheet.cssRules.length;
        if("insertRule" in sheet) {
                sheet.insertRule(search + "{  }",pos);
        }
        else if("addRule" in sheet) {
                sheet.addRule(search, "",pos);
        }
		if(returnArray){
			return returnStyleSheetRules(document.styleSheets[0]);
		}else{
			return returnStyleSheetRules(document.styleSheets[0])[pos];
		}
	}
}


