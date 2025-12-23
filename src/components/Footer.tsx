import { Link } from 'react-router-dom';
import { Calendar, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary">
                <Calendar className="h-5 w-5 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold">Town Events</h3>
                <p className="text-xs text-primary-foreground/60">Community Calendar</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 max-w-md">
              Your central hub for discovering and sharing community events. 
              Bringing neighbours together through local happenings.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  All Events
                </Link>
              </li>
              <li>
                <Link to="/venues" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Venues
                </Link>
              </li>
              <li>
                <Link to="/submit" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Submit Event
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold mb-4">Contact Council</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Mail className="h-4 w-4 text-secondary" />
                <span>events@towncouncil.gov</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Phone className="h-4 w-4 text-secondary" />
                <span>01onal 234 5678</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>Town Hall, Main Street</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Town Council Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
