import { Link } from 'react-router-dom';
import Logo from "../assets/logo.png";

export const Footer = () => {
    return (
        <footer className="bg-slate-50 border-t border-slate-100 pt-16 pb-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center">
                            <img src={Logo} alt="logo" className='size-24 object-contain' />
                            <span className="text-xl font-bold text-slate-900">SWMC</span>
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Making healthcare accessible, reliable, and hassle-free for everyone in Bangladesh.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">Services</h3>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li><a href="#" className="hover:text-indigo-600">Find a Doctor</a></li>
                            <li><a href="#" className="hover:text-indigo-600">Emergency Care</a></li>
                            <li><a href="#" className="hover:text-indigo-600">Telemedicine</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">Company</h3>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li><a href="#" className="hover:text-indigo-600">About Us</a></li>
                            <li><a href="#" className="hover:text-indigo-600">Careers</a></li>
                            <li><a href="#" className="hover:text-indigo-600">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">Laguage</h3>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li>English</li>
                            <li>Bangla</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} SWMC. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-slate-500">
                        <a href="#" className="hover:text-indigo-600">Privacy Policy</a>
                        <a href="#" className="hover:text-indigo-600">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
