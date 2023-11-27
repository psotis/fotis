// index.js

document.addEventListener('DOMContentLoaded', function () {
  // This ensures the HTML is injected after the document has fully loaded.

  // Replace 'yourfile.pdf' with the actual path to your PDF file
  const pdfPath = 'path/to/yourfile.pdf';

  // PDF.js setup
  const pdfjsLib = window['pdfjs-dist/build/pdf'];

  // The workerSrc property should be set to the location of the PDF.js worker file
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@2.7.570/build/pdf.worker.min.js';

  // Fetch the PDF document
  pdfjsLib.getDocument(pdfPath).then(function (pdfDocument) {
    // Get the first page of the PDF
    pdfDocument.getPage(1).then(function (pdfPage) {
      // Set up the canvas element
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      const viewport = pdfPage.getViewport({ scale: 1 });

      // Set the canvas size to match the PDF page
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      // Append the canvas to the body
      document.body.appendChild(canvas);

      // Render the PDF page to the canvas
      pdfPage.render({ canvasContext: context, viewport: viewport });
    });
  });
});
