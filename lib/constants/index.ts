export const APP_NAME =
  process.env.NEXT_PUBLIC_APP_NAME || "Ethan's Refurbished Computers";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "Reducing e-waste by building computers from used / discarded components";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
export const LATEST_PRODUCTS_LIMIT =
  Number(process.env.LATEST_PRODUCTS_LIMIT) || 8;
export const signInDefaultValues = {
  email: "",
  password: "",
};
export const signUpDefaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export const shippingAddressDefaultValues = {
  fullName: "John Doe",
  streetAddress: "123 Main Street",
  city: "AnyTown",
  postalCode: "12345",
  country: "USA",
};
