import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VenueCard from '@/components/VenueCard';
import { venues } from '@/data/mockData';
import { MapPin } from 'lucide-react';

const Venues = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-foreground py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-primary-foreground mb-4">
              Venues in Langport
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Discover the wonderful spaces available for community events, 
              from our historic Town Hall to beautiful Cocklemoor meadow.
            </p>
          </div>
        </section>

        {/* Venues Grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {venues.map((venue, index) => (
              <div 
                key={venue.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <VenueCard venue={venue} />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Venues;
