
const apiKey = import.meta.env.VITE_YT_API_KEY;
const channelId = 'AIzaSyBOzaNiitSLb_bMfYJ3EtB5sdqG8Ps4Bwo';
const maxResults = 9;

fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("videoGrid");
    data.items.forEach(item => {
      if (item.id.kind === "youtube#video") {
        const videoEl = document.createElement("div");
        videoEl.className = "video";
        videoEl.innerHTML = `
          <iframe src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
          <div class="video-title">${item.snippet.title}</div>
        `;
        container.appendChild(videoEl);
      }
    });
  })
  .catch(error => {
    console.error("Erro ao carregar vídeos:", error);
  });
