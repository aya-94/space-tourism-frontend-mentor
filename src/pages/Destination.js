import { useState } from 'react';

import jsonData from '../data.json';
import classes from './Destination.module.css';


const DestinationPage = () => {
    const { destinations } = jsonData;
    const [planetImg, setPlanetImg] = useState(classes.moon);
    const [planetTitle, setPlanetTitle] = useState(destinations[0].name);
    const [planetParagraph, setPlanetParagraph] = useState(destinations[0].description);
    const [planetDistance, setPlanetDistance] = useState(destinations[0].distance);
    const [planetTravelTime, setPlanetTravelTime] = useState(destinations[0].travel);
    const [active, setActive] = useState(0);

    const HandleActive = (num) => {
        setActive(num);
        setPlanetTitle(destinations[num].name);
        setPlanetParagraph(destinations[num].description);
        setPlanetDistance(destinations[num].distance);
        setPlanetTravelTime(destinations[num].travel);

        if (num === 0) {
            setPlanetImg(classes.moon);
        } else if (num === 1) {
            setPlanetImg(classes.mars);
        } else if (num === 2) {
            setPlanetImg(classes.europa);
        } else if (num === 3) {
            setPlanetImg(classes.titan);
        }
    }

    return ( 
        <div className={classes.destinationContainer}>
            <h1><span>01</span>PICK YOUR DESTINATION</h1>
            <div className={classes.container}>
                <div className={planetImg}></div>
                <div className={classes.content}>
                    <div className={classes.planets}>
                        <nav>
                            <ul>
                                <li 
                                    onClick={() => HandleActive(0)}
                                    className={active === 0 ? classes.active : undefined}
                                    >MOON</li>
                                <li 
                                    onClick={() => HandleActive(1)}
                                    className={active === 1 ? classes.active : undefined}
                                    >MARS</li>
                                <li 
                                    onClick={() => HandleActive(2)}
                                    className={active === 2 ? classes.active : undefined}
                                    >EUROPA</li>
                                <li 
                                    onClick={() => HandleActive(3)}
                                    className={active === 3 ? classes.active : undefined}
                                    >TITAN</li>
                            </ul>
                        </nav>
                    </div>
                    <h3>{planetTitle}</h3>
                    <p>{planetParagraph}</p>
                    <div className={classes.line}></div>
                    <div className={classes.info}>
                        <div>
                            <h4>AVG. DISTANCE</h4>
                            <p>{planetDistance}</p>
                        </div>
                        <div>
                            <h4>EST. TRAVEL TIME</h4>
                            <p>{planetTravelTime}</p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
     );
}
 
export default DestinationPage;