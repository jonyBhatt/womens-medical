export type Role = 'patient' | 'doctor';

export interface User {
    id: string;
    name: string;
    email: string;
    role: Role;
}

export type Specialization =
    | 'General Medicine'
    | 'Pediatrics'
    | 'Cardiology'
    | 'Gynecology'
    | 'Mental Health'
    | 'Dentistry';

export type City =
    | 'Dhaka'
    | 'Chittagong'
    | 'Sylhet'
    | 'Rajshahi'
    | 'Khulna';

export interface Doctor {
    id: string;
    name: string;
    specialization: Specialization;
    experience: number; // Years
    fee: number; // BDT
    city: City;
    hospital: string;
    degrees: string[]; // e.g., ["MBBS", "FCPS"]
    about: string;
    availability: string[]; // Time slots e.g., "09:00 AM" (Kept for backward compat, but we will generate dynamic slots)
    image: string;
    rating: number;
    patients: number;
    offDay: string;
    reviews: Review[];
}

export interface Review {
    id: string;
    patientName: string;
    rating: number;
    comment: string;
    date: string;
}

export interface Appointment {
    id: string;
    doctorId: string;
    patientId: string;
    doctorName: string;
    patientName: string;
    date: string; // ISO Date string YYYY-MM-DD
    time: string; // "10:00 AM"
    status: 'upcoming' | 'completed' | 'cancelled';
    createdAt: string;
}
