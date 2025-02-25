import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D4E03AQEUREqIChSjAQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1732045012240?e=1746057600&v=beta&t=M25aAVMmsbXnz_LJRPIelFz13AC7Lk5fXuIBOUQYwIM" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/KLAW4life" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/kerene-wright-985581182/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://devpost.com/KLAW4life" target="_blank" rel="noreferrer"><EmojiEventsIcon/></a>
            <a href="mailto:wright.kerenel@example.com" target="_blank" rel="noreferrer"><EmailIcon/></a>

          </div>
          <h1>Kerene Wright</h1>
          <p>Software Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/KLAW4life" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/kerene-wright-985581182/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;