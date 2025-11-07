let airTemp = 16;
let airStatues = false;
let fanSpeed = 0;
let dir = 'Up';

function toggleAir() {
    if (airStatues == false) {
        airStatues = true;
        console.log('AirCond is open and temp is 16')
    } else {
        airStatues = false;
        console.log('AirCond is close')
    }
}
function airTempIncrease() {
    if (airTemp < 29 && airStatues == true) {
        airTemp++
        console.log('airTemp is ' + airTemp)
    } else {
        alert('Max temp')
    }
}
function airTempDecrese() {
    if (airTemp > 16 && airStatues == true) {
        airTemp--
        console.log('airTemp is ' + airTemp)
    } else {
        alert('Min temp')
    }
}
function fanSpeedStatue() {
    if (dir == 'Up' && airStatues == true && fanSpeed < 3) {
        fanSpeed++
    } else if (fanSpeed == 3) {
        dir = 'Down';
        fanSpeed--;
    } else if (dir == 'Down' && fanSpeed > 1) {
        fanSpeed--;
    } else if (dir == 'Down' && fanSpeed == 1){
         dir = 'Up';
         fanSpeed++
    }
    console.log('fanSpeed is :' + fanSpeed)

}
