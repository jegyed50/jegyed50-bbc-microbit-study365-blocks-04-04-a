/**
 * Earthquake Detector
 */
let s = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    s = input.acceleration(Dimension.Strength)
    s = s - 1022
    serial.writeValue("s", s)
    led.plotBarGraph(
    s,
    200
    )
    basic.pause(100)
})
