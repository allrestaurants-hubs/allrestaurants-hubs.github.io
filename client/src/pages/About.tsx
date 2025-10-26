import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Customer First",
      description: "We put our customers at the heart of everything we do, ensuring the best experience every time.",
    },
    {
      icon: Target,
      title: "Quality Service",
      description: "We partner with the best restaurants to bring you high-quality food and reliable delivery.",
    },
    {
      icon: Heart,
      title: "Passion for Food",
      description: "We're passionate about connecting people with the food they love from their favorite restaurants.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We continuously improve our platform to make ordering food easier and faster than ever.",
    },
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "500+", label: "Restaurant Partners" },
    { number: "100K+", label: "Orders Delivered" },
    { number: "4.8", label: "Average Rating" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">About FoodExpress</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              We're on a mission to connect people with the best food from their favorite local restaurants,
              delivered fast and fresh to their doorstep.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="text-lg text-muted-foreground space-y-4">
                <p>
                  Founded in 2020, FoodExpress started with a simple idea: make it easy for people to enjoy
                  their favorite restaurant meals without leaving home.
                </p>
                <p>
                  What began as a small local service has grown into a platform connecting thousands of
                  customers with hundreds of amazing restaurants. We're proud to support local businesses
                  while making life more convenient for our customers.
                </p>
                <p>
                  Today, we continue to innovate and improve, ensuring that every order is delivered with
                  the same care and quality you'd expect from dining in.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center border-none shadow-sm">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent mb-4">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              To make delicious food accessible to everyone, supporting local restaurants and creating
              a seamless delivery experience that brings joy to every meal.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
