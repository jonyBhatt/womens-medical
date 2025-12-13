import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from './ui/Button';
import { Heart, Menu, X, User } from 'lucide-react';

export const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
                                <Heart className="h-5 w-5 fill-white" />
                            </div>
                            <span className="text-xl font-bold text-slate-900">SWMC</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="flex items-center gap-8">
                            <Link to="/" className="text-sm font-medium text-slate-600 hover:text-indigo-600">
                                Home
                            </Link>
                            <Link to="/doctors" className="text-sm font-medium text-slate-600 hover:text-indigo-600">
                                Find Doctors
                            </Link>
                            <Link to="/services" className="text-sm font-medium text-slate-600 hover:text-indigo-600">
                                Services
                            </Link>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        {user ? (
                            <>
                                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                                    <User className="h-4 w-4" />
                                    <span>{user.name}</span>
                                </div>
                                {user.role === 'patient' ? (
                                    <Link to="/dashboard">
                                        <Button variant="secondary" size="sm">Dashboard</Button>
                                    </Link>
                                ) : (
                                    <Link to="/doctor-dashboard">
                                        <Button variant="secondary" size="sm">Doctor Panel</Button>
                                    </Link>
                                )}
                                <Button variant="outline" size="sm" onClick={handleLogout}>
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <>
                                <Link to="/login">
                                    <Button variant="ghost" size="sm">Log in</Button>
                                </Link>
                                <Link to="/signup">
                                    <Button variant="primary" size="sm">Sign up</Button>
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-slate-600 hover:text-slate-900"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-4 shadow-lg">
                    <div className="flex flex-col space-y-4">
                        <Link to="/" className="text-base font-medium text-slate-600" onClick={() => setIsMenuOpen(false)}>
                            Home
                        </Link>
                        <Link to="/doctors" className="text-base font-medium text-slate-600" onClick={() => setIsMenuOpen(false)}>
                            Find Doctors
                        </Link>

                        <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                            {user ? (
                                <>
                                    <span className="text-sm font-medium text-slate-900">Hi, {user.name}</span>
                                    <Link to={user.role === 'patient' ? "/dashboard" : "/doctor-dashboard"}>
                                        <Button fullWidth onClick={() => setIsMenuOpen(false)}>Dashboard</Button>
                                    </Link>
                                    <Button variant="outline" fullWidth onClick={() => { handleLogout(); setIsMenuOpen(false); }}>
                                        Logout
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                                        <Button variant="ghost" fullWidth>Log in</Button>
                                    </Link>
                                    <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                                        <Button variant="primary" fullWidth>Sign up</Button>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};
