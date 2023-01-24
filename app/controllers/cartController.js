const {errorCatcher} = require("./../middlewares/errorHandler/errorHandler");
const {Figurine} = require("./../models")
const cartController = {

    cartPage: (req,res)=>{
        let totalHT;
        const cartItems = req.session.cart;
        if(cartItems.length>0){
            totalHT = cartItems.reduce(
                (acc,figurine) => (acc += Math.round(Number(figurine.price / (1+20/100)) * 100) / 100), 
                0
                );
            
        }
        console.log(totalHT);

        const totalTTC = Math.round(totalHT * (1+20/100) * 100) / 100;
        const tax = Math.round((totalTTC - totalHT) * 100) / 100; 
        console.log(tax);
        console.log("ttc", totalTTC);
        res.render("cart");
    },

    addToCart: errorCatcher(async(req,res)=>{
        const figurineId = Number(req.params.figurineId);
        const result = await Figurine.findByPk(figurineId);

        if(!req.session.cart.find(item => item.id === figurineId)){
            req.session.cart.push(result);
        }

        res.redirect(req.get("referrer"));
    }),

    removeFromCart: (req,res)=>{
        const figurineId = Number(req.params.figurineId);
      
        req.session.cart = req.session.cart.filter(item => item.id !== figurineId);

        res.redirect(req.get("referrer"));
        
    },

}

module.exports = cartController;