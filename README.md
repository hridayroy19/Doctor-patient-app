

Doctor, Patient Appointment Management System :
This is a role-based RESTful API built with Node.js, Express.js, MongoDB, and TypeScript. It helps doctors and patients manage healthcare appointments efficiently.

Authentication & Authorization :
.JWT-based secure authentication.
.Separate registration and login for Doctors, Patients, and optional Admin.
.Role-based route protection (doctor, patient, admin).

Doctor Module :
Register with specialization and hospital info.

Login and receive access token.
Create, update, and delete services .
Set availability per service .

View & manage appointment requests (filter by status: pending, accepted, etc.).
Update appointment status (accept/cancel/complete).

Patient Module :
Register with basic info
Login and receive access token.
Browse doctors with filters (hospital, specialization, service name).
View doctor profiles, services, and availability.
Book appointments with date + time slot.
Prevents booking duplicate slots.
View appointment history and status.

API Endpoints Overview :
Module Endpoint Method Description
Auth /auth/register-doctor POST Doctor registration
Auth /auth/register-patient POST Patient registration
Auth /auth/login POST Login for doctor, patient, admin
Doctor /doctor/services POST Add service
Doctor /doctor/services/:id PATCH Update service
Doctor /doctor/services/:id DELETE Delete service
Doctor /doctor/availability POST Set availability
Doctor /doctor/appointments?status=pending GET Get pending appointments
Doctor /doctor/appointments/:id/status PATCH Update appointment status
Patient /doctors GET Browse doctors with filters
Patient /doctors/:id GET Doctor profile with services & availability
Patient /appointments POST Book appointment
Patient /patient/appointments GET View patient appointments
Admin /admin/dashboard GET Get dashboard stats

Tech Stack
Backend: Node.js, Express.js, TypeScript
Database: MongoDB with Mongoose
Authentication: JWT, Bcrypt
Utilities: Custom Error Handling, Centralized Response Sender

.env :
PORT=
DATABASE_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Bcrypt_salt_Rounds=

API Testing:
Full Postman Collection Included :
Includes sample data for Doctors, Services, Availability, Appointments
