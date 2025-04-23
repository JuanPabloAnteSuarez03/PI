import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='footer-links'>
        <li>
          <Link to='/organo/higado-graso'>Hígado Graso</Link>
        </li>
        <li>
          <Link to='/organo/cirrosis-hepatica'>Cirrosis Hepática</Link>
        </li>
      </ul>
      <p className="copyright">&copy; {new Date().getFullYear()} 3D Medical Models</p>
    </footer>
  );
};

export default Footer;