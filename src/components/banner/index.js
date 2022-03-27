import {useEffect, useState} from 'react';
import './styles.css';
import foto from '../../assets/img/banner/Foto.jpg';
import data from './adds_data';


export default function Banner(){

    let i = 0;
    const[add,setAdds] = useState(data[i]);
    

    
    useEffect(() =>{
        setInterval(() => {
            timing();
            setAdds(data[i]);
            console.log(data[i])
          }, 3000);
    }, [i])

    function timing(){
        if(i<2){
            return i++;
        } else {
            return i=0;
        }
    }
    
    return (
    <div className="banner">
        <div className="description">
            <div className="triangle-background"></div>
            <div className="triangle-background-weak"></div>
            <div className="triangle-background-strong"></div>
            <h1>Hi, my name is Dafne</h1>
            <h3>I'm a full stack developer </h3>
            <p></p>
            <div className="changing_container">
                <h3 className="changing_text">and a {add.title}</h3>
                <img className="changing_image" src={add.image}/>
            </div>
            
            <div className="footer-two"></div>
            <div className="footer"></div>
        </div>
        <img className="foto" src={foto}/>
    </div>
    );
}