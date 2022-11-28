let form = document.getElementById('lobby__form')

let displayName = sessionStorage.getItem('display_name')
if(displayName){
    form.name.value = displayName
}

let roomName = sessionStorage.getItem('room_name')
if(roomName){
    form.room.value = roomName
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let displayName = e.target.name.value
    if(!displayName){
        displayName = String(`User${Math.floor(Math.random() * 10000)}`)
    }
    sessionStorage.setItem('display_name',  displayName)

    let inviteCode = e.target.room.value
    if(!inviteCode){
        inviteCode = String(Math.floor(Math.random() * 10000))
    }
    sessionStorage.setItem('room_name',  inviteCode)
    window.location = `room.html?room=${inviteCode}`
})