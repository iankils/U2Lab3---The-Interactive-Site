# Directions: 
Your task is to make this site interactive (repl.it | github) and accessible. The first section will display to the user a heart emoji thats the same color that the user picks. The second section is a number guessing game that the site will help the user find by saying to guess higher or lower. For the third section, enter all 7 continents and the site will have an image of each of them appear as you do. Lastly, use the color input to pick a color, check the checkbox to say you're not a robot, and click the button to change the website's background color.

1. Before we start coding, look through the files to see what you're working with. Reminder, this is best practice when ever working on a new project.

- First, navigate through the website as it is, and play with the inputs. Start thinking about the data type (integer, string, etc.) of each input. This will become more important to know as you start to write that javascript code.
- Next, look at the `index.html` and notice how the four sections are divided with their own comments. You'll be coming back here to find `IDs` for your `querySelectors`.
- Lastly, in the `script.js`, there are 2 functions that you will be using in this lab: `getRandomInt()` and `is-dark(hex)`. The two functions are at the top commented out to remind you of their name. They were created for you in the `utils.js` file, and both that file and this one are already attached in the `index.html` at the bottom. They will be used in section 2 and 4.

## What's Your Favorite Color?

1. Let's begin! For this first section, we want to display a unique message to the user with a heart emoji that is the same color that the user picks. In the `script.js`, start by using `querySelector` to connect to the `IDs` belonging to the radio button input and the output section currently with the text "YOUR RADIO OUTPUT HERE". You'll have to find the `IDs` in the `index.html`.

2. Then, on the radio button querySelector you created, put an addEventListener that calls a function on change, and make an arrow function for the event listener. It should look as follows:
```
const radioInput = document.querySelector("#fav_color");
const radioOutput = document.querySelector("#radio-output");

const displayColor = (e) => {
    //the color that was selected
    const color = e.target.value;

};

radioInput.addEventListener('change', displayColor);
```
3. In the function, set the `radioOutput` `innerHTML` to a message based on the color that has been chosen. You will need to use conditional [if and else if statements](https://www.w3schools.com/js/js_if_else.asp) to do this.

- Blue - You picked blue 💙
- Green - You picked green 💚
- Pink - You picked pink 💕
- Black - You picked black 🖤

4. Once you have tested that all 4 buttons are working properly, delete the default text in the `index.html`.

5. **Make it Accessible:** If you turn on your screen reader, notice that you can navigate through most of the section. It says the title, the radio button labels, and even the unique message. However, when you select a new button, there is no way of knowing that the new message has been updated. Add the following attributes in the element that holds the message so that screen reader knows to announce new changes: `aria-live:"polite"` and `aria-atomic="true"` Use this resource on ARIA attributes for more information.
```
{
<div id="radio-output" aria-live="polite" aria-atomic="true"></div>
}
```
## Guess the Number (1 to 100)

6. Now, you're going to use the function `getRandomInt()`. For now, save the value in a variable as, and print it using `console.log()` as follows:

```
const randomNumber = getRandomInt();
console.log(randomNumber);
```
7. Open the inspector window to the console tab and notice that a random number between 1 and 100 is being printed. When you refresh the page, a different random number should appear.

8. Great! Now, repeat the steps you did for the previous section:

- Find the `IDs` and use `querySelector` for both the numerical input and for the output.
- Add an event listener for the input, and
- create an arrow function that will generate the output. If the input was 50 (for example), this function should use `innerHTML` to say *"Not 50, guess lower!"* if the correct answer is less than 50, *"Not 50, guess higher!"* if the correct answer is greater than 50, or *"Hurray! You got it! It's 50"* if the correct answer is equal to 50.

9. Try this on your own first. If you're having trouble setting this up, the start of the code should look as follows:

```
const randomNumber = getRandomInt();
console.log(randomNumber);

const numInput = document.querySelector("#num-input");
const numOutput = document.querySelector("#num-output");

const checkNumber = (e) => {
    // the inputted number (as an integer not as a string)
    const value = e.target.valueAsNumber;
    
    // Insert conditional code here.
}

numInput.addEventListener('change', checkNumber);
```
10. Once you've tested that the guessing game works, and all 3 messages are being displayed, delete the starting text *"YOUR GUESSING GAME OUTPUT HERE".*

11. **Make it Accessible:** When you turn on the screen reader, a similar issue occurs as before. The unique messages do not make themselves known after each change. Additionally, the previous number must be deleted before entering the next guess.

- Include `aria-live="polite`" and `aria-atomic="true"` as done before. This will make the screen reader announce any changes in the output message.
- At the beginning of your function, use `e.target.select();` so that the entire previous number input gets selected immediately after it's entered. Now, any new inputs will automatically replace the previous one.

## Name All 7 Continents

12. For this third section, the idea is to have the user input a continent, and un-hide or reveal the corresponding continent image. If the input is invalid then no image will be revealed. Start by adding the `class="hidden"` attribute to all 7 continent images in the `index.html`.

13. Now, follow the pattern for the previous two sections as best as you can completing as much as possible until you get stuck. Once you do, read on for a bit more guidance. For now, use the `div id="sr-continent-alert"` to output a message for the user's input. If a continent, for example Asia was guessed, the message should say "Yes, Asia is a continent." For an invalid guess, like Canada, the message should say "Canada is not a continent."

14. Use `e.target.value.toLowerCase();` to ensure that the user's input is always all lower cased for consistency when comparing it to correct answers. Use this [resource for more information on](https://www.w3schools.com/jsref/jsref_tolowercase.asp) `.toLowerCase()`.

15. Use `.classList.contains()` to [check if an element has a specific class name](https://www.w3schools.com/jsref/met_domtokenlist_contains.asp) like `class="hidden"` which would mean it is hidden. And, use `.classList.remove()` to [remove that class](https://www.w3schools.com/jsref/prop_element_classlist.asp) so that it is un-hidden or revealed.

16. At this point, you should have this section working pretty nicely. See how you can make this accessible in the extensions.

# Extensions
## Mild

- For Section 2, the number guessing game, and Section 3, "Name All 7 Continents", use `e.target.select();` in the `script.js` in the functions to highlight the input after it's entered so that the user can input a new input without having to backspace their old one.
- The text outputs in Section 2 and 3 are really only for accessibility purposes. We need to go back and hide them from being seen, but we want a screen reader to still read it as someone navigates through the page. Go back to all the text outputs where you included `aria-live="polite"` and `aria-atomic="true"`, and add a class name `class="sr-only"`. Then, in the style.css, add the following class declaration.

```
.sr-only {
    opacity: 0;         /* this hides it visually */
    z-index: -1;        /* this avoids unintended clicks */
    position: absolute; /* this is so that the text doesn't affect other elements' positioning */
}
```
## Medium

- *Make it Accessible:* For Section 3, the output says if the input is a continent, but doesn't say how many continents have been already entered so far, or if an input has already been entered. Change the code in the `script.js` so that the output says one of the following:

    - If the input is Canada: **Canada is not a continent**.
    - If the input is Asia and it is the 3rd continent entered: **Yes! Asia is a continent. 3 out of 7**, or...
    - If the input is Africa and the user has already guessed Africa: **Africa has already been selected**.

    *Note: Use a screen reader to check that this is working properly. The message should only say "7 out of 7" when all 7 continents have appeared on the screen.*

- Let's connect Section 4. Input the color and change the background if the checkbox is checked. Use the following steps:

    - Add querySelectors for the color input, the checkbox, the submit button, and the body.
    - Add an eventListener on the submit button. When it is clicked it should call a function called `changeBackground`.
    - create the function changeBackground that does the following
        - uses `e.preventDefault()` [(See resource)](https://www.w3schools.com/jsref/event_preventdefault.asp) to stop the page from reloading.
        - uses `.checked` [(See Resource)](https://www.w3schools.com/jsref/prop_checkbox_checked.asp) to see if the "I'm not a Robot*" checkbox is checked. If it is...
        - set the `body.style.background` [(See Resource)](https://softauthor.com/change-background-color-javascript/) to the inputted value.

##Spicy

- **Make it Accessible:** Add a `div` in the `index.html` for a text output for section 4 similar to the other 3 sections, and include an ID, the aria properties, and the `sr-only` class. In the `script.js`, change the code so that when the button is pressed, one of the following messages appear:

    - "Background color changed to #FFFEEE" (or what ever color was selected)
    - "Background color not changed. Please, select 'I'm not a robot'."

**Note:** `sr-only` hides the message, so consider starting without the class name, and adding it once its working properly. Use a screen reader to ensure that this section is accessible.

