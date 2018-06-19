import React, { Component } from 'react';
import axios from 'axios';
import './../App.css';



export default class PetSearch extends Component {
    constructor (props){
        super (props);


        this.state = {
            zip: '',
            randomDog: {},
            favorites: props.favorites
            
        };
    }


    handleZipInput = (e) => {
        this.setState({
            zip: e.target.value
        })
    }

    petGet = () => {
        return axios.get(`https://api.petfinder.com/pet.getRandom?animal=dog&key=36beff5cac84bb60ae63fb70e2b7db9c&location=${this.state.zip}&count=1&output=full&format=json`).then(results => {
        this.setState({'randomDog': results.data})      
        }
    )};

    addFav = (randomDog) =>{
        console.log(randomDog)
        axios.post('http://localhost:3005/api/favorites', randomDog).then( results =>
        this.setState({'this.props.favorites': results.data})
    )
    }

    addFavandGet = (e) => {
        this.addFav(this.state.randomDog)
        this.petGet()
        this.props.getfavorites()
    }

    dislikeAndGet = (e) => {
        this.petGet()
        this.props.getfavorites()
    }

    
    
    render (){
        return (
            <div>
                <div >
                    <div className = 'inputarea'>
                        <input onChange = {this.handleZipInput} className = 'zipinput' type="text" placeholder='Zip/Postal Code' value = {this.state.zip}/>
                        <button onClick = {this.petGet} className = 'submitbutton'><span>Submit</span></button>
                    </div>
                    <div className = 'pupbcgd'>
                        <div className = 'puppydisplay'>
                            <div className = 'puppycard'>
                                <p className ='puppyname'>Name:
                                <br/> {this.state.randomDog.petfinder ? this.state.randomDog.petfinder.pet.name.$t : ''}</p>
                                <img className = 'puppybox' src={this.state.randomDog.petfinder ? this.state.randomDog.petfinder.pet.media.photos.photo[2].$t : ''} alt=""/>
                                <p className = 'puppyphone'>Contact Info: 
                                <br/> {this.state.randomDog.petfinder ? this.state.randomDog.petfinder.pet.contact.phone.$t : ''}
                                <br/> {this.state.randomDog.petfinder ? this.state.randomDog.petfinder.pet.contact.email.$t : ''}</p>
                                <div>
                                    <img className = 'icons' onClick = {this.addFavandGet} src="https://i2.wp.com/androtrends.com/wp-content/uploads/2015/04/Tinder-UILike.png?fit=654%2C654&ssl=1" alt=""/>
                                    <img className = 'icons' onClick = {this.dislikeAndGet} src="https://roneelprasad.files.wordpress.com/2014/05/tinder-nope.png" alt=""/>
                                    
                                </div>
                            </div>
                            
                            
                        </div>    
                        </div>
                </div>
                    <div>
                        
                    </div>


            </div>


        )
    }
}