// Get the generated-btn, copy-btn and the input tag for the passwordOutput
const generatePasswordBtn = document.getElementById("generatePassword-btn");
const passwordOutput = document.getElementById("password");
const copyBtn = document.getElementById("copy-btn");

// Get the element for the success and error alert
const successPopUp = document.getElementById("success-pop-overlay");
const errorPopUp = document.getElementById("error-pop-overlay");
const successBtn = document.getElementById("sucsess-btn");
const errorBtn = document.getElementById("error-btn");

// Get get the input for the passwordLength
let passwordLength = document.getElementById("p-length");

// Get all checkboxes input element
const includeUppercase = document.getElementById("p-uppercase");
const includeLowercase = document.getElementById("p-lowercase");
const includeNumbers = document.getElementById("p-numbers");
const includeSymbols = document.getElementById("p-symbols");

// Varaibles containing different characters for the password
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~`!@#$%^&*()_-+='{[}],|:;<>.?'/";


// And a click eventListener to the generatePassword-btn
generatePasswordBtn.addEventListener("click", () => {

    // Create a password variable and set it's value to an empty string
    let password = "";

    // Create a ternary opperator to determind the value of the checkbox and assign the password variable declared on line 31 to the siuted characters
    (includeUppercase.checked) ? password += uppercase : "";
    (includeLowercase.checked) ? password += lowercase : "";
    (includeNumbers.checked) ? password += numbers : "";
    (includeSymbols.checked) ? password += symbols : "";

    // Assign the passwordOutput value to the generatePassword function that will be created on line 45 in other to generate and return a random password and the password length.
    passwordOutput.value = generatePassword(passwordLength.value, password);
});

// Create a generatePassword function to return passwordLength and random passwords, it should carry the two peremeters as decleared on line 41.
function generatePassword(passwordLength, password) {
    // Create and empty string to store the randompasswords that will be generated at line 50
    let randomPassword = "";

    // Generate random passwords and assign it to the empty string declared on line 47
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += password.charAt(Math.floor(Math.random() * password.length));
    }

    // return the generated randomPassword and passwordlength stored in the randomPassword varaible to the generatePassword function called at line 41
    return randomPassword;
}



// Make the copybtn to copy the passwordOutput value onclicked
copyBtn.addEventListener("click", () => {

    // Copy the passwordOutput value to clipboard
    passwordOutput.select();
    passwordOutput.setSelectionRange(0, 99999);
    document.execCommand("copy");

    // Display popUp message when the copyBtn is clicked
    if (passwordOutput.value === "") {
        errorPopUp.style.display = "block";
    } else {
        successPopUp.style.display = "block";
    };

    // Erase the passwordOutput value when copied to clipboard
    if (passwordOutput.value = "copy") {
      passwordOutput.value = "";
    };
})


// Close the successPopUp message when clicked on the successBtn
successBtn.addEventListener("click", () => {
    successPopUp.style.display = "none";
    
}) 

// Close the errorPopUp message when clicked on the errorBtn
errorBtn.addEventListener("click", () => {
    errorPopUp.style.display = "none";
}) 






