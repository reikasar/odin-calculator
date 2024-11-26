# Calculator

This is a simple, responsive calculator built using HTML, CSS, and JavaScript. It provides basic arithmetic operations and a user-friendly interface for quick calculations.

## Features
- Basic Operations: Supports addition, subtraction, multiplication, and division.
- Responsive Design: Adjusts to different screen sizes for usability across devices.
- User-Friendly Interface: Styled with modern design principles for a clean and easy-to-use layout.
- Error Handling: Displays "Error!" when invalid operations are attempted.

## Preview
The calculator features a display at the top for input and results, with buttons for digits, operators, and a clear (`C`) button.

## Code Explanation

### HTML
The structure of the calculator includes:
- A display input field for showing calculations and results.
- Buttons for digits (`0-9`), operators (`+`, `-`, `*`, `/`), a decimal (`.`), and functionalities like `=` (equals) and `C` (clear).

### CSS
- Layout: A grid layout is used for the buttons to align them in rows and columns.
- Styling: Modern colors and hover/active states for interactivity.
- Responsiveness: Ensures the design adapts to various screen sizes.

### JavaScript
- Core Functions:
  - `appendToDisplay(input)`: Appends the clicked button value to the display.
  - `clearDisplay()`: Clears the display input field.
  - `calculate()`: Evaluates the expression in the display and shows the result or an error message for invalid inputs.

## Demo
To run the calculator, simply open the `index.html` file in any web browser. The functionality does not require any server setup.
