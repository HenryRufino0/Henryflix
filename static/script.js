
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


function mostrarEscolha() {
    document.getElementById("inicio").classList.add("hidden");
    document.getElementById("escolha").classList.remove("hidden");
  }
  
  function carregarVideos(tipo) {
    document.getElementById("escolha").classList.add("hidden");
    document.getElementById("catalogo").classList.remove("hidden");
  
    const titulo = tipo === 'tcg' ? "Henry do TCG" : "Henry Rufino";
    document.getElementById("tituloCatalogo").innerText = titulo;
  
    const videoIds = tipo === 'tcg'
      ? ["dQw4w9WgXcQ", "3JZ_D3ELwOQ", "xvFZjo5PgG0"]
      : ["M7lc1UVf-VE", "e-ORhEE9VVg", "9bZkp7q19f0"];
  
    const container = document.getElementById("videoGrid");
    container.innerHTML = "";
  
    videoIds.forEach(id => {
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${id}`;
      iframe.frameBorder = "0";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      container.appendChild(iframe);
    });
  }

  function mostrarEscolha() {
    const opcoes = document.getElementById("opcoesCanal");
    opcoes.classList.remove("hidden");
  }
  
  