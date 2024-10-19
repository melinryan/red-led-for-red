input.touchD0.onEvent(ButtonEvent.LongClick, function () {
    D0 = 2
})
input.touchD0.onEvent(ButtonEvent.Click, function () {
    D0 = 1
})
let PinValue = 0
let brightness = 0
let D0 = 0
let PixBrightness = 0
D0 = 0
light.setMode(NeoPixelMode.RGB_RGB)
let strip = light.createStrip(pins.D1, 2)
pins.A1.analogSetPeriod(1000)
strip.setBrightness(brightness)
brightness = 0
pixel.setBrightness(brightness)
let hue = 245
forever(function () {
    while (D0 == 0) {
        for (let index = 0; index < 15; index++) {
            brightness += 5
            hue = 245
            strip.setBrightness(brightness)
            pixel.setBrightness(brightness)
            pause(100)
            hue += 0.25
            pixel.setColor(pixel.hsv(hue, 255, 255))
            strip.setAll(light.hsv(hue, 255, 255))
            pins.A1.analogWrite(PinValue)
            PinValue += 20
            break;
        }
        break;
pause(2000)
        break;
for (let index = 0; index < 15; index++) {
            brightness += -5
            strip.setBrightness(brightness)
            pixel.setBrightness(brightness)
            pause(100)
            hue += -0.25
            pixel.setColor(pixel.hsv(hue, 255, 255))
            strip.setAll(light.hsv(hue, 255, 255))
            pins.A1.analogWrite(PinValue)
            PinValue += -20
            break;
        }
    }
    while (D0 == 1) {
        hue = 100
        pixel.setColor(pixel.hsv(107, 255, 255))
        pins.A1.analogWrite(726)
        pixel.setBrightness(187)
        strip.setBrightness(165)
        pause(5000)
        D0 = 0
    }
    while (D0 == 2) {
        pixel.setColor(pixel.hsv(randint(0, 200), 255, 255))
        strip.setAll(light.hsv(randint(0, 200), 255, 255))
        pixel.setBrightness(187)
        strip.setBrightness(165)
        pins.A1.analogWrite(726)
        pause(5000)
        D0 = 0
    }
})
