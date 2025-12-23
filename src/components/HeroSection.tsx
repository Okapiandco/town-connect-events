import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Plus } from 'lucide-react';
import heroImage from '@/assets/langport-hero.jpg';

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] max-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Langport, Somerset - historic market town"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 
            className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground mb-6 animate-fade-up tracking-tight"
          >
            Welcome to Langport
          </h1>
          
          <p 
            className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto animate-fade-up font-light"
            style={{ animationDelay: '0.15s' }}
          >
            Discover what's happening in our historic Somerset market town. 
            From festivals to farmers markets, find your next community event.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            <a href="#events">
              <Button variant="hero" size="xl" className="gap-2 w-full sm:w-auto bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
                View Events
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <Link to="/submit">
              <Button 
                variant="outline" 
                size="xl" 
                className="gap-2 w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
              >
                <Plus className="h-5 w-5" />
                Add Your Event
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
