Describe: robogerSays()

Test: "It should return an array of numbers in string form from 0 to the user's inputted number"
Code: robogerSays(5)
Expected Output: ["0", "1", "2", "3", "4", "5"]

Test: "It should return an array of numbers in string form from 0 to the user's inputted number and substitude all numbers containing the number 1 to "Beep!"."
Code: robogerSays(11)
Expected Output: ["0", "Beep!", "2", "3", "4", "5", "6", "7", "8", "9", "Beep!", "Beep!"]

Test: "It should return an array of numbers in string form from 0 to the user's inputted number and substitude all numbers containing the number 1 to "Beep!" and substitude all numbers containing the number 2 to "Boop!" with the number 2 rule having higher hierarchy."
Code: robogerSays(12)
Expected Output: ["0", "Beep!", "Boop!", "3", "4", "5", "6", "7", "8", "9", "Beep!", "Beep!", "Boop!"]

Test: "It should return an array of numbers in string form from 0 to the user's inputted number and substitude all numbers containing the number 1 to "Beep!" and substitude all numbers containing the number 2 to "Boop!" and substitude all numbers containing the number 3 to "Won't you be my neighbor?" with the number 3 rule having the highest hierarchy, then number 2, then number 1."
Code: robogerSays(13)
Expected Output: ["0", "Beep!", "Boop!", "Won't you be my neighbor?", "4", "5", "6", "7", "8", "9", "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"]

Test: "It should join the array into a string."
Code: robogerSays(5)
Expected Output: "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5"

Test:
Code:
Expected Output: