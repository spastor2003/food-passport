const cities = [
  {
    id: "paris",
    city: "Paris",
    country: "France",
    flag: "🇫🇷",
    coordinates: { lat: 48.8566, lng: 2.3522 },
    restaurants: [
      {
        id: "la-parisienne",
        name: "La Parisienne",
        city: "Paris",
        country: "France",
        date: "10 November 2025",
        address: "48 Rue Madame, 75006 Paris, France",
        coordinates: { lat: 48.848207, lng: 2.3314224 },
        photo: "images/paris/laparisienne.jpg",
        photos: ["images/paris/laparisienne.jpg"],
        story: "Why did they get mad at me for speaking French?",
        memories: [
          "Our La Parisienne photo · 10 November 2025"
        ],
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
            note: "A Parisian salmon and spinach quiche from our visit to La Parisienne.",
            source: "Recipe collected for the Paris food passport."
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
            note: "Smoked salmon and Brie on traditional French baguette, inspired by the La Parisienne bakery style.",
            source: "Recipe collected for the Paris food passport."
          }
        ]
      },

      {
        id: "le-machon-dhenri",
        name: "Le Machon d'Henri",
        city: "Paris",
        country: "France",
        date: "10 November 2025",
        address: "8 Rue Guisarde, 75006 Paris, France",
        coordinates: { lat: 48.8519431, lng: 2.3344567 },
        photo: "images/paris/le-machon-dhenri-storefront.jpg",
        story: "You wanted to go and take photos at the Eiffel Tower site. Then we decided to go and eat somewhere after walking around the whole area. Since the way there was around like an hour walking we decided to walk around and see the city. However, we eventually got into an argument, one I now do not remember, which was probably something ridiculous, and then ate some of the best food of our life next to some loud Texans.",
        memories: [
          "10 November 2025 · Eiffel Tower day and a long walk through Paris.",
          "An argument we no longer remember, followed by some of the best food of our life next to some loud Texans."
        ],
        photos: [
          "images/paris/le-machon-dhenri-entrecote.jpg",
          "images/paris/le-machon-dhenri-escargots.jpg",
          "images/paris/le-machon-dhenri-ravioles.jpg",
          "images/paris/le-machon-dhenri-interior.jpg",
          "images/paris/le-machon-dhenri-storefront.jpg"
        ],
        photoCaptions: [
          "Entrecôte with green pepper sauce and gratin dauphinois",
          "Escargots beurre à l'ail",
          "Ravioles du Dauphiné with Comté and cream",
          "Le Machon d'Henri interior",
          "Le Machon d'Henri storefront"
        ],
        recipes: [
          {
            name: "Ravioles du Dauphiné with Comté & Cream",
            category: "Pasta",
            ingredients: [
              "2 cups (300 g) 00 flour",
              "3 large eggs",
              "Pinch of salt",
              "150 g Comté cheese, cubed or grated",
              "2 heaping Tbsp (35 g) crème fraîche or heavy cream",
              "60 g (4 Tbsp) unsalted butter",
              "2 Tbsp chopped fresh parsley",
              "Salt and black pepper, to taste"
            ],
            instructions: [
              "Pour the flour onto a clean surface, make a well, add the eggs and salt, then mix into a dough. Knead for 10–15 minutes, wrap and rest for 1 hour.",
              "Mix the Comté, crème fraîche and parsley. Season lightly with salt and pepper.",
              "Roll the dough very thin. Add small dollops of filling, cover with another sheet of dough, press to seal and cut into small squares.",
              "Boil the ravioles in salted water for about 90 seconds, until they float.",
              "Melt the butter and an extra spoonful of cream in a warm pan. Toss the cooked ravioles in the sauce and garnish with herbs and black pepper."
            ],
            note: "Home-recreation recipe supplied for the passport; not presented as the restaurant's exact recipe.",
            source: "Recipe sources supplied for the food passport."
          },
          {
            name: "Entrecôte with Green Pepper Sauce & Gratin Dauphinois",
            category: "Main Course",
            ingredients: [
              "2 entrecôte (ribeye) steaks, about 10–12 oz each",
              "1 Tbsp oil",
              "2 Tbsp butter",
              "Fresh rosemary and thyme",
              "4 large russet potatoes, peeled and thinly sliced",
              "1½ cups heavy cream",
              "1½ cups milk",
              "4 cloves garlic, minced",
              "2 tsp salt and fresh cracked pepper",
              "1¾ cups grated Gruyère cheese",
              "2 Tbsp unsalted butter for the sauce",
              "2 medium shallots, finely chopped",
              "2 Tbsp green peppercorns in brine",
              "⅓ cup cognac",
              "1 cup heavy cream for the sauce",
              "1 tsp Dijon mustard"
            ],
            instructions: [
              "Heat the oven to 375°F (190°C) and butter a baking dish.",
              "Mix cream, milk, garlic, salt and pepper. Layer the potato slices and Gruyère in the dish, pour the cream mixture over them, and bake for 50–60 minutes until tender and golden.",
              "For the green peppercorn sauce, melt butter, soften the shallots, add green peppercorns and cook for 2 minutes. Add cognac and allow the alcohol to burn off.",
              "Stir in heavy cream and Dijon mustard and simmer gently until thickened.",
              "Season the steaks with salt and pepper. Heat oil in a heavy skillet over high heat and sear the steaks for about 3 minutes per side.",
              "Add butter, rosemary and thyme and spoon the melted butter over the steaks. Rest for 5 minutes.",
              "Serve the entrecôte with the warm green pepper sauce and gratin dauphinois."
            ],
            note: "The passport combines the supplied steak, sauce and gratin recipes into one recreation of the dish you ate.",
            source: "Recipe sources supplied for the food passport."
          },
          {
            name: "Escargots Beurre à l'Ail",
            category: "Starter",
            ingredients: [
              "1 can (7–8 oz) canned escargots, about 12–24 snails, drained and rinsed",
              "1 cup (2 sticks) unsalted butter, softened",
              "3–4 cloves garlic, very finely minced or pressed",
              "1 small shallot, finely chopped",
              "⅓ cup fresh flat-leaf parsley, finely chopped",
              "½ tsp salt and a pinch of black pepper",
              "Baguette, for serving",
              "Clean snail shells or a traditional escargot baking dish"
            ],
            instructions: [
              "Heat the oven to 400°F (200°C).",
              "Mix the softened butter, garlic, shallot, parsley, salt and pepper until smooth.",
              "Place a little garlic butter in each shell or baking-dish well, add a snail, then cover with more garlic butter.",
              "Bake for 8–10 minutes, until the butter is melted, bubbling and lightly browned.",
              "Serve immediately with crusty French bread to soak up the garlic butter."
            ],
            note: "Home-recreation recipe supplied for the passport; not presented as the restaurant's exact recipe.",
            source: "Recipe sources supplied for the food passport."
          }
        ]
      },
    ]
  },

  {
    id: "madrid",
    city: "Madrid",
    country: "Spain",
    flag: "🇪🇸",
    coordinates: { lat: 40.4168, lng: -3.7038 },
    restaurants: [
      {
        id: "sushita-castellana",
        name: "Sushita Castellana",
        officialName: "Monsieur Sushita",
        city: "Madrid",
        country: "Spain",
        date: "19 September 2025",
        address: "Calle de Velázquez, 68, 28001 Madrid, Spain",
        coordinates: { lat: 40.4286177, lng: -3.6836501 },
        photo: "images/madrid/madrid-monsieur-sushita-interior.jpg",
        story: "We went for our anniversary dinner. It was the best sushi we had tried in Madrid.",
        memories: [
          "We went to Sushita Castellana for our anniversary dinner.",
          "It was the best sushi we had tried in Madrid."
        ],
        photos: [
          "images/madrid/madrid-sushita-sashimi-salmon.jpg",
          "images/madrid/madrid-sushita-salmon-braseado.jpg",
          "images/madrid/madrid-sushita-kushiague.jpg",
          "images/madrid/madrid-sushita-tempura-gambas.jpg",
          "images/madrid/madrid-sushita-lubina-manzana.jpg",
          "images/madrid/madrid-sushita-tartar-tuna.jpg",
          "images/madrid/madrid-monsieur-sushita-interior.jpg"
        ],
        photoCaptions: [
          "Sashimi de Salmón",
          "Rollo Salmón Braseado o Sin Brasear",
          "Maki Kushiague Roll",
          "Tempura de Gambas Rojas con Chili Dulce",
          "Maki Roll Lubina y Manzana",
          "Rollo Tartar de Atún Picante"
        ],
        recipes: [
          {
            name: "Sashimi de Salmón",
            category: "Sashimi",
            ingredients: [
              "1 pound fillet of sushi-grade salmon",
              "½ fresh organic lemon",
              "Espelette pepper",
              "Ponzu",
              "Fresh ginger",
              "For ponzu: ¼ cup shoyu",
              "For ponzu: 2 Tbsp lemon juice or 1 Tbsp yuzu juice",
              "For ponzu: 1 tsp fresh citrus zest, optional",
              "For ponzu: 1 Tbsp mirin",
              "For ponzu: 1 dashi stock packet"
            ],
            instructions: [
              "Inspect the salmon and remove any bones, excess skin and dark-colored flesh. Optionally wrap the fillet in a pichit sheet and refrigerate for 90 minutes.",
              "Prepare and thoroughly dry the serving plate or platter.",
              "Using a sharp knife, cut across the grain and then slice the salmon to the preferred thickness, drawing the knife toward you with each cut. Arrange the slices on the platter.",
              "Thinly slice the lemon, halve the slices and remove the seeds. Arrange a few pieces over the salmon and dust with Espelette pepper.",
              "Serve with ponzu and a thin slice of fresh ginger.",
              "For the ponzu, combine the shoyu, lemon or yuzu juice, citrus zest, mirin and dashi in a clean jar. Refrigerate for three days, then strain the solids."
            ],
            note: "This is the home-recreation recipe collected for the passport; it is not presented as Sushita Castellana's exact recipe. A wheat-free tamari can be used for the ponzu if desired.",
            source: "La Boîte — Salmon Sashimi"
          },
          {
            name: "Rollo Salmón Braseado o Sin Brasear",
            category: "Sushi Rolls",
            ingredients: [
              "1 lb skinless salmon fillet, cut into uniform pieces",
              "100 g cream cheese",
              "100 g mascarpone cheese (or additional cream cheese)",
              "Fresh dill, chopped",
              "Fresh chives, chopped",
              "Garlic powder",
              "Salt",
              "Black pepper",
              "1 Tbsp olive oil"
            ],
            instructions: [
              "Combine the cream cheese, mascarpone, chopped dill, chives and garlic powder until smooth.",
              "Butterfly the salmon by cutting horizontally through the center without cutting all the way through. Open the fillets flat and season lightly with salt and pepper.",
              "Spread the creamy cheese mixture evenly over the salmon. Carefully roll each piece into a cylinder and secure with kitchen twine or toothpicks.",
              "Heat the olive oil over medium heat. Sear or braise the salmon rolls until cooked through and lightly browned."
            ],
            note: "This recipe is for the braseado (seared/braised) preparation. The restaurant dish was listed as braseado o sin brasear.",
            source: "Recipe provided for the food passport."
          },
          {
            name: "Maki Kushiague Roll",
            category: "Sushi Rolls",
            ingredients: [
              "1 sheet nori",
              "100 g cooked sushi rice, seasoned with sushi vinegar",
              "Gouda cheese, cut into medium sticks",
              "Flour, for dusting",
              "1 egg",
              "½ cup flour",
              "A splash of milk",
              "Panko breadcrumbs",
              "Pinch of salt",
              "Eel sauce, for serving",
              "Cooking oil, for frying"
            ],
            instructions: [
              "Place nori on a bamboo rolling mat. Spread a thin layer of seasoned sushi rice over the nori, leaving a small border at the top edge.",
              "Place the Gouda cheese sticks in the center. Roll the sushi firmly into a tight cylinder.",
              "Dust the roll with flour. Whisk the egg, ½ cup flour and a splash of milk into a tempura batter. Dip the roll into the batter and coat thoroughly with seasoned panko.",
              "Heat cooking oil and fry the coated roll until golden brown and crispy.",
              "Drain briefly, slice into bite-sized pieces with a sharp knife, and drizzle with eel sauce."
            ],
            note: "The restaurant description you provided differs from this home recipe: the restaurant dish included shrimp, cream cheese, avocado, furikake katsuo, tempura flakes and kushiage sauce. The passport keeps the restaurant description and recreation recipe separate.",
            source: "Recipe sources supplied for the food passport, including Japan Centre and the other references provided."
          },
          {
            name: "Tempura de Gambas Rojas con Chili Dulce",
            category: "Tempura",
            ingredients: [
              "8–10 large red prawns (gambas rojas), peeled and deveined, tails intact",
              "1 egg yolk",
              "½ cup ice-cold water or sparkling water",
              "½ cup all-purpose flour",
              "½ cup cornstarch (maicena)",
              "Pinch of salt",
              "Vegetable oil, for frying",
              "½ cup sweet chili sauce",
              "2 Tbsp mayonnaise",
              "1 tsp sriracha, adjusted to taste",
              "Fresh sesame seeds or chopped chives, for garnish"
            ],
            instructions: [
              "Peel and devein the red prawns while keeping the tails intact. Make small horizontal slits along the belly side and gently press the prawns straight. Pat completely dry.",
              "Whisk the egg yolk with the ice-cold water and salt. Add the flour and cornstarch and gently mix without overmixing. Keep the batter cold.",
              "Combine the sweet chili sauce, mayonnaise and sriracha until smooth.",
              "Heat about 2 inches of vegetable oil to 170–180°C (340–360°F). Dip each prawn in the cold batter and fry in small batches for 1–2 minutes until light golden and crispy. Drain on paper towels.",
              "Lightly toss the warm prawns with the sweet chili sauce or serve the sauce on the side. Garnish with sesame seeds and chopped chives."
            ],
            note: "The recipe emphasizes ice-cold batter, avoiding overmixing, and frying in small batches for a crisp texture.",
            source: "Recipe sources supplied for the food passport, including the references provided."
          },
          {
            name: "Maki Roll Lubina y Manzana",
            category: "Sushi Rolls",
            ingredients: [
              "2 cups sushi rice, cooked and seasoned with rice vinegar, sugar and salt",
              "4–5 sheets nori",
              "150 g fresh sea bass (lubina), skinned and sliced into thin strips",
              "1 crisp Granny Smith apple, cored and cut into thin matchsticks",
              "1 small Japanese cucumber, julienned",
              "Toasted white sesame seeds, optional",
              "Soy sauce, for serving",
              "Wasabi, for serving"
            ],
            instructions: [
              "Cook the short-grain rice and gently fold in the rice vinegar mixture while fanning or allowing the rice to cool to room temperature.",
              "Cover a bamboo rolling mat with plastic wrap. Place nori on the mat with the shiny side down.",
              "Wet your hands and spread a thin, even layer of sushi rice over the nori, leaving about a 1 cm border at the top edge.",
              "Place thinly sliced sea bass just below the center. Add the green apple matchsticks and cucumber strips alongside the fish.",
              "Lift the edge of the bamboo mat and roll firmly over the ingredients, applying gentle pressure to create a snug cylinder.",
              "Using a sharp, wet knife, cut into 6–8 bite-sized pieces. Serve with soy sauce and wasabi."
            ],
            note: "The restaurant description you provided included sea bass, apple, avocado, shrimp, mixed lettuce and red tobiko. This is the home-recreation recipe you supplied and is kept separate from that restaurant description.",
            source: "Recipe sources supplied for the food passport, including the references provided."
          },
          {
            name: "Rollo Tartar de Atún Picante",
            category: "Tartare",
            ingredients: [
              "300 g fresh sushi-grade tuna (previously frozen for safety)",
              "2 Tbsp soy sauce",
              "1 Tbsp sesame oil",
              "1–2 tsp sriracha or spicy chili sauce",
              "1 tsp fresh grated ginger",
              "1 Tbsp green onion or chives, finely chopped",
              "1 ripe avocado, cut into small cubes",
              "1 tsp toasted sesame seeds",
              "1 Tbsp lime or lemon juice",
              "Pinch of salt",
              "Black pepper"
            ],
            instructions: [
              "Pat the tuna dry and cut it into small, even 1 cm cubes. Keep the tuna cold in the refrigerator.",
              "Whisk together the soy sauce, sesame oil, sriracha, grated ginger and lime juice. Season with salt and pepper.",
              "Add the chopped green onions and half of the sesame seeds. Pour over the tuna and gently fold. Refrigerate for 5 minutes.",
              "Toss the diced avocado with a small squeeze of lime juice and a pinch of salt.",
              "Place a ring mold or clean round cup on a plate. Press the avocado into the bottom, add the spicy tuna mixture on top, and press lightly."
            ],
            note: "The recipe uses a ring-mold/stack presentation rather than a traditional sushi roll.",
            source: "Recipe sources supplied for the food passport, including the references provided."
          }
        ]
      },
      {
        id: "merisu",
        name: "Tiramisù Merisù",
        city: "Madrid",
        country: "Spain",
        date: "Several visits",
        address: "Calle de Santiago, 8, 28013 Madrid, Spain",
        coordinates: { lat: 40.4163387, lng: -3.7100004 },
        photo: "images/madrid/madrid-merisu-storefront.jpg",
        story: "You visited Tiramisù Merisù on several occasions, including getting a heart-shaped tiramisu cake for Valentine's Day.",
        memories: [
          "Valentine's Day · Heart-shaped tiramisu cake",
          "Several visits to Tiramisù Merisù"
        ],
        photos: [
          "images/madrid/madrid-merisu-storefront.jpg",
          "images/madrid/madrid-merisu-tiramisu.jpg"
        ],
        photoCaptions: [
          "Tiramisù Merisù storefront",
          "Tiramisú Classico"
        ],
        recipes: [
          {
            name: "Tiramisú Classico",
            category: "Dessert",
            ingredients: [
              "16 oz (500 g) mascarpone cheese, chilled or at room temperature",
              "4 large eggs, separated",
              "½ cup (100 g) caster or granulated sugar",
              "1½–2 cups freshly brewed espresso or strong coffee, cooled",
              "1 package ladyfingers (Savoiardi), about 24–30 biscuits",
              "2 Tbsp cocoa powder, for dusting",
              "2 Tbsp coffee liqueur or Marsala wine, optional",
              "Tiny pinch of salt"
            ],
            instructions: [
              "Brew the espresso or strong coffee and let it cool completely in a shallow dish. Stir in optional coffee liqueur or Marsala wine if desired.",
              "Beat the egg yolks and sugar until pale, thick and creamy. Add mascarpone and beat on low speed just until smooth and combined. Do not overmix.",
              "In a separate clean bowl, beat the egg whites with a tiny pinch of salt until stiff, glossy peaks form. Gently fold the whites into the mascarpone mixture until uniform and airy.",
              "Quickly dip each ladyfinger into the cooled espresso for about one second per side. Arrange a single layer in an 8×8-inch or 9×13-inch baking dish.",
              "Spread half of the mascarpone cream over the ladyfingers. Repeat with another layer of dipped ladyfingers and the remaining mascarpone cream.",
              "Cover and refrigerate for at least 6 hours, preferably overnight. Just before serving, generously dust the top with cocoa powder."
            ],
            note: "This is the home-recreation recipe collected for the food passport; it is not presented as Tiramisù Merisù's exact recipe.",
            source: "Recipe sources supplied for the food passport."
          }
        ]
      },
    ]
  }
];
