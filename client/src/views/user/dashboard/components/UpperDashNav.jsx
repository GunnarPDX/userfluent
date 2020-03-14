import '../dash.scss'
import React from 'react'
import {Link} from "react-router-dom";

const UpperDashNav = () => {
    return (
        <div className={'new-project-container'}>

            <div className={''}>
                <div className={'columns is-gapless'}>

                    <div className={'column dash-nav-add-sizing'}>
                        <Link to={'/posts/new'}>
                            <button className={'button is-large project-new-button is-fullwidth'}>
                                + New project
                            </button>
                        </Link>
                    </div>

                </div>
            </div>


        </div>
    )
};

export default UpperDashNav;
