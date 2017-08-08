# dynamicallyAccessCSS.js
edit rules in your css

it is as simple as

    `<script src="dynamicallyAccessCSS.js"></script>`
    
    ...
    
    onclick="getCSSRule('selectorYouWantToChange').style.colorOrSizeOrWhatever = '3px'"

    or

    onclick="getCSSRule('selectorYouWantToChange').style.setProperty ("width", "10px", "important")""
    


    if you want to get an array of all of the rules that reference your selector, you use:
    getCSSRule('selectorYouWantToChange', true)

    to change the last rule
	var myRules  = getCSSRule('selectorYouWantToChange', true);
	var lastRule = myRules[myRules.length-1]
    lastRule.style.colorOrSizeOrWhatever = 'something'

    
this was inspired here:
http://stackoverflow.com/questions/730048/how-to-change-remove-css-classes-definitions-at-runtime
