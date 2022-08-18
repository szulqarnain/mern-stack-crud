// Import Model
const {Car} = require('../model/Car');

// Get all car list function
async function getCars() {
    return Car.find().sort({createdAt:-1})
}

// Get single car detail function
async function getCarDetail(req) {
    return Car.findById(req.params.id);
}

// Create New car
async function createCar(req) {
    const car = new Car(req.body);
    return car.save()
}

// Delete Car
async function deleteCar(req) {
    return  Car.findByIdAndDelete(req.params.id)
}

// Update Car
async function updateCar(req) {
    
    const filter = { _id: req.params.id}; // Filter as

    /* data we need to update */
    const update = { 
        categoryId: req.body.categoryId,
        name: req.body.name,
        model: req.body.model,
        color: req.body.color,
        registrationNo: req.body.registrationNo,
    };
    
    return  Car.findOneAndUpdate(filter,update)

}

module.exports = {
    getCars,
    getCarDetail,
    createCar,
    deleteCar,
    updateCar
}