document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.cvBtn').addEventListener('click', viewCVPDF);
  
    function viewCVPDF() {
      var fileId = '1nP0aL9bswgc0R5t4ebEZpXB28LSWen9E';
      var downloadLink = 'https://drive.google.com/uc?id=' + fileId;
      var link = document.createElement('a');
      link.href = downloadLink;
      link.download = 'UyanCV.pdf';
      link.click();
      window.open(pdfFile, '_blank');
    }
  });

