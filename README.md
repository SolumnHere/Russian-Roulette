Mini excercise pract #1

PRoject name: Russian-Roulette
Method references: function, random, tracking loop, basic HTML modification.

Real life references: I watched those movies whenever the russia gangster using their guns as a gambling object in the bar. They reloaded random ammos into the cylinder, rotated, and blessed the gods.
The guns should include maximum of six ammos and the highest rate of death depend on the quantity of ammos that reloaded in the guns. The more you reload, the higher chance you met death, it also
come with outstanding rewards aswell. 

Description: I want to make up to 2 functions: reloaded and try.
I'm new to computer science and start my journey on machine learning in the future so I only focus on universal machine langueges and create values. 
The main point of the practice is mainly focus on randomize object's data value and print the result whenever meet the requirements of the condition. 

How's it work:

The cylinder reponses for ammos holder, where "X" is loaded and "null" is empty. Whenever the player trigger "null", they won, otherwise that's called a lose.
Count: the number of empty slot of the cylinder 
valueRecall is something that I learn as a reuseable method that I can use the variable from funtion A in funtion B

* 1st function: Reloaded

1. Prepare data
- Using structureclone to copy the global variable "cylinder" to keep the datas always fresh when re-generate the function
- Set() method is used as an empty object to keep numbers always different from the others. For ex: [2,3,4] not [2,2,3]
- I used Object.keys to convert the clone that I have mentioned before into integer data where "X" and "null" are considered as 1, 2, and 3. Making it easier to control and modify.
2. While loop
- The loop is alway run and limited by the count, so the total of empty slot are created within the wanted input (update soon)
- Creating randIndex for the load function and assign it in the Object.keys, a random number will run inside the converted object of cylinder to choice the "null" slot of the gun.
- If Set() does not contain any value number from the random, they will be added and set the position of the cylinder to null
For ex: random key[3] = 4 -> obj[4] = null
- Finally, return the function to converted data so we can reuse it for the next function.

* 2st function: Try (pull the trigger)
- Using the same map as the first function: prep the data, clone converted data and create variable response for random
- I create a very simple loop to check the data, if the random equal to "null" (empty) -> won, otherwaise lose
There should be two random generation variable of the game because when we insert the ammos in the guns, we put it randomly. As you rotate the cylinder, it also completely random
and you only have one chance of pulling the trigger.

Cons: A very basic game to learn and play in my opinion, it help me learn how to variable declaration properly because throughout the coding, I have to manage to change the variables' location
numerous times just to find the suitable place for it. I have also questioned about how to reuse the data multiple times as the games will not end in a round, this is a gambling game and
the player will try to play it again and again (although there are no rewards, will add in the future), so return data on the function correctly and actively change the perspective of the problem
from how to solve it to what make it a problems. There is one thing that I believe I will keep it as a reference of this practice is Object.keys, a very useful method, helping me convert the
object's value into numbers, making it very easy to manage and arrange.

Pros: Take way too long to finish this. I only code about 3 to 4 hours a day, which seems not a sufficient study durability, as I dont have much times to experiment my works. Sometims, I spent up to
3 hours just to find a simple errors, which is "cannot identified value of undefined object", it turns out that I failed to create a correct variable and don't know how to reuse it for the rest of the code.
Trying to watch over youtube, stackflow and chatGPT until I find a way to clone the origin variables into local data and make it reuseable within the function. It was fun but take too much time.

Next: ToDo List
