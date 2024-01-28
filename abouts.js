document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.cvBtn').addEventListener('click', function(event) {
    var fileId = '1nP0aL9bswgc0R5t4ebEZpXB28LSWen9E';  // Replace with your actual file ID
    var embedUrl = 'https://drive.google.com/file/d/' + fileId + '/preview';

    var iframe = document.createElement('iframe');
    iframe.src = embedUrl;
    iframe.style.width = '100%';
    iframe.style.height = '600px';  // Adjust the height as needed

    var modal = document.createElement('div');
    modal.classList.add('pdf-modal');
    modal.appendChild(iframe);

    document.body.appendChild(modal);
  });
});
