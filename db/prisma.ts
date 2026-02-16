import { PrismaClient } from "@/lib/generated/prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { neonConfig } from "@neondatabase/serverless";
import ws from "ws";
import dotenv from "dotenv";

dotenv.config();
neonConfig.webSocketConstructor = ws;
const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaNeon({ connectionString });
export const prisma = new PrismaClient({ adapter }).$extends({
  result: {
    product: {
      price: {
        compute(product) {
          return product.price.toString();
        },
      },
    },
    cart: {
      itemsPrice: {
        needs: { itemsPrice: true },
        compute(cart) {
          return cart.itemsPrice.toString();
        },
      },
      shippingPrice: {
        needs: { shippingPrice: true },
        compute(cart) {
          return cart.shippingPrice.toString();
        },
      },
      taxPrice: {
        needs: { taxPrice: true },
        compute(cart) {
          return cart.taxPrice.toString();
        },
      },
      totalPrice: {
        needs: { totalPrice: true },
        compute(cart) {
          return cart.totalPrice.toString();
        },
      },
    },
    order: {
      itemsPrice: {
        needs: { itemsPrice: true },
        compute(cart) {
          return cart.itemsPrice.toString();
        },
      },
      shippingPrice: {
        needs: { shippingPrice: true },
        compute(cart) {
          return cart.shippingPrice.toString();
        },
      },
      taxPrice: {
        needs: { taxPrice: true },
        compute(cart) {
          return cart.taxPrice.toString();
        },
      },
      totalPrice: {
        needs: { totalPrice: true },
        compute(cart) {
          return cart.totalPrice.toString();
        },
      },
    },
    orderItem: {
      price: {
        compute(cart) {
          return cart.price.toString();
        },
      },
    },
  },
});
