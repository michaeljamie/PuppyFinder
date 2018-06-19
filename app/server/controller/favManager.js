let favorites = [];
let id = 0;

module.exports = {

    create: (req, res) => {
        const{randomDog} = req.body;
        req.body.id = id;
        favorites.push( req.body )
        id++;
        res.status(200).send( favorites );
        
    },

    read: (req, res) => {
        res.status(200).send( favorites );
    },

    update: (req, res) => {
        for(let i=0;i<favorites.length;i++){
            if (favorites[i].id === Number(req.params.id)){
            favorites[i].petfinder.pet.name.$t = req.body.nameChange;
            }
        }
        res.status(200).send( favorites );
    },
         
    delete: (req, res) => {
        for(let i=0;i<favorites.length;i++){
            if ( favorites[i].id === Number(req.params.id)){
            favorites.splice(i, 1)
            }
        }
        res.status(200).send( favorites );
    }



}