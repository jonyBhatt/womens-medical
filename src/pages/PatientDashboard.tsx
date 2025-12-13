import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useAppointments } from '../context/AppointmentContext';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Calendar, Clock, MapPin, User, AlertCircle } from 'lucide-react';

export const PatientDashboard = () => {
    const { user } = useAuth();
    const { getAppointmentsByPatient, cancelAppointment } = useAppointments();

    if (!user) return <div className="p-8 text-center">Please login first.</div>;

    const myAppointments = getAppointmentsByPatient(user.id);

    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">Patient Dashboard</h1>
                        <p className="mt-1 text-slate-500">Welcome back, {user.name}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <h2 className="text-xl font-bold text-slate-900">Your Appointments</h2>

                    {myAppointments.length > 0 ? (
                        myAppointments.map(appt => (
                            <Card key={appt.id} className="p-6 bordered-l-4 border-l-indigo-500">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-indigo-50 p-3 rounded-full hidden sm:block">
                                            <User className="w-6 h-6 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900">{appt.doctorName}</h3>
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-1 text-sm text-slate-600">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" /> {appt.date}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" /> {appt.time}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <Badge variant={appt.status === 'cancelled' ? 'warning' : 'success'}>
                                            {appt.status.toUpperCase()}
                                        </Badge>
                                        {appt.status !== 'cancelled' && (
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="text-red-500 hover:bg-red-50 hover:text-red-600 border-red-200"
                                                onClick={() => cancelAppointment(appt.id)}
                                            >
                                                Cancel
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        ))
                    ) : (
                        <div className="text-center py-12 bg-white rounded-2xl border border-slate-100 border-dashed">
                            <AlertCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                            <h3 className="text-lg font-medium text-slate-900">No Appointments Yet</h3>
                            <p className="text-slate-500">Book your first appointment to see it here.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
