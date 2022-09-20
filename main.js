// const TypeWriter = function (txtElement, words, wait = 300) {
//   this.txtElement = txtElement;
//   this.words = words;
//   this.txt = "";
//   this.wordIndex = 0;
//   this.wait = parseInt(wait, 10);
//   this.type();
//   this.isDeleting = false;
// };

// // Type Method
// TypeWriter.prototype.type = function () {
//   // Current Index of word
//   const current = this.wordIndex % this.words.length;
//   // get full text of curren word
//   const fullTxt = this.words[current];

//   // check if deleting
//   if (this.isDeleting) {
//     // remove character
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     // add character
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }

//   //    insert txt into element
//   this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//   // Initial Type Speed
//   let typeSpeed = 300;

//   if (this.isDeleting) {
//     typeSpeed = typeSpeed / 2;
//   }
//   // If word is complete
//   if (!this.isDeleting && this.txt === fullTxt) {
//     // make pause at end.
//     typeSpeed = this.wait;
//     // Set delete to true
//     this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === "") {
//     this.isDeleting = false;
//     // move to the next word
//     this.wordIndex++;
//     // pause before start typing
//     typeSpeed = 500;
//   }

//   setTimeout(() => this.type(), typeSpeed);
// };

// Second Way---
// ES6 Class

class TypeWriter {
  constructor(txtElement, words, wait = 300) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }
  type() {
    // Current Index of word
    const current = this.wordIndex % this.words.length;
    // get full text of curren word
    const fullTxt = this.words[current];

    // check if deleting
    if (this.isDeleting) {
      // remove character
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // add character
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    //    insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed = typeSpeed / 2;
    }
    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // make pause at end.
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // move to the next word
      this.wordIndex++;
      // pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init on DOM load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".text__type");
  const words = JSON.parse(txtElement.getAttribute("data-word"));
  const wait = txtElement.getAttribute("data-wait");

  new TypeWriter(txtElement, words, wait);
}
