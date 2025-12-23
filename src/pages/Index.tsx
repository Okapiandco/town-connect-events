import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import EventCard from '@/components/EventCard';
import CategoryFilter from '@/components/CategoryFilter';
import { events } from '@/data/mockData';
import { EventCategory } from '@/types/events';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<EventCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const approvedEvents = events.filter(e => e.status === 'approved');
  const featuredEvents = approvedEvents.filter(e => e.isFeatured);
  
  const filteredEvents = useMemo(() => {
    return approvedEvents.filter(event => {
      const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
      const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           event.venue.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [approvedEvents, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero */}
      <HeroSection />

      {/* Main Content */}
      <main className="flex-1">
        {/* Featured Events */}
        {featuredEvents.length > 0 && (
          <section className="container mx-auto px-4 py-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Featured Events
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredEvents.slice(0, 2).map((event, index) => (
                <div 
                  key={event.id} 
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <EventCard event={event} featured />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* All Events */}
        <section id="events" className="container mx-auto px-4 py-12 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
              Upcoming Events
            </h2>
            
            {/* Search */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          {/* Events Grid */}
          {filteredEvents.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event, index) => (
                <div 
                  key={event.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-muted-foreground text-lg">
                No events found matching your criteria.
              </div>
              <p className="text-muted-foreground/70 mt-2">
                Try adjusting your search or filter settings.
              </p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
