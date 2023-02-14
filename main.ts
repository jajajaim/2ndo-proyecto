loops.everyInterval(1000, function () {
	
})
basic.forever(function () {
    basic.showLeds(`
        . # # # .
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        `)
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
    basic.pause(2000)
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.showIcon(IconNames.House)
    basic.pause(2000)
    basic.showIcon(IconNames.TShirt)
})
