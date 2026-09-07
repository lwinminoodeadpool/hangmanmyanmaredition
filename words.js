// Rich Word Bank of Myanmar Cultural Favorites, Food, Landmarks, Traditions, and Passions (in English)
const WORD_BANK = [
  // ==================== 1. MYANMAR FOOD & SNACKS ====================
  {
    word: "MOHINGA",
    category: "food",
    categoryName: "🍲 Myanmar Food & Snacks",
    hint: "Myanmar's unofficial national breakfast dish: rice noodles in a rich catfish and lemongrass soup.",
    difficulty: "easy"
  },
  {
    word: "LAPHET THOKE",
    category: "food",
    categoryName: "🍲 Myanmar Food & Snacks",
    hint: "Iconic fermented tea leaf salad mixed with crispy fried beans, garlic, peanuts, and sesame.",
    difficulty: "easy"
  },
  {
    word: "OHN NO KHAUK SWE",
    category: "food",
    categoryName: "🍲 Myanmar Food & Snacks",
    hint: "Delicious wheat noodles in a creamy, curried coconut milk chicken broth.",
    difficulty: "medium"
  },
  {
    word: "NAN GYI THOKE",
    category: "food",
    categoryName: "🍲 Myanmar Food & Snacks",
    hint: "Thick round rice noodle salad tossed with fragrant chicken curry oil and roasted chickpea powder.",
    difficulty: "medium"
  },
  {
    word: "KYAY OH",
    category: "food",
    categoryName: "🍲 Myanmar Food & Snacks",
    hint: "Popular Chinese-Myanmar noodle soup served in a traditional metal pot with pork balls and eggs.",
    difficulty: "easy"
  },
  {
    word: "SHWE YIN AYE",
    category: "food",
    categoryName: "🍲 Myanmar Food & Snacks",
    hint: "Refreshing Thingyan dessert made with coconut milk, sticky rice, agar jelly, and white bread.",
    difficulty: "medium"
  },
  {
    word: "SAMUSA THOKE",
    category: "food",
    categoryName: "🍲 Myanmar Food & Snacks",
    hint: "Crispy fried potato samosas sliced and tossed in a tangy spiced chickpea broth with fresh mint.",
    difficulty: "easy"
  },
  {
    word: "MONT LIN MAYAR",
    category: "food",
    categoryName: "🍲 Myanmar Food & Snacks",
    hint: "Popular street snack of twin crispy rice batter cups topped with quail eggs or boiled peas.",
    difficulty: "hard"
  },
  {
    word: "FALOODA",
    category: "food",
    categoryName: "🍲 Myanmar Food & Snacks",
    hint: "Sweet cold beverage-dessert with rose syrup, milk, jelly noodles, pudding, and ice cream.",
    difficulty: "easy"
  },
  {
    word: "SANWIN MAKIN",
    category: "food",
    categoryName: "🍲 Myanmar Food & Snacks",
    hint: "Traditional baked semolina cake enriched with coconut milk, ghee, and roasted poppy seeds.",
    difficulty: "medium"
  },
  {
    word: "MON PYIT THALET",
    category: "food",
    categoryName: "🍲 Myanmar Food & Snacks",
    hint: "Myanmar style savory pancake made with rice flour batter, scallions, and palm sugar or peas.",
    difficulty: "hard"
  },
  {
    word: "SHWE TAUNG KHAUK SWE",
    category: "food",
    categoryName: "🍲 Myanmar Food & Snacks",
    hint: "Famous Shan-style or Bamar-style egg noodles served with creamy chicken and crispy wontons.",
    difficulty: "hard"
  },
  {
    word: "NGAPI RICE",
    category: "food",
    categoryName: "🍲 Myanmar Food & Snacks",
    hint: "Fried rice seasoned with flavorful fermented fish paste, served with mango and raw veggies.",
    difficulty: "easy"
  },
  {
    word: "TOFU NWAY",
    category: "food",
    categoryName: "🍲 Myanmar Food & Snacks",
    hint: "Warm, velvety Shan yellow chickpea tofu paste poured over rice noodles with spicy minced pork.",
    difficulty: "medium"
  },
  {
    word: "HTAMANE",
    category: "food",
    categoryName: "🍲 Myanmar Food & Snacks",
    hint: "Special festival food made by stirring sticky rice with ginger, coconut slices, sesame, and groundnuts.",
    difficulty: "medium"
  },

  // ==================== 2. FAMOUS PLACES & LANDMARKS ====================
  {
    word: "BAGAN",
    category: "places",
    categoryName: "🏛️ Places & Landmarks",
    hint: "Ancient UNESCO world heritage city famous for over 2,000 historic pagodas and hot air balloons.",
    difficulty: "easy"
  },
  {
    word: "SHWEDAGON PAGODA",
    category: "places",
    categoryName: "🏛️ Places & Landmarks",
    hint: "The 99-meter tall golden pagoda dominating Yangon's skyline, enshrining sacred Buddha relics.",
    difficulty: "easy"
  },
  {
    word: "INLE LAKE",
    category: "places",
    categoryName: "🏛️ Places & Landmarks",
    hint: "Scenic freshwater lake in Shan State known for leg-rowing fishermen and floating gardens.",
    difficulty: "easy"
  },
  {
    word: "MANDALAY",
    category: "places",
    categoryName: "🏛️ Places & Landmarks",
    hint: "The last royal capital of Myanmar, home to the Royal Palace and Mandalay Hill.",
    difficulty: "easy"
  },
  {
    word: "NGAPALI BEACH",
    category: "places",
    categoryName: "🏛️ Places & Landmarks",
    hint: "Myanmar's premier beach destination in Rakhine State on the Bay of Bengal with white sand.",
    difficulty: "medium"
  },
  {
    word: "KYAIKTIYO",
    category: "places",
    categoryName: "🏛️ Places & Landmarks",
    hint: "The Golden Rock pagoda miraculously perched on the edge of a cliff in Mon State.",
    difficulty: "medium"
  },
  {
    word: "MOUNT POPA",
    category: "places",
    categoryName: "🏛️ Places & Landmarks",
    hint: "An extinct volcano and sacred spiritual peak famous as the home of the 37 Nat spirits.",
    difficulty: "medium"
  },
  {
    word: "PYIN OO LWIN",
    category: "places",
    categoryName: "🏛️ Places & Landmarks",
    hint: "Cool hill town famous for coffee, strawberries, colonial architecture, and National Kandawgyi Gardens.",
    difficulty: "medium"
  },
  {
    word: "U BEIN BRIDGE",
    category: "places",
    categoryName: "🏛️ Places & Landmarks",
    hint: "The world's oldest and longest teakwood footbridge crossing Taungthaman Lake in Amarapura.",
    difficulty: "easy"
  },
  {
    word: "MRAUK U",
    category: "places",
    categoryName: "🏛️ Places & Landmarks",
    hint: "Ancient fortress-like stone temple city that was the historic capital of the Arakan kingdom.",
    difficulty: "hard"
  },
  {
    word: "TAUNGGYI",
    category: "places",
    categoryName: "🏛️ Places & Landmarks",
    hint: "Capital of Shan State famous for its chilly weather and spectacular Tazaungdaing Fire Balloon Festival.",
    difficulty: "medium"
  },
  {
    word: "MAWLAMYINE",
    category: "places",
    categoryName: "🏛️ Places & Landmarks",
    hint: "Historic coastal capital of Mon State at the mouth of the Thanlwin River.",
    difficulty: "hard"
  },
  {
    word: "SAGAING HILL",
    category: "places",
    categoryName: "🏛️ Places & Landmarks",
    hint: "Religious hill dotted with hundreds of white and golden pagodas overlooking the Ayeyarwady River.",
    difficulty: "medium"
  },
  {
    word: "CHAUNG THA",
    category: "places",
    categoryName: "🏛️ Places & Landmarks",
    hint: "Popular, lively weekend beach resort located in the Ayeyarwady Region.",
    difficulty: "easy"
  },

  // ==================== 3. CULTURE, TRADITIONS & FESTIVALS ====================
  {
    word: "THINGYAN",
    category: "culture",
    categoryName: "🌺 Culture & Festivals",
    hint: "Myanmar's joyful New Year Water Festival celebrated nationwide every April.",
    difficulty: "easy"
  },
  {
    word: "THADINGYUT",
    category: "culture",
    categoryName: "🌺 Culture & Festivals",
    hint: "The Festival of Lights in October marking the end of Buddhist Lent, when streets are illuminated.",
    difficulty: "easy"
  },
  {
    word: "TAZAUNGMONE",
    category: "culture",
    categoryName: "🌺 Culture & Festivals",
    hint: "Full moon festival known for Kahtein robe-weaving competitions and fire balloon launches.",
    difficulty: "medium"
  },
  {
    word: "THANAKA",
    category: "culture",
    categoryName: "🌺 Culture & Festivals",
    hint: "Traditional fragrant yellowish-white cosmetic paste made by grinding tree bark on a Kyauk Pyin.",
    difficulty: "easy"
  },
  {
    word: "LONGYI",
    category: "culture",
    categoryName: "🌺 Culture & Festivals",
    hint: "Traditional cylinder-shaped sheet of cloth worn wrapped around the waist by men and women.",
    difficulty: "easy"
  },
  {
    word: "CHINLONE",
    category: "culture",
    categoryName: "🌺 Culture & Festivals",
    hint: "Traditional non-competitive game played in a circle using an intricate woven rattan cane ball.",
    difficulty: "easy"
  },
  {
    word: "PADAUK",
    category: "culture",
    categoryName: "🌺 Culture & Festivals",
    hint: "Fragrant yellow national flower that bursts into bloom with the first showers of Thingyan.",
    difficulty: "easy"
  },
  {
    word: "PASO",
    category: "culture",
    categoryName: "🌺 Culture & Festivals",
    hint: "The traditional men's longyi tied with a knot in front.",
    difficulty: "medium"
  },
  {
    word: "HTAMEIN",
    category: "culture",
    categoryName: "🌺 Culture & Festivals",
    hint: "The traditional wraparound skirt garment worn with elegance by Myanmar women.",
    difficulty: "medium"
  },
  {
    word: "HOT AIR BALLOON",
    category: "culture",
    categoryName: "🌺 Culture & Festivals",
    hint: "Gigantic homemade paper crafts carrying fireworks launched into the night sky at Taunggyi.",
    difficulty: "easy"
  },
  {
    word: "SHINBYU",
    category: "culture",
    categoryName: "🌺 Culture & Festivals",
    hint: "The essential Buddhist novitiation ceremony celebrating a boy's temporary entry into monkhood.",
    difficulty: "hard"
  },
  {
    word: "SAUNG GAUK",
    category: "culture",
    categoryName: "🌺 Culture & Festivals",
    hint: "The classical arched 13-to-16-stringed Burmese harp, considered the national musical instrument.",
    difficulty: "hard"
  },

  // ==================== 4. NATURE, GEMS & WILDLIFE ====================
  {
    word: "BURMESE RUBY",
    category: "nature",
    categoryName: "💎 Nature, Gems & Wildlife",
    hint: "World-renowned crimson gemstone, especially the prized 'Pigeon's Blood' gems from Mogok.",
    difficulty: "medium"
  },
  {
    word: "JADEITE",
    category: "nature",
    categoryName: "💎 Nature, Gems & Wildlife",
    hint: "The highest quality imperial green jade gemstone mined primarily in Hpakant, Kachin State.",
    difficulty: "medium"
  },
  {
    word: "TEAK WOOD",
    category: "nature",
    categoryName: "💎 Nature, Gems & Wildlife",
    hint: "Highly valuable, durable tropical hardwood famous worldwide for shipbuilding and classic furniture.",
    difficulty: "easy"
  },
  {
    word: "AYEYARWADY DOLPHIN",
    category: "nature",
    categoryName: "💎 Nature, Gems & Wildlife",
    hint: "Rare river mammal famous for co-operative fishing alongside local net fishermen.",
    difficulty: "hard"
  },
  {
    word: "ROYAL PEACOCK",
    category: "nature",
    categoryName: "💎 Nature, Gems & Wildlife",
    hint: "The Green Peafowl, a historical national symbol featured on royal seals and currency.",
    difficulty: "medium"
  },
  {
    word: "WHITE ELEPHANT",
    category: "nature",
    categoryName: "💎 Nature, Gems & Wildlife",
    hint: "Sacred and auspicious creature revered in royal history as a sign of peace and prosperity.",
    difficulty: "easy"
  },
  {
    word: "CHINDWIN RIVER",
    category: "nature",
    categoryName: "💎 Nature, Gems & Wildlife",
    hint: "The largest tributary of the Ayeyarwady River flowing through northern and central Myanmar.",
    difficulty: "medium"
  },
  {
    word: "MOGOK",
    category: "nature",
    categoryName: "💎 Nature, Gems & Wildlife",
    hint: "The fabled 'Valley of Rubies' high in the mountains of Mandalay Region.",
    difficulty: "easy"
  },

  // ==================== 5. FAN FAVORITES: FOOTBALL, GAMING & PASSIONS ====================
  {
    word: "MANCHESTER UNITED",
    category: "favorites",
    categoryName: "⚽ Football & Gaming Favorites",
    hint: "The 'Red Devils' football club with an enormous and passionate fanbase across Myanmar.",
    difficulty: "medium"
  },
  {
    word: "CHELSEA",
    category: "favorites",
    categoryName: "⚽ Football & Gaming Favorites",
    hint: "The Premier League 'Blues' club supported by millions of football enthusiasts in Myanmar.",
    difficulty: "easy"
  },
  {
    word: "LIVERPOOL",
    category: "favorites",
    categoryName: "⚽ Football & Gaming Favorites",
    hint: "Famous English club singing 'You'll Never Walk Alone', wildly popular among football fans.",
    difficulty: "easy"
  },
  {
    word: "ARSENAL",
    category: "favorites",
    categoryName: "⚽ Football & Gaming Favorites",
    hint: "North London 'Gunners' football club with a huge following in tea shops across the country.",
    difficulty: "easy"
  },
  {
    word: "MOBILE LEGENDS",
    category: "favorites",
    categoryName: "⚽ Football & Gaming Favorites",
    hint: "The mega-popular 5v5 MOBA mobile esports game played in every neighborhood and tea shop.",
    difficulty: "medium"
  },
  {
    word: "PUBG MOBILE",
    category: "favorites",
    categoryName: "⚽ Football & Gaming Favorites",
    hint: "Popular battle royale shooter where players drop into Erangel for the Winner Winner Chicken Dinner.",
    difficulty: "easy"
  },
  {
    word: "DOTA",
    category: "favorites",
    categoryName: "⚽ Football & Gaming Favorites",
    hint: "Legendary PC MOBA strategy game that filled internet cafes across Myanmar for decades.",
    difficulty: "easy"
  },
  {
    word: "CRISTIANO RONALDO",
    category: "favorites",
    categoryName: "⚽ Football & Gaming Favorites",
    hint: "Legendary Portuguese football star ('CR7') idolized by football fans everywhere.",
    difficulty: "medium"
  },
  {
    word: "LIONEL MESSI",
    category: "favorites",
    categoryName: "⚽ Football & Gaming Favorites",
    hint: "Argentine football maestro and World Cup champion revered as the GOAT.",
    difficulty: "medium"
  },
  {
    word: "MILK TEA",
    category: "favorites",
    categoryName: "⚽ Football & Gaming Favorites",
    hint: "Sweet, strong brew of black tea and condensed milk ('Laphet Yay') served in iconic tea shops.",
    difficulty: "easy"
  },
  {
    word: "GUITAR",
    category: "favorites",
    categoryName: "⚽ Football & Gaming Favorites",
    hint: "The acoustic instrument played by friends gathering on street corners and during power cuts.",
    difficulty: "easy"
  },

  // ==================== 6. TECH, INNOVATION & GENERAL ====================
  {
    word: "SMARTPHONE",
    category: "tech",
    categoryName: "💻 Tech & Modern Life",
    hint: "The pocket device everyone uses daily for Facebook, TikTok, messaging, and gaming.",
    difficulty: "easy"
  },
  {
    word: "ALGORITHM",
    category: "tech",
    categoryName: "💻 Tech & Modern Life",
    hint: "A step-by-step set of mathematical rules or procedures for solving a computing problem.",
    difficulty: "medium"
  },
  {
    word: "JAVASCRIPT",
    category: "tech",
    categoryName: "💻 Tech & Modern Life",
    hint: "The world's most widely used web programming language running right now in this game.",
    difficulty: "easy"
  },
  {
    word: "CYBERSECURITY",
    category: "tech",
    categoryName: "💻 Tech & Modern Life",
    hint: "The practice of protecting computers, servers, mobile devices, and data from digital attacks.",
    difficulty: "hard"
  },
  {
    word: "ARTIFICIAL INTELLIGENCE",
    category: "tech",
    categoryName: "💻 Tech & Modern Life",
    hint: "Advanced technology simulating human cognition, reasoning, and machine learning.",
    difficulty: "hard"
  },
  {
    word: "FIBER INTERNET",
    category: "tech",
    categoryName: "💻 Tech & Modern Life",
    hint: "High-speed broadband delivered using optical glass cables to homes and businesses.",
    difficulty: "medium"
  },
  {
    word: "TAUKKYO",
    category: "favorites",
    categoryName: "☕ Drinks & Tea Culture",
    hint: "Popular Myanmar tea shop drink: strong black tea mixed with milk and sugar (Kyaw Kyaw or Ngwe Htet).",
    difficulty: "easy"
  },
  {
    word: "NGA THOKE THOKE",
    category: "favorites",
    categoryName: "🍜 Food & Drink",
    hint: "Refreshing salad made with sliced fresh fish (Ngathaung or Ngapein), dressed with sesame oil and onions.",
    difficulty: "medium"
  },
  {
    word: "LONGYI",
    category: "favorites",
    categoryName: "👔 Culture & Fashion",
    hint: "Traditional Myanmar sarong worn by both men and women, tied in various styles.",
    difficulty: "easy"
  },
  {
    word: "PATHEIN",
    category: "places",
    categoryName: "🏛️ Places & Travel",
    hint: "Major Delta region city famous for its colorful paper umbrellas (Pathein Pya Daung) and Pagoda.",
    difficulty: "medium"
  },
  {
    word: "KANDAWGYI Lake",
    category: "places",
    categoryName: "🏛️ Places & Travel",
    hint: "Beautiful large lake in Yangon featuring a replica Karaweik barge and parkland around Shwedagon.",
    difficulty: "easy"
  },
  {
    word: "THANDWE",
    category: "places",
    categoryName: "🏛️ Places & Travel",
    hint: "Town located near Ngapali Beach, serving as the gateway to one of Myanmar's most beautiful coastlines.",
    difficulty: "medium"
  },
  {
    word: "AYEYARWADY",
    category: "places",
    categoryName: "🏛️ Places & Travel",
    hint: "Myanmar's longest and most important river, flowing through Mandalay to the Andaman Sea.",
    difficulty: "easy"
  },
  {
    word: "BAY OF BENGAL",
    category: "places",
    categoryName: "🏛️ Places & Travel",
    hint: "Large bay on the northeastern side of the Indian Ocean, bordering Myanmar's Rakhine coast.",
    difficulty: "medium"
  },
  {
    word: "TUZON",
    category: "tech",
    categoryName: "💻 Tech & Innovation",
    hint: "The first officially licensed telecom operator in Myanmar, part of the Yatanarpon Teleport group.",
    difficulty: "hard"
  },
  {
    word: "YANDARAR",
    category: "tech",
    categoryName: "💻 Tech & Innovation",
    hint: "Former Yangon City Development Committee-owned telecom operator, now privatized as Yoma Komitsu.",
    difficulty: "hard"
  },
  {
    word: "NETLINK",
    category: "tech",
    categoryName: "💻 Tech & Innovation",
    hint: "Early ISP that played a key role in bringing internet access to homes in Myanmar during the transition.",
    difficulty: "hard"
  },
  {
    word: "MINEDU",
    category: "places",
    categoryName: "🏛️ Places & Travel",
    hint: "Former capital of the Ava (Inwa) Kingdom, located near Amarapura and the Sagaing Hills.",
    difficulty: "medium"
  },
  {
    word: "KALAW",
    category: "places",
    categoryName: "🏛️ Places & Travel",
    hint: "Popular hill station and trekking hub in Shan State, known for its pine forests and colonial charm.",
    difficulty: "easy"
  },
  {
    word: "KENGTUNG",
    category: "places",
    categoryName: "🏛️ Places & Travel",
    hint: "Eastern Shan State city close to Laos and Thailand borders, known for its ethnic diversity and markets.",
    difficulty: "hard"
  },
  {
    word: "TAUNGGAUNG",
    category: "places",
    categoryName: "🏛️ Places & Travel",
    hint: "A notable pagoda located in Monywa, on the western side of the Chindwin River.",
    difficulty: "hard"
  },
  {
    word: "MAINGMAI",
    category: "places",
    categoryName: "🏛️ Places & Travel",
    hint: "Small village known for its traditional crafts, located near the Thai border in Kayah State.",
    difficulty: "hard"
  },
  {
    word: "KAYAH",
    category: "culture",
    categoryName: "👘 Culture & Ethnicity",
    hint: "Ethnic minority group from Kayah State, famous for their distinct culture and traditional festivals.",
    difficulty: "medium"
  },
  {
    word: "POKHRIPAW",
    category: "culture",
    categoryName: "👘 Culture & Ethnicity",
    hint: "The native name for the Kayan people, also known as Padaung, famous for the neck rings.",
    difficulty: "hard"
  },
  {
    word: "YAZA",
    category: "tech",
    categoryName: "💻 Tech & Innovation",
    hint: "Former government-run network provider that preceded MPT's monopoly on mobile services.",
    difficulty: "hard"
  },
  {
    word: "IPPC",
    category: "tech",
    categoryName: "💻 Tech & Innovation",
    hint: "Abbreviation for the Myanmar Post and Telecommunications Corporation, the state-owned telecom provider.",
    difficulty: "hard"
  },
  {
    word: "KAYA",
    category: "favorites",
    categoryName: "🍺 Drinks & Nightlife",
    hint: "Popular local lager beer brewed in Myanmar, often enjoyed with a lime wedge in glass bottles.",
    difficulty: "easy"
  },
  {
    word: "MYANMA BEER",
    category: "favorites",
    categoryName: "🍺 Drinks & Nightlife",
    hint: "Another well-known Myanmar beer brand produced by a partnership involving Myanmar Economic Holdings Limited.",
    difficulty: "medium"
  },
  {
    word: "GRAPE WINE",
    category: "favorites",
    categoryName: "🍷 Drinks & Nightlife",
    hint: "Red wine made from grapes grown in the Aythaya vineyards near Taunggyi and Inle Lake.",
    difficulty: "medium"
  },
  {
    word: "GREEN TEA",
    category: "favorites",
    categoryName: "☕ Drinks & Nightlife",
    hint: "Refreshing unsweetened tea often served warm in traditional tea shops across Myanmar.",
    difficulty: "easy"
  },
  {
    word: "KYAUT SEIN",
    category: "food",
    categoryName: "🍜 Food & Drinks",
    hint: "Type of Myanmar sticky rice that is chewy and glutinous, often served steamed with palm sugar.",
    difficulty: "easy"
  },
  {
    word: "HTAMONE",
    category: "food",
    categoryName: "🍜 Food & Drinks",
    hint: "Festive sticky rice dish mixed with ginger, groundnuts, and coconut, traditionally eaten during Thingyan.",
    difficulty: "medium"
  },
  {
    word: "KYEIKYI",
    category: "food",
    categoryName: "🍜 Food & Drinks",
    hint: "Myanmar savory snack made from glutinous rice and peanuts, shaped into small rolls and deep-fried.",
    difficulty: "hard"
  },
  {
    word: "KHAO POET",
    category: "food",
    categoryName: "🍜 Food & Drinks",
    hint: "Rice noodle dish from Shan State, similar to Mohinga but with a different broth and topping style.",
    difficulty: "hard"
  },
  {
    word: "MONG YU",
    category: "food",
    categoryName: "🍜 Food & Drinks",
    hint: "Shan-style noodle soup featuring rice noodles in a spicy, savory broth with pork or chicken.",
    difficulty: "medium"
  }
]
