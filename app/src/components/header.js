import React, { Component } from 'react';
import './../App.css';

export default class Header extends Component {
    
    render (){
        return(
            <div>
                <header className = 'puppy'>
                    <style>
                        @import url('https://fonts.googleapis.com/css?family=Montserrat');
                    </style>
                    <div className = 'headerlogos'>
                        <img className = 'whitepaw' src="https://upload.wikimedia.org/wikipedia/en/thumb/7/78/White_paw_print.svg/624px-White_paw_print.svg.png" alt=""/>
                        <h1 className = 'title'>PUPPY FINDER</h1>
                    </div>
                <h2 className = 'subtitle'>Search 1000s of Available Pets Near You</h2>
                    <div>

                        <img src="https://i1.wp.com/www.whatsahead.com/wp-content/uploads/2017/01/scroll-arrow-to-down-01.png" className = 'arrow' alt=""/>
                    </div>
                </header>


            </div>
        )
    }
}
