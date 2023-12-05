import { FaTwitter, FaInstagram, FaReddit, FaLinkedinIn } from 'react-icons/fa';

const RedesSociales = () => {

  const iconStyle = {
    fontSize: "2rem", 
    margin: '0.5em', 
  };

  return (
    <div>
      <a href="https://twitter.com/@brixol" target="_blank" rel="noopener noreferrer">
        <FaTwitter style={iconStyle} />
      </a>
      <a href="https://www.reddit.com/?rdt=34247&onetap_auto=true" target="_blank" rel="noopener noreferrer">
        <FaReddit style={iconStyle}/> 
      </a>
      <a href="https://www.instagram.com/_martincito_" target="_blank" rel="noopener noreferrer">
        <FaInstagram style={iconStyle}/>
      </a>
       <a href="https://www.linkedin.com/in/leandro-martin-elgart-7ba453293/" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn style={iconStyle}/>
      </a>
    </div>
  );
};

export default RedesSociales;
