import './styles.css';
import logo from '../../assets/img/header/logo.png';
import { DropdownButton, Dropdown } from 'react-bootstrap';

export default function Header(){
    return (
    <header>
        <img className="logo" src={logo}/>

        <DropdownButton align="end" title="MENU" id="dropdown-menu-align-end">
            <Dropdown.Divider />
            <Dropdown.Item href="#about">About</Dropdown.Item>
            <Dropdown.Item href="#skills">Skills</Dropdown.Item>
            <Dropdown.Item href="#projects">Projects</Dropdown.Item>
            <Dropdown.Item href="#contact">Contact</Dropdown.Item>
            <Dropdown.Divider />
        </DropdownButton>

        <div className="menu">
            <a className="link_menu" href="#about">About</a>
            <a className="link_menu" href="#skills">Skills</a>
            <a className="link_menu" href="#projects">Projects</a>
            <a className="link_menu" href="#contact">Contact</a>
        </div>
    </header>
    );
}