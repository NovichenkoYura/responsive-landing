import "./team.scss"
import team1 from '../../images/team_1.png';
import team2 from '../../images/team_2.png';
import team3 from '../../images/team_3.png';
import team4 from '../../images/team_4.png';

export const Team = () =>{
    return (
        <div className="team center">
            <div className="max1170">
                <div className="team-wrap flexColumnJustifyBetween">
                    <div className="team-heading">
                        <h2>Lovely Team Member</h2>
                        <p>Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de
							standaard proeftekst in deze bedrijfstak sinds.</p>

                    </div>
                    <div className="team-c-elem between">
                        <div className="team-elem">
                            <img src={team1} className="team-img" alt="team1"/>
                            <div className="team-description ">
                                <h5>Sathi Bhuiyan</h5>
                                <h6>Lovely Designer</h6>
                            </div>
                        </div>
                        <div className="team-elem">
                            <img src={team2} className="team-img" alt="team1"/>
                            <div className="team-description hidden">
                                <h5>Sathi Bhuiyan</h5>
                                <h6>Lovely Designer</h6>
                            </div>
                        </div>
                        <div className="team-elem">
                            <img src={team3} className="team-img" alt="team1"/>
                            <div className="team-description hidden">
                                <h5>Sathi Bhuiyan</h5>
                                <h6>Lovely Designer</h6>
                            </div>
                        </div>
                        <div className="team-elem">
                            <img src={team4} className="team-img" alt="team1"/>
                            <div className="team-description hidden">
                                <h5>Sathi Bhuiyan</h5>
                                <h6>Lovely Designer</h6>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}