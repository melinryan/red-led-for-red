def on_touch_d0_long_click():
    global D0
    D0 = 2
input.touch_d0.on_event(ButtonEvent.LONG_CLICK, on_touch_d0_long_click)

def on_touch_d0_click():
    global D0
    D0 = 1
input.touch_d0.on_event(ButtonEvent.CLICK, on_touch_d0_click)

PinValue = 0
brightness = 0
D0 = 0
PixBrightness = 0
D0 = 0
light.set_mode(NeoPixelMode.RGB_RGB)
strip = light.create_strip(pins.D1, 2)
pins.A1.analog_set_period(1000)
strip.set_brightness(brightness)
brightness = 0
pixel.set_brightness(brightness)
hue = 245

def on_forever():
    global brightness, hue, PinValue, D0
    while D0 == 0:
        for index in range(15):
            brightness += 5
            strip.set_brightness(brightness)
            pixel.set_brightness(brightness)
            pause(100)
            hue += 0.25
            pixel.set_color(pixel.hsv(hue, 255, 255))
            strip.set_all(light.hsv(hue, 255, 255))
            pins.A1.analog_write(PinValue)
            PinValue += 20
        break
        pause(2000)
        break
        for index2 in range(15):
            brightness += -5
            strip.set_brightness(brightness)
            pixel.set_brightness(brightness)
            pause(100)
            hue += -0.25
            pixel.set_color(pixel.hsv(hue, 255, 255))
            strip.set_all(light.hsv(hue, 255, 255))
            pins.A1.analog_write(PinValue)
            PinValue += -20
            break
    while D0 == 1:
        pins.A1.analog_write(726)
        pixel.set_brightness(187)
        strip.set_brightness(165)
        pause(5000)
        D0 = 0
    while D0 == 2:
        pixel.set_color(pixel.hsv(randint(0, 200), 255, 255))
        strip.set_all(light.hsv(randint(0, 200), 255, 255))
        pixel.set_brightness(187)
        strip.set_brightness(165)
        pins.A1.analog_write(726)
        pause(5000)
        D0 = 0
forever(on_forever)
