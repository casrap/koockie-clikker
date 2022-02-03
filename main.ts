input.onButtonPressed(Button.A, function () {
    wadfa = 0
    koekjes += 1
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    wadfa = 1
})
input.onButtonPressed(Button.B, function () {
    if (koekjes >= 15) {
        Mouse_clicker_ding += 1
        basic.showString("Gekocht")
    } else {
        basic.showNumber(15 - koekjes)
        basic.showString("nodig")
    }
})
let Mouse_clicker_ding = 0
let koekjes = 0
let wadfa = 0
wadfa = 1
koekjes = 0
basic.forever(function () {
    if (wadfa == 1) {
        basic.showNumber(koekjes)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (Mouse_clicker_ding == 1) {
        basic.pause(10000)
        koekjes += 1
    } else if (Mouse_clicker_ding == 2) {
        basic.pause(10000)
        koekjes += 2
    } else {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    }
})
