// import{assets} from '../../../assets/assets'
import './Footer.css';

const Footer = () => {
  return (
   
    <footer className="footer">
       <div className="pic">
      {/* <img src={assets.image_bg_blue} alt="" /> */}
    </div>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} shabareenath. All rights reserved.</p>
       <div className="footer-details">
        <p>email:shabareenath9876@gmail.com</p>

       </div>
      </div>
    </footer>
  );
}

export default Footer;
