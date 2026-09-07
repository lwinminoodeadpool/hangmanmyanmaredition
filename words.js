// Cleaned & Verified Word Bank for Hangman: Myanmar Edition
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
    hint: "Myanmar-style savory pancake made with rice flour batter, scallions, and palm sugar or peas.",
    difficulty: "hard"
  },
  {
    word: "SHWE TAUNG KHAUK SWE",
    category: "food",
    categoryName: "🍲 Myanmar Food & Snacks",
    hint: "Egg noodles served with creamy chicken coconut curry sauce and crispy wontons.",
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
  {
    word: "NGA HTAMIN",
    category: "food",
    categoryName: "🍲 Myanmar Food & Snacks",
    hint: "Popular Shan dish of fragrant turmeric-infused rice kneaded with flaked freshwater fish and garlic oil.",
    difficulty: "medium"
  },
  {
    word: "KHAO POAT",
    category: "food",
    categoryName: "🍲 Myanmar Food & Snacks",
    hint: "Traditional Shan fragrant black glutinous rice cakes pounded with roasted sesame and grilled.",
    difficulty: "hard"
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
  {
    word: "PATHEIN",
    category: "places",
    categoryName: "🏛️ Places & Landmarks",
    hint: "Major Ayeyarwady Delta port city renowned for its handcrafted, brightly painted traditional parasols.",
    difficulty: "medium"
  },
  {
    word: "KANDAWGYI LAKE",
    category: "places",
    categoryName: "🏛️ Places & Landmarks",
    hint: "Serene urban lake in Yangon featuring scenic boardwalks and the gilded Karaweik barge.",
    difficulty: "easy"
  },
  {
    word: "KALAW",
    category: "places",
    categoryName: "🏛️ Places & Landmarks",
    hint: "Charming hill station in Shan State known for pine trees, cool climate, and trekking routes to Inle Lake.",
    difficulty: "easy"
  },
  {
    word: "KYAING TONG",
    category: "places",
    categoryName: "🏛️ Places & Landmarks",
    hint: "Principal town of eastern Shan State known for historic Buddhist monasteries and vibrant tribal markets.",
    difficulty: "hard"
  },
  {
    word: "THANBODDHAY",
    category: "places",
    categoryName: "🏛️ Places & Landmarks",
    hint: "Spectacular pagoda complex in Monywa containing more than 500,000 Buddha images.",
    difficulty: "hard"
  },
  {
    word: "INWA",
    category: "places",
    categoryName: "🏛️ Places & Landmarks",
    hint: "Historic royal capital (also known as Ava) reached by boat and toured on horse carts.",
    difficulty: "medium"
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
  {
    word: "KAYAN",
    category: "culture",
    categoryName: "🌺 Culture & Festivals",
    hint: "Tibeto-Burman ethnic group famous for women wearing decorative brass coils around their necks.",
    difficulty: "medium"
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
  {
    word: "AYEYARWADY",
    category: "nature",
    categoryName: "💎 Nature, Gems & Wildlife",
    hint: "Myanmar's lifeline and longest river, flowing from the north down into the Andaman Sea.",
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
    word: "CHO SEINT",
    category: "favorites",
    categoryName: "⚽ Football & Gaming Favorites",
    hint: "Classic Myanmar tea order meaning sweet and creamy, mixed with condensed milk and evaporated milk.",
    difficulty: "easy"
  },
  {
    word: "MYANMAR BEER",
    category: "favorites",
    categoryName: "⚽ Football & Gaming Favorites",
    hint: "The country's flagship national lager brand, ubiquitous in beer stations nationwide.",
    difficulty: "medium"
  },
  {
    word: "DAGON BEER",
    category: "favorites",
    categoryName: "⚽ Football & Gaming Favorites",
    hint: "Popular local commercial lager and extra-strong beer commonly ordered at beer stations.",
    difficulty: "easy"
  },

  // ==================== 6. TECH & MODERN LIFE ====================
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
    word: "MPT",
    category: "tech",
    categoryName: "💻 Tech & Modern Life",
    hint: "Myanmar's historical state-owned telecom operator beginning with 09-4 or 09-5 numbers.",
    difficulty: "easy"
  },
  {
    word: "WAVE MONEY",
    category: "tech",
    categoryName: "💻 Tech & Modern Life",
    hint: "The ubiquitous yellow-branded mobile wallet and agent transfer service used across the country.",
    difficulty: "easy"
  },
  {
    word: "KBZPAY",
    category: "tech",
    categoryName: "💻 Tech & Modern Life",
    hint: "Widely used mobile wallet application run by Myanmar's largest private commercial bank.",
    difficulty: "easy"
  },
  // ==================== MORE MYANMAR FOOD & SNACKS ====================
  {
    word: "MEESHAY",
    category: "food",
    categoryName: "🍲 Myanmar Food & Snacks",
    hint: "Shan-origin specialty of rice noodles mixed with meat sauce, fermented bean paste, and pickled radish.",
    difficulty: "easy"
  },
  {
    word: "MON HINGAR",
    category: "food",
    categoryName: "🍲 Myanmar Food & Snacks",
    hint: "Alternative traditional phonetic spelling for the famous national catfish noodle breakfast.",
    difficulty: "medium"
  },
  {
    word: "BAIA GYAW",
    category: "food",
    categoryName: "🍲 Myanmar Food & Snacks",
    hint: "Crispy, savory deep-fried yellow split-pea fritters seasoned with onions and mint leaves.",
    difficulty: "medium"
  },
  {
    word: "MONT LONE YAY PAW",
    category: "food",
    categoryName: "🍲 Myanmar Food & Snacks",
    hint: "Boiled glutinous rice balls stuffed with palm jaggery, traditionally shared during Thingyan.",
    difficulty: "hard"
  },
  {
    word: "WET THA DOKE HTOE",
    category: "food",
    categoryName: "🍲 Myanmar Food & Snacks",
    hint: "Beloved street-cart pork skewers simmered in light soy broth, dipped into spicy chili sauce.",
    difficulty: "hard"
  },
  {
    word: "KHAUK SWE THOKE",
    category: "food",
    categoryName: "🍲 Myanmar Food & Snacks",
    hint: "Tossed wheat noodle salad seasoned with garlic oil, chili flakes, chickpea flour, and tamarind.",
    difficulty: "medium"
  },
  {
    word: "HALAWA",
    category: "food",
    categoryName: "🍲 Myanmar Food & Snacks",
    hint: "Rich, sticky sweet confection from Pathein made of sticky rice, coconut milk, and poppy seeds.",
    difficulty: "easy"
  },

  // ==================== MORE FAMOUS PLACES & LANDMARKS ====================
  {
    word: "HPA AN",
    category: "places",
    categoryName: "🏛️ Places & Landmarks",
    hint: "Picturesque capital of Kayin State famous for dramatic limestone karst mountains and sacred caves.",
    difficulty: "easy"
  },
  {
    word: "SADDAN CAVE",
    category: "places",
    categoryName: "🏛️ Places & Landmarks",
    hint: "Colossal limestone cavern near Hpa-An leading to a hidden lake navigated by wooden dugouts.",
    difficulty: "medium"
  },
  {
    word: "PO WIN TAUNG",
    category: "places",
    categoryName: "🏛️ Places & Landmarks",
    hint: "Ancient sandstone cave monastery near Monywa featuring hundreds of carved Buddhas and murals.",
    difficulty: "hard"
  },
  {
    word: "MINGUN PAHTODAWGYI",
    category: "places",
    categoryName: "🏛️ Places & Landmarks",
    hint: "Monumental, uncompleted massive brick stupa on the Ayeyarwady River cracked by historic earthquakes.",
    difficulty: "hard"
  },
  {
    word: "GOKTEIK VIADUCT",
    category: "places",
    categoryName: "🏛️ Places & Landmarks",
    hint: "Stunning colonial-era railway trestle spanning a deep gorge between Mandalay and Lashio.",
    difficulty: "hard"
  },
  {
    word: "NAT MA TAUNG",
    category: "places",
    categoryName: "🏛️ Places & Landmarks",
    hint: "Also called Mount Victoria, the highest peak in Chin State, known for endemic birds and rhododendrons.",
    difficulty: "medium"
  },
  {
    word: "SULE PAGODA",
    category: "places",
    categoryName: "🏛️ Places & Landmarks",
    hint: "Octagonal golden stupa serving as the vibrant traffic circle and central landmark of downtown Yangon.",
    difficulty: "easy"
  },

  // ==================== MORE CULTURE, TRADITIONS & FESTIVALS ====================
  {
    word: "KYAUK PYIN",
    category: "culture",
    categoryName: "🌺 Culture & Festivals",
    hint: "Round, grooved circular stone slab used with a splash of water to grind bark into Thanaka paste.",
    difficulty: "medium"
  },
  {
    word: "NAT KADAW",
    category: "culture",
    categoryName: "🌺 Culture & Festivals",
    hint: "Traditional spiritual medium or spirit dancer central to Taungbyone and other Nat festivals.",
    difficulty: "hard"
  },
  {
    word: "YEIN",
    category: "culture",
    categoryName: "🌺 Culture & Festivals",
    hint: "Traditional Burmese synchronized group dance performed by troupes during the Thingyan festival.",
    difficulty: "easy"
  },
  {
    word: "ANANYO",
    category: "culture",
    categoryName: "🌺 Culture & Festivals",
    hint: "Sacred concept of gratitude and deep reverence toward the 'Five Infinite Venerables' (Buddha, Dhamma, Sangha, Parents, Teachers).",
    difficulty: "hard"
  },
  {
    word: "PWE",
    category: "culture",
    categoryName: "🌺 Culture & Festivals",
    hint: "Open-air overnight theatrical performance combining traditional opera, comedy sketches, and dance.",
    difficulty: "easy"
  },
  {
    word: "LALOKE",
    category: "culture",
    categoryName: "🌺 Culture & Festivals",
    hint: "Handmade cylindrical lacquerware container traditionally used to carry betel nuts or offering food.",
    difficulty: "medium"
  },

  // ==================== MORE NATURE, GEMS & WILDLIFE ====================
  {
    word: "INNDAWGYI LAKE",
    category: "nature",
    categoryName: "💎 Nature, Gems & Wildlife",
    hint: "Largest natural freshwater lake in Myanmar and a UNESCO biosphere reserve in Kachin State.",
    difficulty: "hard"
  },
  {
    word: "PERIDOT",
    category: "nature",
    categoryName: "💎 Nature, Gems & Wildlife",
    hint: "Vibrant olive-green gemstone mined in great size and clarity from the Bernardmyo hills near Mogok.",
    difficulty: "medium"
  },
  {
    word: "SPINEL",
    category: "nature",
    categoryName: "💎 Nature, Gems & Wildlife",
    hint: "Brilliant, multi-colored precious gemstone commonly found alongside rubies and sapphires in Mogok.",
    difficulty: "medium"
  },
  {
    word: "TAKHI",
    category: "nature",
    categoryName: "💎 Nature, Gems & Wildlife",
    hint: "The rare Burmese star tortoise, an endemic and critically endangered species found in the central dry zone.",
    difficulty: "hard"
  },

  // ==================== MORE PASSIONS, DRINKS & POP CULTURE ====================
  {
    word: "LETHWEI",
    category: "favorites",
    categoryName: "⚽ Sports & Passions",
    hint: "Myanmar's bare-knuckle traditional boxing art, known as the 'art of nine limbs' including headbutts.",
    difficulty: "easy"
  },
  {
    word: "KYA SEINT",
    category: "favorites",
    categoryName: "☕ Drinks & Tea Culture",
    hint: "Classic Myanmar tea shop formula indicating an extra-strong tea base with rich, creamy milk.",
    difficulty: "medium"
  },
  {
    word: "AUNG LA N SANG",
    category: "favorites",
    categoryName: "⚽ Sports & Passions",
    hint: "Kachin-born MMA mixed martial arts superstar known nationally as 'The Burmese Python'.",
    difficulty: "hard"
  },
  {
    word: "MANDALAY BEER",
    category: "favorites",
    categoryName: "⚽ Sports & Passions",
    hint: "Historic local beer brand originally established during the British colonial era in 1886.",
    difficulty: "medium"
  },
  {
    word: "PLASTIC BALL",
    category: "favorites",
    categoryName: "⚽ Sports & Passions",
    hint: "Inexpensive red-striped or light toy balls kicked by kids barefoot in alleyways after school.",
    difficulty: "easy"
  }
];