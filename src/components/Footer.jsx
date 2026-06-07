function Footer() {
  return (
    <footer className="footer section">
      <div className="footer-container">

        {/* Column 1: My Work */}
        <div className="footer-column">
          <h3>Portfolios</h3>
          <ul>
            <li>
              <a href="https://charan-react-portfolio.vercel.app" target="_blank" rel="noopener noreferrer">Frontend Portfolio</a>
            </li>
            <li>
              <a href="https://portfolio-site-django.onrender.com" target="_blank" rel="noopener noreferrer">Full-Stack Portfolio (Django)</a>
            </li>
          </ul>
        </div>

        {/* Column 2: Code & Professional */}
        <div className="footer-column">
          <h3>Connect</h3>
          <ul>
            <li>
              <a href="https://github.com/charanepuri" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/charan-teja-972aa9231/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Socials */}
        <div className="footer-column">
          <h3>Socials</h3>
          <ul>
            <li>
              <a href="https://www.instagram.com/_just_call_me_charan_tej/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
            <li>
              <a href="https://www.snapchat.com/add/justcalltej2003?share_id=o3MYfXqlpYE&locale=en-IN" target="_blank" rel="noopener noreferrer">Snapchat</a>
            </li>
          </ul>
        </div>

      </div>

      <div className="copyright">
        &copy; {new Date().getFullYear()} Charan Teja. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;