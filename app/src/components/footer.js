import React, { Component } from 'react';
import './../App.css';

export default class Footer extends Component {
    render (){
        return(
            <div className = 'footer'>
                 <div>
                <img className = 'bottomlogo' src="http://www.clker.com/cliparts/Q/0/a/r/h/S/paw-print-hi.png" alt=""/>
                 <p className = 'bottomname'>© PUPPY FINDER</p>
                    </div>
                    <div>
                    <iframe className = 'map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24394.26117648962!2d-111.63413708525925!3d40.158260209238094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf2fd504c66c48e0a!2sMountain+West+Animal+Hospital!5e0!3m2!1sen!2sus!4v1529176237859"></iframe>
                    </div>
                    <div>
                    <p className = 'bottomname'>CONTACT US:<br/>a: Springville, UT<br/>e: contact@puppyfinder.org<br/>p: 801.717.8250</p>
                    </div>          
            </div>

        )


        }

}