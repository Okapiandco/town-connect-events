import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, Plus, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden hero-gradient py-16 md:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground/90 text-sm mb-6 animate-fade-up">
            <Calendar className="h-4 w-4" />
            <span>Your Community Events Hub</span>
          </div>

          {/* Heading */}
          <h1 
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Discover What's Happening in Our Town
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            From festivals to council meetings, find all local events in one place. 
            Join your neighbours and be part of our vibrant community.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            <Link to="/submit">
              <Button variant="amber" size="xl" className="gap-2 w-full sm:w-auto">
                <Plus className="h-5 w-5" />
                Submit Your Event
              </Button>
            </Link>
            <a href="#events">
              <Button 
                variant="outline" 
                size="xl" 
                className="gap-2 w-full sm:w-auto bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
              >
                Browse Events
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            <div>
              <div className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground">24+</div>
              <div className="text-sm text-primary-foreground/70">Upcoming Events</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground">5</div>
              <div className="text-sm text-primary-foreground/70">Local Venues</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground">1.2K</div>
              <div className="text-sm text-primary-foreground/70">Active Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
