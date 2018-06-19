import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PetSearch from './components/PetSearch';
import Header from './components/header';
import Footer from './components/footer';


class App extends Component {
  constructor(){
    super();
  

  this.state = {
    favorites: [],
    showfavorites: false

    }
  };

  deleteFav = (id) =>{
    console.log(id)
    axios.delete(`http://localhost:3005/api/favorites/${id}`).then( results => {
        this.setState({'favorites' : results.data})
    }
    )
  }

  updateFav = (nameChange, id) =>{
    axios.put(`http://localhost:3005/api/favorites/${id}`, {nameChange}).then( results =>
    this.setState({'favorites': results.data})
  )
  }

  getFav = () =>{
    axios.get('http://localhost:3005/api/favorites').then( results => {
        this.setState({'favorites': results.data})
    }
    )
  }

  handleChange = (id, text) => {
    const newFavorites = this.state.favorites.map( (dog) => {
      if(dog.id === id){
        dog.petfinder.pet.name.$t = text; 
      }
      return dog;
    })
    this.setState({favorites: newFavorites}) 
  }

  render() {

   let doglist = this.state.favorites.slice(0, 4).map( (dog) => {
     return (
       
      <div className = 'favcard'>
      <img className = 'favcardpic' src= {dog.petfinder.pet.media.photos.photo[2].$t} alt=""/>
      <input onChange = {(e) => this.handleChange(dog.id, e.target.value)} className = 'favecardname' value = {dog.petfinder.pet.name.$t} type="text"/>
      {/* <p className = 'doginfo'>{dog.petfinder.pet.contact.phone.$t}</p> */}
      <p className = 'doginfo'>{dog.petfinder.pet.contact.email.$t}</p>
      <div className = 'favcardbottom'>
      <button onClick = {() => this.updateFav(dog.petfinder.pet.name.$t, dog.id)} className = 'favbutton'>Update Name</button>
      
        <button onClick = {() => this.deleteFav(dog.id)} className = 'favbutton'>Delete Puppy</button>
      </div>
    </div>
     )
   })

    return (
      <div className="App">
        <Header />
          <div >
          <style>
            @import url('https://fonts.googleapis.com/css?family=Montserrat');
          </style>
              <div className ='findpup'>
                <img className = 'foto1' src="http://i0.wp.com/www.pawshgrooming.co.uk/wp-content/uploads/2014/05/puppy.png?resize=232%2C317" alt=""/>
                <div>
                  <h2 className = 'find'> Find Your Puppy Today</h2>
                  <h3 className = 'easy'> It's as easy as entering your zip code:</h3>
                </div>
                <img className = 'foto' src="http://www.pngmart.com/files/4/Golden-Retriever-Puppy-PNG-Transparent-Image.png" alt=""/>
              </div>
              <div className = 'search'>
                <PetSearch favorites={this.state.favorites} getfavorites={this.getFav}/>
              </div>
              <div className = 'favorites'>
              <div className = 'bar'>
                  <img className = 'barfoto' src="http://www.waggfoods.com/assets/wagg/img/page/home/dogs.png" alt=""/>
                  <div className = 'midbar'>
                      <h2 className = 'find'> Favorite Puppies: </h2>
                      
                      <button onClick = {this.getFav} className = 'submitbutton'> <span>See Favorites</span></button>
                  </div>
                  <img className = 'barfoto' src="http://pluspng.com/img-png/png-hd-images-of-dogs-dog-png-image-png-image-417.png" alt=""/>
              </div>
               
                            <div className = 'backgroundfav'>
                              {doglist}
                            </div>
                            <Footer />
                            </div>
              </div>
          </div>
    );
  }
}

export default App;
