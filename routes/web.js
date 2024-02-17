import express from 'express'
import studentController from '../controller/studentController.js';

const route = express.Router();


route.get('/',studentController.getAllDoc);
route.post('/',studentController.createDoc);
route.get('/edit/:id',studentController.editDoc);
route.post('/update/:id',studentController.updateDoc);
route.get('/delete/:id',studentController.deleteDoc);

export default route;