import React from 'react';
import './PDFViewer.scss';

interface PDFViewerProps {
  pdfUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl }) => {
  return (
    <div className="pdf-viewer">
      <iframe
        src={`${pdfUrl}#view=FitH&zoom=100&navpanes=0`}
        title="PDF Viewer"
      />
    </div>
  );
};

export default PDFViewer; 