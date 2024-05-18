document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('artist-search');
    const artists = document.querySelectorAll('.artist');

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();

        artists.forEach(function(artist) {
            const name = artist.querySelector('h2').textContent.toLowerCase();
            const genres = artist.querySelector('.genres').textContent.toLowerCase();
            const description = artist.querySelector('.description').textContent.toLowerCase();

            if (name.includes(searchTerm) || genres.includes(searchTerm) || description.includes(searchTerm)) {
                artist.style.display = 'flex';
            } else {
                artist.style.display = 'none';
            }
        });
    });
});
