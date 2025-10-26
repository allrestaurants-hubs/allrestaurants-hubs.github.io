import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, MapPin, ArrowLeft, Plus } from "lucide-react";
import { toast } from "sonner";
import pizzaImage from "@/assets/pizza.jpg";
import burgerImage from "@/assets/burger.jpg";
import sushiImage from "@/assets/sushi.jpg";
import saladImage from "@/assets/salad.jpg";

const Menu = () => {
  const { id } = useParams();

  // Mock restaurant data
  const restaurants: Record<string, any> = {
    "1": {
      name: "Bella Italia",
      image: pizzaImage,
      cuisine: "Italian",
      rating: 4.8,
      deliveryTime: "25-35 min",
      address: "123 Main St, New York, NY",
      menu: [
        { id: 1, name: "Margherita Pizza", price: 12.99, description: "Classic tomato and mozzarella", image: pizzaImage },
        { id: 2, name: "Pepperoni Pizza", price: 14.99, description: "Loaded with pepperoni", image: pizzaImage },
        { id: 3, name: "Quattro Formaggi", price: 15.99, description: "Four cheese pizza", image: pizzaImage },
        { id: 4, name: "Vegetarian Pizza", price: 13.99, description: "Fresh vegetables", image: pizzaImage },
      ],
    },
    "2": {
      name: "Burger Paradise",
      image: burgerImage,
      cuisine: "American",
      rating: 4.6,
      deliveryTime: "20-30 min",
      address: "456 Food Ave, New York, NY",
      menu: [
        { id: 1, name: "Classic Burger", price: 9.99, description: "Beef patty with lettuce and tomato", image: burgerImage },
        { id: 2, name: "Cheese Burger", price: 10.99, description: "With melted cheddar", image: burgerImage },
        { id: 3, name: "Bacon Burger", price: 12.99, description: "Crispy bacon strips", image: burgerImage },
        { id: 4, name: "Veggie Burger", price: 9.99, description: "Plant-based patty", image: burgerImage },
      ],
    },
    "3": {
      name: "Sushi Master",
      image: sushiImage,
      cuisine: "Japanese",
      rating: 4.9,
      deliveryTime: "30-40 min",
      address: "789 Sushi Blvd, New York, NY",
      menu: [
        { id: 1, name: "California Roll", price: 8.99, description: "Crab, avocado, cucumber", image: sushiImage },
        { id: 2, name: "Salmon Nigiri", price: 12.99, description: "Fresh salmon", image: sushiImage },
        { id: 3, name: "Tuna Roll", price: 10.99, description: "Spicy tuna", image: sushiImage },
        { id: 4, name: "Sashimi Platter", price: 18.99, description: "Assorted fresh fish", image: sushiImage },
      ],
    },
    "4": {
      name: "Green Bowl",
      image: saladImage,
      cuisine: "Healthy",
      rating: 4.7,
      deliveryTime: "15-25 min",
      address: "321 Health St, New York, NY",
      menu: [
        { id: 1, name: "Caesar Salad", price: 8.99, description: "Romaine, parmesan, croutons", image: saladImage },
        { id: 2, name: "Greek Salad", price: 9.99, description: "Feta, olives, cucumber", image: saladImage },
        { id: 3, name: "Cobb Salad", price: 11.99, description: "Chicken, bacon, egg", image: saladImage },
        { id: 4, name: "Quinoa Bowl", price: 10.99, description: "Quinoa, vegetables, dressing", image: saladImage },
      ],
    },
  };

  const restaurant = restaurants[id || "1"] || restaurants["1"];

  const handleAddToCart = (itemName: string) => {
    toast.success(`${itemName} added to cart!`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Restaurant Header */}
        <section className="relative h-80 overflow-hidden">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <Link to="/restaurants" className="inline-flex items-center text-white mb-4 hover:underline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Restaurants
              </Link>
              
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div className="text-white">
                  <Badge className="mb-2 bg-background/90 text-foreground">
                    {restaurant.cuisine}
                  </Badge>
                  <h1 className="text-4xl font-bold mb-2">{restaurant.name}</h1>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-secondary text-secondary" />
                      <span>{restaurant.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{restaurant.deliveryTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{restaurant.address}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Items */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Menu</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurant.menu.map((item: any) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      <span className="font-bold text-primary">${item.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {item.description}
                    </p>
                    <Button
                      onClick={() => handleAddToCart(item.name)}
                      className="w-full"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
