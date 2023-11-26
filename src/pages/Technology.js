import { useState } from 'react';

import jsonData from '../data.json';
import classes from './Technology.module.css';

const TechnologyPage = () => {
    const { technology } = jsonData;
    const [technologyContainer, setTechnologyContainer] = useState(classes.launchContainer);
    const [technologyName, setTechnologyName] = useState(technology[0].name);
    const [technologyDescription, setTechnologyDescription] = useState(technology[0].description);
    const [active, setActive] = useState(0);

    const HandleActive = (num) => {
        setActive(num);
        setTechnologyName(technology[num].name);
        setTechnologyDescription(technology[num].description);


        if (num === 0) {
            setTechnologyContainer(classes.launchContainer);
        } else if (num === 1) {
            setTechnologyContainer(classes.spaceportContainer);
        } else if (num === 2) {
            setTechnologyContainer(classes.capsuleContainer);
        }
    }

    return ( 
        <div className={classes.technologyContainer}>
            <h1><span>03</span>SPACE LAUNCH 101</h1>
            <div className={technologyContainer}>
                <div className={classes.content}>
                    <div className={classes.text}>
                        <h2>THE TERMINOLOGY…</h2>
                        <h3>{technologyName}</h3>
                        <p>{technologyDescription}</p>
                    </div>
                    <div className={classes.slider}>
                        <span 
                            onClick={() => HandleActive(0)}
                            className={active === 0 ? classes.active : undefined}
                            >1</span>
                        <span 
                            onClick={() => HandleActive(1)}
                            className={active === 1 ? classes.active : undefined}
                            >2</span>
                        <span 
                            onClick={() => HandleActive(2)}
                            className={active === 2 ? classes.active : undefined}
                            >3</span>
                    </div>
            </div>
                <div className={classes.technologyImg}></div>
            </div>
        </div>
     );
}
 
export default TechnologyPage;