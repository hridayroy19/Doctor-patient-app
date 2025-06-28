export interface IDoctor {
  name: string;
  email: string;
  phone: string;
  password: string;
  specialization: string;
  hospitalName: string;
  hospitalFloor: string;
  role?: 'doctor';
  userStatus: "active" | "inactive"
  createdAt?: Date;
}


export interface IPatient {
  name: string;
  email: string;
  phone: string;
  password: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  role?: 'patient';
  userStatus: "active" | "inactive"
  createdAt?: Date;
}

export type UserRole = 'Admin' | 'Doctor' | 'Patient';