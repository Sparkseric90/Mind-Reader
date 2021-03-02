// create's the text elements in the HTML to display for each state
let main = document.getElementById("main").innerHTML

let smTxt = document.getElementById("smTxt").innerHTML

// create symbols. emoticons copied from https://fsymbols.com/
let symbls = ["😹", "😂", "👻", "⛄", "🚀", "🌝", "🏆", "🏁", "🎮", "🏀", "🏈"];

// create statess
let state = 1

// create mind reader
let answerSym = null

// advanced state(goes to the next view)
function nextState() {
    console.log(state)
    state++
    renderView()
}
// reset to state 1 (Reset button)
function resetState() {
    state = 1
    renderView()
}

// This creates the symbols and then randomizes them everytime you restart
function randomsym() {
    var rightAns = symbls[Math.ceil(Math.random() * 10)]
    var str = "<br>";
    for (i = 0; i <= 100; i++) {
        if (i % 9) {
            var sym = symbls[Math.ceil(Math.random() * 10)]

            str = str + i + "-" + sym + "<br>"

        }

        else {
            str = str + i + "-" + rightAns + "<br>"
            answerSym = rightAns
        }
    }
    // display symbols
    return str;
}

function renderView() {
    if (state == 1) {
        document.getElementById("main").innerHTML = "Wanna play a game? I can read your mind!"
        document.getElementById("smTxt").innerHTML = ""
        document.getElementById("btn2").style.visibility = "hidden"
        document.getElementById("btn1").style.visibility = "initial"
    }
    else if (state == 2) {
        document.getElementById("main").innerHTML = "Pick a number between 1 and 99"
        document.getElementById("smTxt").innerHTML = "When you've picked your number, click next"
        document.getElementById("btn2").style.visibility = "initial"
        document.getElementById("btn1").style.visibility = "initial"

    }
    else if (state == 3) {
        document.getElementById("main").innerHTML = "Add both digits together to get a new number"
        document.getElementById("smTxt").innerHTML = "Ex: 56 is 5 + 6 = 11 Click next to proceed"
        document.getElementById("btn2").style.visibility = "initial"
        document.getElementById("btn1").style.visibility = "initial"
    }
    else if (state == 4) {
        document.getElementById("main").innerHTML = "Subtract your new number from the original number"
        document.getElementById("smTxt").innerHTML = "Ex: 56 - 11 = 45 This is your new number Click next to proceed "
        document.getElementById("btn2").style.visibility = "initial"
        document.getElementById("btn1").style.visibility = "initial"
    }
    else if (state == 5) {
        // call function to create symbols
        var str = randomsym()
        document.getElementById("main").innerHTML = str;
        document.getElementById("smTxt").innerHTML = "Scroll down to find your new number. Remember the symbol next to the number"
        document.getElementById("btn2").style.visibility = "initial"
        document.getElementById("btn1").style.visibility = "initial"
    }
    else if (state == 6) {

        document.getElementById("main").innerHTML = answerSym
        document.getElementById("smTxt").innerHTML = "Your symbol is: <br>" + answerSym
        document.getElementById("btn2").style.visibility = "initial"
        document.getElementById("btn1").style.visibility = "hidden"
    }
}

renderView()
