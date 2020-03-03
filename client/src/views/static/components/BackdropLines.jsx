import '../static.scss'
import React from 'react';

const BackdropLines = () => {
    return (
        <div className={'row backdrop-lines-block'}>
            <div className={'columns is-mobile'}>
                <div className={'column vertical-line'}/>
                <div className={'column vertical-line'}/>
                <div className={'column vertical-line'}/>
                <div className={'column vertical-line'}/>
                <div className={'column vertical-line'}/>
                <div className={'column vertical-line right-line'}/>
            </div>
        </div>
    )
};

export default BackdropLines;