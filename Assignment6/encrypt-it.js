/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.

    const encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", handleClick);

    const resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", handleReset);
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  function handleClick() {
    console.log("Button clicked !!");

    const inputText = document.getElementById("input-text").value;
    const shiftAmount = 1; // For a basic shift cipher, we'll shift by 1 character

    const encryptedText = shiftCipherEncrypt(inputText, shiftAmount);
    
    const resultParagraph = document.getElementById("result");
    resultParagraph.textContent = encryptedText;
  }

    function handleReset() {
      const inputText = document.getElementById("input-text");
      inputText.value = ""; // Clear the input text


      const resultParagraph = document.getElementById("result");
      resultParagraph.textContent = ""; // Clear the result text
    }
  
    
    function shiftCipherEncrypt(text, shiftAmount) {
      let result = "";
  
      for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
  
        // Encrypt uppercase letters
        if (charCode >= 65 && charCode <= 90) {
          charCode = ((charCode - 65 + shiftAmount) % 26) + 65;
        }
        // Encrypt lowercase letters
        else if (charCode >= 97 && charCode <= 122) {
          charCode = ((charCode - 97 + shiftAmount) % 26) + 97;
        }
  
        result += String.fromCharCode(charCode);
      }
  
      return result;
    }


})();
