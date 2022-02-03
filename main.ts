input.onButtonPressed(Button.A, function () {
    koekjes += 1
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
let wadfa = 1
koekjes = 0
basic.forever(function () {
    basic.showNumber(koekjes)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
})
basic.forever(function () {
    if (Mouse_clicker_ding == 2) {
        basic.pause(10000)
        koekjes += 1
    }
})
basic.forever(function () {
    if (Mouse_clicker_ding == 5) {
        basic.pause(10000)
        koekjes += 5
    }
})
basic.forever(function () {
    if (Mouse_clicker_ding == 1) {
        basic.pause(10000)
        koekjes += 2
    }
})
basic.forever(function () {
    if (Mouse_clicker_ding == 6) {
        basic.pause(10000)
        koekjes += 6
    }
})
basic.forever(function () {
    if (Mouse_clicker_ding == 7) {
        basic.pause(10000)
        koekjes += 7
    }
})
basic.forever(function () {
    if (Mouse_clicker_ding == 8) {
        basic.pause(10000)
        koekjes += 8
    }
})
basic.forever(function () {
    if (Mouse_clicker_ding == 3) {
        basic.pause(10000)
        koekjes += 3
    }
})
basic.forever(function () {
    if (Mouse_clicker_ding == 4) {
        basic.pause(10000)
        koekjes += 4
    }
})
