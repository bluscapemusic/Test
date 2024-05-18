document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const albums = document.querySelectorAll('.album');

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();

        albums.forEach(function(album) {
            const title = album.querySelector('h2').textContent.toLowerCase();
            const artist = album.querySelector('.artist').textContent.toLowerCase();
            const description = album.querySelector('.description').textContent.toLowerCase();

            if (title.includes(searchTerm) || artist.includes(searchTerm) || description.includes(searchTerm)) {
                album.style.display = 'flex';
            } else {
                album.style.display = 'none';
            }
        });
    });
});
