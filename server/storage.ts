import type { Restaurant, MenuItem, CartItem } from "@shared/schema";

export interface IStorage {
  getRestaurants(): Promise<Restaurant[]>;
  getRestaurant(id: number): Promise<Restaurant | undefined>;
  getMenuItems(restaurantId: number): Promise<MenuItem[]>;
  getCartItems(): Promise<CartItem[]>;
  addCartItem(menuItemId: number, quantity: number): Promise<CartItem>;
  updateCartItem(id: number, quantity: number): Promise<CartItem | undefined>;
  removeCartItem(id: number): Promise<void>;
  clearCart(): Promise<void>;
}

export class MemStorage implements IStorage {
  private restaurants: Restaurant[] = [
    {
      id: 1,
      name: "Burger Palace",
      cuisine: "American",
      rating: 4.5,
      deliveryTime: "20-30 min",
      image: "/src/assets/burger.jpg",
    },
    {
      id: 2,
      name: "Pizza Paradise",
      cuisine: "Italian",
      rating: 4.7,
      deliveryTime: "25-35 min",
      image: "/src/assets/pizza.jpg",
    },
    {
      id: 3,
      name: "Sushi Express",
      cuisine: "Japanese",
      rating: 4.8,
      deliveryTime: "30-40 min",
      image: "/src/assets/sushi.jpg",
    },
    {
      id: 4,
      name: "Green Garden",
      cuisine: "Healthy",
      rating: 4.6,
      deliveryTime: "15-25 min",
      image: "/src/assets/salad.jpg",
    },
  ];

  private menuItems: MenuItem[] = [
    {
      id: 1,
      restaurantId: 1,
      name: "Classic Burger",
      description: "Beef patty with lettuce, tomato, and special sauce",
      price: 12.99,
      image: "/src/assets/burger.jpg",
      category: "Main",
    },
    {
      id: 2,
      restaurantId: 1,
      name: "Cheese Burger",
      description: "Double beef patty with extra cheese",
      price: 14.99,
      image: "/src/assets/burger.jpg",
      category: "Main",
    },
    {
      id: 3,
      restaurantId: 2,
      name: "Margherita Pizza",
      description: "Fresh mozzarella, tomatoes, and basil",
      price: 15.99,
      image: "/src/assets/pizza.jpg",
      category: "Main",
    },
    {
      id: 4,
      restaurantId: 2,
      name: "Pepperoni Pizza",
      description: "Classic pepperoni with mozzarella cheese",
      price: 17.99,
      image: "/src/assets/pizza.jpg",
      category: "Main",
    },
    {
      id: 5,
      restaurantId: 3,
      name: "California Roll",
      description: "Crab, avocado, and cucumber",
      price: 10.99,
      image: "/src/assets/sushi.jpg",
      category: "Main",
    },
    {
      id: 6,
      restaurantId: 3,
      name: "Salmon Sashimi",
      description: "Fresh salmon slices",
      price: 18.99,
      image: "/src/assets/sushi.jpg",
      category: "Main",
    },
    {
      id: 7,
      restaurantId: 4,
      name: "Caesar Salad",
      description: "Fresh romaine lettuce with Caesar dressing",
      price: 9.99,
      image: "/src/assets/salad.jpg",
      category: "Main",
    },
    {
      id: 8,
      restaurantId: 4,
      name: "Greek Salad",
      description: "Tomatoes, cucumber, feta cheese, and olives",
      price: 11.99,
      image: "/src/assets/salad.jpg",
      category: "Main",
    },
  ];

  private cartItems: CartItem[] = [];
  private nextCartId = 1;

  async getRestaurants(): Promise<Restaurant[]> {
    return this.restaurants;
  }

  async getRestaurant(id: number): Promise<Restaurant | undefined> {
    return this.restaurants.find((r) => r.id === id);
  }

  async getMenuItems(restaurantId: number): Promise<MenuItem[]> {
    return this.menuItems.filter((m) => m.restaurantId === restaurantId);
  }

  async getCartItems(): Promise<CartItem[]> {
    return this.cartItems;
  }

  async addCartItem(menuItemId: number, quantity: number): Promise<CartItem> {
    const existingItem = this.cartItems.find((item) => item.menuItemId === menuItemId);
    
    if (existingItem) {
      existingItem.quantity += quantity;
      return existingItem;
    }

    const newItem: CartItem = {
      id: this.nextCartId++,
      menuItemId,
      quantity,
    };
    this.cartItems.push(newItem);
    return newItem;
  }

  async updateCartItem(id: number, quantity: number): Promise<CartItem | undefined> {
    const item = this.cartItems.find((item) => item.id === id);
    if (item) {
      item.quantity = quantity;
    }
    return item;
  }

  async removeCartItem(id: number): Promise<void> {
    this.cartItems = this.cartItems.filter((item) => item.id !== id);
  }

  async clearCart(): Promise<void> {
    this.cartItems = [];
  }
}

export const storage = new MemStorage();
