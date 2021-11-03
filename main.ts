input.onButtonPressed(Button.A, function () {
    if (cracker.isEmpty()) {
        basic.showIcon(IconNames.Happy)
    } else {
        クラックされました()
    }
})
function 初期化 () {
    秘密の番号 = randint(1, 100)
    cracker = ""
    basic.showNumber(秘密の番号)
    basic.pause(1000)
    basic.showIcon(IconNames.Yes)
}
input.onButtonPressed(Button.AB, function () {
    初期化()
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
let 秘密の番号 = 0
let cracker = ""
radio.setGroup(1)
初期化()
