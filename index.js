var UserChoice = prompt("🌟 Hey Math Genius! 🧠 What’s your next move? 🎯 Choose wisely! : \n\n1) Forward Counting \n2) Backward Counting \n3) Table")

if (UserChoice === "Forward Counting") {
    var startFrom = +prompt("🔢 Let's begin the counting journey! 🎉 What's your starting number?")
    var endFrom = +prompt("🔢 Let's count it out! 🚀 What's your final number to complete the journey?")
    document.write("FORWARD COUTNING 🧮🔢" + "</br></br>" )
    for (var i = startFrom; i <= endFrom; i = i + 10) {

        for (var j = i; j < i + 10; j++) {
            document.write(" " + j + " ");

        }
        document.write("</br>")
    }
} else if (UserChoice === "Backward Counting") {
    var startFrom = +prompt("🔄 Let's rewind the numbers! ⏳ Enter your starting number to kick off the countdown!")
    var endFrom = +prompt("⏳ Time to count down! 🔥 Enter your ending number and let's blast off! 🚀")
    document.write("BACKWARD COUTNING 🧮🔢" + "</br></br>" )
    for (var i = endFrom; i >= startFrom; i = i - 10) {

        for (var j = i; j > i - 10; j--) {
            document.write(" " + j + " ");

        }
        document.write("</br>")
    }

} else if (UserChoice === "Table") {
    var startFrom = +prompt("🔢 Time to start the math magic! ✨ What's your starting number?")
    var endFrom = +prompt("🏁 Ready to wrap it up? 🚀 Enter your ending number!")
    var tableOf = +prompt("🧮 Let's build your table of wonders! 🌟 Which number would you like the table for?")
    document.write("TABLE OF" + " " +  tableOf + "" + "🧮🔢" + "</br></br>" )

    for (var i = startFrom; i <= endFrom; i++) {
        document.write(tableOf + "  X  " + i + " = " + (tableOf * i) + "</br>")
    }
} else {
    document.write(`<h2>🔴 Uh-oh! Wrong input detected! </br> ❌ Let’s fix that!  </br> 🚫  Try again!</h2>`)
}


