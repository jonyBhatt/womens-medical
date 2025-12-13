import { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import { doctors } from '../data/doctors';
import { DoctorCard } from '../components/DoctorCard';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export const FindDoctors = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSpecialty, setSelectedSpecialty] = useState('All');
    const [selectedCity, setSelectedCity] = useState('All');

    const specialties = ['All', ...Array.from(new Set(doctors.map(d => d.specialization)))];
    const cities = ['All', ...Array.from(new Set(doctors.map(d => d.city)))];

    const filteredDoctors = useMemo(() => {
        return doctors.filter(doc => {
            const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                doc.hospital.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesSpecialty = selectedSpecialty === 'All' || doc.specialization === selectedSpecialty;
            const matchesCity = selectedCity === 'All' || doc.city === selectedCity;

            return matchesSearch && matchesSpecialty && matchesCity;
        });
    }, [searchTerm, selectedSpecialty, selectedCity]);

    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900">Find the Best Doctors</h1>
                    <p className="mt-2 text-slate-500">Book appointments with top specialists in your area.</p>
                </div>

                {/* Filters */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="md:col-span-2 relative">
                            <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                            <Input
                                placeholder="Search doctor or hospital name..."
                                className="pl-10"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div>
                            <select
                                className="w-full h-11 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-600"
                                value={selectedSpecialty}
                                onChange={(e) => setSelectedSpecialty(e.target.value)}
                            >
                                <option disabled>Select Specialization</option>
                                {specialties.map(spec => (
                                    <option key={spec} value={spec}>{spec}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <select
                                className="w-full h-11 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-600"
                                value={selectedCity}
                                onChange={(e) => setSelectedCity(e.target.value)}
                            >
                                <option disabled>Select City</option>
                                {cities.map(city => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredDoctors.length > 0 ? (
                        filteredDoctors.map(doctor => (
                            <DoctorCard key={doctor.id} doctor={doctor} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20">
                            <div className="bg-slate-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Filter className="w-10 h-10 text-slate-400" />
                            </div>
                            <h3 className="text-xl font-medium text-slate-900">No doctors found</h3>
                            <p className="text-slate-500 mt-2">Try adjusting your filters or search terms.</p>
                            <Button
                                variant="outline"
                                className="mt-6"
                                onClick={() => {
                                    setSearchTerm('');
                                    setSelectedSpecialty('All');
                                    setSelectedCity('All');
                                }}
                            >
                                Clear Filters
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
