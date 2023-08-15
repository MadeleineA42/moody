// // Set a cross-site cookie with SameSite=None and Secure
// function setCrossSiteCookie(name, value, days) {
//     var expires = days ? `; expires=${new Date(Date.now() + days * 86400000).toUTCString()}` : '';
//     document.cookie = `${name}=${value}${expires}; path=/; SameSite=Lax; Secure`;
//   }
  
  // API call
  gapi.load('client', () => {
    gapi.client.init({
      apiKey: 'AIzaSyBf6rgXuxtUMPxFJEtNDLxqX2Li_B4TK7I'
    }).then(() => {
      return gapi.client.load('youtube', 'v3');
    }).then(() => {
      searchFunnyCatVideos()
        .then(displayAvailableVideos)
        .catch(error => console.error('Error searching for videos:', error));
    }).catch(error => {
      console.error('Error initializing API client:', error);
    });
  });
  
  // Search for funny cat videos
  function searchFunnyCatVideos() {
    return gapi.client.youtube.search.list({
      part: 'snippet',
      q: 'funny animals', // Search specifically for funny cat videos
      type: 'video', // Only search for video content
      videoEmbeddable: 'true' // Filter out videos that cannot be embedded
    });
  }
  

function displayAvailableVideos(response) {
    var videos = response.result.items; // Get all videos from the API response
    var videoContainer = document.getElementById('video-container');
  
    // Clear previous videos
    videoContainer.innerHTML = '';
  
    let displayedVideoCount = 0;
  
    videos.forEach(video => {
      if (displayedVideoCount >= 9) {
        return; // Displayed the desired number of videos
      }
  
      var videoId = video.id.videoId;
      var videoStatus = video.snippet.liveBroadcastContent;
  
      if (videoStatus !== 'none') { // Check if video is live or scheduled
        return; // Skip live or scheduled videos
      }
  
      var iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${videoId}`;
      iframe.width = '280';
      iframe.height = '157.5';
      iframe.allowFullscreen = true; 
      videoContainer.appendChild(iframe);
  
      displayedVideoCount++;
    });
  }
  
  