# dynamicallyAccessCSS.js
edit rules in your css

it is as simple as
    <script src="dynamicallyAccessCSS.js"></script>
    
    ...
    
    onclick="getCSSRule('classYouWantToChange').style.colorOrSizeOrWhatever = '3px'"
    
    
this was inspired here:
http://stackoverflow.com/questions/730048/how-to-change-remove-css-classes-definitions-at-runtime
