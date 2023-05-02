const Contact = require('./../models/contact-model');

module.exports = {

    // Get all contacts
    getAllContacts: async (req, res) => {
        try {
            const contacts = await Contact.find();

            res.send(contacts);
        } catch (err) {
            console.error(err);
            res.status(500).send("Internal server error!");
        }
    },

    // Create a new contact
    createContact: async (req, res) => {
        try {
            const { name, phone } = req.body;

            const contact = await Contact.create({ name, phone });

            res.status(201).send(contact);
        } catch (err) {
            console.error(err);
            res.status(500).send("Internal server error!");
        }
    }
};