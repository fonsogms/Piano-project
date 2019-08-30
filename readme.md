#Technologies used: 
Only dom Manipulation and vanilla JS.

Since I wanted to work with DOM manipulation from the beginning, I thought the best approach I could take was a educational game with a "Simon Says" functionality in order for the user to be able to memorize the keys and the notes in his mind.

#Inspirations:
The project was inspired by 2 mains things:
1. First the a previous project I did a few years ago with flash.
2. On the simon says game.
I wanted to mix both games to have an interesting and educational game for the user to learn music.
#Problems unsolved:
Wish I could have used better sound library as the piano I had to use sounds very depressing and I dont want the user to feel sad while using the game.
I wish I had time to implement a proper onclick functionality to play the keynotes in the game as it would have been better and less confusing for the user to play the game.

There is a bug while using the "practice" functionality that does not let the user play a note at the beginning.

#Approach:
I think using the keys in the keyboard to play was not the best approach, at the end the main point of the game is to help people to learn the keynotes and improve their listening. The problem with this, is that at the end is pretty confusing for the user to understand which note is played as it also needs to learn which keys in the keyboard needs to be presse to play the proper note.
While the keyboard approach is better for a person who just want to play a virtual piano, it fails to give a better experience for a educaitonal purpose.

#Problems in the beautiful journey of creating a virtual piano game:
1.- Realistic feeling:
Well first problem was to make the feeling of playing a keyboard as realistic as possible (Either a bunch of keys were played at the same time or the sound wouldnt stay still enough), so it took a few eventlisteners to make it happen.


2.- The play random sequence:
This was were things were complicated as I needed to work with async functions, which made it very dificult to control the playing and the pausing of the music in the game, so it was hard to visualize the logic behind the random sequence and try to make  natural and easy for the user to hear the notes.

3.-Validation of the user input after the sequence.
There were 2 arrays storing data in the game, first one, the random sequence, second the user input. While comparing both arrays was easy, the storing of the user input was difficult as it gave problems with the event listeners.


