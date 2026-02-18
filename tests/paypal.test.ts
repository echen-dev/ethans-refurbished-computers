import { generateAccessToken, paypal } from "../lib/paypal";

test("Generates a PayPal access token", async () => {
  const tokenRes = await generateAccessToken();
  console.log(tokenRes);
  expect(typeof tokenRes).toBe("string");
  expect(tokenRes.length).toBeGreaterThan(0);
});

test("Create a PayPal order", async () => {
  const price = 10.0;
  const orderRes = await paypal.createOrder(price);
  console.log(orderRes);
  expect(orderRes).toHaveProperty("id");
  expect(orderRes).toHaveProperty("status", "CREATED");
});

test("Simulate capturing a payment with mock order", async () => {
  const orderId = "100";
  const mockCapturePayments = jest
    .spyOn(paypal, "capturePayment")
    .mockResolvedValue({
      status: "COMPLETED",
    });
  const captureRes = await paypal.capturePayment(orderId);
  expect(captureRes).toHaveProperty("status", "COMPLETED");
  mockCapturePayments.mockRestore();
});
