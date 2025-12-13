import { useAuth } from '../context/AuthContext';
import { useAppointments } from '../context/AppointmentContext';
import { doctors } from '../data/doctors';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Calendar, Clock, User, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

export const DoctorDashboard = () => {
    const { user } = useAuth();
    const { appointments, updateStatus } = useAppointments();

    if (!user) return <div className="p-8 text-center">Please login as a doctor first.</div>;

    // Find which doctor this user is (mock - in real app, user.id would map to doctor.id)
    // For demo purposes, we'll use the first doctor or allow seeing all appointments
    const doctorProfile = doctors.find(d => d.name.toLowerCase().includes(user.name.toLowerCase())) || doctors[0];

    // Get appointments for this doctor
    const doctorAppointments = appointments.filter(appt => appt.doctorId === doctorProfile.id);

    // Group by status
    const upcomingAppointments = doctorAppointments.filter(a => a.status === 'upcoming');
    const completedAppointments = doctorAppointments.filter(a => a.status === 'completed');
    const cancelledAppointments = doctorAppointments.filter(a => a.status === 'cancelled');

    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                        <img
                            src={doctorProfile.image}
                            alt={doctorProfile.name}
                            className="w-16 h-16 rounded-full object-cover border-2 border-indigo-100"
                        />
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900">Doctor Dashboard</h1>
                            <p className="mt-1 text-slate-500">Welcome, {doctorProfile.name}</p>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card className="p-6 border-l-4 border-l-blue-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-500 mb-1">Upcoming</p>
                                <p className="text-3xl font-bold text-slate-900">{upcomingAppointments.length}</p>
                            </div>
                            <div className="bg-blue-100 p-3 rounded-full">
                                <Calendar className="w-6 h-6 text-blue-600" />
                            </div>
                        </div>
                    </Card>
                    <Card className="p-6 border-l-4 border-l-green-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-500 mb-1">Completed</p>
                                <p className="text-3xl font-bold text-slate-900">{completedAppointments.length}</p>
                            </div>
                            <div className="bg-green-100 p-3 rounded-full">
                                <CheckCircle className="w-6 h-6 text-green-600" />
                            </div>
                        </div>
                    </Card>
                    <Card className="p-6 border-l-4 border-l-red-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-500 mb-1">Cancelled</p>
                                <p className="text-3xl font-bold text-slate-900">{cancelledAppointments.length}</p>
                            </div>
                            <div className="bg-red-100 p-3 rounded-full">
                                <XCircle className="w-6 h-6 text-red-600" />
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Appointments List */}
                <div className="space-y-6">
                    <h2 className="text-xl font-bold text-slate-900">Today's Appointments</h2>

                    {upcomingAppointments.length > 0 ? (
                        upcomingAppointments.map(appt => (
                            <Card key={appt.id} className="p-6 hover:shadow-md transition-shadow">
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-indigo-50 p-3 rounded-full hidden sm:block">
                                            <User className="w-6 h-6 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900">{appt.patientName}</h3>
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 text-sm text-slate-600">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" /> {appt.date}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" /> {appt.time}
                                                </span>
                                            </div>
                                            <p className="text-xs text-slate-400 mt-2">Booked on: {new Date(appt.createdAt).toLocaleString()}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Badge variant="success" className="whitespace-nowrap">
                                            {appt.status.toUpperCase()}
                                        </Badge>
                                        <div className="flex gap-2">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="text-green-600 hover:bg-green-50 hover:text-green-700 border-green-200"
                                                onClick={() => updateStatus(appt.id, 'completed')}
                                            >
                                                Complete
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="text-red-500 hover:bg-red-50 hover:text-red-600 border-red-200"
                                                onClick={() => updateStatus(appt.id, 'cancelled')}
                                            >
                                                Cancel
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))
                    ) : (
                        <div className="text-center py-12 bg-white rounded-2xl border border-slate-100 border-dashed">
                            <AlertCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                            <h3 className="text-lg font-medium text-slate-900">No Upcoming Appointments</h3>
                            <p className="text-slate-500">You have no scheduled appointments at the moment.</p>
                        </div>
                    )}

                    {/* Completed Appointments */}
                    {completedAppointments.length > 0 && (
                        <>
                            <h2 className="text-xl font-bold text-slate-900 mt-12">Completed Appointments</h2>
                            {completedAppointments.map(appt => (
                                <Card key={appt.id} className="p-6 bg-slate-50">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-green-50 p-3 rounded-full hidden sm:block">
                                                <CheckCircle className="w-6 h-6 text-green-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-slate-900">{appt.patientName}</h3>
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
                                        <Badge variant="success">COMPLETED</Badge>
                                    </div>
                                </Card>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
