const AboutTeam = ({ team }) => {
    console.log('the team', team);
    return ( 
        <div>
            <div>
                {team?.aboutTeam?.map((title) => {
                    return <h2>{title?.heading} <span className="capace-oranges">.</span></h2>
                })}
            </div>
            <div>

            </div>
        </div>
    );
}
 
export default AboutTeam;