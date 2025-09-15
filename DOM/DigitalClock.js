let hr = document.querySelector('.hr h1')
let min = document.querySelector('.min h1')
let sec = document.querySelector('.sec h1')
let weekBox = document.querySelector('.weekBox')
let dateBox = document.querySelector('.dateBox') // NEW div for date
let timer = 1000
let currentDay;

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let months = ['January','February','March','April','May','June','July','August','September','October','November','December']

function showDate() {
    let currentDate = new Date()

    let updateHr = currentDate.getHours()
    let updateMin = currentDate.getMinutes()
    let updateSec = currentDate.getSeconds()

    // Time formatting
    hr.innerText = updateHr < 10 ? '0' + updateHr : updateHr
    min.innerText = updateMin < 10 ? '0' + updateMin : updateMin
    sec.innerText = updateSec < 10 ? '0' + updateSec : updateSec

    // Day of week
    currentDay = currentDate.getDay()
    weekBox.innerHTML = `<span class="nowDay">${days[currentDay]}</span>`

    // Full Date
    let day = currentDate.getDate()
    let month = months[currentDate.getMonth()]
    let year = currentDate.getFullYear()
    dateBox.innerHTML = `${day} ${month} ${year}`
}

setInterval(showDate, timer)
