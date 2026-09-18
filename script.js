let song1 = document.getElementById("song1")
let song2 = document.getElementById("song2")
let song3 = document.getElementById("song3")
let song4 = document.getElementById("song4")
let song5 = document.getElementById("song5")

let musicPlayer = document.getElementById("musicPlayer")

let playerImage = document.getElementById("playerImage")
let playerSong = document.getElementById("playerSong")
let playerArtist = document.getElementById("playerArtist")

let playBtn = document.getElementById("playBtn")
let closePlayer = document.getElementById("closePlayer")

let audio1 = document.getElementById("audio1")
let audio2 = document.getElementById("audio2")
let audio3 = document.getElementById("audio3")
let audio4 = document.getElementById("audio4")
let audio5 = document.getElementById("audio5")

let currentAudio


song1.addEventListener("click", function () {
    musicPlayer.style.display = "flex"

    playerImage.src = "assets/download1.jpg"
    playerSong.innerHTML = "Shape of You"
    playerArtist.innerHTML = "Ed Sheeran"

    currentAudio = audio1
})

song2.addEventListener("click", function () {
    musicPlayer.style.display = "flex"

    playerImage.src = "assets/download2.jpg"
    playerSong.innerHTML = "Blinding Lights"
    playerArtist.innerHTML = "The Weeknd"

    currentAudio = audio2
})

song3.addEventListener("click", function () {
    musicPlayer.style.display = "flex"

    playerImage.src = "assets/download3.jpg"
    playerSong.innerHTML = "Levitating"
    playerArtist.innerHTML = "Dua Lipa"

    currentAudio = audio3
})

song4.addEventListener("click", function () {
    musicPlayer.style.display = "flex"

    playerImage.src = "assets/download4.webp"
    playerSong.innerHTML = "Finding Her"
    playerArtist.innerHTML = "Bharath"

    currentAudio = audio4
})

song5.addEventListener("click", function () {
    musicPlayer.style.display = "flex"

    playerImage.src = "assets/downlode5.jpg"
    playerSong.innerHTML = "Apna Bana Le"
    playerArtist.innerHTML = "Arijit Singh"

    currentAudio = audio5
})


playBtn.addEventListener("click", function () {

    if (currentAudio.paused) {
        currentAudio.play()
        playBtn.innerHTML = "⏸"
    }
    else {
        currentAudio.pause()
        playBtn.innerHTML = "▶"
    }

})


closePlayer.addEventListener("click", function () {

    musicPlayer.style.display = "none"

    if (currentAudio) {
        currentAudio.pause()
        currentAudio.currentTime = 0
    }

    playBtn.innerHTML = "▶"

})