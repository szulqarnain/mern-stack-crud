
// Get Queries functions
const {
    getCars,
    getCarDetail,
    createCar,
    deleteCar,
    updateCar
} = require("../queries/carQueries");

module.exports = {

    // Get list of cars 
    async list(req,res) {
        try {
            let cars = await getCars();

            // Send success response
            res.status(201).json({
                success: true,
                data:[cars],
                message:'success'
            });

        } catch (e) {

            // Send error response
            res.status(400).json({
                success: false,
                data:[],
                message:e
            });
        }
    },
    
    // Get single car detail
    async detail(req,res) {
        try {
            let car = await getCarDetail(req);

            // Send success response
            res.status(201).json({
                success: true,
                data:[car],
                message:'success'
            });

        } catch (e) {

            // Send error response
            res.status(400).json({
                success: false,
                data:[],
                message:e
            });
        }
    },

    // Create car function
    async create(req,res) {

        try {
            const car = await createCar(req)

            // Send success response
            res.status(201).json({
                success: true,
                data:[car],
                message:'success'
            });

        } catch (e) {

            // Send error response
            res.status(400).json({
                success: false,
                data:[],
                message:e
            });
        }

    },

    // Delete car function
    async delete(req,res) {

        try {
            const car = await deleteCar(req)

            // Send success response
            res.status(201).json({
                success: true,
                data:[car],
                message:'success'
            });

        } catch (e) {

            // Send error response
            res.status(400).json({
                success: false,
                data:[],
                message:e
            });
        }
    
    },

    // Update car function
    async update(req,res) {

        try {
            
            const car = await updateCar(req)

            // Send success response
            res.status(201).json({
                success: true,
                data:[car],
                message:'success'
            });

        } catch (e) {

            // Send error response
            res.status(400).json({
                success: false,
                data:[],
                message:e
            });
        }
    
    },

}