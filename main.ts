function go_left () {
    mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Run, speed * 0.7, 0)
}
function go_right () {
    mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Run, speed, speed * 0.7)
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "bot1_done") {
        speed = 42
    }
})
function foward () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, speed)
}
let Position_LR = 0
let done = 0
let speed = 0
speed = 0
radio.setGroup(123)
basic.forever(function () {
    if (mbit_Robot.Avoid_Sensor(mbit_Robot.enAvoidState.OBSTACLE) && done == 0) {
        radio.sendString("bot2_done")
        done = 1
    }
})
basic.forever(function () {
    if (mbit_Robot.Line_Sensor(mbit_Robot.enPos.LeftState, mbit_Robot.enLineState.White) && mbit_Robot.Line_Sensor(mbit_Robot.enPos.RightState, mbit_Robot.enLineState.Black)) {
        Position_LR = 0
    } else if (mbit_Robot.Line_Sensor(mbit_Robot.enPos.LeftState, mbit_Robot.enLineState.Black) && mbit_Robot.Line_Sensor(mbit_Robot.enPos.RightState, mbit_Robot.enLineState.White)) {
        Position_LR = 1
    } else if (mbit_Robot.Line_Sensor(mbit_Robot.enPos.LeftState, mbit_Robot.enLineState.Black) && mbit_Robot.Line_Sensor(mbit_Robot.enPos.RightState, mbit_Robot.enLineState.Black)) {
        Position_LR = 2
    } else {
        Position_LR = 2
    }
})
basic.forever(function () {
    basic.showString("" + (speed))
})
basic.forever(function () {
    if (Position_LR == 0) {
        go_right()
    } else if (Position_LR == 1) {
        go_left()
    } else if (Position_LR == 2) {
        foward()
    } else {
    	
    }
})
