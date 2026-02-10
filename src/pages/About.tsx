import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Users, History, TreePine } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-foreground py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-primary-foreground mb-4">
              About Langport
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              A historic market town in the heart of the Somerset Levels
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
              A Town Rich in History
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Langport is a small but historically significant market town situated on the River Parrett in Somerset, England. Once one of the most important towns in the county, Langport served as a Saxon burh and mint town, playing a vital role in the defence and commerce of early medieval England.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The town's elevated position above the Somerset Levels made it a natural stronghold and trading post. Its name derives from the Old English "lang port," meaning "long market place," reflecting its centuries-old tradition as a centre of trade.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, Langport retains much of its historic charm with its distinctive hilltop High Street, the iconic Hanging Chapel — one of only a handful of such structures remaining in England — and a thriving community spirit that keeps the town's traditions alive.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="border-t border-border">
          <div className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-foreground flex items-center justify-center">
                  <History className="h-5 w-5 text-background" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Historic Heritage</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    From the Battle of Langport in 1645 to the medieval Hanging Chapel, the town is steeped in history. The 15th-century All Saints Church offers panoramic views across the Levels.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-foreground flex items-center justify-center">
                  <TreePine className="h-5 w-5 text-background" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Somerset Levels</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Langport sits at the edge of the Somerset Levels, a unique wetland landscape home to rare wildlife, stunning sunsets, and miles of peaceful walking trails along the River Parrett.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-foreground flex items-center justify-center">
                  <Users className="h-5 w-5 text-background" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Community Spirit</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    With regular markets, festivals, and events, Langport has an active and welcoming community. Local groups and societies ensure there's always something happening in town.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-foreground flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-background" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Local Amenities</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Despite its small size, Langport offers independent shops, cafés, a library, health centre, and excellent local schools. The neighbouring village of Huish Episcopi adds further amenities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Here */}
        <section className="border-t border-border">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
                Getting Here
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Langport is located on the A378 between Taunton and Somerton, approximately 15 miles east of Taunton and 6 miles west of Somerton. The town is well connected by road via the A303 and M5 motorway.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The nearest railway station is at Taunton, with regular services from London Paddington, Bristol, and Exeter. Local bus services connect Langport to surrounding towns and villages.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
