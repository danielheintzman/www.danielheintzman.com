const videos = document.querySelectorAll('.video');

console.log(videos);

videos.forEach(function(vid) {
vid.classList.remove('lazy-hidden');
})

