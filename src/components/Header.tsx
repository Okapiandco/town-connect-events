import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, Plus, MapPin, Menu, X, Info, Phone } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: "WHAT'S ON" },
    { path: '/venues', label: 'VENUES' },
    { path: '/about', label: 'ABOUT' },
    { path: '/submit', label: 'ADD EVENT' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span className="text-2xl font-display font-bold tracking-tight text-foreground">
                LANGPORT
              </span>
              <span className="text-xs tracking-[0.3em] text-muted-foreground font-medium -mt-1">
                .LIFE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ path, label }) => (
              <Link 
                key={path} 
                to={path}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-foreground ${
                  isActive(path) 
                    ? 'text-foreground border-b-2 border-foreground pb-1' 
                    : 'text-muted-foreground'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/submit">
              <Button variant="outline" size="default" className="gap-2 uppercase tracking-wide text-xs">
                <Plus className="h-4 w-4" />
                Submit Event
              </Button>
            </Link>
          </div>
            
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-6 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map(({ path, label }) => (
                <Link 
                  key={path} 
                  to={path} 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium tracking-wide py-2 ${
                    isActive(path) ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
