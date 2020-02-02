import "./submitButtons.scss"
import React from 'react'

const LoadingButton = (props) => {


    let element = document.getElementById('LoadingButton');
    //console.log(props.loading);

    let SignupButtons = {
        request: function(element) {
            element.classList.add('-request');
        },

        failure: function(element) {
            element.classList.remove('-request');
            element.classList.add('-failure');
        },

        success: function(element) {
            element.classList.remove('-request');
            element.classList.add('-success');
        },

        reset: function(element) {
            element.classList.remove('-success');
            element.classList.remove('-failure');
        },
    };

    if(props.loading === 'true'){
        SignupButtons.request(element);
    }else if(props.loading === 'failed'){
        setTimeout(function() {
            SignupButtons.failure(element);
        }, 1150);
        setTimeout(function() {
            SignupButtons.reset(element);
        }, 2000);
    }else if(props.loading === 'success'){
        setTimeout(function() {
            SignupButtons.success(element);
        }, 1150);
        setTimeout(function() {
            SignupButtons.reset(element);
        }, 2000);
    }

    const previewStyle = {
        display: 'none',
    };

    return(
        <div>
            <button id={'LoadingButton'} type={'submit'} className={'submit-button'} form={props.form}>
				<span className={'submit-span'}>
					<svg>
						<use xlinkHref={'#circle'}/>
					</svg>
					<svg>
						<use xlinkHref={'#check'}/>
					</svg>
				</span>

                <ul className={'submit-ul'}>
                    <li className={'submit-li'}>{props.button_title}</li>
                    <li className={'submit-li'}>Submitting...</li>
                    <li className={'submit-li'}>failure</li>
                    <li className={'submit-li'}>Success!</li>
                </ul>

            </button>

            <svg xmlns={'http://www.w3.org/2000/svg'} style={previewStyle}>
                <symbol xmlns={'http://www.w3.org/2000/svg'}
                        viewBox={'0 0 16 16'}
                        id={'circle'}>
                    <circle cx={'8'} cy={'8'} r={'7.5'}/>
                </symbol>

                <symbol xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 16 16'} id={'check'}>

                    <path d={'m.65909042 4.04356308 2.43156433 2.43156433 5.83150483-5.83150482'} fill={'none'} strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'1.25'}/>
                </symbol>
            </svg>
        </div>
    );

};

export default LoadingButton;