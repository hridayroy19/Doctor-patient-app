import express from 'express';
import { ServiceDoctor } from './service.controller';
import auth from '../../middlewares/auth';

const Doctorouter = express.Router();

Doctorouter.post('/services', auth("doctor"),ServiceDoctor.addService);

export default Doctorouter;
