input.onButtonPressed(Button.A, function () {
    if (shipX > 0) {
        led.unplot(shipX, 4)
        shipX += -1
        led.plot(shipX, 4)
    }
})
input.onButtonPressed(Button.AB, function () {
    music.play(music.createSoundExpression(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    if (invaderX == shipX) {
        invaderX = -1
        invaderY = -1
    }
    for (let index = 0; index <= 3; index++) {
        led.plot(shipX, index)
    }
    basic.pause(200)
    for (let index = 0; index <= 3; index++) {
        led.unplot(shipX, index)
    }
})
input.onButtonPressed(Button.B, function () {
    if (shipX < 4) {
        led.unplot(shipX, 4)
        shipX += 1
        led.plot(shipX, 4)
    }
})
let invaderY = 0
let invaderX = 0
let shipX = 0
shipX = 2
invaderX = -1
invaderY = -1
led.plot(shipX, 4)
basic.forever(function () {
    if (invaderX < 0 || invaderY > 4) {
        invaderX = randint(0, 0)
        invaderY = 0
        led.plot(invaderX, invaderY)
    }
})
loops.everyInterval(200, function () {
    if (invaderY >= 0) {
        led.unplot(invaderX, invaderY)
    }
    if (invaderY >= 0) {
        invaderY += 1
        led.plot(invaderX, invaderY)
        if (invaderY == 4) {
            music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        }
    }
})
