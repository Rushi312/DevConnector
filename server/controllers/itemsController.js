const Item = require("../models/itemsModel")

/* GET request handler */
const getItem = async (req, res) => {
    const items = await Item.find()
    res.json(items)
}


module.exports = {
    getItem,

}