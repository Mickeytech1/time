setInterval(setclock,  1000)

const hourhand =document.querySelector('[date-hour-hand]')
const minutehand =document.querySelector('[date-minute-hand]')
const secondhand =document.querySelector('[date-second-hand]')

function setclock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minuteRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minuteRatio + currentDate.getHours()) / 12
    setRotaion(secondhand, secondsRatio)
    setRotaion(minutehand, minuteRatio)
    setRotaion(hourhand, hoursRatio)


}

function setRotaion(element,rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}
setclock()