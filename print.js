document
  .getElementById('printPdf')
  .addEventListener('click', async function () {
    const { jsPDF } = window.jspdf;

    // Initialize jsPDF for A4 size
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const contentDiv = document.getElementById('contentToPrint');

    // Convert the div to a canvas using html2canvas
    const canvas = await html2canvas(contentDiv, {
      scale: 2, // Increase resolution
      useCORS: true, // Ensure cross-origin content is loaded
    });

    // Get the image data from the canvas
    const imgData = canvas.toDataURL('image/png');

    // Get A4 dimensions in mm
    const pageWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm

    // Get the image dimensions
    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * pageWidth) / canvas.width;

    // Add the image to the PDF
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

    // Save the PDF
    pdf.save('content.pdf');
  });

async function html2canvas(element, options = {}) {
  const html2canvasScript = document.createElement('script');
  html2canvasScript.src =
    'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
  document.head.appendChild(html2canvasScript);
  await new Promise((resolve) => (html2canvasScript.onload = resolve));
  return window.html2canvas(element, options);
}
