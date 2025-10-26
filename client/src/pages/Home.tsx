import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RestaurantCard from "@/components/RestaurantCard";
import { ArrowRight, Clock, Shield, Smartphone } from "lucide-react";
import heroImage from "@/assets/hero-food.jpg";
import pizzaImage from "@/assets/pizza.jpg";
import burgerImage from "@/assets/burger.jpg";
import sushiImage from "@/assets/sushi.jpg";
import saladImage from "@/assets/salad.jpg";

const Home = () => {
  const featuredRestaurants = [
    {
      id: "1",
      name: "Bella Italia",
      image: pizzaImage,
      cuisine: "Italian",
      rating: 4.8,
      deliveryTime: "25-35 min",
      minOrder: "$15",
    },
    {
      id: "2",
      name: "Burger Paradise",
      image: burgerImage,
      cuisine: "American",
      rating: 4.6,
      deliveryTime: "20-30 min",
      minOrder: "$10",
    },
    {
      id: "3",
      name: "Sushi Master",
      image: sushiImage,
      cuisine: "Japanese",
      rating: 4.9,
      deliveryTime: "30-40 min",
      minOrder: "$20",
    },
    {
      id: "4",
      name: "Green Bowl",
      image: saladImage,
      cuisine: "Healthy",
      rating: 4.7,
      deliveryTime: "15-25 min",
      minOrder: "$12",
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Get your food delivered in 30 minutes or less",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "100% secure payment and contactless delivery",
    },
    {
      icon: Smartphone,
      title: "Easy Ordering",
      description: "Order from anywhere with our simple interface",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Delicious food"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
          </div>
          
          <div className="container mx-auto px-4 z-10 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              Your Favorite Food,
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Delivered Fast
              </span>
            </h1>
            <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              Order from the best local restaurants with easy delivery to your doorstep
            </p>
            <Link to="/restaurants">
              <Button
                variant="hero"
                size="lg"
                className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300"
              >
                Order Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-none shadow-sm">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent mb-4">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Restaurants */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Popular Restaurants</h2>
                <p className="text-muted-foreground">
                  Discover the best restaurants in your area
                </p>
              </div>
              <Link to="/restaurants">
                <Button variant="outline">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} {...restaurant} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Order?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Browse hundreds of restaurants and get your food delivered in minutes
            </p>
            <Link to="/restaurants">
              <Button
                size="lg"
                variant="secondary"
                className="shadow-lg"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
