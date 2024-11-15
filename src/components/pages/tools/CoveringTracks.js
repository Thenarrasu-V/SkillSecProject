import React from 'react';
import Navbar from '../../common/Navbar';
import '../../pages/tools/CoveringTracks.css'; // Create a CSS file for Covering Tracks styles
import meterpreterImage from '../../Assets/meterpreter.jpg';
import wevtutilImage from '../../Assets/wevtutil.jpg';
import logsnoopImage from '../../Assets/logsnoop.jpg';

const CoveringTracks = () => {
  return (
    <div className="tool-details-page">
      <Navbar />
      <div className="content-container">
        <h1 className="tool-title">Covering Tracks Tools</h1>
        <p className="tool-description">
          Explore tools used for covering tracks in penetration testing, simulating how attackers erase evidence of their activities.
        </p>

        <div className="tool-list">
          <div className="tool-item">
            <img
              src={meterpreterImage}
              alt="Meterpreter"
              className="tool-image"
            />
            <h2 className="tool-name">Meterpreter</h2>
            <p className="tool-info">
              Meterpreter is a versatile payload that provides an interactive shell, and hide their tracks on a compromised machine.
            </p>
            <a href="https://www.offsec.com/metasploit-unleashed/meterpreter-basics/" className="download-btn">Download Meterpreter</a>
          </div>

          <div className="tool-item">
            <img
              src={wevtutilImage}
              alt="Wevtutil"
              className="tool-image"
            />
            <h2 className="tool-name">Wevtutil</h2>
            <p className="tool-info">
              Wevtutil is a command-line tool for managing, useful for removing traces of unauthorized access or activities.
            </p>
            <a href="https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/wevtutil" className="download-btn">Download Wevtutil</a>
          </div>

          <div className="tool-item">
            <img
              src={logsnoopImage}
              alt="Logsnoop"
              className="tool-image"
            />
            <h2 className="tool-name">Logsnoop</h2>
            <p className="tool-info">
              Logsnoop monitors event logs for specific entries, assisting in monitoring and managing log entries to cover tracks effectively.
            </p>
            <a href="https://www.kali.org/tools/logsnoop/" className="download-btn">Download Logsnoop</a>
          </div>
        </div>
      </div>

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

export default CoveringTracks;
