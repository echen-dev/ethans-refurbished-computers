import { hashSync } from "bcrypt-ts-edge";

const sampleData = {
  users: [
    {
      name: "John",
      email: "admin@example.com",
      password: hashSync("123456", 10),
      role: "admin",
    },
    {
      name: "Jane",
      email: "user@example.com",
      password: hashSync("123456", 10),
      role: "user",
    },
  ],
  products: [
    {
      name: "Dell Precision T1700 Workstation",
      slug: "dell-precision-t1700-workstation",
      category: "Refurbished Desktop",
      description:
        "Computer has been cleaned and tested with minor scratches on case",
      images: [
        "/images/sample-products/dell-workstation.webp",
        "/images/sample-products/dell-workstation-2.webp",
      ],
      price: 109.99,
      brand: "Dell",
      condition: "Excellent",
      stock: 1,
      isFeatured: true,
      banner: "banner-1.jpg",
    },
    {
      name: "Lenovo ThinkCentre M920s",
      slug: "lenovo-thinkcentre-m920s",
      category: "Refurbished Desktop",
      description: "Computer is like-new and back by a one year warranty",
      images: [
        "/images/sample-products/lenovo-thinkcentre.webp",
        "/images/sample-products/lenovo-thinkcentre-2.webp",
      ],
      price: 155.95,
      brand: "Lenovo",
      condition: "Good",
      stock: 1,
      isFeatured: true,
      banner: "banner-2.jpg",
    },
    {
      name: "HP EliteDesk 800 G5",
      slug: "hp-elitedesk-800-g5",
      category: "Refurbished Desktop",
      description:
        "Professionally refurbished and extensively tested, comes with a copy of Windows 11",
      images: [
        "/images/sample-products/hp-elitedesk.webp",
        "/images/sample-products/hp-elitedesk-2.webp",
      ],
      price: 199.95,
      brand: "HP",
      condition: "Okay",
      stock: 1,
      isFeatured: false,
      banner: null,
    },
    {
      name: "Dell Latitude 5400 ChromeBook 14",
      slug: "dell-latitude-5400-chromebook-14",
      category: "Refurbished Laptop",
      description:
        "Item may have some scratches due to use, comes with charger",
      images: [
        "/images/sample-products/dell-latitude.webp",
        "/images/sample-products/dell-latitude-2.webp",
      ],
      price: 95.5,
      brand: "Dell",
      condition: "Like New",
      stock: 0,
      isFeatured: false,
      banner: null,
    },
    {
      name: "Lenovo ThinkPad X390",
      slug: "lenovo-thinkpad-x390",
      category: "Refurbished Laptop",
      description:
        "Has signs of comestic wear including scratches from previous use, comes with charger",
      images: [
        "/images/sample-products/lenovo-x390.webp",
        "/images/sample-products/lenovo-x390-2.webp",
      ],
      price: 75.0,
      brand: "Lenovo",
      condition: "Great",
      stock: 1,
      isFeatured: false,
      banner: null,
    },
  ],
};

export default sampleData;
