
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

                <div className={'landing-header-container'}>



                </div>




            </div>
        )
    }
}

export default HomeLanding;