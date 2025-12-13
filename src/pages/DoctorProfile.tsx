import React, { useState, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { MapPin, Calendar, Clock, Star, Shield, Award, User, AlertCircle } from 'lucide-react';
import { doctors } from '../data/doctors';
import { useAuth } from '../context/AuthContext';
import { useAppointments } from '../context/AppointmentContext';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';

export const DoctorProfile = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();
    const { addAppointment } = useAppointments();

    const doctor = doctors.find(d => d.id === id);
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [selectedTime, setSelectedTime] = useState<string>('');
    const [isBookingSuccess, setIsBookingSuccess] = useState(false);

    // Generate next 7 days for calendar
    const dates = useMemo(() => {
        return Array.from({ length: 7 }, (_, i) => {
            const d = new Date();
            d.setDate(d.getDate() + i); // Start from today
            return {
                date: d.toISOString().split('T')[0],
                dayName: d.toLocaleDateString('en-US', { weekday: 'long' }),
                dayShort: d.toLocaleDateString('en-US', { weekday: 'short' }),
                dayNum: d.getDate()
            };
        });
    }, []);

    // Generate time slots after 5 PM
    const timeSlots = useMemo(() => {
        const slots = [];
        const startHour = 17; // 5 PM
        const endHour = 22;   // 10 PM

        for (let i = startHour; i <= endHour; i++) {
            const hour = i > 12 ? i - 12 : i;
            slots.push(`${hour}:00 PM`);
            if (i !== endHour) slots.push(`${hour}:30 PM`);
        }
        return slots;
    }, []);

    if (!doctor) {
        return <div className="text-center py-20">Doctor not found</div>;
    }

    const handleBooking = () => {
        if (!user) {
            navigate('/login');
            return;
        }

        if (!selectedDate || !selectedTime) return;

        addAppointment({
            doctorId: doctor.id,
            patientId: user.id,
            doctorName: doctor.name,
            patientName: user.name,
            date: selectedDate,
            time: selectedTime,
        });

        setIsBookingSuccess(true);
    };

    const isOffDay = (dayName: string) => {
        return doctor.offDay === dayName;
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column: Profile Info & Reviews */}
                    <div className="lg:col-span-2 space-y-8">
                        <Card className="p-6 md:p-8">
                            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                                <div className="shrink-0">
                                    <img
                                        src={doctor.image}
                                        alt={doctor.name}
                                        className="w-32 h-32 md:w-48 md:h-48 rounded-2xl object-cover shadow-md"
                                    />
                                </div>
                                <div>
                                    <Badge className="mb-3">{doctor.specialization}</Badge>
                                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{doctor.name}</h1>
                                    <p className="text-slate-500 mb-4">{doctor.degrees.join(', ')}</p>

                                    <div className="flex items-center gap-6 mb-6">
                                        <div className="flex items-center gap-1">
                                            <div className="bg-yellow-100 p-1.5 rounded-lg">
                                                <Star className="w-5 h-5 text-yellow-600 fill-yellow-600" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900">{doctor.rating}</p>
                                                <p className="text-xs text-slate-500">Rating</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <div className="bg-indigo-100 p-1.5 rounded-lg">
                                                <Shield className="w-5 h-5 text-indigo-600" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900">{doctor.experience}+</p>
                                                <p className="text-xs text-slate-500">Years Exp</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <div className="bg-green-100 p-1.5 rounded-lg">
                                                <MapPin className="w-5 h-5 text-green-600" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900">{doctor.city}</p>
                                                <p className="text-xs text-slate-500">Location</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-3">
                                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm">
                                            <Award className="w-4 h-4" /> Highly Skilled
                                        </span>
                                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm">
                                            <AlertCircle className="w-4 h-4" /> Off Day: {doctor.offDay}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-slate-100">
                                <h3 className="text-lg font-bold text-slate-900 mb-3">About Doctor</h3>
                                <p className="text-slate-600 leading-relaxed">{doctor.about}</p>
                            </div>

                            <div className="mt-8 pt-8 border-t border-slate-100">
                                <h3 className="text-lg font-bold text-slate-900 mb-3">Working at</h3>
                                <div className="flex items-center gap-3 text-slate-700">
                                    <div className="bg-slate-100 p-2 rounded-lg">
                                        <MapPin className="w-5 h-5 text-slate-500" />
                                    </div>
                                    <span className="font-medium">{doctor.hospital}, {doctor.city}</span>
                                </div>
                            </div>
                        </Card>

                        {/* Reviews Section */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-slate-900">Patient Reviews</h3>
                            {doctor.reviews.length > 0 ? (
                                doctor.reviews.map(review => (
                                    <Card key={review.id} className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-indigo-50 p-2 rounded-full">
                                                <User className="w-6 h-6 text-indigo-600" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h4 className="font-bold text-slate-900">{review.patientName}</h4>
                                                    <span className="text-sm text-slate-400">{review.date}</span>
                                                </div>
                                                <div className="flex items-center mb-2">
                                                    {Array.from({ length: 5 }).map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200'}`}
                                                        />
                                                    ))}
                                                </div>
                                                <p className="text-slate-600">{review.comment}</p>
                                            </div>
                                        </div>
                                    </Card>
                                ))
                            ) : (
                                <p className="text-slate-500 italic">No reviews yet.</p>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Booking */}
                    <div className="lg:col-span-1">
                        <Card className="p-6 sticky top-24 border-indigo-100 shadow-lg">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Book Appointment</h3>

                            {!isBookingSuccess ? (
                                <>
                                    <div className="flex justify-between items-center mb-6 pb-6 border-b border-slate-100">
                                        <span className="text-slate-500">Consultation Fee</span>
                                        <span className="text-2xl font-bold text-indigo-600">৳ {doctor.fee}</span>
                                    </div>

                                    {/* Date Selection */}
                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-slate-700 mb-3">Select Date</label>
                                        <div className="grid grid-cols-4 gap-2">
                                            {dates.map((item) => {
                                                const disabled = isOffDay(item.dayName);
                                                return (
                                                    <button
                                                        key={item.date}
                                                        onClick={() => !disabled && setSelectedDate(item.date)}
                                                        disabled={disabled}
                                                        className={`flex flex-col items-center justify-center p-2 rounded-xl border transition-all ${selectedDate === item.date
                                                            ? 'border-indigo-600 bg-indigo-50 text-indigo-700 ring-1 ring-indigo-600'
                                                            : disabled
                                                                ? 'border-slate-100 bg-slate-50 text-slate-300 cursor-not-allowed opacity-60' // Disabled Style
                                                                : 'border-slate-200 hover:border-indigo-300 hover:bg-slate-50 text-slate-600'
                                                            }`}
                                                        title={disabled ? `Off Day: ${item.dayName}` : ''}
                                                    >
                                                        <span className="text-[10px] font-medium uppercase">{item.dayShort}</span>
                                                        <span className="text-lg font-bold">{item.dayNum}</span>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                        {selectedDate && (
                                            <p className="text-xs text-indigo-600 mt-2 font-medium">
                                                Selected: {selectedDate}
                                            </p>
                                        )}
                                    </div>

                                    {/* Time Selection */}
                                    <div className="mb-8">
                                        <label className="block text-sm font-medium text-slate-700 mb-3">Select Time (Evening)</label>
                                        <div className="grid grid-cols-2 gap-2">
                                            {timeSlots.map((time) => (
                                                <button
                                                    key={time}
                                                    onClick={() => setSelectedTime(time)}
                                                    className={`py-2.5 px-3 rounded-lg text-sm font-medium border transition-all ${selectedTime === time
                                                        ? 'border-indigo-600 bg-indigo-600 text-white'
                                                        : 'border-slate-200 text-slate-600 hover:border-indigo-300 hover:bg-slate-50'
                                                        }`}
                                                >
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <Button
                                        fullWidth
                                        size="lg"
                                        disabled={!selectedDate || !selectedTime}
                                        onClick={handleBooking}
                                    >
                                        Confirm Booking
                                    </Button>
                                    <p className="text-xs text-center text-slate-400 mt-4">
                                        No payment required now. Pay at clinic.
                                    </p>
                                </>
                            ) : (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Calendar className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Booking Confirmed!</h3>
                                    <p className="text-slate-500 mb-6">
                                        Appointment with {doctor.name} on {selectedDate} at {selectedTime}.
                                    </p>
                                    <Link to="/dashboard">
                                        <Button variant="outline" fullWidth>View Dashboard</Button>
                                    </Link>
                                </div>
                            )}
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};
