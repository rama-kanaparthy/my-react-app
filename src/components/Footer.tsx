import "../styles/footer.css";

const Footer: React.FC = () => {
    return (
      <footer className="footer">
        <p>© {new Date().getFullYear()} My Website. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
  