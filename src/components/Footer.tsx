import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <span className="text-2xl font-display font-bold tracking-tight">LANGPORT</span>
              <span className="text-xs tracking-[0.3em] text-primary-foreground/60 ml-0.5">.LIFE</span>
            </div>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed">
              Your guide to events, activities, and community life in Langport, Somerset. 
              Bringing our historic market town community together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  What's On
                </Link>
              </li>
              <li>
                <Link to="/venues" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Venues
                </Link>
              </li>
              <li>
                <Link to="/submit" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Add Your Event
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Town Council</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Mail className="h-4 w-4" />
                <span>clerk@langport.life</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Phone className="h-4 w-4" />
                <span>01onal 250 062</span>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Town Hall, Bow Street<br />Langport TA10 9PR</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Langport Town Council. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
