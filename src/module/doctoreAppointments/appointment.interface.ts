export interface IAppointment {
    patientId: string | undefined;
    doctorId: string | undefined;
    serviceId: string | undefined;
    selectedDate: string;
    timeSlot: string;
    status: 'pending' | 'accepted' | 'cancelled' | 'completed';
}
