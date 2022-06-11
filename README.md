# Mr. Roboger's Neighborhood

#### By Jonathan Lu

#### The web application simply takes a whole number that the user inputs and gives a response from Mr. Roboger.

#### [Click here](https://jlucoding.github.io/mr-robogers-neighborhood/) to check out the application on GitHub

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* JQuery
* Markdown

## Description

This is a fun web application that takes the user input into a string, or a sentence you might say. The application captures user input and turn that number into a list of numbers starting from 0 up to the number user inputted. Mr. Roboger is also programmed to substitude numbers (from the list) containing the number 1, number 2, and number 3 into the only three things that he has learned how to say.

## Setup/Installation Requirements

* Clone the project from my repository to your computer
* Open index.html
* Input a whole number, but you can also input something else if you wish to
* Click the "See Mr. Roboger's response!" button
* Enjoy what Mr. Roboger has to say

## Known Bugs

* None observed

## License

Copyright (c) June 2022. Jonathan Lu

## Test-Driven Development

Describe: robogerSays()

Test: "It should return an array of numbers in string form from 0 to the user's inputted number"
Code: robogerSays("5")
Expected Output: ["0", "1", "2", "3", "4", "5"]

Test: "It should return an array of numbers in string form from 0 to the user's inputted number and substitude all numbers containing the number 1 to "Beep!"."
Code: robogerSays("11")
Expected Output: ["0", "Beep!", "2", "3", "4", "5", "6", "7", "8", "9", "Beep!", "Beep!"]

Test: "It should return an array of numbers in string form from 0 to the user's inputted number and substitude all numbers containing the number 1 to "Beep!" and substitude all numbers containing the number 2 to "Boop!" with the number 2 rule having higher hierarchy."
Code: robogerSays("12")
Expected Output: ["0", "Beep!", "Boop!", "3", "4", "5", "6", "7", "8", "9", "Beep!", "Beep!", "Boop!"]

Test: "It should return an array of numbers in string form from 0 to the user's inputted number and substitude all numbers containing the number 1 to "Beep!" and substitude all numbers containing the number 2 to "Boop!" and substitude all numbers containing the number 3 to "Won't you be my neighbor?" with the number 3 rule having the highest hierarchy, then number 2, then number 1."
Code: robogerSays("13")
Expected Output: ["0", "Beep!", "Boop!", "Won't you be my neighbor?", "4", "5", "6", "7", "8", "9", "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"]

Test: "It should join the array into a string."
Code: robogerSays("5")
Expected Output: "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5"

Test: "If user submits an empty input, it should return "I do not understand your silence...""
Code: robogerSays("     ")
Expected Output: "I do not understand your silence..."

Test: "If user submits words or letters or a combination of numbers separated by space or punctuation, it should return "I only understand numbers...""
Code: robogerSays("this is a word")
Expected Output: "I can only understand a number regardless of the number of digits...";