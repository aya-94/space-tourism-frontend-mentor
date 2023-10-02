import classes from './Crew.module.css';

const CrewPage = () => {
    return ( 
        <div className={classes.crewContainer}>
            <div className={classes.container}>
            <div className={classes.content}>
            <h3><span>02</span>MEET YOUR CREW</h3>
                <h2>COMMANDER</h2>
                <h1>Douglas Hurley</h1>
                <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                <div className={classes.slider}>
                    <div className={classes.member1}></div>
                    <div className={classes.member2}></div>
                    <div className={classes.member3}></div>
                    <div className={classes.member4}></div>
                </div>
            </div>
                <div className={classes.crewImg}></div>
            </div>
        </div>
     );
}
 
export default CrewPage;