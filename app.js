const clockContainer = document.querySelector('.clock-container')
const titleMessage = document.querySelector('.greetings')

const formatTimeUnit = unit => {
    return unit < 10 ? `0${unit}` : `${unit}`
  }

const getClockHTML = (hours, minutes, seconds) => `
    <span>${hours}</span> :
    <span>${minutes}</span> :
    <span>${seconds}</span>
    `

const updateClock = () => {
    const present = new Date()
    const hours = formatTimeUnit(present.getHours())
    const minutes = formatTimeUnit(present.getMinutes())
    const seconds = formatTimeUnit(present.getSeconds())
    
    clockContainer.innerHTML = getClockHTML(hours, minutes, seconds)

    const correctMessage = value => {
        const isMorning = value >= 5 && value <= 11
        const isAfternoon = value >= 12 && value <= 18
        const displayMorningMessage = titleMessage.innerHTML = 'Bom dia!'
        const displayAfternoonMessage = titleMessage.innerHTML = 'Boa tarde!'
        const displayEveningMessage = titleMessage.innerHTML = 'Boa noite!'
        
        if(isMorning) {
            displayMorningMessage
        } else if (isAfternoon) {
            displayAfternoonMessage
        } else {
            displayEveningMessage
        }
    }

    correctMessage(hours)
}

setInterval(updateClock, 1000)



