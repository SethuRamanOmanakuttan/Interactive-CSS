/* 
The JSON Object is for the initial phase of the project.
As the data gets larger, a more suitable format will be adopted
*/
const propertyInfo = {
    Padding: "Imagine your HTML element as a box. Padding is like the cushioning inside the box. It creates space between the content and the edges of the box. It's like adding some breathing room, a cozy buffer that keeps your content comfortably away from the edges. You can adjust the padding to make your content appear more spacious or compact within the box.",
    Margin: "Think of margins as the personal space around your HTML element. Imagine your elements as people attending a party. Margins ensure they don't get too close, avoiding awkward collisions or overcrowding. You can set margins to create separation between elements, allowing them to breathe and maintain a visually pleasing distance from one another.",
    Border: "Borders add the artistic touch to your HTML element. It's like putting a frame around a picture. Borders provide a visual boundary, outlining the edges of your element. You can customize the border's style, color, and thickness, giving it a unique and eye-catching appearance. Borders can make your elements stand out, like an exquisite painting in an art gallery."
  };
  
  /* 
  This helper function receives the IDs of the element to style,
  the input to get the value from, and the element to show the selected value.
  It also receives the property to change in the style of the element 
  */
  function updateStyle(elementId, inputId, pxId, styleProperty, styleValue = '') {
    // Get the value from the input
    const inputValue = document.getElementById(inputId).value;
  
    // Get the element to style
    const element = document.getElementById(elementId);
  
    // Get the element to display the input value
    const pxElement = document.getElementById(pxId);
  
    // Update the display element's content
    pxElement.innerHTML = inputValue;
  
    // Update the style of the target element
    element.style[styleProperty] = `${styleValue} ${inputValue}px`;
  }
  
  function updateInfo(styleProperty) {
    const infoHeader = document.getElementById("info-title");
    const infoContent = document.getElementById("info-content");
  
    infoHeader.innerHTML = styleProperty;
    infoContent.innerHTML = propertyInfo[styleProperty];
  }
  
  // Function to handle padding change
  function changePadding() {
    // Call the helper function with appropriate arguments for padding
    updateStyle("square", "padding-input", "padding-px", "padding");
    updateInfo("Padding");
  }
  
  // Function to handle margin change
  function changeMargin() {
    // Call the helper function with appropriate arguments for margin
    updateStyle("square", "margin-input", "margin-px", "margin");
    updateInfo("Margin");
  }
  
  // Function to handle border change
  function changeBorder() {
    // Call the helper function with appropriate arguments for border
    updateStyle("square", "border-input", "border-px", "border", "solid #393e46");
    updateInfo("Border");
  }
  