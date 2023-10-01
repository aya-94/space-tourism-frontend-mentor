import { useState } from 'react';

import jsonData from '../data.json';
import classes from './Destination.module.css';


const DestinationPage = () => {
    const { destinations } = jsonData;
    const [planetImg, setPlanetImg] = useState(destinations[0].images.png);
    const [planetTitle, setPlanetTitle] = useState(destinations[0].name);
    const [planetParagraph, setPlanetParagraph] = useState(destinations[0].description);
    const [planetDistance, setPlanetDistance] = useState(destinations[0].distance);
    const [planetTravelTime, setPlanetTravelTime] = useState(destinations[0].travel);

    return ( 
        <>
            <h3><span>01</span>PICK YOUR DESTINATION</h3>
            <div className={classes.container}>
                <div className={classes.image}></div>
                <div className={classes.content}>
                    <div className="planets">
                        <nav>
                            <ul>
                                <li>MOON</li>
                                <li>MARS</li>
                                <li>EUROPA</li>
                                <li>TITAN</li>
                            </ul>
                        </nav>
                    </div>
                    <h1>{planetTitle}</h1>
                    <p>{planetParagraph}</p>
                    <span></span>
                    <div className="info">
                        <div className="distance">
                            <h4>AVG. DISTANCE</h4>
                            <p>{planetDistance}</p>
                        </div>
                        <div className="travel-time">
                            <h4>EST. TRAVEL TIME</h4>
                            <p>{planetTravelTime}</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
     );
}
 
export default DestinationPage;