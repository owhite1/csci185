//const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search (ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

function playTrack(trackId) {
    const templete = `
    <iframe
     style="border-radius:12px" 
        src="https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0" 
        width="100%" 
        height="352" 
        frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy">
        </iframe>
         `;
    document.querySelector("#artist").innerHTML = templete;
}

async function getTracks (term) {
    const url = `https://www.apitutor.org/spotify/simple/v1/search?type=track&q=${term}`;
    const response = await fetch(url);
    const trackData = await response.json();
    console.log(trackData);
    document.querySelector("#tracks").innerHTML = "";

    for (let i = 0; i < 5; i++) {

    const track = trackData[i];
  
    const templete = `
    <section class="track-item preview" onclick="playTrack('${track.id}')">
    <img src="${track.album.image_url}">
    <i class="fas play-track fa-play" aria-hidden="true"></i>
    <div class="label">
        <h2>${track.name}</h2>
        <p>
            ${track.artist.name}
        </p>
    </div>
</section>
    `;
    document.querySelector("#tracks").innerHTML += templete;
    }
   
}


async function getAlbums (term) {
    const url = `https://www.apitutor.org/spotify/simple/v1/search?type=album&q=${term}`;
    const response = await fetch(url);
    const artistData = await response.json();
    const artist = albumData[0];
    console.log(albumData);
    document.querySelector("#album").innerHTML = "";

}

async function getArtist (term) {

    const url = `https://www.apitutor.org/spotify/simple/v1/search?type=artist&q=${term}`;
    const response = await fetch(url);
    const artistData = await response.json();
    const artist = artistData[0];
    


    const templete = `
    <section class="artist-card" id="${artist.id}">
    <div>
        <img src="${artist.image_url}">
        <h2>${artist.name}</h2>
        <div class="footer">
            <a href="${artist.spotify_url}" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
</section>
    `;
    document.querySelector('#artist').innerHTML = templete;
}

document.querySelector('#search').onkeyup = function (ev) {
    console.log(ev.keyCode);
    if(ev.keyCode===13) {
        ev.preventDefault();
        search();
    }
}
