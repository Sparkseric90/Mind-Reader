Purpose:
Let user pick a number between 01 and 99. There wont be any type of input. The output will be random
each time the user plays.

output:
The output will be a list of symbols that are numbered the user can scroll through. The most important part will be
the symbol that uses the multiple of 9 (9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99). Those numbers will user the same
symbol throughout. Every other number will have random symbols. 

Create:
Object that contains our view.
    -each view will have different properties that are similar but will have differences.
    -Text view
    -Text view with instruction
    -next button
    -reveal button
    -back/home button
    -List of icons that are numbered 01-99

Views include:
    -Single page with 6 view states that change through out the process.

View one:
    -Fancy instuctions that tells you about the game.
    -Go button, that goes to the 2nd view

View two:
    -Instructions telling you to pick a number between 01 and 99.
    -Next button, that move to view 3
    -Example instructions below the next button.
    -Back/home button that can return you to view 1

View three:
    -Instructions to move to the next part of the game View 4
    -Next button that moves to view 4
    -Example instructions to help you proceed
    -back/home button that can return you to view 1

View four:
    -Instructions to move to the next part of the game View 5
    -Next button that moves to view 5
    -Example instructions to help you proceed
    -back/home button that can return you to view 1

View five:
    -List of Numbers and corresponding symbols
    -Reveal button
    -Instructions telling you to find your new number and containing symbol
    -back/home button that can return you to view 1

View six:
    -Reveal of your Symbol
    -text tell you your symbol is:
    -back/home button that can return you to view 1