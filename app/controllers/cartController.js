const {errorCatcher} = require("./../middlewares/errorHandler/errorHandler");
const {Figurine} = require("./../models")
const cartController = {

    cartPage: (req,res)=>{
        let totalHT;
        const cartItems = req.session.cart;
        if(cartItems.length>0){
            totalHT = cartItems.reduce(
                (acc,figurine) => (acc += Number(figurine.figurine.price / (1+20/100)) * figurine.quantity), 
                0
                );
        }
        totalHT = Math.round(totalHT * 100) / 100;
        const totalTTC = Math.round(totalHT * (1+20/100) * 100) / 100;
        const tax = Math.round((totalTTC - totalHT) * 100) / 100; 
        res.render("cart", {totalHT, totalTTC, tax});
    },

    addToCart: errorCatcher(async(req,res)=>{
        const figurineId = Number(req.params.figurineId);
        const result = await Figurine.findByPk(figurineId);
        const figurineFound = req.session.cart.find(item => item.figurine.id === figurineId);

        if(!figurineFound){
            req.session.cart.push({figurine: result, quantity: 1});
        } else if(figurineFound) {
            let figurineQuantity = req.session.cart.find(item => item.figurine.id === figurineId);
            figurineQuantity.quantity++;
        }

        res.redirect(req.get("referrer"));
    }),

    removeFromCart: (req,res)=>{
        const figurineId = Number(req.params.figurineId);
      
        req.session.cart = req.session.cart.filter(item => item.figurine.id !== figurineId);

        res.redirect(req.get("referrer"));
        
    },

}

module.exports = cartController;