const restaurants = [
  {
    id: "la-parisienne",
    name: "La Parisienne",
    city: "Paris",
    country: "France",
    date: "10 November 2025",
    address: "48 Rue Madame, 75006 Paris, France",

    coordinates: {
      lat: 48.848207,
      lng: 2.3314224
    },

    photo: "images/paris/laparisienne.jpg",

    story: "Why did they get mad at me for speaking French?",

    recipes: [
      {
        name: "Quiche Saumon Épinards",
        category: "Mains",

        ingredients: [
          "1 shortcrust pastry crust, homemade or store-bought",
          "200 g fresh spinach",
          "280 g fresh salmon fillets, boneless",
          "250 ml (1 cup) heavy cream",
          "60 g grated Comté cheese",
          "2 eggs",
          "1 spring onion or small white onion",
          "Salt and pepper",
          "Herbs of your choice — dill, chives, or parsley",
          "1 tablespoon olive oil"
        ],

        instructions: [
          "Wash the spinach. Thinly slice the spring onion and cut the salmon into small cubes.",
          "Heat the olive oil in a frying pan. Sauté the spring onion over medium heat for about 2 minutes.",
          "Add the spinach and cook over high heat until the mixture has cooked down and most of the moisture has evaporated. Set aside.",
          "In the same pan, add the salmon cubes and cook over medium heat for about 2 minutes, stirring gently. Add the spinach and combine. Set aside.",
          "Preheat the oven to 200°C / 400°F (fan/convection).",
          "Whisk together the eggs and cream. Season with salt, pepper, and herbs. Stir in half of the grated Comté.",
          "Place the shortcrust pastry into a 23 cm (9-inch) quiche dish. Spread the salmon and spinach mixture over the pastry. Pour the egg-and-cream mixture over the top and sprinkle with the remaining Comté.",
          "Bake at 210°C / 410°F (fan/convection) for approximately 25–30 minutes, until set and golden."
        ],

        note: "A Parisian salmon and spinach quiche from our visit to La Parisienne."
      },

      {
        name: "Baguette au Saumon Fumé",
        category: "Sandwiches",

        ingredients: [
          "1 traditional French baguette (baguette de tradition)",
          "4 slices high-quality smoked salmon",
          "80 g (about 3 oz) Brie, preferably Brie de Meaux or double-cream Brie",
          "20 g (about 1½ tbsp) unsalted or demi-sel butter, softened",
          "1 handful fresh arugula",
          "½ fresh lemon",
          "Freshly ground black pepper"
        ],

        instructions: [
          "Slice the baguette in half lengthwise. You can cut it completely through or leave one side attached so the filling stays secure.",
          "Spread the softened butter generously over the cut surface of the baguette. You can butter both sides if desired.",
          "Arrange thin slices of Brie along the entire length of the baguette.",
          "Gently layer the smoked salmon over the Brie. Add a few drops of fresh lemon juice and a little freshly ground black pepper.",
          "Top with a handful of clean, dry arugula.",
          "Close the baguette and gently press it together so the layers settle. Slice diagonally for the classic French bakery presentation."
        ],

        note: "Smoked salmon and Brie on traditional French baguette, inspired by the La Parisienne bakery style."
      }
    ]
  }
];
