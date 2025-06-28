import { IService } from "./service.interface";
import { Service } from "./service.model";

const serviceDoctorDb = async (payload: IService): Promise<IService> => {
    const result = await Service.create(payload);
    return result;
};

export const DoctroService = {
    serviceDoctorDb,
};
