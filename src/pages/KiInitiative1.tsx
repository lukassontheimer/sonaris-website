import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const KiInitiative1 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">KI Initiative 1</h1>
          <p className="text-muted-foreground">
            Diese Seite ist in Entwicklung.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default KiInitiative1;
