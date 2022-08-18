// Import module 
const {Category} = require('../model/Category');

// get all categories function
async function getCategories() {
    return Category.find().sort({createdAt:-1});
}

//get single category detail
async function getCategoryDetail(req) {
    return Category.findById(req.params.id);
}

//create category function
async function createCategory(req) {
    const category = new Category(req.body);
    return  category.save()
}

// delete category function
async function deleteCategory(req) {
    return  Category.findByIdAndDelete(req.params.id)
}

// Update cateogry function
async function updateCategory(req) {

    const filter = { _id: req.params.id}; // filter parameters
    const update = { name: req.body.name}; // data that we need to update
    return  Category.findOneAndUpdate(filter,update)

}

module.exports = {
    getCategories,
    getCategoryDetail,
    createCategory,
    deleteCategory,
    updateCategory
}