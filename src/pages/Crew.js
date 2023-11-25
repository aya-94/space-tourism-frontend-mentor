import { useState } from 'react';

import jsonData from '../data.json';
import classes from './Crew.module.css';

const CrewPage = () => {
    const { crew } = jsonData;
    const [crewContainer, setCrewContainer] = useState(classes.commanderContainer);
    const [crewName, setCrewName] = useState(crew[0].name);
    const [crewRole, setCrewRole] = useState(crew[0].role);
    const [crewBio, setCrewBio] = useState(crew[0].bio);
    const [active, setActive] = useState(0);

    const HandleActive = (num) => {
        setActive(num);
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
            <h1><span>02</span>MEET YOUR CREW</h1>
                <h2>{crewRole}</h2>
                <h3>{crewName}</h3>
                <p>{crewBio}</p>
                <div className={classes.slider}>
                    <span 
                        onClick={() => HandleActive(0)}
                        className={active === 0 ? classes.active : undefined}
                        ></span>
                    <span 
                        onClick={() => HandleActive(1)}
                        className={active === 1 ? classes.active : undefined}
                        ></span>
                    <span 
                        onClick={() => HandleActive(2)}
                        className={active === 2 ? classes.active : undefined}
                        ></span>
                    <span 
                        onClick={() => HandleActive(3)}
                        className={active === 3 ? classes.active : undefined}
                        ></span>
                </div>
            </div>
                <div className={classes.crewImg}></div>
            </div>
        </div>
     );
}
 
export default CrewPage;