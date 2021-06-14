/* import product1 from "./cake2.jpg"; */
import product2 from "./cake2.jpg";
import product3 from "./cake2.jpg";
import product4 from "./cake2.jpg";
import img1 from "./assets/img/img1.jpg";
import img2 from "./assets/img/img2.jpg";
import img3 from "./assets/img/img3.jpg";
import img4 from "./assets/img/img4.jpg";
import img5 from "./assets/img/img5.jpg";
import img6 from "./assets/img/img6.jpg";
import img7 from "./assets/img/img7.jpg";
import img8 from "./assets/img/img8.jpg";
import img9 from "./assets/img/img9.jpg";
import img10 from "./assets/img/img10.jpg";
import img11 from "./assets/img/img11.jpg";
import img12 from "./assets/img/img12.jpg";
import img13 from "./assets/img/img13.jpg";
import img14 from "./assets/img/img14.jpg";
import img15 from "./assets/img/img15.jpg";
import img16 from "./assets/img/img16.jpg";
import img17 from "./assets/img/img17.jpg";

export default {
  products: [
    {
      sys: {
        id: "1",
      },
      fields: {
        name: "basic cupcake",
        slug: "basic-cupcake",
        type: "cupcake",
        price: 10,
        size: 200,
        quantity: 0,
        cheese: false,
        chocolate: false,
        featured: true,
        description:
          "The taste is derived from the simple narrative, the ingredients come together to create the simplest cupcake. The same layer of flavor membrane of the simple cake brings fat, sweetness.",
        extras: ["Cake box", "Card"],
        images: [
          {
            fields: {
              file: {
                url: img1,
              },
            },
          },
          {
            fields: {
              file: {
                url: product2,
              },
            },
          },
          {
            fields: {
              file: {
                url: product3,
              },
            },
          },
          {
            fields: {
              file: {
                url: product4,
              },
            },
          },
        ],
      },
    },
    {
      sys: {
        id: "2",
      },
      fields: {
        name: "chocolate cupcake",
        slug: "cupcake-chocolate",
        type: "cupcake",
        price: 15,
        size: 250,
        quantity: 0,
        cheese: false,
        chocolate: true,
        featured: false,
        description:
          "These super moist chocolate cupcakes pack TONS of chocolate flavor in each cupcake wrapper! Made from simple everyday ingredients, this easy cupcake recipe will be your new favorite. For best results, use natural cocoa powder and buttermilk. These chocolate cupcakes taste completely over-the-top with chocolate buttercream!",
        extras: ["Cake box", "Card"],
        images: [
          {
            fields: {
              file: {
                url: img2,
              },
            },
          },
          {
            fields: {
              file: {
                url: product2,
              },
            },
          },
          {
            fields: {
              file: {
                url: product3,
              },
            },
          },
          {
            fields: {
              file: {
                url: product4,
              },
            },
          },
        ],
      },
    },
    {
      sys: {
        id: "3",
      },
      fields: {
        name: "lemon cupcake",
        slug: "cupcake-lemon",
        type: "cupcake",
        price: 15,
        size: 300,
        quantity: 0,
        cheese: false,
        chocolate: false,
        featured: false,
        description:
          "Sunshine sweet homemade lemon cupcakes are soft and moist, bursting with lemon flavor, and topped with my favorite vanilla buttercream. You’ll love the refreshing zest of citrus flavor in each bite!",
        extras: ["Cake box", "Card"],
        images: [
          {
            fields: {
              file: {
                url: img3,
              },
            },
          },
          {
            fields: {
              file: {
                url: product2,
              },
            },
          },
          {
            fields: {
              file: {
                url: product3,
              },
            },
          },
          {
            fields: {
              file: {
                url: product4,
              },
            },
          },
        ],
      },
    },
    {
      sys: {
        id: "4",
      },
      fields: {
        name: "cheese cupcake",
        slug: "cupcake-cheese",
        type: "cupcake",
        price: 15,
        size: 400,
        quantity: 0,
        cheese: true,
        chocolate: false,
        featured: false,
        description:
          "Cheese cupcake basically is a cupcake flavoured with cheese, usually cheddar to give it a cheesy taste. Unlike Western cupcake counterparts this is never frosted and designed to look pretty but it is made really simple just with a topping of grated cheese.",
        extras: ["Cake box", "Card"],
        images: [
          {
            fields: {
              file: {
                url: img4,
              },
            },
          },
          {
            fields: {
              file: {
                url: product2,
              },
            },
          },
          {
            fields: {
              file: {
                url: product3,
              },
            },
          },
          {
            fields: {
              file: {
                url: product4,
              },
            },
          },
        ],
      },
    },
    {
      sys: {
        id: "5",
      },
      fields: {
        name: "cheese cake",
        slug: "cake-cheese",
        type: "cake",
        price: 200,
        size: 300,
        quantity: 0,
        capacity: 2,
        cheese: true,
        chocolate: false,
        featured: false,
        description:
          "Not too tired because there is a reasonable mix between whipping ratio of cream, yogurt and creamcheese. You will love the cheese cake from the first time you touch your lips. The cheesecake is always appealing with the slightly sour, but greasy, cream cheese flavor mixed in the light bitterness, crispy aroma of the crust.",
        extras: ["Cake box", "Card", "Candle", "Knife"],
        images: [
          {
            fields: {
              file: {
                url: img5,
              },
            },
          },
          {
            fields: {
              file: {
                url: product2,
              },
            },
          },
          {
            fields: {
              file: {
                url: product3,
              },
            },
          },
          {
            fields: {
              file: {
                url: product4,
              },
            },
          },
        ],
      },
    },
    {
      sys: {
        id: "6",
      },
      fields: {
        name: "Red Velvet cake",
        slug: "cake-redvelvet",
        type: "cake",
        price: 250,
        size: 350,
        capacity: 2,
        quantity: 0,
        cheese: false,
        chocolate: false,
        featured: false,
        description:
          "The quality red velvet cake must not only have a vibrant red color, but also have a moist, velvety soft texture, a hint of chocolate and a mild sour taste. In particular, the cream cheese layer of the cake must be cool, beaten just right so that the cotton is soft and still have a rich, creamy egg season. It is all these factors that create the attractive, unmistakable taste of this 'arrogant' cake.",
        extras: ["Cake box", "Card", "Candle", "Knife"],
        images: [
          {
            fields: {
              file: {
                url: img6,
              },
            },
          },
          {
            fields: {
              file: {
                url: product2,
              },
            },
          },
          {
            fields: {
              file: {
                url: product3,
              },
            },
          },
          {
            fields: {
              file: {
                url: product4,
              },
            },
          },
        ],
      },
    },
    {
      sys: {
        id: "7",
      },
      fields: {
        name: "ice cream cake",
        slug: "cake-icecream",
        type: "cake",
        price: 250,
        size: 400,
        capacity: 2,
        quantity: 0,
        cheese: false,
        chocolate: false,
        featured: false,
        description:
          "Cream is poured into the cake mold, put in the freezer of the refrigerator to freeze, separate and lay the thin layers together and decorate into a large cake. Because the main ingredient is cold cream, this cake line will be suitable for birthday parties in rooms with air conditioning..",
        extras: ["Cake box", "Card", "Candle", "Knife"],
        images: [
          {
            fields: {
              file: {
                url: img7,
              },
            },
          },
          {
            fields: {
              file: {
                url: product2,
              },
            },
          },
          {
            fields: {
              file: {
                url: product3,
              },
            },
          },
          {
            fields: {
              file: {
                url: product4,
              },
            },
          },
        ],
      },
    },
    {
      sys: {
        id: "8",
      },
      fields: {
        name: "mousse cake",
        slug: "cake-mousse",
        type: "cake",
        price: 300,
        size: 500,
        capacity: 2,
        quantity: 0,
        cheese: false,
        chocolate: true,
        featured: false,
        description:
          "A mousse is a soft prepared food that incorporates air bubbles to give it a light and airy texture. It can range from light and fluffy to creamy and thick, depending on preparation techniques. A mousse may be sweet or savory.",
        extras: ["Cake box", "Card", "Candle", "Knife"],
        images: [
          {
            fields: {
              file: {
                url: img8,
              },
            },
          },
          {
            fields: {
              file: {
                url: product2,
              },
            },
          },
          {
            fields: {
              file: {
                url: product3,
              },
            },
          },
          {
            fields: {
              file: {
                url: product4,
              },
            },
          },
        ],
      },
    },
    {
      sys: {
        id: "9",
      },
      fields: {
        name: "tiramisu cake",
        slug: "cake-tiramisu",
        type: "cake",
        price: 300,
        size: 500,
        capacity: 3,
        quantity: 0,
        cheese: false,
        chocolate: true,
        featured: false,
        description:
          "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
        extras: ["Cake box", "Card", "Candle", "Knife"],
        images: [
          {
            fields: {
              file: {
                url: img9,
              },
            },
          },
          {
            fields: {
              file: {
                url: product2,
              },
            },
          },
          {
            fields: {
              file: {
                url: product3,
              },
            },
          },
          {
            fields: {
              file: {
                url: product4,
              },
            },
          },
        ],
      },
    },
    {
      sys: {
        id: "10",
      },
      fields: {
        name: "gato cake",
        slug: "cake-gato",
        type: "cake",
        price: 350,
        size: 550,
        capacity: 4,
        quantity: 0,
        cheese: false,
        chocolate: false,
        featured: true,
        description:
          "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
        extras: ["Cake box", "Card", "Candle", "Knife"],
        images: [
          {
            fields: {
              file: {
                url: img10,
              },
            },
          },
          {
            fields: {
              file: {
                url: product2,
              },
            },
          },
          {
            fields: {
              file: {
                url: product3,
              },
            },
          },
          {
            fields: {
              file: {
                url: product4,
              },
            },
          },
        ],
      },
    },
    {
      sys: {
        id: "11",
      },
      fields: {
        name: "bread",
        slug: "bread",
        type: "bread",
        price: 10,
        size: 600,
        capacity: 5,
        quantity: 0,
        cheese: false,
        chocolate: false,
        featured: true,
        description:
          "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
        extras: ["Cake box", "Card"],
        images: [
          {
            fields: {
              file: {
                url: img11,
              },
            },
          },
          {
            fields: {
              file: {
                url: product2,
              },
            },
          },
          {
            fields: {
              file: {
                url: product3,
              },
            },
          },
          {
            fields: {
              file: {
                url: product4,
              },
            },
          },
        ],
      },
    },
    {
      sys: {
        id: "12",
      },
      fields: {
        name: "big daddy",
        slug: "box-dessert",
        type: "box dessert",
        price: 740,
        size: 700,
        capacity: 6,
        quantity: 0,
        cheese: true,
        chocolate: true,
        featured: true,
        description:
          "This is the original Sugar Daddy. Very convenient confectionery including variety of different desserts. Note: 'Dessert Boxes reserves the right to substitute products and items when products or ingredients may not be available. All substitutions are of similar quality and value. May contain traces of nuts.'",
        extras: [
          "6 x Assorted Donuts",
          "3 x Nutella Donuts",
          "Free personalized message included",
        ],
        images: [
          {
            fields: {
              file: {
                url: img12,
              },
            },
          },
          {
            fields: {
              file: {
                url: product2,
              },
            },
          },
          {
            fields: {
              file: {
                url: product3,
              },
            },
          },
          {
            fields: {
              file: {
                url: product4,
              },
            },
          },
        ],
      },
    },
    {
      sys: {
        id: "13",
      },
      fields: {
        name: "the graduation box",
        slug: "box-dessert-graduation",
        type: "box dessert",
        price: 650,
        size: 1000,
        quantity: 0,
        capacity: 10,
        cheese: true,
        chocolate: true,
        featured: true,
        description:
          "What a better way to say 'I hope you get a high paying job so I can retire and you can look after me.' Very convenient confectionery including variety of different desserts. Note: 'Dessert Boxes reserves the right to substitute products and items when products or ingredients may not be available. All substitutions are of similar quality and value. May contain traces of nuts.'",
        extras: [
          "1 x Graduation bear",
          "1 x Nutella donut",
          "1 x Brookie (half brownie/half brookie)",
          "1 x Rocky road",
          "1 x Jelly bean tube",
          "2 x fun-size chocolate bars",
          "2 x Chuppa chups",
          "1 x cheese candy",
        ],
        images: [
          {
            fields: {
              file: {
                url: img13,
              },
            },
          },
          {
            fields: {
              file: {
                url: product2,
              },
            },
          },
          {
            fields: {
              file: {
                url: product3,
              },
            },
          },
          {
            fields: {
              file: {
                url: product4,
              },
            },
          },
        ],
      },
    },
    {
      sys: {
        id: "14",
      },
      fields: {
        name: "chocolate gainz",
        slug: "box-dessert-graduation",
        type: "box dessert",
        price: 650,
        size: 1000,
        quantity: 0,
        capacity: 10,
        cheese: false,
        chocolate: true,
        featured: false,
        description:
          "What a beautiful chocolate man. Very convenient confectionery including variety of different desserts. Note: 'Dessert Boxes reserves the right to substitute products and items when products or ingredients may not be available. All substitutions are of similar quality and value. May contain traces of nuts.'",
        extras: [
          "1 x Assorted Donut",
          "1 x Chocolate Donut",
          "1 x Choc-Marshmallow Pop",
          "1 x Darrell Lea Rocky Road",
          "1 x Brookie (half brownie/half cookie)",
          "1 x Mini Nutella Jar (replaced with nutella sachet due to stock availability issues in Australia currently)",
          "1 x 220g Nutella Jar",
          "Free personalized message included.",
        ],
        images: [
          {
            fields: {
              file: {
                url: img14,
              },
            },
          },
          {
            fields: {
              file: {
                url: product2,
              },
            },
          },
          {
            fields: {
              file: {
                url: product3,
              },
            },
          },
          {
            fields: {
              file: {
                url: product4,
              },
            },
          },
        ],
      },
    },
    {
      sys: {
        id: "15",
      },
      fields: {
        name: "doughnut",
        slug: "doughnut",
        type: "doughnut",
        price: 100,
        size: 1000,
        capacity: 10,
        quantity: 0,
        cheese: false,
        chocolate: false,
        featured: true,
        description:
          "A doughnut or donut is a type of leavened fried dough. It is popular in many countries and is prepared in various forms as a sweet snack that can be homemade or purchased in bakeries, supermarkets, food stalls, and franchised specialty vendors.",
        extras: ["Cake box", "Card"],
        images: [
          {
            fields: {
              file: {
                url: img15,
              },
            },
          },
          {
            fields: {
              file: {
                url: product2,
              },
            },
          },
          {
            fields: {
              file: {
                url: product3,
              },
            },
          },
          {
            fields: {
              file: {
                url: product4,
              },
            },
          },
        ],
      },
    },
    {
      sys: {
        id: "16",
      },
      fields: {
        name: "chocolate doughnut",
        slug: "doughnut-chocolate",
        type: "doughnut",
        price: 165,
        size: 1000,
        capacity: 10,
        quantity: 0,
        cheese: false,
        chocolate: true,
        featured: true,
        description:
          "Moist and fluffy donuts that are baked, not fried, and full of chocolate. Covered in a thick chocolate glaze, these are perfect for any chocoholic who wants a chocolate version of this classic treat.",
        extras: [
          "1 x Assorted Donut",
          "1 x Chocolate Donut",
          "1 x Choc-Marshmallow Pop",
          "1 x Darrell Lea Rocky Road",
          "1 x Brookie (half brownie/half cookie)",
          "1 x Mini Nutella Jar (replaced with nutella sachet due to stock availability issues in Australia currently)",
          "1 x 220g Nutella Jar",
          "Free personalized message included.",
        ],
        images: [
          {
            fields: {
              file: {
                url: img16,
              },
            },
          },
          {
            fields: {
              file: {
                url: product2,
              },
            },
          },
          {
            fields: {
              file: {
                url: product3,
              },
            },
          },
          {
            fields: {
              file: {
                url: product4,
              },
            },
          },
        ],
      },
    },
    {
      sys: {
        id: "17",
      },
      fields: {
        name: "wedding cake",
        slug: "cake-wedding",
        type: "wedding cake",
        price: 1000,
        size: 1000,
        capacity: 10,
        cheese: true,
        chocolate: true,
        featured: true,
        quantity: 0,
        description:
          "A wedding cake is the traditional cake served at wedding receptions following dinner. In some parts of England, the wedding cake is served at a wedding breakfast; the 'wedding breakfast' does not mean the meal will be held in the morning, but at a time following the ceremony on the same day.",
        extras: ["Cake box", "Card", "Candle", "Knife", "Voucher"],
        images: [
          {
            fields: {
              file: {
                url: img17,
              },
            },
          },
          {
            fields: {
              file: {
                url: product2,
              },
            },
          },
          {
            fields: {
              file: {
                url: product3,
              },
            },
          },
          {
            fields: {
              file: {
                url: product4,
              },
            },
          },
        ],
      },
    },
  ],
};
