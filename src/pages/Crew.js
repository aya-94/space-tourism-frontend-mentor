import { useState } from 'react';

import jsonData from '../data.json';
import classes from './Crew.module.css';

const CrewPage = () => {
    const { crew } = jsonData;
    const [crewContainer, setCrewContainer] = useState(classes.commanderContainer);
    const [crewName, setCrewName] = useState(crew[0].name);
    const [crewRole, setCrewRole] = useState(crew[0].role);
    const [crewBio, setCrewBio] = useState(crew[0].bio);

    const HandleActive = (num) => {
        setCrewName(crew[num].name);
        setCrewRole(crew[num].role);
        setCrewBio(crew[num].bio);

        if (num === 0) {
            setCrewContainer(classes.commanderContainer);
        } else if (num === 1) {
            setCrewContainer(classes.specialistContainer);
        } else if (num === 2) {
            setCrewContainer(classes.pilotContainer);
        } else if (num === 3) {
            setCrewContainer(classes.engineerContainer);
        } 
    }

    return ( 
        <div className={classes.crewContainer}>
            <div className={crewContainer}>
            <div className={classes.content}>
            <h3><span>02</span>MEET YOUR CREW</h3>
                <h2>{crewRole}</h2>
                <h1>{crewName}</h1>
                <p>{crewBio}</p>
                <div className={classes.slider}>
                    <div 
                        className={classes.member1} 
                        onClick={() => HandleActive(0)}
                        ></div>
                    <div 
                        className={classes.member2} 
                        onClick={() => HandleActive(1)}
                        ></div>
                    <div 
                        className={classes.member3} 
                        onClick={() => HandleActive(2)}
                        ></div>
                    <div 
                        className={classes.member4} 
                        onClick={() => HandleActive(3)}
                        ></div>
                </div>
            </div>
                <div className={classes.crewImg}></div>
            </div>
        </div>
     );
}
 
export default CrewPage;