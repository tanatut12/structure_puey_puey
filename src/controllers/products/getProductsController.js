import Product from "../../models/productModel.js";

const getAllProducts = async (req, res) => {
    try {
        // Get the category from the query parameters
        const category = req.query.category;
        
        let products;

       
        if (category) {
           
            const validCategories = ["Feeder", "Toilets", "Towers", "Toys"];
            if (!validCategories.includes(category)) {
                return res.status(400).send({ error: "Invalid category" });
            }
            products = await Product.find({ category: category });
        } else {
            
            products = await Product.find({});
        }

        console.log("Products fetched");
        res.send(products);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Internal Server Error" });
    }
};

export default getAllProducts;
