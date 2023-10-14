// Get a reference to the input element
let input = document.getElementById('inputbox');

// Get all the buttons
let buttons = document.querySelectorAll('button');

// Initialize a string to store the user's input
let string = "";

// Convert the NodeList to an array
let arr = Array.from(buttons);

// Add event listeners to the buttons
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        // Check if the '=' button is clicked
        if (e.target.innerHTML === '=') {
            // Check if the string is not empty and contains a valid expression
            if (string !== "") {
                try {
                    // Replace 'x' with '*' and '÷' with '/' to match JavaScript operators
                    string = string.replace(/x/g, '*').replace(/÷/g, '/');
                    // Evaluate the expression and update the input box
                    string = eval(string);
                    input.value = string;
                } catch (error) {
                    // Handle invalid expressions by displaying an error
                    input.value = "Error";
                    string = "";
                }
            }
        }
        // Check if the 'AC' (clear) button is clicked
        else if (e.target.innerHTML === 'AC') {
            // Clear the input and the stored string
            string = "";
            input.value = string;
        }
        // Check if the 'DE' (delete) button is clicked
        else if (e.target.innerHTML === 'DE') {
            // Remove the last character from the string and update the input
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        // Check if the '%' button is clicked
        else if (e.target.innerHTML === '%') {
            // If the string is not empty, calculate the percentage and update the input
            if (string !== "") {
                try {
                    string = eval(string + '/100');
                    input.value = string;
                } catch (error) {
                    input.value = "Error";
                    string = "";
                }
            }
        }
        // If none of the special buttons are clicked, append the clicked button's text to the string
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});

