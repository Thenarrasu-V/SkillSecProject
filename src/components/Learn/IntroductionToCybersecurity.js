import React, { useState } from 'react';
import { Container, Typography, Box, Button, List, ListItem, ListItemText, Dialog, DialogActions, DialogContent, DialogTitle, LinearProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import './IntroductionToCybersecurity.css';
import Navbar from '../common/Navbar';

const IntroductionToCybersecurity = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(50); // Set initial progress
  const [openCertificate, setOpenCertificate] = useState(false);
  const studentName = "John Doe"; // Replace with dynamic student name if needed

  const handleNextModule = () => {
    navigate('/enc-dec');
  };

  const generateContentPDF = () => {
    const input = document.getElementById('content-box');
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('cybersecurity_content.pdf');
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
    doc.text('Introduction to Cybersecurity course', 420, 350, { align: 'center' });

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
        <Navbar/>
    <Container maxWidth="lg" className="container">
      <Typography variant="h3" align="center" gutterBottom className="heading">
        Introduction to Cybersecurity
      </Typography>

      <Typography variant="h6" align="center" paragraph className="subheading">
        Learn the basics of cybersecurity and why it is essential in today's digital world.
      </Typography>

      <Box id="content-box" className="content-box">
        <Typography variant="h5" gutterBottom className="content-title">
          What is Cybersecurity?
        </Typography>
        <Typography variant="body1" paragraph className="content-text">
          Cybersecurity involves protecting internet-connected systems, including hardware, software, and data, from cyberattacks.
          It is essential in today's digital world where personal, corporate, and government information is constantly under threat from cybercriminals.
        </Typography>

        <Typography variant="h6" gutterBottom className="content-subtitle">
          Key Concepts in Cybersecurity:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary={<strong>Confidentiality:</strong>} secondary="Ensuring that information is accessible only to those authorized to access it." />
          </ListItem>
          <ListItem>
            <ListItemText primary={<strong>Integrity:</strong>} secondary="Safeguarding the accuracy and completeness of information and processing methods." />
          </ListItem>
          <ListItem>
            <ListItemText primary={<strong>Availability:</strong>} secondary="Ensuring that authorized users have access to information and associated assets when required." />
          </ListItem>
        </List>

        <Typography variant="h5" gutterBottom className="content-title">
          Common Cybersecurity Threats:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Malware: Software designed to disrupt or damage systems, such as viruses and worms." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Phishing: A method used to deceive users into revealing confidential information, typically via fraudulent emails." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Denial of Service (DoS): An attack that overwhelms a system, making it unavailable to users." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Man-in-the-Middle (MitM) Attacks: Where attackers intercept and alter communications between two parties." />
          </ListItem>
        </List>
      </Box>

      <Typography variant="h6" gutterBottom className="progress-title">
        Your Progress:
      </Typography>
      <LinearProgress variant="determinate" value={progress} style={{ marginBottom: '1rem' }} />

      <Box mt={4} textAlign="center">
        <Button variant="contained" color="primary" className="button-primary" onClick={handleNextModule}>
          Continue to Next Module
        </Button>
        <Button variant="contained" color="secondary" className="button-secondary" onClick={generateContentPDF}>
          Download PDF
        </Button>
      </Box>

      <Box mt={4} textAlign="center">
        <Button variant="contained" color="primary" className="certificate-button" onClick={handleCompleteCourse}>
          Complete Course and Get Certificate
        </Button>
      </Box>

      <Dialog open={openCertificate} onClose={handleCloseCertificate}>
        <DialogTitle>Certificate of Completion</DialogTitle>
        <DialogContent>
          <Typography variant="h6" gutterBottom>
            Congratulations, {studentName}!
          </Typography>
          <Typography variant="body1" className="dialog-text">
            You have successfully completed the Introduction to Cybersecurity course.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCertificate} color="primary">
            Close
          </Button>
          <Button onClick={generatePDF} color="primary">
            Download Certificate
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

export default IntroductionToCybersecurity;