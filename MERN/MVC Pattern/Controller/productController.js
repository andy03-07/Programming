const product = require('../Models/product');



const getpro =async (req, res) => {
    try {
        const products = await product.find();

        if(!products || products.length === 0){
            res.status(404).json({success:false,message:'Product not found'});
        }

        res.status(200).json({
            success:true,
            product:products});
    } catch (err) {
        res.status(500).json({success:false,message:err.message});
    }
}

const createproducts = async(req, res)=>{
    try {
        const {name,price,description,category}=req.body;
        const newproduct = new product({
            name,
            price,
            description,
            category
        });

        await newproduct.save();
        res.status(200).json({
            success: true,
            product: newproduct,
            message: 'Product created successfully',
        });
    } catch (err) {
        res.status(500).json({success:false,message:err.message});
    }
}


const updateproducts = async (req, res) => {
    

    try {
        console.log('Updating products');

        const {id} = req.params;
        const {name,price,description,category}=req.body;

        const result = await product.findByIdAndUpdate(id, {name,price,description,category},{new:true});
            if(!result){
                res.status(404).json({success:false,message:'Product not found'});
            }

            res.status(200).json({
                success: true,
                product: result
            });

        
        } catch (err) {   
            res.status(500).json({success:false,message:err.message});
        }
    };



    const delpro= async (req,res) => {
        try{
            console.log("deleing");

            const {id}= req.params;
            const deletedpro=await product.findByIdAndDelete(id);

            if(!deletedpro){
                res.status(404).json({success:false,message:'Product not found'});
            }

            res.status(200).json({
                success:true,
                product:deletedpro,
                message:'Product deleted successfully'
            });
        }
        catch(err){
            res.status(500).json({success:false,message:err.message});
        };
    };



module.exports = {getpro,createproducts,updateproducts,delpro};