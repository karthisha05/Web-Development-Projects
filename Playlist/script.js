
let songs = [
    {
        name: "Perfect",
        artist: "Ed Sheeran",
        genre: "Romantic"
    },

    {
        name: "Believer",
        artist: "Imagine Dragons",
        genre: "Rock"
    },

    {
        name: "Faded",
        artist: "Alan Walker",
        genre: "Electronic"
    },

    {
        name: "Shape of You",
        artist: "Ed Sheeran",
        genre: "Pop"
    }
];




let playlist = [];



function displaySongs(songArray) {

    let container = document.getElementById("songContainer");

    container.innerHTML = "";


    songArray.forEach(function(song) {

        container.innerHTML += `
            <div class="song-card">

                <div class="song-icon">
                    🎵
                </div>

                <h3>${song.name}</h3>

                <p>${song.artist}</p>

                <p>${song.genre}</p>

                <button onclick="addToPlaylist('${song.name}')">
                    Add to Playlist
                </button>

            </div>
        `;

    });


    document.getElementById("songCount").textContent =
        songArray.length + " Songs";
}

function addToPlaylist(songName) {

    let song = songs.find(function(song) {

        return song.name === songName;

    });


    if(song) {

        playlist.push(song);

        updatePlaylist();

        alert(songName + " added to playlist!");

    }

}

function updatePlaylist() {

    let recent = document.getElementById("recentSongs");

    recent.innerHTML = "";
    playlist.forEach(function(song) {

        recent.innerHTML += `
            <span>${song.name}</span>`;

    });
    document.getElementById("playlistSummary").textContent =
        "Playlist: " + playlist.map(function(song)
         {
            return song.name;
        }).join(" • ");

}

function addSong() {

    let newSong = {
        name: prompt("Enter the song Name"),
        artist:prompt("Enter Artist"),
        genre: prompt("Enter genre")
    };


    songs.push(newSong);

    displaySongs(songs);

}

function removeSong() {

    if (songs.length > 0) {

        songs.splice(songs.length - 1, 1);

        displaySongs(songs);

    }

}

function sortSongs() {

    songs.sort(function(a, b) {

        if (a.name < b.name) {
            return -1;
        }

        if (a.name > b.name) {
            return 1;
        }

        return 0;

    });


    displaySongs(songs);

}

function reverseSongs() {

    songs.reverse();

    displaySongs(songs);

}

function showRecentSongs() {

    let recentSongs = songs.slice(-3);

    let container = document.getElementById("recentSongs");

    container.innerHTML = "";


    recentSongs.forEach(function(song) {

        container.innerHTML += `
            <span>${song.name}</span>
        `;

    });

}

displaySongs(songs);

showRecentSongs();
