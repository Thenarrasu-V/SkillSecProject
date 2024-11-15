import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, List, ListItem, ListItemText, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import Navbar from '../common/Navbar';  // Import your Navbar component
import './EncryptionAndDecryption.css'; // Import the CSS file

const EncryptionAndDecryption = () => {
  const navigate = useNavigate();
  const [openCertificate, setOpenCertificate] = useState(false);
  const studentName = "John Doe"; // Replace with dynamic student name if needed

  useEffect(() => {
    // Dynamically add Google Font link to the document head
    const link = document.createElement('link');
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    
    // Cleanup function to remove the link when component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const handleNextModule = () => {
    navigate('/netsec'); // Adjust the next module link
  };

  const generateContentPDF = () => {
    const input = document.getElementById('content-box');
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('encryption_and_decryption_content.pdf');
    });
  };

  const generatePDF = () => {
    const doc = new jsPDF('landscape', 'pt', 'a4'); // Use landscape orientation for a wider view

    // Set up professional certificate styles
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(30);
    doc.setTextColor(0, 49, 83); // Dark blue color
    doc.text('Certificate of Completion', 420, 100, { align: 'center' });

    // Add border to certificate
    doc.setDrawColor(0, 49, 83);
    doc.setLineWidth(5);
    doc.rect(20, 20, 800, 555); // Rectangle border around the certificate

    doc.setFontSize(20);
    doc.text('This is to certify that', 420, 200, { align: 'center' });

    // Student's name
    doc.setFontSize(24);
    doc.setTextColor(45, 129, 247); // Highlight student's name with a blue color
    doc.text(studentName, 420, 250, { align: 'center' });

    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0); // Reset to black color for the rest of the text
    doc.text('Has successfully completed the', 420, 300, { align: 'center' });
    doc.setFontSize(18);
    doc.text('Encryption and Decryption course', 420, 350, { align: 'center' });

    // Add completion date
    doc.setFontSize(14);
    doc.text('Issued on: ' + new Date().toLocaleDateString(), 420, 400, { align: 'center' });

    // Signature area
    doc.setFontSize(12);
    doc.text('Instructor: Jane Smith', 420, 450, { align: 'center' });
    doc.text('Cybersecurity Course Lead', 420, 470, { align: 'center' });

    // Save the generated certificate PDF in the user's Downloads folder
    doc.save('certificate_of_completion.pdf');
  };

  const handleCompleteCourse = () => {
    setOpenCertificate(true); // Open the certificate modal
  };

  const handleCloseCertificate = () => {
    setOpenCertificate(false); // Close the certificate modal
  };

  return (
    <div>
      <Navbar /> {/* Include the Navbar */}
      
      <Container maxWidth="lg" className="container">
        <Typography variant="h3" className="heading" gutterBottom>
          Encryption and Decryption
        </Typography>

        <Typography variant="h6" className="subheading" paragraph>
          Learn the fundamentals of encryption and decryption and how they are used to protect data.
        </Typography>

        <Box id="content-box" className="content-box">
          <Typography variant="h5" className="content-title" gutterBottom>
            What is Encryption and Decryption?
          </Typography>
          <Typography variant="body1" paragraph style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            Encryption is the process of converting plain text into a scrambled form to prevent unauthorized access. 
            Decryption is the reverse process that converts encrypted data back into its original form.
          </Typography>

          <Typography variant="h6" className="list-title" gutterBottom>
            Types of Encryption:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary={<strong>Symmetric Encryption:</strong>} secondary="The same key is used for both encryption and decryption." />
            </ListItem>
            <ListItem>
              <ListItemText primary={<strong>Asymmetric Encryption:</strong>} secondary="Uses a pair of keys (public and private) for encryption and decryption." />
            </ListItem>
          </List>

          <Typography variant="h5" className="content-title" gutterBottom>
            Common Encryption Algorithms:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="AES (Advanced Encryption Standard): A widely used symmetric encryption algorithm." />
            </ListItem>
            <ListItem>
              <ListItemText primary="RSA: A widely used asymmetric encryption algorithm for secure data transmission." />
            </ListItem>
          </List>

          <Typography variant="h6" className="list-title" gutterBottom>
            Cryptographic Hash Functions:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="SHA (Secure Hash Algorithm): A family of cryptographic hash functions used for data integrity." />
            </ListItem>
            <ListItem>
              <ListItemText primary="MD5: A widely used cryptographic hash function, though considered weak for certain uses." />
            </ListItem>
          </List>
        </Box>

        <Box className="button-container">
          <Button variant="contained" className="btn-primary" onClick={handleNextModule}>
            Continue to Next Module
          </Button>
          <Button variant="contained" className="btn-secondary" onClick={generateContentPDF}>
            Download PDF
          </Button>
        </Box>

        <Box className="button-container">
          <Button variant="contained" className="btn-primary" onClick={handleCompleteCourse}>
            Complete Course and Get Certificate
          </Button>
        </Box>

        {/* Certificate Modal */}
        <Dialog open={openCertificate} onClose={handleCloseCertificate}>
          <DialogTitle className="dialog-title">Certificate of Completion</DialogTitle>
          <DialogContent className="dialog-content">
            <Typography variant="h6" className="congratulations" gutterBottom>
              Congratulations, {studentName}!
            </Typography>
            <Typography variant="body1" className="message">
              You have successfully completed the Encryption and Decryption course.
            </Typography>
          </DialogContent>
          <DialogActions className="dialog-actions">
            <Button variant="contained" className="btn-primary" onClick={generatePDF}>
              Download Certificate
            </Button>
            <Button variant="contained" className="btn-close" onClick={handleCloseCertificate}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Container>

      <footer className="footer">
        <p>© 2024 SkillSec. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="/about">About SkillSec</a>
          <a href="/contact">Contact Us</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default EncryptionAndDecryption;
