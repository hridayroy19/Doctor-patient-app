import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { AdminService } from './admin.service';
import sendResponse from '../../utils/sendResponse';

 const getDashboardStats = catchAsync(async (req, res) => {
    const stats = await AdminService.getDashboardStatsDb();

    sendResponse(res, {
        status: true,
        statusCode: httpStatus.OK,
        message: 'Admin dashboard stats fetched successfully',
        data: stats,
    });
});

export const AdminController = {
    getDashboardStats
}