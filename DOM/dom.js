// Select second h1 tag and apply styles
let h1TagBanana = document.getElementsByTagName('h1')[1];
h1TagBanana.style.color = 'red';
h1TagBanana.style.textAlign = 'center';

// Select image and apply border radius
let imgTag = document.getElementsByTagName('img')[0];
imgTag.style.borderRadius = '20px';

// Notes:
// document.getElementsByTagName('h1') returns a collection (like an array)
// [0] -> first element, [1] -> second element
