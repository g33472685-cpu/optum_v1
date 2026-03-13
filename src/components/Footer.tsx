import { Shield, Instagram, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Shield className="w-8 h-8 text-amber-500" />
              <span className="font-display font-bold text-xl tracking-wider uppercase">
                Optum<span className="text-amber-500">Care</span>
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Mysuru's premier destination for luxury vehicle protection, ceramic coatings, and bespoke detailing services.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-amber-500 hover:text-zinc-950 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-amber-500 hover:text-zinc-950 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-amber-500 hover:text-zinc-950 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-3">
              {['Paint Protection Film', 'Ceramic Coating', 'Graphene Coating', 'Car Detailing', 'Car Wrapping'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>#1475/1, 9th cross, 2nd stage Srirampura</li>
              <li>near naidu stores, Mysuru -570023</li>
              <li className="pt-2">
                <a href="tel:+1234567890" className="hover:text-amber-500 transition-colors">(555) 123-4567</a>
              </li>
              <li>
                <a href="mailto:info@optumcarcare.com" className="hover:text-amber-500 transition-colors">info@optumcarcare.com</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider text-sm">Hours</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Optum Car Care. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
