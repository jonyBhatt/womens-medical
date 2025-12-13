import { Clock, MapPin, Star, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Doctor } from '../types';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { Card } from './ui/Card';

interface DoctorCardProps {
    doctor: Doctor;
}

export const DoctorCard = ({ doctor }: DoctorCardProps) => {
    return (
        <Card className="overflow-hidden flex flex-col h-full hover:shadow-md transition-all duration-300">
            <div className="relative h-48 sm:h-56 bg-slate-100">
                <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                    <Badge className="bg-white/90 backdrop-blur-sm text-indigo-700 shadow-sm">
                        {doctor.experience}+ Years Exp
                    </Badge>
                </div>
            </div>

            <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <Badge variant="outline" className="mb-2 text-indigo-600 border-indigo-200 bg-indigo-50">
                            {doctor.specialization}
                        </Badge>
                        <h3 className="text-lg font-bold text-slate-900 line-clamp-1">{doctor.name}</h3>
                    </div>
                    <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-bold text-slate-700">{doctor.rating}</span>
                    </div>
                </div>

                <div className="space-y-2 mb-4 text-sm text-slate-600 flex-1">
                    <div className="flex items-center gap-2">
                        <Stethoscope className="w-4 h-4 text-slate-400" />
                        <span className="line-clamp-1">{doctor.degrees.join(', ')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        <span className="line-clamp-1">{doctor.hospital}, {doctor.city}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-slate-400" />
                        <span className="line-clamp-1">Next Slot: {doctor.availability[0]}</span>
                    </div>
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                    <div>
                        <p className="text-xs text-slate-400">Consultation Fee</p>
                        <p className="text-lg font-bold text-indigo-600">৳ {doctor.fee}</p>
                    </div>
                    <Link to={`/doctors/${doctor.id}`} className="flex-1">
                        <Button variant="secondary" className="w-full">
                            Book Now
                        </Button>
                    </Link>
                </div>
            </div>
        </Card>
    );
};
