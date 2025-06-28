import express from 'express';
import { AvailabilityController } from './availability.controller';
import auth from '../../middlewares/auth';

const availabilityrouter = express.Router();

availabilityrouter.post('/availability',auth("doctor"),AvailabilityController.setAvailability);

export default availabilityrouter;
