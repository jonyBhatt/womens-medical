import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Appointment } from '../types';

interface AppointmentContextType {
    appointments: Appointment[];
    addAppointment: (appointment: Omit<Appointment, 'id' | 'createdAt' | 'status'>) => void;
    cancelAppointment: (id: string) => void;
    updateStatus: (id: string, status: Appointment['status']) => void;
    getAppointmentsByPatient: (patientId: string) => Appointment[];
    getAppointmentsByDoctor: (doctorId: string) => Appointment[];
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

export const AppointmentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [appointments, setAppointments] = useState<Appointment[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem('appointments');
        if (stored) {
            setAppointments(JSON.parse(stored));
        }
    }, []);

    const saveToStorage = (newAppointments: Appointment[]) => {
        localStorage.setItem('appointments', JSON.stringify(newAppointments));
    };

    const addAppointment = (data: Omit<Appointment, 'id' | 'createdAt' | 'status'>) => {
        const newAppointment: Appointment = {
            ...data,
            id: crypto.randomUUID(),
            createdAt: new Date().toISOString(),
            status: 'upcoming',
        };
        const updated = [...appointments, newAppointment];
        setAppointments(updated);
        saveToStorage(updated);
    };

    const cancelAppointment = (id: string) => {
        const updated = appointments.map(appt =>
            appt.id === id ? { ...appt, status: 'cancelled' as const } : appt
        );
        setAppointments(updated);
        saveToStorage(updated);
    };

    const updateStatus = (id: string, status: Appointment['status']) => {
        const updated = appointments.map(appt =>
            appt.id === id ? { ...appt, status } : appt
        );
        setAppointments(updated);
        saveToStorage(updated);
    };

    const getAppointmentsByPatient = (patientId: string) => {
        return appointments.filter(appt => appt.patientId === patientId);
    };

    const getAppointmentsByDoctor = (doctorId: string) => {
        return appointments.filter(appt => appt.doctorId === doctorId);
    };

    return (
        <AppointmentContext.Provider value={{
            appointments,
            addAppointment,
            cancelAppointment,
            updateStatus,
            getAppointmentsByPatient,
            getAppointmentsByDoctor
        }}>
            {children}
        </AppointmentContext.Provider>
    );
};

export const useAppointments = () => {
    const context = useContext(AppointmentContext);
    if (context === undefined) {
        throw new Error('useAppointments must be used within an AppointmentProvider');
    }
    return context;
};
