makerbit.onIrButton(IrButton.Number_3, IrButtonAction.Pressed, function () {
    SuperBit.MotorRun(SuperBit.enMotors.M4, 100)
    basic.showArrow(ArrowNames.East)
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Released, function () {
    SuperBit.MotorStopAll()
})
makerbit.onIrButton(IrButton.Hash, IrButtonAction.Pressed, function () {
    SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    basic.pause(500)
    SuperBit.MotorStopAll()
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Released, function () {
    SuperBit.MotorStopAll()
})
makerbit.onIrButton(IrButton.Number_0, IrButtonAction.Pressed, function () {
    SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    basic.pause(400)
    SuperBit.MotorStopAll()
    SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    basic.pause(21500)
    SuperBit.MotorStopAll()
})
makerbit.onIrButton(IrButton.Number_1, IrButtonAction.Pressed, function () {
    SuperBit.MotorRun(SuperBit.enMotors.M1, 100)
    basic.showArrow(ArrowNames.East)
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Released, function () {
    SuperBit.MotorStopAll()
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Pressed, function () {
    SuperBit.MotorRun(SuperBit.enMotors.M1, -100)
    basic.showArrow(ArrowNames.East)
})
makerbit.onIrButton(IrButton.Ok, IrButtonAction.Released, function () {
    music.stopAllSounds()
})
makerbit.onIrButton(IrButton.Number_1, IrButtonAction.Released, function () {
    SuperBit.MotorStopAll()
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    255,
    SuperBit.enMotors.M4,
    255
    )
    basic.showArrow(ArrowNames.South)
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Released, function () {
    SuperBit.MotorStopAll()
})
makerbit.onIrButton(IrButton.Star, IrButtonAction.Pressed, function () {
    SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    basic.pause(21500)
    SuperBit.MotorStopAll()
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    -255,
    SuperBit.enMotors.M4,
    -255
    )
    basic.showArrow(ArrowNames.North)
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Pressed, function () {
    SuperBit.MotorRun(SuperBit.enMotors.M4, -100)
    basic.showArrow(ArrowNames.West)
})
makerbit.onIrButton(IrButton.Ok, IrButtonAction.Pressed, function () {
    music.setVolume(255)
    music.playTone(988, music.beat(BeatFraction.Double))
})
makerbit.onIrButton(IrButton.Number_3, IrButtonAction.Released, function () {
    SuperBit.MotorStopAll()
})
makerbit.connectIrReceiver(DigitalPin.P1, IrProtocol.Keyestudio)
makerbit.connectIrReceiver(DigitalPin.P0, IrProtocol.Keyestudio)
