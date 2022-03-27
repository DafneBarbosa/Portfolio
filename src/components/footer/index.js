import './styles.css';
import logo from '../../assets/img/header/logo.png';
import {BsGithub, BsLinkedin} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';


export default function Footer(){
    return (
    <footer id="contact">
        <div className="footer_container">
        </div>
        <img className="logo" src={logo}/>
        <div className="footer_contact">
            <h3>CONTACT ME:</h3>
            <a href={"https://www.linkedin.com/in/dafnebarbosa/"} target="_blank"> <BsLinkedin size={40} style={{marginLeft: 30}} /> </a>
            <a href={"https://github.com/DafneBarbosa"} target="_blank"><BsGithub size={40} style={{marginLeft: 30}}/></a>
            <a  href={"mailto:dafnebarbosa@hotmail.com"} target="_blank"><MdEmail size={40} style={{marginLeft: 30}}/></a>
        </div>
        
    </footer>
    );
}