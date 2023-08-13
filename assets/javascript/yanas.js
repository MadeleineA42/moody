// // Set a cross-site cookie with SameSite=None and Secure
// function setCrossSiteCookie(name, value, days) {
//     const expires = days ? `; expires=${new Date(Date.now() + days * 86400000).toUTCString()}` : '';
//     document.cookie = `${name}=${value}${expires}; path=/; SameSite=Lax; Secure`;
//   }
  
  // Load the API client and set API Key
  gapi.load('client', () => {
    gapi.client.init({
      apiKey: 'AIzaSyBf6rgXuxtUMPxFJEtNDLxqX2Li_B4TK7I'
    }).then(() => {
      // API client has been successfully initialized
      // Load the YouTube Data API
      return gapi.client.load('youtube', 'v3');
    }).then(() => {
      // YouTube Data API is loaded, you can now use gapi.client.youtube.search.list
      // Automatically load and display available funny cat videos when the page loads
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
  
  // Display available videos on the page
// Display available videos on the page
function displayAvailableVideos(response) {
    const videos = response.result.items; // Get all videos from the API response
    const videoContainer = document.getElementById('video-container');
  
    // Clear previous videos
    videoContainer.innerHTML = '';
  
    let displayedVideoCount = 0;
  
    videos.forEach(video => {
      if (displayedVideoCount >= 9) {
        return; // Displayed the desired number of videos
      }
  
      const videoId = video.id.videoId;
      const videoStatus = video.snippet.liveBroadcastContent;
  
      if (videoStatus !== 'none') { // Check if video is live or scheduled
        return; // Skip live or scheduled videos
      }
  
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${videoId}`;
      iframe.width = '280';
      iframe.height = '157.5';
      iframe.allowFullscreen = true; // Enable fullscreen mode
      videoContainer.appendChild(iframe);
  
      displayedVideoCount++;
    });
  }
  
  