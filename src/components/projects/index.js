import {useState} from 'react';
import './styles.css';
import data from './projects_data.js';
import Card from './components/card.js';



export default function Projects(){

    const [projects, setProjects] = useState(data);

    return (
    <div id="projects">
        <h1>PROJECTS</h1>
        <div className="projects_list">
            {projects.map(({name, description, image, link, github}) =>(
                <Card title={name} description={description} image={image} link={link} github={github}/>
            ))}
        </div>
        
    </div>
    );
}