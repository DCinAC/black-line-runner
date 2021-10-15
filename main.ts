let speed = 0
let Position_LR = 0
radio.onReceivedNumber(function (receivedNumber) {
    speed = receivedNumber
})
function go_left () {
    mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Run, speed * 0.7, 0)
}
function go_right () {
    mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Run, speed, speed * 0.7)
}
function foward () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, speed)
}
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
    if (Position_LR == 0) {
        go_right()
    } else if (Position_LR == 1) {
        go_left()
    } else if (Position_LR == 2) {
        foward()
    } else {
    	
    }
})
basic.forever(function () {
    basic.showString("" + (speed))
})
