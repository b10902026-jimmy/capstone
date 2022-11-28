let form = document.getElementById('lobby__form')

let displayName = sessionStorage.getItem('display_name')
if(displayName){
    form.name.value = displayName
}


let joinHeader = document.getElementById('Join__header')
let inviteCode = sessionStorage.getItem('room_name')
joinHeader.innerHTML = `${inviteCode}`

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let displayName = e.target.name.value
    if(!displayName){
        displayName = String(`User${Math.floor(Math.random() * 10000)}`)
    }
    sessionStorage.setItem('display_name',  displayName)
    let inviteCode = sessionStorage.getItem('room_name')
    window.location = `room.html?room=${inviteCode}`
})