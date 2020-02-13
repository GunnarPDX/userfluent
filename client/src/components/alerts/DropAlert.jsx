import './alerts.scss'
import React from 'react'

const Row = (props) => {
    return (
        <div className={'arrow-box-row'}>
            <img src={props.icon} alt={props.description}/>
            <p>{props.config}</p>
        </div>
    );
};

const DropAlert = () => {
    const props = [
        {
            icon: 'none',
            description: 'People',
            count: 9
        },
        {
            icon: 'none',
            description: 'Events',
            count: 11
        }
    ];

    return(
        <div className={'arrow_box'}>
            {
                props.map((alertItem, key) => {
                    return <Row key={key} {...alertItem}/>
                })
            }
        </div>
    )
};

export default DropAlert;