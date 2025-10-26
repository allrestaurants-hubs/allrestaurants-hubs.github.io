import { z } from "zod";

export const restaurantSchema = z.object({
  id: z.number(),
  name: z.string(),
  cuisine: z.string(),
  rating: z.number(),
  deliveryTime: z.string(),
  image: z.string(),
});

export type Restaurant = z.infer<typeof restaurantSchema>;

export const menuItemSchema = z.object({
  id: z.number(),
  restaurantId: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  image: z.string(),
  category: z.string(),
});

export type MenuItem = z.infer<typeof menuItemSchema>;

export const cartItemSchema = z.object({
  id: z.number(),
  menuItemId: z.number(),
  quantity: z.number(),
});

export type CartItem = z.infer<typeof cartItemSchema>;
