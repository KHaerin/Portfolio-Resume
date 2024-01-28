document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.cvBtn').addEventListener('click', function(event) {
      event.preventDefault(); 

      var fileId = '1nP0aL9bswgc0R5t4ebEZpXB28LSWen9E';  
      var downloadLink = 'https://drive.google.com/uc?id=' + fileId;

      var xhr = new XMLHttpRequest();
      xhr.open('GET', downloadLink, true);
      xhr.responseType = 'blob';

      xhr.onload = function () {
          var blob = new Blob([xhr.response], { type: 'application/pdf' });
          var url = URL.createObjectURL(blob);
          window.open(url, '_blank');
      };

      xhr.send();
  });
});
