function getHour(){
    const clock = document.getElementById("time")
    let now = new Date()
    let hour = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()
    clock.innerText = `${hour}:${minutes}:${seconds}`
    return console.log('Ola')
}

setInterval(getHour, 1000)