import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Button, LinearProgress, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
    const navigate = useNavigate();

    const questions = [
      {
        question: "What does HTTPS stand for?",
        options: ["HyperText Transfer Protocol Secure", "Hyper Text Transfer Protocol", "Hyper Transfer Protocol Secure", "HyperText Transmit Protocol"],
        correctAnswer: "HyperText Transfer Protocol Secure",
      },
      {
        question: "Which of the following is a common type of cyber attack?",
        options: ["Phishing", "Cross-site Scripting", "SQL Injection", "All of the above"],
        correctAnswer: "All of the above",
      },
      {
        question: "Which of the following is a strong password?",
        options: ["password123", "admin123", "Pa$$w0rd!123", "qwerty"],
        correctAnswer: "Pa$$w0rd!123",
      },
      {
        question: "What does the term 'phishing' refer to?",
        options: ["A type of network protocol", "A fraudulent attempt to acquire sensitive information", "A kind of malware", "An encryption algorithm"],
        correctAnswer: "A fraudulent attempt to acquire sensitive information",
      },
      {
        question: "Which of the following is NOT a type of malware?",
        options: ["Trojan Horse", "Ransomware", "Firewall", "Spyware"],
        correctAnswer: "Firewall",
      },
      {
        question: "What is the primary purpose of a firewall?",
        options: ["To monitor network traffic", "To protect against unauthorized access", "To store encrypted passwords", "To speed up network traffic"],
        correctAnswer: "To protect against unauthorized access",
      },
      {
        question: "What is a VPN used for?",
        options: ["To secure communication over the internet", "To speed up network traffic", "To allow remote desktop access", "To monitor employee activities"],
        correctAnswer: "To secure communication over the internet",
      },
      {
        question: "What is the function of a DDoS attack?",
        options: ["To gain unauthorized access to data", "To encrypt data for ransom", "To flood a network with traffic to overload it", "To steal personal information"],
        correctAnswer: "To flood a network with traffic to overload it",
      },
      {
        question: "Which of the following is an example of social engineering?",
        options: ["Malware infection", "Phishing email", "Spyware", "Ransomware"],
        correctAnswer: "Phishing email",
      },
      {
        question: "What is 'two-factor authentication'?",
        options: ["Using a username and password", "Using a password and a security token", "Using a password and biometric data", "Using a username and PIN"],
        correctAnswer: "Using a password and biometric data",
      },
      {
        question: "Which of the following is a secure protocol for transferring files over the internet?",
        options: ["FTP", "SFTP", "HTTP", "SMTP"],
        correctAnswer: "SFTP",
      },
      {
        question: "Which type of malware locks a computer system and demands payment for its release?",
        options: ["Ransomware", "Virus", "Trojan", "Spyware"],
        correctAnswer: "Ransomware",
      },
      {
        question: "What does the acronym SQL stand for?",
        options: ["Simple Query Language", "Structured Query Language", "Security Query Language", "Single Query Language"],
        correctAnswer: "Structured Query Language",
      },
      {
        question: "What is a botnet?",
        options: ["A network of bots", "A software used for encrypting data", "A malware used for phishing", "A group of infected computers controlled remotely"],
        correctAnswer: "A group of infected computers controlled remotely",
      },
      {
        question: "Which of the following is a key factor in preventing data breaches?",
        options: ["Employee training", "Encryption", "Strong passwords", "All of the above"],
        correctAnswer: "All of the above",
      },
      {
        question: "What does the term 'zero-day exploit' refer to?",
        options: ["An exploit that takes advantage of an unknown vulnerability", "A type of phishing attack", "A type of encryption method", "A secure way to manage passwords"],
        correctAnswer: "An exploit that takes advantage of an unknown vulnerability",
      },
      {
        question: "What is a public key in public key encryption?",
        options: ["A key used to encrypt data", "A key used to decrypt data", "A unique password", "A key shared by all users"],
        correctAnswer: "A key used to encrypt data",
      },
      {
        question: "What is the primary function of antivirus software?",
        options: ["To prevent malware infections", "To encrypt sensitive data", "To manage network traffic", "To prevent email phishing attacks"],
        correctAnswer: "To prevent malware infections",
      },
      {
        question: "Which of the following is a method of encrypting data?",
        options: ["Symmetric encryption", "Asymmetric encryption", "Hashing", "All of the above"],
        correctAnswer: "All of the above",
      },
      {
        question: "What is the purpose of a honeypot in cybersecurity?",
        options: ["To trap hackers and learn their methods", "To store sensitive data", "To back up data", "To manage network security"],
        correctAnswer: "To trap hackers and learn their methods",
      },
      {
        question: "What is a man-in-the-middle attack?",
        options: ["An attack where the attacker intercepts communication between two parties", "An attack that injects malicious code into a webpage", "An attack that exploits software vulnerabilities", "An attack that spreads via email"],
        correctAnswer: "An attack where the attacker intercepts communication between two parties",
      },
      {
        question: "What does 'patch management' refer to?",
        options: ["Managing network security policies", "Updating software to fix security vulnerabilities", "Setting up firewalls", "Storing backup data"],
        correctAnswer: "Updating software to fix security vulnerabilities",
      },
      {
        question: "Which of the following is an example of a phishing attempt?",
        options: ["A fake email asking for account details", "An encrypted password", "A firewall alert", "A legitimate security update"],
        correctAnswer: "A fake email asking for account details",
      },
      {
        question: "Which of the following is the best way to secure your Wi-Fi network?",
        options: ["Use WPA3 encryption", "Use WEP encryption", "Disable the network", "Use an unsecured password"],
        correctAnswer: "Use WPA3 encryption",
      },
      {
        question: "Which type of attack involves an attacker sending fraudulent emails that appear to come from a trusted source?",
        options: ["Phishing", "Spoofing", "Spamming", "Ransomware"],
        correctAnswer: "Phishing",
      },
      {
        question: "What is the role of a 'Certificate Authority' in cybersecurity?",
        options: ["To issue digital certificates that verify the authenticity of websites", "To block malware", "To control internet traffic", "To encrypt data"],
        correctAnswer: "To issue digital certificates that verify the authenticity of websites",
      },
      {
        question: "Which of the following is NOT a strong security practice for creating passwords?",
        options: ["Using a mix of letters, numbers, and special characters", "Changing passwords regularly", "Reusing the same password for multiple accounts", "Enabling multi-factor authentication"],
        correctAnswer: "Reusing the same password for multiple accounts",
      },
      {
        question: "What is a common method used to ensure the integrity of a file or message?",
        options: ["Encryption", "Hashing", "Compression", "Firewalling"],
        correctAnswer: "Hashing",
      },
      {
        question: "Which of the following is a security measure to protect against brute-force attacks?",
        options: ["Limiting login attempts", "Using multi-factor authentication", "Encrypting passwords", "All of the above"],
        correctAnswer: "All of the above",
      },
      {
        question: "What is a keylogger?",
        options: ["A type of malware that logs keystrokes", "A type of firewall", "A software used to encrypt data", "A type of botnet"],
        correctAnswer: "A type of malware that logs keystrokes",
      },
      {
        question: "What is an encryption algorithm used to protect data?",
        options: ["AES", "SHA", "RSA", "All of the above"],
        correctAnswer: "All of the above",
      },
      {
        question: "What is a rootkit?",
        options: ["A type of malware designed to hide its existence", "A type of encryption algorithm", "A method of hacking passwords", "A method of securing a network"],
        correctAnswer: "A type of malware designed to hide its existence",
      },
      {
        question: "Which of the following is a form of attack that involves sending a flood of traffic to a server to overload it?",
        options: ["DoS Attack", "DDoS Attack", "Phishing Attack", "Man-in-the-middle Attack"],
        correctAnswer: "DDoS Attack",
      },
      {
        question: "What does the term 'cryptojacking' refer to?",
        options: ["Using a victim’s computer to mine cryptocurrency", "Encrypting files for ransom", "Sending fraudulent emails", "Accessing data from a remote location"],
        correctAnswer: "Using a victim’s computer to mine cryptocurrency",
      },
      {
        question: "What is a vulnerability scanner used for?",
        options: ["To scan for malware", "To detect weaknesses in systems", "To monitor network traffic", "To encrypt files"],
        correctAnswer: "To detect weaknesses in systems",
      },
      {
        question: "Which of the following is a secure communication protocol?",
        options: ["TLS", "SSL", "HTTPS", "All of the above"],
        correctAnswer: "All of the above",
      },
      {
        question: "What does 'social engineering' mean in cybersecurity?",
        options: ["Manipulating people into divulging confidential information", "Breaking into secure networks", "Using malware to steal data", "Cracking passwords"],
        correctAnswer: "Manipulating people into divulging confidential information",
      },
      {
        question: "Which of the following is a major source of malware infections?",
        options: ["Email attachments", "Unpatched software", "Infected websites", "All of the above"],
        correctAnswer: "All of the above",
      },
      {
        question: "What is an exploit in cybersecurity?",
        options: ["A type of software vulnerability", "A type of encryption algorithm", "A form of malware", "A security protocol"],
        correctAnswer: "A type of software vulnerability",
      },
      {
        question: "What is the best way to protect against SQL injection attacks?",
        options: ["Input validation", "Using firewalls", "Encrypting data", "Running a vulnerability scanner"],
        correctAnswer: "Input validation",
      }
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [correctAnswerVisible, setCorrectAnswerVisible] = useState(false);
    const [timer, setTimer] = useState(3000); // Timer starts at 60 seconds
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [badge, setBadge] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);

    // Timer logic
    useEffect(() => {
        if (timer > 0 && !quizCompleted) {
            const interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);

            return () => clearInterval(interval); // Cleanup interval when the component unmounts or timer changes
        } else if (timer === 0) {
            handleTestComplete(); // Automatically end the quiz when time is up
        }
    }, [timer, quizCompleted]);

    const handleAnswerSelection = (option) => {
        if (selectedAnswer === null) {
            setSelectedAnswer(option);
            if (option === questions[currentQuestionIndex].correctAnswer) {
                setScore((prevScore) => prevScore + 1);
            }
            setCorrectAnswerVisible(true);
        }
    };

    const handleNextQuestion = () => {
        setSelectedAnswer(null);
        setCorrectAnswerVisible(false);
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    };

    const handleTestComplete = () => {
        setQuizCompleted(true); // Mark quiz as complete
        setBadge(getBadge(score)); // Assign a badge based on the score
        setOpenSnackbar(true); // Show completion message
    };

    const handleRestart = () => {
        setQuizCompleted(false);
        setScore(0);
        setCurrentQuestionIndex(0);
        setTimer(3000); // Reset the timer to 60 seconds
        setBadge('');
    };

    const handleBack = () => {
        navigate('/learn'); // Assuming LearnPage is at the root path '/'
    };

    // Badge assignment logic
    const getBadge = (score) => {
        if (score === questions.length) return 'Master';
        if (score >= questions.length * 0.8) return 'Expert';
        if (score >= questions.length * 0.5) return 'Intermediate';
        return 'Beginner';
    };

    return (
        <Container maxWidth="lg" style={{ backgroundColor: '#F0F9F0', padding: '2rem', borderRadius: '8px', minHeight: '100vh' }}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h4" component="h1">Cybersecurity Quiz</Typography>
                <Typography variant="h6">{score} / {questions.length}</Typography>
            </Box>

            <Box mt={4} mb={2}>
                <LinearProgress variant="determinate" value={(currentQuestionIndex / questions.length) * 100} />
                <Typography variant="subtitle1">Question {currentQuestionIndex + 1} / {questions.length}</Typography>
                <Typography variant="subtitle1" color="error">{timer} Seconds Left</Typography> {/* Display Timer */}
            </Box>

            {!quizCompleted ? (
                <>
                    <Typography variant="h5" gutterBottom>{questions[currentQuestionIndex].question}</Typography>

                    <Box mt={2}>
                        {questions[currentQuestionIndex].options.map((option) => {
                            const isSelected = selectedAnswer === option;
                            const isCorrect = option === questions[currentQuestionIndex].correctAnswer;
                            let buttonColor = 'default';

                            if (isSelected) {
                                buttonColor = isCorrect ? 'success' : 'error'; // Color based on whether the answer is correct or not
                            }

                            const buttonStyle = {
                                marginBottom: '0.5rem',
                                backgroundColor: isCorrect && correctAnswerVisible ? 'green' : (isSelected && !isCorrect ? 'red' : undefined),
                                color: 'black', // Set text color to black
                            };

                            return (
                                <Button
                                    key={option}
                                    variant="contained"
                                    color={buttonColor}
                                    onClick={() => handleAnswerSelection(option)}
                                    fullWidth
                                    style={buttonStyle}
                                    disabled={selectedAnswer !== null}
                                >
                                    {option}
                                </Button>
                            );
                        })}
                    </Box>

                    <Box mt={4} display="flex" justifyContent="center">
                        {currentQuestionIndex < questions.length - 1 ? (
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={handleNextQuestion}
                                disabled={selectedAnswer === null}
                            >
                                Next Question
                            </Button>
                        ) : (
                            <Typography variant="h6">Quiz Complete!</Typography>
                        )}
                    </Box>
                </>
            ) : (
                // Show Test Complete section with Badge
                <Box textAlign="center">
                    <Typography variant="h4" color="primary">Test Complete!</Typography>
                    <Typography variant="h6">Your Score: {score} / {questions.length}</Typography>
                    <Typography variant="h6">Badge Earned: {badge}</Typography> {/* Display Badge */}
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleRestart}
                        style={{ marginTop: '2rem' }}
                    >
                        Restart Quiz
                    </Button>
                </Box>
            )}

            {/* Back button */}
            <Box mt={4} textAlign="left">
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleBack}
                    style={{ marginTop: '1rem' }}
                >
                    Back to Learn Page
                </Button>
            </Box>

            {/* Snackbar to show completion message */}
            <Snackbar
    open={openSnackbar}
    message={`Quiz completed! You earned a ${badge} badge with ${score} points.`}
    autoHideDuration={6000}
    onClose={() => setOpenSnackbar(false)}
/>

        </Container>
    );
};

export default QuizPage;