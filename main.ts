input.onButtonPressed(Button.A, function () {
    if (cracker.isEmpty()) {
        basic.showIcon(IconNames.Happy)
    } else {
        クラックされました()
    }
})
radio.onReceivedValue(function (name, value) {
    if (cracker.isEmpty()) {
        if (秘密の番号 == value) {
            cracker = name
            radio.sendValue(name, 0)
            クラックされました()
        } else if (value < 秘密の番号) {
            radio.sendValue(name, 1)
        } else {
            radio.sendValue(name, 2)
        }
    }
})
function クラックされました () {
    basic.showString(cracker)
}
let cracker = ""
let 秘密の番号 = 0
radio.setGroup(1)
秘密の番号 = 2021
cracker = ""
