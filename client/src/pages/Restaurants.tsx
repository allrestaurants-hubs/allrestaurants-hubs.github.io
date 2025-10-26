import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RestaurantCard from "@/components/RestaurantCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import pizzaImage from "@/assets/pizza.jpg";
import burgerImage from "@/assets/burger.jpg";
import sushiImage from "@/assets/sushi.jpg";
import saladImage from "@/assets/salad.jpg";

const Restaurants = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const restaurants = [
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
    {
      id: "5",
      name: "Pizza Roma",
      image: pizzaImage,
      cuisine: "Italian",
      rating: 4.5,
      deliveryTime: "30-40 min",
      minOrder: "$18",
    },
    {
      id: "6",
      name: "Grill House",
      image: burgerImage,
      cuisine: "BBQ",
      rating: 4.7,
      deliveryTime: "25-35 min",
      minOrder: "$15",
    },
    {
      id: "7",
      name: "Tokyo Sushi",
      image: sushiImage,
      cuisine: "Japanese",
      rating: 4.8,
      deliveryTime: "35-45 min",
      minOrder: "$25",
    },
    {
      id: "8",
      name: "Fresh Garden",
      image: saladImage,
      cuisine: "Vegan",
      rating: 4.6,
      deliveryTime: "20-30 min",
      minOrder: "$10",
    },
  ];

  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              All Restaurants
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Choose from hundreds of amazing restaurants
            </p>
            
            {/* Search */}
            <div className="max-w-2xl relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search restaurants or cuisines..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-white"
              />
            </div>
          </div>
        </section>

        {/* Restaurants Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">
                {filteredRestaurants.length} Restaurants Available
              </h2>
            </div>
            
            {filteredRestaurants.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredRestaurants.map((restaurant) => (
                  <RestaurantCard key={restaurant.id} {...restaurant} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground">
                  No restaurants found matching "{searchQuery}"
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => setSearchQuery("")}
                >
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Restaurants;
