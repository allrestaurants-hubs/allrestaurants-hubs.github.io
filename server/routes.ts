import type { Express } from "express";
import { storage } from "./storage";
import { z } from "zod";

export function registerRoutes(app: Express) {
  app.get("/api/restaurants", async (_req, res) => {
    const restaurants = await storage.getRestaurants();
    res.json(restaurants);
  });

  app.get("/api/restaurants/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const restaurant = await storage.getRestaurant(id);
    if (!restaurant) {
      return res.status(404).json({ error: "Restaurant not found" });
    }
    res.json(restaurant);
  });

  app.get("/api/restaurants/:id/menu", async (req, res) => {
    const id = parseInt(req.params.id);
    const menuItems = await storage.getMenuItems(id);
    res.json(menuItems);
  });

  app.get("/api/cart", async (_req, res) => {
    const cartItems = await storage.getCartItems();
    res.json(cartItems);
  });

  app.post("/api/cart", async (req, res) => {
    const schema = z.object({
      menuItemId: z.number(),
      quantity: z.number().min(1),
    });

    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ error: result.error });
    }

    const cartItem = await storage.addCartItem(result.data.menuItemId, result.data.quantity);
    res.json(cartItem);
  });

  app.patch("/api/cart/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const schema = z.object({
      quantity: z.number().min(1),
    });

    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ error: result.error });
    }

    const cartItem = await storage.updateCartItem(id, result.data.quantity);
    if (!cartItem) {
      return res.status(404).json({ error: "Cart item not found" });
    }
    res.json(cartItem);
  });

  app.delete("/api/cart/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    await storage.removeCartItem(id);
    res.json({ success: true });
  });

  app.delete("/api/cart", async (_req, res) => {
    await storage.clearCart();
    res.json({ success: true });
  });
}
