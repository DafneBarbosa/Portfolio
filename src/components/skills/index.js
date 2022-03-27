
import './styles.css';
import logo1 from '../../assets/img/skills/logo_html.png';
import logo2 from '../../assets/img/skills/logo_css-alt.png';
import logo4 from '../../assets/img/skills/logo_java.png';
import logo5 from '../../assets/img/skills/logo_aws.png';
import logo3 from '../../assets/img/skills/logo_javascript.png';
import logo6 from '../../assets/img/skills/logo_cplusplus.png';
import logo7 from '../../assets/img/skills/logo_docker.png';
import logo9 from '../../assets/img/skills/logo_github.png';
import logo10 from '../../assets/img/skills/logo_mysql.png';
import logo11 from '../../assets/img/skills/logo_react.png';



export default function Skills(){
    return (
    <div id="skills">
        <h1>MY SKILLS</h1>
        <div className="skills_list">
            <img className="skills_logo" src={logo1}/>
            <img className="skills_logo" src={logo2}/>
            <img className="skills_logo" src={logo3}/>
            <img className="skills_logo" src={logo11}/>
            <img className="skills_logo" src={logo9}/>
            <img className="skills_logo" src={logo4}/>
            <img className="skills_logo" src={logo6}/>
            <img className="skills_logo" src={logo10}/>
            <img className="skills_logo" src={logo5}/>
            <img className="skills_logo" src={logo7}/>
        </div>
        
    </div>
    );
}