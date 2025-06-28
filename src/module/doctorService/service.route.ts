import express from 'express';
import { ServiceDoctor } from './service.controller';
import auth from '../../middlewares/auth';

const Doctorouter = express.Router();

Doctorouter.post('/services', auth("doctor"), ServiceDoctor.addService);
Doctorouter.patch('/services/:id', auth("doctor"), ServiceDoctor.updateService);
Doctorouter.delete('/services/:id',auth('doctor'),ServiceDoctor.deleteService);

export default Doctorouter;
