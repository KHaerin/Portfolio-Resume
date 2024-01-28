document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.cvBtn').addEventListener('click', function(event) {
    var pdfUrl = 'myCV/UyanCV.pdf';

    
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank'; 
    link.download = 'Uyan.pdf'; 
  
   
    document.body.appendChild(link);
  
  
    link.click();
  
    
    document.body.removeChild(link);
  });
});
