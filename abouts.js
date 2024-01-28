document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.cvBtn').addEventListener('click', viewCVPDF);
  
    function viewCVPDF() {
      var pdfFile = 'CV/UyanCV.pdf'
      var link = document.createElement('a');
      link.href = pdfFile;
      link.download = 'UyanCV.pdf';
      link.click();
      window.open(pdfFile, '_blank');
    }
  });