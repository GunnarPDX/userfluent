
//

import './home.scss'
import '../../components/navigation/navigation.scss'
import React, { Component } from 'react';
import HomeNav from "./components/HomeNav";

class HomeLanding extends Component {
    render() {
        return (
            <div>
                <HomeNav/>
                <div className={'nav-spacer'}/>
                {/*<div className={'content-spacer'}/>*/}

                {/*
                <div className={'row backdrop-text-block'}>
                    <div className={'columns'}>
                        <div className={'column vertical-line'}/>
                        <div className={'column vertical-line'}/>
                        <div className={'column vertical-line'}/>
                        <div className={'column vertical-line'}/>
                        <div className={'column vertical-line'}/>
                        <div className={'column vertical-line right-line'}/>
                    </div>
                </div>
                */}

                <p>
                    We have robust networks of strategic assets that we own or have contractual access to,
                    which give us greater flexibility and speed to reliably deliver widespread logistical accessibility
                    solutions. We have metamorphosed from an asset-based pipeline and power generating company to a
                    testing and logistics company whose biggest assets are its well-established business approach and its
                    innovative people.
                </p>

                <div className={'landing-header-container'}>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={''}>

                        <g fill="#fff" className="nc-icon-wrapper">
                            <path d="M21.8 18.4S20 15.6 20 12V8c0-4.4-3.6-8-8-8S4 3.6 4 8v4c0 3.6-1.8 6.4-1.8 6.4-.2.3-.2.7 0 1 .1.4.4.6.8.6h18c.4 0 .7-.2.9-.5.2-.4.1-.7-.1-1.1z"/>
                            <path d="M8.6 22c.7 1.2 2 2 3.4 2s2.7-.8 3.4-2H8.6z" data-color="color-2"/>
                        </g>

                    </svg>

                </div>




            </div>
        )
    }
}

export default HomeLanding;