import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';
import { Lock, Mail } from 'lucide-react';

export const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [role, setRole] = useState<'patient' | 'doctor'>('patient');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const name = email.split('@')[0];
        login(name || 'User', email, role);
        navigate(role === 'patient' ? '/dashboard' : '/doctor-dashboard');
    };

    return (
        <div className="min-h-[calc(100vh-64px)] bg-slate-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-md p-8 shadow-md">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-slate-900">Welcome Back</h1>
                    <p className="text-slate-500 mt-2">Sign in to manage your healthcare</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="flex p-1 bg-slate-100 rounded-xl mb-6">
                        <button
                            type="button"
                            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${role === 'patient' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                            onClick={() => setRole('patient')}
                        >
                            Patient
                        </button>
                        <button
                            type="button"
                            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${role === 'doctor' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                            onClick={() => setRole('doctor')}
                        >
                            Doctor
                        </button>
                    </div>

                    <div>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                            <Input
                                type="email"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="pl-10"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                            <Input
                                type="password"
                                placeholder="Password"
                                defaultValue="password" // Mock password
                                className="pl-10"
                            />
                        </div>
                    </div>

                    <Button type="submit" fullWidth size="lg">
                        Sign In
                    </Button>

                    <p className="text-center text-sm text-slate-500">
                        Don't have an account? <span className="text-indigo-600 font-medium cursor-pointer">Sign up</span>
                    </p>
                </form>
            </Card>
        </div>
    );
};
