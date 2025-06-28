/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { AvaliablilityService } from './avaliability.service';


const setAvailability = catchAsync(async (req, res) => {
    const doctorId = (req as any).user.id;

    const { day, slots } = req.body;
    const availability = await AvaliablilityService.avalibilityDoctorDb({
        doctorId,
        day,
        slots,
    });

    sendResponse(res, {
        status: true,
        statusCode: httpStatus.CREATED,
        message: 'Availability set',
        data: availability,
    });
});

export const AvailabilityController = {
    setAvailability
}