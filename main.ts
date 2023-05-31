/**
 * Earthquake Detector
 */
let s = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    s = input.acceleration(Dimension.Strength)
    s = s - 500
    serial.writeValue("s", s)
    led.plotBarGraph(
    s,
    3081
    )
    basic.pause(100)
})
