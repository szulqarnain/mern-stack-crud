// Get Queries Functions
const {
    getCategories,
    getCategoryDetail,
    createCategory,
    deleteCategory,
    updateCategory
} = require("../queries/cateogryQueries");

module.exports = {

    // get categories list
    async list(req,res) {
        try {
            const categories = await getCategories();

            // Send success response
            res.status(201).json({
                success: true,
                data:[categories],
                message:'success'
            });

        } catch (e) {

            // Send Error response
            res.status(400).json({
                success: false,
                data:[],
                message:e
            });

        }
    },
    
    // get single category detail
    async detail(req,res) {
        try {
            const categories = await getCategoryDetail(req);

            // Send success response
            res.status(201).json({
                success: true,
                data:categories,
                message:'success'
            });

        } catch (e) {

            // Send Error response
            res.status(400).json({
                success: false,
                data:null,
                message:e
            });

        }
    },

    // create new category
    async create(req,res) {

        try {
            const category = await createCategory(req)

            // Send success response
            res.status(201).json({
                success: true,
                data:category,
                message:'success'
            });

        } catch (e) {

            // Send error response
            res.status(400).json({
                success: false,
                data:null,
                message:e
            });

        }

    },

    // delete category function
    async delete(req,res) {

        try {
            const category = await deleteCategory(req)

            // Send success response
            res.status(201).json({
                success: true,
                data:category,
                message:'success'
            });

        } catch (e) {

            // Send error response
            res.status(400).json({
                success: false,
                data:null,
                message:e
            });

        }
    
    },

    // Update category function
    async update(req,res) {

        try {
            const category = await updateCategory(req)

            // Send success response
            res.status(201).json({
                success: true,
                data:category,
                message:'success'
            });

        } catch (e) {
            
            // Send error response
            res.status(400).json({
                success: false,
                data:null,
                message:e
            });

        }
    
    },

}