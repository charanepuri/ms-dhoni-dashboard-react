function Footer() {
  return (
    <footer className="footer">

      {/* Glowing Jersey */}
      <h1 className="jersey">7</h1>

      {/* Developer Credit */}
      <p className="footer-text">
        Designed & Developed By <strong>Charan Teja Epuri</strong>
      </p>

      {/* Social Links */}
      <div className="social-links">
        <a href="https://www.linkedin.com/in/charan-teja-972aa9231/" target="_blank">LinkedIn</a>
        <a href="https://github.com/charanepuri" target="_blank">GitHub</a>
        <a href="https://www.instagram.com/_just_call_me_charan_tej/" target="_blank">Instagram</a>
        <a href="https://www.snapchat.com/add/justcalltej2003?share_id=o3MYfXqlpYE&locale=en-IN" target="_blank">Snapchat</a>
      </div>

      {/* Tribute Message */}
      <p className="tribute">
        This fan-made dashboard is a tribute to my idol <strong>M.S. Dhoni </strong> 
         and to all the fans who admire his legacy, leadership, and greatness.
      </p>

      {/* Copyright */}
      <p className="copyright">
        © {new Date().getFullYear()} Fan Made Dashboard
      </p>

    </footer>
  )
}
export default Footer;