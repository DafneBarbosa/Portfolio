import './styles.css';
import {DiCss3, DiHtml5, DiGithubBadge} from 'react-icons/di';
import {SiJavascript} from 'react-icons/si';

export default function Card(props){
    return(
        <div className="project_card">
            <a href={props.link} target="_blank"><img className="project_image" src={props.image} /></a>
            <div className="project_text">
                <h2 className="project_title">{props.title}</h2>
                <p className="project_description">{props.description}</p>
                <div className="projects_icons">
                    <p>Tools: </p>
                    <DiCss3 size={30}/>
                    <DiHtml5 size={30}/>
                    <SiJavascript size={25}/>
                </div>
                <div className="project_github">
                    <a href={props.github} target="_blank"><DiGithubBadge size={50}/></a>
                </div>
            </div>
        </div>
        
    );
}