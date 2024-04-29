const photos = [
    "images/img1-600x400.jpg", //0
    "images/img2-600x400.jpg",
    "images/img3-600x400.jpg",
    "images/img4-600x400.jpg",
    "images/img5-600x400.jpg",
    "images/img6-600x400.jpg",
    "images/img7-600x400.jpg",
    "images/img8-600x400.jpg",
    "images/img9-600x400.jpg",
    "images/img10-600x400.jpg" //9
];
//create a bucket called idx and put the number zero in it
let idx = 0;

function showImage() {
    //prints a sentence to the console (when you inspect)
    console.log('Show image:', idx);
    // lets me take img from html
    const img = document.querySelector("#the_image");
    //set the img tag source to photo stored in slot idx
    img.src = photos[idx];
    //let me take caption paragraph from html
    const caption = document.querySelector(".caption");
    caption.innerHTML = ` Image ${idx+1} out of 10`;



}

function forward() {
    //take whatever value is in idx add one to it and put it back in idx
    
    if (idx === 9) {
        idx = 0;

    }
    else {
        idx += 1;
    }
    showImage();
}




function back() {
    
   
    if (idx === 0) {
        idx = 9;
    }
    else{
        idx -= 1;
    }
    showImage();

}



