import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Logo } from "@/components/Logo";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const modalContent = {
    'modal-1': {
      title: 'No Percentage Fees',
      content: 'Unlike traditional property management companies that take 10-30% of rental income, we operate on a transparent flat-fee structure. You keep 100% of the agreed rental rate, making your returns more predictable and profitable.'
    },
    'modal-2': {
      title: 'Furnished & Professionally Cleaned',
      content: 'We provide high-quality furniture, linens, kitchenware, and all necessary amenities. Professional cleaning services ensure each unit is spotless between guests. This turnkey approach maximizes guest satisfaction and property value.'
    },
    'modal-3': {
      title: 'Walking Distance to Downtown & UM',
      content: 'Our properties are strategically located within walking distance of downtown Ann Arbor and the University of Michigan campus. This prime location attracts visiting professors, researchers, medical professionals, and business travelers who value convenience and accessibility.'
    },
    'modal-4': {
      title: 'Flexible 2–6 Month Stays',
      content: 'Our flexible stay options cater to professionals on temporary assignments, visiting academics, medical residents, and others needing quality accommodations for extended periods. This niche market commands premium rates while maintaining high occupancy.'
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header 
        className={`sticky-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          headerScrolled 
            ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo size="md" className="cursor-pointer" />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('how')}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('benefits')}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Benefits
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Contact
              </button>
            </nav>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <i className="fas fa-bars text-xl"></i>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="w-4/5">
          <SheetHeader>
            <SheetTitle className="text-xl font-bold text-primary text-left">
              <Logo size="sm" />
            </SheetTitle>
          </SheetHeader>
          <nav className="space-y-6 mt-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="block text-lg text-foreground hover:text-primary transition-colors duration-200 w-full text-left"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('how')}
              className="block text-lg text-foreground hover:text-primary transition-colors duration-200 w-full text-left"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="block text-lg text-foreground hover:text-primary transition-colors duration-200 w-full text-left"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block text-lg text-foreground hover:text-primary transition-colors duration-200 w-full text-left"
            >
              Contact
            </button>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              We pay quarterly, you never carry vacancy risk.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Annual or multi-year commercial leases for 2–6 month rentals—no % fees, no finder's fees.
            </p>
            <div className="mb-8">
              <Button 
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg shadow-lg hover:shadow-xl px-8 py-6"
              >
                <a href="mailto:contact@mavirentals.com?subject=Rental%20Inquiry">
                  <i className="fas fa-envelope mr-3"></i>
                  Email Us
                </a>
              </Button>
            </div>
            <p className="text-sm text-gray-300">
              UM alums • 2 years • 5 units managed
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">About Mavi Rentals LLC</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Founded by University of Michigan alumni, we specialize in professional short-term rental management in Ann Arbor. 
              Our unique approach eliminates vacancy risk for property owners while providing high-quality furnished accommodations 
              for visiting professionals, academics, and extended-stay guests.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process ensures consistent income for property owners with zero vacancy risk.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-file-contract text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Lease Terms</h3>
              <p className="text-muted-foreground">Annual or multi-year commercial lease agreements provide stability and predictable income.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-calendar-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Quarterly Rent</h3>
              <p className="text-muted-foreground">Receive your rental payments quarterly in advance, ensuring consistent cash flow.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Vacancy Coverage</h3>
              <p className="text-muted-foreground">We assume all vacancy risk, guaranteeing your income regardless of occupancy rates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Why Choose Mavi Rentals</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive service offering ensures maximum returns with minimal hassle for property owners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-percentage text-primary text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-card-foreground">No Percentage Fees</h3>
              <p className="text-muted-foreground text-sm mb-4">Keep 100% of your agreed rental income with our flat-fee structure.</p>
              <Button
                variant="link"
                className="text-primary hover:text-primary/80 text-sm font-medium p-0 h-auto"
                onClick={() => setActiveModal('modal-1')}
              >
                Learn More <i className="fas fa-arrow-right ml-1"></i>
              </Button>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-couch text-secondary text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-card-foreground">Furnished & Cleaned</h3>
              <p className="text-muted-foreground text-sm mb-4">Professionally furnished units with regular cleaning services included.</p>
              <Button
                variant="link"
                className="text-primary hover:text-primary/80 text-sm font-medium p-0 h-auto"
                onClick={() => setActiveModal('modal-2')}
              >
                Learn More <i className="fas fa-arrow-right ml-1"></i>
              </Button>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-map-marker-alt text-accent text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-card-foreground">Prime Location</h3>
              <p className="text-muted-foreground text-sm mb-4">Walking distance to downtown Ann Arbor and University of Michigan campus.</p>
              <Button
                variant="link"
                className="text-primary hover:text-primary/80 text-sm font-medium p-0 h-auto"
                onClick={() => setActiveModal('modal-3')}
              >
                Learn More <i className="fas fa-arrow-right ml-1"></i>
              </Button>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-clock text-red-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-card-foreground">Flexible Stays</h3>
              <p className="text-muted-foreground text-sm mb-4">Accommodate guests for 2–6 month stays, perfect for professionals and academics.</p>
              <Button
                variant="link"
                className="text-primary hover:text-primary/80 text-sm font-medium p-0 h-auto"
                onClick={() => setActiveModal('modal-4')}
              >
                Learn More <i className="fas fa-arrow-right ml-1"></i>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Ready to Partner?</h2>
              <p className="text-lg text-muted-foreground">
                Get started with Mavi Rentals and experience hassle-free property management.
              </p>
            </div>
            
            <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Email us at contact@mavirentals.com with:</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <i className="fas fa-user text-white text-xs"></i>
                  </div>
                  <span className="text-muted-foreground">Your name</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <i className="fas fa-home text-white text-xs"></i>
                  </div>
                  <span className="text-muted-foreground">Property address</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <i className="fas fa-calendar text-white text-xs"></i>
                  </div>
                  <span className="text-muted-foreground">Desired term (2 mo / 3 mo / 6 mo / multi-year)</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <i className="fas fa-question text-white text-xs"></i>
                  </div>
                  <span className="text-muted-foreground">Any questions</span>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg shadow-lg hover:shadow-xl px-8 py-6"
                >
                  <a href="mailto:contact@mavirentals.com?subject=Rental%20Inquiry&body=Hi,%0A%0AName:%20%0AProperty%20Address:%20%0ADesired%20Term:%20%0AQuestions:%20%0A%0AThank%20you!">
                    <i className="fas fa-envelope mr-3"></i>
                    Email Us Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4">Mavi Rentals LLC</h3>
              <p className="text-gray-300 mb-4">UM alumni • Ann Arbor, MI</p>
              
              <div className="flex justify-center space-x-6 mb-6">
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
              </div>
            </div>
            
            <div className="border-t border-gray-600 pt-6">
              <p className="text-gray-400 text-sm">
                © 2024 Mavi Rentals LLC. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {Object.entries(modalContent).map(([modalId, content]) => (
        <Dialog 
          key={modalId}
          open={activeModal === modalId} 
          onOpenChange={(open) => !open && setActiveModal(null)}
        >
          <DialogContent className="max-w-md mx-4">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold mb-4">{content.title}</DialogTitle>
            </DialogHeader>
            <p className="text-muted-foreground mb-4">{content.content}</p>
            <Button 
              onClick={() => setActiveModal(null)}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Close
            </Button>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
