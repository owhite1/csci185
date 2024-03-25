function defaultTheme() {
   const bodyelement= document.querySelector("body");
   bodyelement.className= "default";


}

function oceanTheme() {
   const bodyelement= document.querySelector("body");
   bodyelement.className= "ocean";
}

function desertTheme() {
    const bodyelement= document.querySelector("body");
    bodyelement.className= "desert";

}

function highContrastTheme() {
  const bodyelement= document.querySelector("body");
  bodyelement.className= "high-contrast";
}

/*
    Hints: 
    1. Attach the event handlers (functions) above to the click event
       of each of the four buttons (#default, #ocean, #desert, 
        and #high-contrast) in index.html.
    2. Then, modify the  body of each function so that it
       sets the className property of the body tag based on 
       the button that was clicked.
*/