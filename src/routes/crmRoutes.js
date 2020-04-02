import {
    addNewContact,
    getContacts,
    getContactWithID,
    updateContact
} from '../controllers/crmController';

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // Middleware
            console.log(`Request from : ${req.originalUrl}`);
            console.log(`Request Type : ${req.method}`);
            next();
        },getContacts)
        
        .post(addNewContact);

    app.route('/contact/:contactID')
        .put(updateContact)
        .get(getContactWithID)

        .delete((req,res) => {
            res.send(' DELETE Req Successful');
        });
    
}

export default routes;