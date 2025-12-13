import type { Doctor } from '../types';

export const doctors: Doctor[] = [
    {
        id: 'doc-1',
        name: 'Dr. Ayesha Rahman',
        specialization: 'Cardiology',
        experience: 12,
        fee: 1500,
        city: 'Sylhet',
        hospital: 'Square Hospital',
        degrees: ['MBBS', 'FCPS (Cardiology)', 'MD'],
        about: 'Dr. Ayesha Rahman is a senior cardiologist with over a decade of experience in treating complex heart conditions. She is dedicated to comprehensive patient care.',
        availability: [], // Dynamic > 5PM
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea860632?auto=format&fit=crop&q=80&w=300&h=300',
        rating: 4.8,
        patients: 1200,
        offDay: 'Friday',
        reviews: [
            { id: 'r1', patientName: 'Rahim Ahmed', rating: 5, comment: 'Excellent doctor, very patient listener.', date: '2023-10-12' },
            { id: 'r2', patientName: 'Sadia Islam', rating: 4, comment: 'Good treatment but waiting time was long.', date: '2023-11-05' }
        ]
    },
    {
        id: 'doc-2',
        name: 'Dr. Rafiqul Islam',
        specialization: 'General Medicine',
        experience: 8,
        fee: 800,
        city: 'Sylhet',
        hospital: 'Popular Diagnostic Center',
        degrees: ['MBBS', 'FCPS (Medicine)'],
        about: 'Specialist in internal medicine and general health consultation. Dr. Rafiqul is known for his thorough diagnosis and friendly behavior.',
        availability: [],
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300',
        rating: 4.6,
        patients: 850,
        offDay: 'Sunday',
        reviews: [
            { id: 'r3', patientName: 'Karim Ullah', rating: 5, comment: 'Very professional behavior.', date: '2023-12-01' }
        ]
    },
    {
        id: 'doc-3',
        name: 'Dr. Nusrat Jahan',
        specialization: 'Gynecology',
        experience: 15,
        fee: 2000,
        city: 'Sylhet',
        hospital: 'Popular Diagnostic Center',
        degrees: ['MBBS', 'DGO', 'FCPS (Gynae)'],
        about: 'Expert consultant gynecologist focusing on maternal health and high-risk pregnancies.',
        availability: [],
        image: 'https://images.unsplash.com/photo-1594824476961-b7aa5a1c6762?auto=format&fit=crop&q=80&w=300&h=300',
        rating: 4.9,
        patients: 2100,
        offDay: 'Monday',
        reviews: [
            { id: 'r4', patientName: 'Farhana Begum', rating: 5, comment: 'Life saver! She is the best in Sylhet.', date: '2023-09-20' },
            { id: 'r5', patientName: 'Nasrin Akter', rating: 5, comment: 'Highly recommended for pregnancy care.', date: '2023-10-15' }
        ]
    },
    {
        id: 'doc-4',
        name: 'Dr. Kamal Hossain',
        specialization: 'Pediatrics',
        experience: 10,
        fee: 1000,
        city: 'Sylhet',
        hospital: 'Rajshahi Medical Hospital',
        degrees: ['MBBS', 'DCH'],
        about: 'Dedicated pediatrician with special interest in child nutrition and developmental disorders.',
        availability: [],
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300',
        rating: 4.7,
        patients: 1500,
        offDay: 'Tuesday',
        reviews: [
            { id: 'r6', patientName: 'Mrs. Salma', rating: 4, comment: 'Great with kids.', date: '2023-11-12' }
        ]
    },
    {
        id: 'doc-5',
        name: 'Dr. Sarah Ahmed',
        specialization: 'Mental Health',
        experience: 7,
        fee: 2500,
        city: 'Sylhet',
        hospital: 'Evercare Hospital',
        degrees: ['MBBS', 'MPhil (Psychiatry)'],
        about: 'Compassionate psychiatrist helping patients utilize their inner strength to overcome mental health challenges.',
        availability: [],
        image: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80&w=300&h=300',
        rating: 4.9,
        patients: 600,
        offDay: 'Wednesday',
        reviews: [
            { id: 'r7', patientName: 'Anonymous', rating: 5, comment: 'Changed my life. Very supportive.', date: '2023-12-10' }
        ]
    },
    {
        id: 'doc-6',
        name: 'Dr. Tanvir Hasan',
        specialization: 'Dentistry',
        experience: 5,
        fee: 1200,
        city: 'Sylhet',
        hospital: 'City Dental Care',
        degrees: ['BDS', 'MPH'],
        about: 'Modern dentistry services including cosmetic procedures and implants.',
        availability: [],
        image: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=300&h=300',
        rating: 4.5,
        patients: 900,
        offDay: 'Thursday',
        reviews: []
    }
];
