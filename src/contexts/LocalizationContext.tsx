import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Language data - expanded with more popular languages
const languages = [
  ["en", "English", "English", "Worldwide, US, UK, Australia, etc.", "🇺🇸"],
  ["es", "Spanish", "Español", "Spain, Latin America", "🇪🇸"],
  ["fr", "French", "Français", "France, Canada, parts of Africa", "🇫🇷"],
  ["de", "German", "Deutsch", "Germany, Austria, Switzerland", "🇩🇪"],
  ["it", "Italian", "Italiano", "Italy, Switzerland", "🇮🇹"],
  ["pt", "Portuguese", "Português", "Portugal, Brazil, Angola, Mozambique", "🇵🇹"],
  ["ru", "Russian", "Русский", "Russia, Belarus, Kazakhstan", "🇷🇺"],
  ["zh", "Chinese (Mandarin)", "中文 (Zhōngwén)", "China, Taiwan, Singapore", "🇨🇳"],
  ["ja", "Japanese", "日本語 (Nihongo)", "Japan", "🇯🇵"],
  ["ko", "Korean", "한국어 (Hangugeo)", "South Korea, North Korea", "🇰🇷"],
  ["ar", "Arabic", "العربية", "Middle East, North Africa", "🇸🇦"],
  ["hi", "Hindi", "हिन्दी", "India, Fiji", "🇮🇳"],
  ["tr", "Turkish", "Türkçe", "Turkey, Cyprus", "🇹🇷"],
  ["nl", "Dutch", "Nederlands", "Netherlands, Belgium", "🇳🇱"],
  ["sv", "Swedish", "Svenska", "Sweden, Finland", "🇸🇪"],
  ["no", "Norwegian", "Norsk", "Norway", "🇳🇴"],
  ["da", "Danish", "Dansk", "Denmark", "🇩🇰"],
  ["fi", "Finnish", "Suomi", "Finland", "🇫🇮"],
  ["pl", "Polish", "Polski", "Poland", "🇵🇱"],
  ["uk", "Ukrainian", "Українська", "Ukraine", "🇺🇦"],
];

// Currency data
const currencies = [
  ["USD", "United States Dollar", "$", "United States, Puerto Rico, US territories"],
  ["EUR", "Euro", "€", "Eurozone (e.g. Germany, France, Spain)"],
  ["GBP", "Pound Sterling", "£", "United Kingdom"],
  ["JPY", "Japanese Yen", "¥", "Japan"],
  ["AUD", "Australian Dollar", "$", "Australia"],
  ["CAD", "Canadian Dollar", "$", "Canada"],
  ["CHF", "Swiss Franc", "CHF", "Switzerland, Liechtenstein"],
  ["CNY", "Chinese Yuan", "¥", "China"],
  ["SEK", "Swedish Krona", "kr", "Sweden"],
  ["NOK", "Norwegian Krone", "kr", "Norway"],
  ["DKK", "Danish Krone", "kr", "Denmark"],
  ["PLN", "Polish Zloty", "zł", "Poland"],
  ["RUB", "Russian Ruble", "₽", "Russia"],
  ["TRY", "Turkish Lira", "₺", "Turkey"],
  ["INR", "Indian Rupee", "₹", "India"],
  ["BRL", "Brazilian Real", "R$", "Brazil"],
  ["UAH", "Ukrainian Hryvnia", "₴", "Ukraine"],
];

// Comprehensive translations for all popular languages
const translations = {
  en: {
    // Header & Navigation
    men: "Men",
    women: "Women",
    all: "All",
    shop: "Shop",
    about: "About",
    searchPlaceholder: "Search products...",
    signIn: "Sign In / Sign Up",
    
    // Hero & Main Content
    comingSoon: "COMING SOON",
    notifyMe: "NOTIFY ME",
    learnMore: "LEARN MORE",
    welcomeToEOA: "Welcome to E.O.A Line",
    luxuryChristianFashion: "Luxury Christian Fashion",
    expressYourFaith: "Express Your Faith Through Style",
    
    // Collections
    laVeiraCollection: "LA VEIRA COLLECTION",
    tumieCollection: "TUMIE COLLECTION",
    newArrivals: "New Arrivals",
    bestSellers: "Best Sellers",
    viewAll: "View All",
    jackets: "Jackets",
    tshirts: "T-Shirts",
    shorts: "Shorts",
    skirts: "Skirts",
    pants: "Pants",
    sets: "Sets",
    hoodies: "Hoodies",
    
    // Product Details
    addToCart: "Add to Cart",
    addToWishlist: "Add to Wishlist",
    removeFromWishlist: "Remove from Wishlist",
    size: "Size",
    color: "Color",
    quantity: "Quantity",
    inStock: "In Stock",
    outOfStock: "Out of Stock",
    productDetails: "Product Details",
    sizeGuide: "Size Guide",
    careInstructions: "Care Instructions",
    
    // Cart & Checkout
    yourCart: "YOUR CART",
    cartEmpty: "Your cart is empty",
    continueShopping: "Continue Shopping",
    total: "TOTAL:",
    subtotal: "Subtotal:",
    shipping: "Shipping:",
    tax: "Tax:",
    secureCheckout: "SECURE CHECKOUT",
    freeShipping: "You've unlocked free express shipping",
    expressShipping: "Express Shipping: Free",
    youMightAlsoLike: "YOU MIGHT ALSO LIKE",
    proceedToCheckout: "Proceed to Checkout",
    
    // Wishlist
    wishlist: "Wishlist",
    wishlistEmpty: "Your wishlist is empty",
    saveItemsForLater: "Save items you love for later",
    moveToCart: "Move to Cart",
    
    // Footer & Legal
    collections: "Collections",
    customerCare: "Customer Care",
    getInTouch: "Get in Touch",
    shippingInfo: "Shipping Information",
    returnsProcess: "Returns Process",
    contactUs: "Contact Us",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    returnPolicy: "Return Policy",
    newsletter: "Newsletter",
    followUs: "Follow Us",
    
    // Brand Story
    ourBrand: "Our Brand",
    ourStory: "Our Story",
    faithAndFashion: "Faith & Fashion",
    ourMission: "Our Mission",
    brandStoryTitle: "Where Faith Meets Fashion",
    brandStorySubtitle: "Expressing devotion through elegant design",
    
    // Welcome Modal
    welcomeTitle: "Welcome to E.O.A LINE",
    welcomeSubtitle: "Please confirm your shipping location to continue to our online store.",
    confirmShippingLocation: "CONFIRM SHIPPING LOCATION",
    selectLanguage: "Select Language",
    selectCurrency: "Select Currency",
    popularLocations: "Popular Locations",
    
    // Brand Story & Vision
    ourVision: "Our Vision",
    visionText1: "With EOA, what you wear is more than clothing—it is the physical representation of the altar of God.",
    visionText2: "Every piece is designed as a reminder that His presence is not confined to one place, but moves with you wherever you go. By wearing EOA, you carry a visible expression of faith, a declaration that your life itself is a dwelling place for God.",
    visionText3: "It is more than style; it is a sanctuary you bring into the world, a testimony that wherever you step, His presence steps with you.",
    brandText1: "Immersed in the world of EOA, where our reality merges with music, and every seam tells our tale. It's not just about clothing; it's a journey through our emotions and experiences as people who have lived life in all its highs and lows.",
    brandText2: "For us, fashion and music is not just a fabric or a sound; it's a feeling of hope, a force that provides solace even in darkest times. From small gigs with a hundred people to grand stages before 50,000 spectators — each show, every note has accompanied us through peaks and valleys.",
    faith: "Faith",
    faithDescription: "God has kept us",
    music: "Music",
    musicDescription: "Our courage",
    family: "Family",
    familyDescription: "Our foundation",
    style: "Style",
    styleDescription: "Our expression",
    missionTitle: "Encouraging People to Believe in Themselves",
    missionText: "Our mission is to encourage people to believe in themselves, bring out their best, and find healing through EOA. It's not just about fashion; it's an invitation to forget troubles, celebrate life, and unveil the Kingdom of God.",
    
    // Collection & Products
    allProducts: "All Products",
    noProductsFound: "No products found matching your criteria.",
    
    // Hero Section
    eoaLine: "E.O.A LINE",
    beFirstToExperience: "Be the first to experience luxury Christian fashion",
  },
  
  es: {
    // Header & Navigation
    men: "Hombres",
    women: "Mujeres",
    all: "Todos",
    shop: "Tienda",
    about: "Acerca de",
    searchPlaceholder: "Buscar productos...",
    signIn: "Iniciar Sesión / Registrarse",
    
    // Hero & Main Content
    comingSoon: "PRÓXIMAMENTE",
    notifyMe: "NOTIFICARME",
    learnMore: "SABER MÁS",
    welcomeToEOA: "Bienvenido a E.O.A Line",
    luxuryChristianFashion: "Moda Cristiana de Lujo",
    expressYourFaith: "Expresa tu fe a través del estilo",
    
    // Collections
    laVeiraCollection: "COLECCIÓN LA VEIRA",
    tumieCollection: "COLECCIÓN TUMIE",
    newArrivals: "Novedades",
    bestSellers: "Más Vendidos",
    viewAll: "Ver Todo",
    jackets: "Chaquetas",
    tshirts: "Camisetas",
    shorts: "Shorts",
    skirts: "Faldas",
    pants: "Pantalones",
    sets: "Conjuntos",
    hoodies: "Sudaderas",
    
    // Product Details
    addToCart: "Añadir al Carrito",
    addToWishlist: "Añadir a Favoritos",
    removeFromWishlist: "Quitar de Favoritos",
    size: "Talla",
    color: "Color",
    quantity: "Cantidad",
    inStock: "En Stock",
    outOfStock: "Agotado",
    productDetails: "Detalles del Producto",
    sizeGuide: "Guía de Tallas",
    careInstructions: "Instrucciones de Cuidado",
    
    // Cart & Checkout
    yourCart: "SU CARRITO",
    cartEmpty: "Su carrito está vacío",
    continueShopping: "Continuar Comprando",
    total: "TOTAL:",
    subtotal: "Subtotal:",
    shipping: "Envío:",
    tax: "Impuesto:",
    secureCheckout: "PAGO SEGURO",
    freeShipping: "Ha desbloqueado el envío express gratuito",
    expressShipping: "Envío Express: Gratis",
    youMightAlsoLike: "TAMBIÉN LE PUEDE GUSTAR",
    proceedToCheckout: "Proceder al Pago",
    
    // Wishlist
    wishlist: "Lista de Deseos",
    wishlistEmpty: "Su lista de deseos está vacía",
    saveItemsForLater: "Guarde los artículos que le gustan para más tarde",
    moveToCart: "Mover al Carrito",
    
    // Footer & Legal
    collections: "Colecciones",
    customerCare: "Atención al Cliente",
    getInTouch: "Contactar",
    shippingInfo: "Información de Envío",
    returnsProcess: "Proceso de Devolución",
    contactUs: "Contáctanos",
    privacyPolicy: "Política de Privacidad",
    termsOfService: "Términos de Servicio",
    returnPolicy: "Política de Devolución",
    newsletter: "Boletín",
    followUs: "Síguenos",
    
    // Brand Story
    ourBrand: "Nuestra Marca",
    ourStory: "Nuestra Historia",
    faithAndFashion: "Fe y Moda",
    ourMission: "Nuestra Misión",
    brandStoryTitle: "Donde la fe se encuentra con la moda",
    brandStorySubtitle: "Expresando devoción a través del diseño elegante",
    
    // Welcome Modal
    welcomeTitle: "Bienvenido a E.O.A LINE",
    welcomeSubtitle: "Por favor confirme su ubicación de envío para continuar a nuestra tienda en línea.",
    confirmShippingLocation: "CONFIRMAR UBICACIÓN DE ENVÍO",
    selectLanguage: "Seleccionar Idioma",
    selectCurrency: "Seleccionar Moneda",
    popularLocations: "Ubicaciones Populares",
    
    // Brand Story & Vision
    ourVision: "Nuestra Visión",
    visionText1: "Con EOA, lo que usas es más que ropa—es la representación física del altar de Dios.",
    visionText2: "Cada pieza está diseñada como un recordatorio de que Su presencia no está confinada a un lugar, sino que se mueve contigo dondequiera que vayas. Al usar EOA, llevas una expresión visible de fe, una declaración de que tu vida misma es una morada para Dios.",
    visionText3: "Es más que estilo; es un santuario que traes al mundo, un testimonio de que dondequiera que pises, Su presencia camina contigo.",
    brandText1: "Sumergidos en el mundo de EOA, donde nuestra realidad se fusiona con la música, y cada costura cuenta nuestra historia. No se trata solo de ropa; es un viaje a través de nuestras emociones y experiencias como personas que han vivido la vida en todos sus altibajos.",
    brandText2: "Para nosotros, la moda y la música no son solo una tela o un sonido; es un sentimiento de esperanza, una fuerza que brinda consuelo incluso en los momentos más oscuros. Desde pequeños conciertos con cien personas hasta grandes escenarios ante 50,000 espectadores — cada show, cada nota nos ha acompañado a través de altos y bajos.",
    faith: "Fe",
    faithDescription: "Dios nos ha guardado",
    music: "Música",
    musicDescription: "Nuestro valor",
    family: "Familia",
    familyDescription: "Nuestra base",
    style: "Estilo",
    styleDescription: "Nuestra expresión",
    missionTitle: "Alentar a las personas a creer en sí mismas",
    missionText: "Nuestra misión es alentar a las personas a creer en sí mismas, sacar lo mejor de ellas y encontrar sanación a través de EOA. No se trata solo de moda; es una invitación a olvidar los problemas, celebrar la vida y revelar el Reino de Dios.",
    
    // Collection & Products
    allProducts: "Todos los Productos",
    noProductsFound: "No se encontraron productos que coincidan con sus criterios.",
    
    // Hero Section
    eoaLine: "LÍNEA E.O.A",
    beFirstToExperience: "Sé el primero en experimentar la moda cristiana de lujo",
  },
  
  fr: {
    // Header & Navigation
    men: "Hommes",
    women: "Femmes",
    all: "Tous",
    shop: "Boutique",
    about: "À propos",
    searchPlaceholder: "Rechercher des produits...",
    signIn: "Se connecter / S'inscrire",
    
    // Hero & Main Content
    comingSoon: "BIENTÔT DISPONIBLE",
    notifyMe: "ME NOTIFIER",
    learnMore: "EN SAVOIR PLUS",
    welcomeToEOA: "Bienvenue chez E.O.A Line",
    luxuryChristianFashion: "Mode Chrétienne de Luxe",
    expressYourFaith: "Exprimez votre foi à travers le style",
    
    // Collections
    laVeiraCollection: "COLLECTION LA VEIRA",
    tumieCollection: "COLLECTION TUMIE",
    newArrivals: "Nouveautés",
    bestSellers: "Meilleures ventes",
    viewAll: "Voir tout",
    jackets: "Vestes",
    tshirts: "T-Shirts",
    shorts: "Shorts",
    skirts: "Jupes",
    pants: "Pantalons",
    sets: "Ensembles",
    hoodies: "Sweats à capuche",
    
    // Product Details
    addToCart: "Ajouter au panier",
    addToWishlist: "Ajouter aux favoris",
    removeFromWishlist: "Retirer des favoris",
    size: "Taille",
    color: "Couleur",
    quantity: "Quantité",
    inStock: "En stock",
    outOfStock: "Rupture de stock",
    productDetails: "Détails du produit",
    sizeGuide: "Guide des tailles",
    careInstructions: "Instructions d'entretien",
    
    // Cart & Checkout
    yourCart: "VOTRE PANIER",
    cartEmpty: "Votre panier est vide",
    continueShopping: "Continuer les achats",
    total: "TOTAL:",
    subtotal: "Sous-total:",
    shipping: "Livraison:",
    tax: "Taxe:",
    secureCheckout: "PAIEMENT SÉCURISÉ",
    freeShipping: "Vous avez débloqué la livraison express gratuite",
    expressShipping: "Livraison Express: Gratuite",
    youMightAlsoLike: "VOUS POURRIEZ AUSSI AIMER",
    proceedToCheckout: "Procéder au paiement",
    
    // Wishlist
    wishlist: "Liste de souhaits",
    wishlistEmpty: "Votre liste de souhaits est vide",
    saveItemsForLater: "Sauvegardez les articles que vous aimez pour plus tard",
    moveToCart: "Déplacer vers le panier",
    
    // Footer & Legal
    collections: "Collections",
    customerCare: "Service Client",
    getInTouch: "Nous Contacter",
    shippingInfo: "Informations de Livraison",
    returnsProcess: "Processus de Retour",
    contactUs: "Nous Contacter",
    privacyPolicy: "Politique de Confidentialité",
    termsOfService: "Conditions d'Utilisation",
    returnPolicy: "Politique de Retour",
    newsletter: "Newsletter",
    followUs: "Suivez-nous",
    
    // Brand Story
    ourBrand: "Notre Marque",
    ourStory: "Notre Histoire",
    faithAndFashion: "Foi & Mode",
    ourMission: "Notre Mission",
    brandStoryTitle: "Où la foi rencontre la mode",
    brandStorySubtitle: "Exprimer la dévotion à travers un design élégant",
    
    // Welcome Modal
    welcomeTitle: "Bienvenue chez E.O.A LINE",
    welcomeSubtitle: "Veuillez confirmer votre lieu de livraison pour continuer vers notre boutique en ligne.",
    confirmShippingLocation: "CONFIRMER LE LIEU DE LIVRAISON",
    selectLanguage: "Sélectionner la langue",
    selectCurrency: "Sélectionner la devise",
    popularLocations: "Emplacements populaires",
    
    // Brand Story & Vision
    ourVision: "Notre Vision",
    visionText1: "Avec EOA, ce que vous portez est plus qu'un vêtement—c'est la représentation physique de l'autel de Dieu.",
    visionText2: "Chaque pièce est conçue comme un rappel que Sa présence n'est pas confinée à un seul endroit, mais se déplace avec vous partout où vous allez. En portant EOA, vous portez une expression visible de la foi, une déclaration que votre vie elle-même est une demeure pour Dieu.",
    visionText3: "C'est plus que du style; c'est un sanctuaire que vous apportez dans le monde, un témoignage que partout où vous marchez, Sa présence marche avec vous.",
    brandText1: "Immergés dans le monde d'EOA, où notre réalité se mélange avec la musique, et chaque couture raconte notre histoire. Il ne s'agit pas seulement de vêtements; c'est un voyage à travers nos émotions et expériences en tant que personnes qui ont vécu la vie dans tous ses hauts et ses bas.",
    brandText2: "Pour nous, la mode et la musique ne sont pas seulement un tissu ou un son; c'est un sentiment d'espoir, une force qui apporte du réconfort même dans les moments les plus sombres. Des petits concerts avec cent personnes aux grandes scènes devant 50 000 spectateurs — chaque spectacle, chaque note nous a accompagnés à travers les hauts et les bas.",
    faith: "Foi",
    faithDescription: "Dieu nous a gardés",
    music: "Musique",
    musicDescription: "Notre courage",
    family: "Famille",
    familyDescription: "Notre fondation",
    style: "Style",
    styleDescription: "Notre expression",
    missionTitle: "Encourager les gens à croire en eux-mêmes",
    missionText: "Notre mission est d'encourager les gens à croire en eux-mêmes, à faire ressortir le meilleur d'eux-mêmes et à trouver la guérison grâce à EOA. Il ne s'agit pas seulement de mode; c'est une invitation à oublier les problèmes, à célébrer la vie et à dévoiler le Royaume de Dieu.",
    
    // Collection & Products
    allProducts: "Tous les Produits",
    noProductsFound: "Aucun produit trouvé correspondant à vos critères.",
    
    // Hero Section
    eoaLine: "LIGNE E.O.A",
    beFirstToExperience: "Soyez le premier à découvrir la mode chrétienne de luxe",
  },
  
  de: {
    // Header & Navigation
    men: "Herren",
    women: "Damen",
    all: "Alle",
    shop: "Shop",
    about: "Über uns",
    searchPlaceholder: "Produkte suchen...",
    signIn: "Anmelden / Registrieren",
    
    // Hero & Main Content
    comingSoon: "DEMNÄCHST",
    notifyMe: "BENACHRICHTIGEN",
    learnMore: "MEHR ERFAHREN",
    welcomeToEOA: "Willkommen bei E.O.A Line",
    luxuryChristianFashion: "Luxuriöse Christliche Mode",
    expressYourFaith: "Drücken Sie Ihren Glauben durch Stil aus",
    
    // Collections
    laVeiraCollection: "LA VEIRA KOLLEKTION",
    tumieCollection: "TUMIE KOLLEKTION",
    newArrivals: "Neuheiten",
    bestSellers: "Bestseller",
    viewAll: "Alle anzeigen",
    jackets: "Jacken",
    tshirts: "T-Shirts",
    shorts: "Shorts",
    skirts: "Röcke",
    pants: "Hosen",
    sets: "Sets",
    hoodies: "Hoodies",
    
    // Product Details
    addToCart: "In den Warenkorb",
    addToWishlist: "Zur Wunschliste",
    removeFromWishlist: "Von Wunschliste entfernen",
    size: "Größe",
    color: "Farbe",
    quantity: "Menge",
    inStock: "Auf Lager",
    outOfStock: "Ausverkauft",
    productDetails: "Produktdetails",
    sizeGuide: "Größentabelle",
    careInstructions: "Pflegehinweise",
    
    // Cart & Checkout
    yourCart: "IHR WARENKORB",
    cartEmpty: "Ihr Warenkorb ist leer",
    continueShopping: "Weiter einkaufen",
    total: "GESAMT:",
    subtotal: "Zwischensumme:",
    shipping: "Versand:",
    tax: "Steuer:",
    secureCheckout: "SICHER BEZAHLEN",
    freeShipping: "Sie haben kostenlosen Express-Versand freigeschaltet",
    expressShipping: "Express-Versand: Kostenlos",
    youMightAlsoLike: "DAS KÖNNTE IHNEN AUCH GEFALLEN",
    proceedToCheckout: "Zur Kasse gehen",
    
    // Wishlist
    wishlist: "Wunschliste",
    wishlistEmpty: "Ihre Wunschliste ist leer",
    saveItemsForLater: "Speichern Sie Artikel, die Sie lieben, für später",
    moveToCart: "In den Warenkorb",
    
    // Footer & Legal
    collections: "Kollektionen",
    customerCare: "Kundenservice",
    getInTouch: "Kontakt",
    shippingInfo: "Versandinformationen",
    returnsProcess: "Rückgabeprozess",
    contactUs: "Kontakt",
    privacyPolicy: "Datenschutz",
    termsOfService: "AGB",
    returnPolicy: "Rückgaberichtlinie",
    newsletter: "Newsletter",
    followUs: "Folgen Sie uns",
    
    // Brand Story
    ourBrand: "Unsere Marke",
    ourStory: "Unsere Geschichte",
    faithAndFashion: "Glaube & Mode",
    ourMission: "Unsere Mission",
    brandStoryTitle: "Wo Glaube auf Mode trifft",
    brandStorySubtitle: "Hingabe durch elegantes Design ausdrücken",
    
    // Welcome Modal
    welcomeTitle: "Willkommen bei E.O.A LINE",
    welcomeSubtitle: "Bitte bestätigen Sie Ihren Versandort, um zu unserem Online-Shop zu gelangen.",
    confirmShippingLocation: "VERSANDORT BESTÄTIGEN",
    selectLanguage: "Sprache wählen",
    selectCurrency: "Währung wählen",
    popularLocations: "Beliebte Standorte",
    
    // Brand Story & Vision
    ourVision: "Unsere Vision",
    visionText1: "Mit EOA ist das, was Sie tragen, mehr als Kleidung – es ist die physische Darstellung des Altars Gottes.",
    visionText2: "Jedes Stück ist als Erinnerung daran entworfen, dass Seine Gegenwart nicht auf einen Ort beschränkt ist, sondern mit Ihnen geht, wohin Sie auch gehen. Indem Sie EOA tragen, tragen Sie einen sichtbaren Ausdruck des Glaubens, eine Erklärung, dass Ihr Leben selbst eine Wohnstätte für Gott ist.",
    visionText3: "Es ist mehr als Stil; es ist ein Heiligtum, das Sie in die Welt bringen, ein Zeugnis dafür, dass überall, wo Sie hintreten, Seine Gegenwart mit Ihnen geht.",
    brandText1: "Eingetaucht in die Welt von EOA, wo unsere Realität mit Musik verschmilzt und jede Naht unsere Geschichte erzählt. Es geht nicht nur um Kleidung; es ist eine Reise durch unsere Emotionen und Erfahrungen als Menschen, die das Leben in all seinen Höhen und Tiefen gelebt haben.",
    brandText2: "Für uns sind Mode und Musik nicht nur ein Stoff oder ein Klang; es ist ein Gefühl der Hoffnung, eine Kraft, die selbst in den dunkelsten Zeiten Trost spendet. Von kleinen Auftritten mit hundert Menschen bis hin zu großen Bühnen vor 50.000 Zuschauern – jede Show, jede Note hat uns durch Höhen und Tiefen begleitet.",
    faith: "Glaube",
    faithDescription: "Gott hat uns bewahrt",
    music: "Musik",
    musicDescription: "Unser Mut",
    family: "Familie",
    familyDescription: "Unser Fundament",
    style: "Stil",
    styleDescription: "Unser Ausdruck",
    missionTitle: "Menschen ermutigen, an sich selbst zu glauben",
    missionText: "Unsere Mission ist es, Menschen zu ermutigen, an sich selbst zu glauben, ihr Bestes hervorzubringen und Heilung durch EOA zu finden. Es geht nicht nur um Mode; es ist eine Einladung, Sorgen zu vergessen, das Leben zu feiern und das Reich Gottes zu enthüllen.",
    
    // Collection & Products
    allProducts: "Alle Produkte",
    noProductsFound: "Keine Produkte gefunden, die Ihren Kriterien entsprechen.",
    
    // Hero Section
    eoaLine: "E.O.A LINIE",
    beFirstToExperience: "Seien Sie der Erste, der luxuriöse christliche Mode erlebt",
  },
  
  it: {
    // Header & Navigation
    men: "Uomini",
    women: "Donne",
    all: "Tutti",
    shop: "Negozio",
    about: "Chi Siamo",
    searchPlaceholder: "Cerca prodotti...",
    signIn: "Accedi / Registrati",
    
    // Hero & Main Content
    comingSoon: "PROSSIMAMENTE",
    notifyMe: "AVVISAMI",
    learnMore: "SCOPRI DI PIÙ",
    welcomeToEOA: "Benvenuto in E.O.A Line",
    luxuryChristianFashion: "Moda Cristiana di Lusso",
    expressYourFaith: "Esprimi la tua fede attraverso lo stile",
    
    // Collections
    laVeiraCollection: "COLLEZIONE LA VEIRA",
    tumieCollection: "COLLEZIONE TUMIE",
    newArrivals: "Nuovi Arrivi",
    bestSellers: "Più Venduti",
    viewAll: "Vedi Tutto",
    jackets: "Giacche",
    tshirts: "T-Shirt",
    shorts: "Shorts",
    skirts: "Gonne",
    pants: "Pantaloni",
    sets: "Set",
    hoodies: "Felpe",
    
    // Product Details
    addToCart: "Aggiungi al Carrello",
    addToWishlist: "Aggiungi ai Preferiti",
    removeFromWishlist: "Rimuovi dai Preferiti",
    size: "Taglia",
    color: "Colore",
    quantity: "Quantità",
    inStock: "Disponibile",
    outOfStock: "Esaurito",
    productDetails: "Dettagli Prodotto",
    sizeGuide: "Guida alle Taglie",
    careInstructions: "Istruzioni per la Cura",
    
    // Cart & Checkout
    yourCart: "IL TUO CARRELLO",
    cartEmpty: "Il tuo carrello è vuoto",
    continueShopping: "Continua gli Acquisti",
    total: "TOTALE:",
    subtotal: "Subtotale:",
    shipping: "Spedizione:",
    tax: "Tasse:",
    secureCheckout: "CHECKOUT SICURO",
    freeShipping: "Hai sbloccato la spedizione express gratuita",
    expressShipping: "Spedizione Express: Gratuita",
    youMightAlsoLike: "POTREBBE PIACERTI ANCHE",
    proceedToCheckout: "Procedi al Checkout",
    
    // Wishlist
    wishlist: "Lista dei Desideri",
    wishlistEmpty: "La tua lista dei desideri è vuota",
    saveItemsForLater: "Salva gli articoli che ami per dopo",
    moveToCart: "Sposta nel Carrello",
    
    // Footer & Legal
    collections: "Collezioni",
    customerCare: "Assistenza Clienti",
    getInTouch: "Contattaci",
    shippingInfo: "Informazioni Spedizione",
    returnsProcess: "Processo di Reso",
    contactUs: "Contattaci",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Termini di Servizio",
    returnPolicy: "Politica di Reso",
    newsletter: "Newsletter",
    followUs: "Seguici",
    
    // Brand Story
    ourBrand: "Il Nostro Brand",
    ourStory: "La Nostra Storia",
    faithAndFashion: "Fede e Moda",
    ourMission: "La Nostra Missione",
    brandStoryTitle: "Dove la fede incontra la moda",
    brandStorySubtitle: "Esprimere devozione attraverso il design elegante",
    
    // Welcome Modal
    welcomeTitle: "Benvenuto in E.O.A LINE",
    welcomeSubtitle: "Conferma la tua posizione di spedizione per continuare nel nostro negozio online.",
    confirmShippingLocation: "CONFERMA POSIZIONE SPEDIZIONE",
    selectLanguage: "Seleziona Lingua",
    selectCurrency: "Seleziona Valuta",
    popularLocations: "Posizioni Popolari",
    
    // Brand Story & Vision
    ourVision: "La Nostra Visione",
    visionText1: "Con EOA, quello che indossi è più di un vestito—è la rappresentazione fisica dell'altare di Dio.",
    visionText2: "Ogni pezzo è progettato come promemoria che la Sua presenza non è confinata in un posto, ma si muove con te ovunque tu vada. Indossando EOA, porti un'espressione visibile di fede, una dichiarazione che la tua vita stessa è una dimora per Dio.",
    visionText3: "È più che stile; è un santuario che porti nel mondo, una testimonianza che ovunque tu cammini, la Sua presenza cammina con te.",
    brandText1: "Immersi nel mondo di EOA, dove la nostra realtà si fonde con la musica, e ogni cucitura racconta la nostra storia. Non si tratta solo di abbigliamento; è un viaggio attraverso le nostre emozioni ed esperienze come persone che hanno vissuto la vita in tutti i suoi alti e bassi.",
    brandText2: "Per noi, la moda e la musica non sono solo un tessuto o un suono; è un sentimento di speranza, una forza che fornisce consolazione anche nei momenti più bui. Dai piccoli concerti con cento persone ai grandi palchi davanti a 50.000 spettatori — ogni spettacolo, ogni nota ci ha accompagnato attraverso alti e bassi.",
    faith: "Fede",
    faithDescription: "Dio ci ha custoditi",
    music: "Musica",
    musicDescription: "Il nostro coraggio",
    family: "Famiglia",
    familyDescription: "La nostra base",
    style: "Stile",
    styleDescription: "La nostra espressione",
    missionTitle: "Incoraggiare le persone a credere in se stesse",
    missionText: "La nostra missione è incoraggiare le persone a credere in se stesse, tirare fuori il meglio di sé e trovare guarigione attraverso EOA. Non si tratta solo di moda; è un invito a dimenticare i problemi, celebrare la vita e svelare il Regno di Dio.",
    
    // Collection & Products
    allProducts: "Tutti i Prodotti",
    noProductsFound: "Nessun prodotto trovato che corrisponda ai tuoi criteri.",
    
    // Hero Section
    eoaLine: "LINEA E.O.A",
    beFirstToExperience: "Sii il primo a sperimentare la moda cristiana di lusso",
  },

  pt: {
    // Header & Navigation
    men: "Homens",
    women: "Mulheres",
    all: "Todos",
    shop: "Loja",
    about: "Sobre",
    searchPlaceholder: "Pesquisar produtos...",
    signIn: "Entrar / Registrar",
    
    // Hero & Main Content
    comingSoon: "EM BREVE",
    notifyMe: "ME NOTIFICAR",
    learnMore: "SABER MAIS",
    welcomeToEOA: "Bem-vindo à E.O.A Line",
    luxuryChristianFashion: "Moda Cristã de Luxo",
    expressYourFaith: "Expresse sua fé através do estilo",
    
    // Collections
    laVeiraCollection: "COLEÇÃO LA VEIRA",
    tumieCollection: "COLEÇÃO TUMIE",
    newArrivals: "Novidades",
    bestSellers: "Mais Vendidos",
    viewAll: "Ver Tudo",
    jackets: "Jaquetas",
    tshirts: "Camisetas",
    shorts: "Shorts",
    skirts: "Saias",
    pants: "Calças",
    sets: "Conjuntos",
    hoodies: "Moletons",
    
    // Product Details
    addToCart: "Adicionar ao Carrinho",
    addToWishlist: "Adicionar aos Favoritos",
    removeFromWishlist: "Remover dos Favoritos",
    size: "Tamanho",
    color: "Cor",
    quantity: "Quantidade",
    inStock: "Em Estoque",
    outOfStock: "Esgotado",
    productDetails: "Detalhes do Produto",
    sizeGuide: "Guia de Tamanhos",
    careInstructions: "Instruções de Cuidado",
    
    // Cart & Checkout
    yourCart: "SEU CARRINHO",
    cartEmpty: "Seu carrinho está vazio",
    continueShopping: "Continuar Comprando",
    total: "TOTAL:",
    subtotal: "Subtotal:",
    shipping: "Frete:",
    tax: "Imposto:",
    secureCheckout: "CHECKOUT SEGURO",
    freeShipping: "Você desbloqueou frete expresso grátis",
    expressShipping: "Frete Expresso: Grátis",
    youMightAlsoLike: "VOCÊ TAMBÉM PODE GOSTAR",
    proceedToCheckout: "Prosseguir para o Checkout",
    
    // Wishlist
    wishlist: "Lista de Desejos",
    wishlistEmpty: "Sua lista de desejos está vazia",
    saveItemsForLater: "Salve itens que você ama para depois",
    moveToCart: "Mover para o Carrinho",
    
    // Footer & Legal
    collections: "Coleções",
    customerCare: "Atendimento ao Cliente",
    getInTouch: "Entre em Contato",
    shippingInfo: "Informações de Envio",
    returnsProcess: "Processo de Devolução",
    contactUs: "Fale Conosco",
    privacyPolicy: "Política de Privacidade",
    termsOfService: "Termos de Serviço",
    returnPolicy: "Política de Devolução",
    newsletter: "Newsletter",
    followUs: "Siga-nos",
    
    // Brand Story
    ourBrand: "Nossa Marca",
    ourStory: "Nossa História",
    faithAndFashion: "Fé e Moda",
    ourMission: "Nossa Missão",
    brandStoryTitle: "Onde a fé encontra a moda",
    brandStorySubtitle: "Expressando devoção através do design elegante",
    
    // Welcome Modal
    welcomeTitle: "Bem-vindo à E.O.A LINE",
    welcomeSubtitle: "Confirme sua localização de envio para continuar em nossa loja online.",
    confirmShippingLocation: "CONFIRMAR LOCALIZAÇÃO DE ENVIO",
    selectLanguage: "Selecionar Idioma",
    selectCurrency: "Selecionar Moeda",
    popularLocations: "Localizações Populares",
    
    // Brand Story & Vision
    ourVision: "Nossa Visão",
    visionText1: "Com EOA, o que você veste é mais que roupa—é a representação física do altar de Deus.",
    visionText2: "Cada peça é projetada como um lembrete de que Sua presença não está confinada a um lugar, mas se move com você onde quer que vá. Ao usar EOA, você carrega uma expressão visível de fé, uma declaração de que sua vida é uma morada para Deus.",
    visionText3: "É mais que estilo; é um santuário que você traz ao mundo, um testemunho de que onde quer que você pise, Sua presença caminha com você.",
    brandText1: "Imersos no mundo da EOA, onde nossa realidade se funde com a música, e cada costura conta nossa história. Não é apenas sobre roupas; é uma jornada através de nossas emoções e experiências como pessoas que viveram a vida em todos os seus altos e baixos.",
    brandText2: "Para nós, moda e música não são apenas um tecido ou um som; é um sentimento de esperança, uma força que proporciona consolo mesmo nos momentos mais sombrios. De pequenos shows com cem pessoas a grandes palcos diante de 50.000 espectadores — cada show, cada nota nos acompanhou através de altos e baixos.",
    faith: "Fé",
    faithDescription: "Deus nos guardou",
    music: "Música",
    musicDescription: "Nossa coragem",
    family: "Família",
    familyDescription: "Nossa base",
    style: "Estilo",
    styleDescription: "Nossa expressão",
    missionTitle: "Encorajar as pessoas a acreditar em si mesmas",
    missionText: "Nossa missão é encorajar as pessoas a acreditar em si mesmas, trazer o melhor delas e encontrar cura através da EOA. Não é apenas sobre moda; é um convite para esquecer os problemas, celebrar a vida e revelar o Reino de Deus.",
    
    // Collection & Products
    allProducts: "Todos os Produtos",
    noProductsFound: "Nenhum produto encontrado que corresponda aos seus critérios.",
    
    // Hero Section
    eoaLine: "LINHA E.O.A",
    beFirstToExperience: "Seja o primeiro a experimentar moda cristã de luxo",
  },

  ru: {
    // Header & Navigation
    men: "Мужчины",
    women: "Женщины",
    all: "Все",
    shop: "Магазин",
    about: "О нас",
    searchPlaceholder: "Поиск товаров...",
    signIn: "Войти / Регистрация",
    
    // Hero & Main Content
    comingSoon: "СКОРО",
    notifyMe: "УВЕДОМИТЬ МЕНЯ",
    learnMore: "УЗНАТЬ БОЛЬШЕ",
    welcomeToEOA: "Добро пожаловать в E.O.A Line",
    luxuryChristianFashion: "Роскошная Христианская Мода",
    expressYourFaith: "Выражайте свою веру через стиль",
    
    // Collections
    laVeiraCollection: "КОЛЛЕКЦИЯ LA VEIRA",
    tumieCollection: "КОЛЛЕКЦИЯ TUMIE",
    newArrivals: "Новинки",
    bestSellers: "Бестселлеры",
    viewAll: "Посмотреть все",
    jackets: "Куртки",
    tshirts: "Футболки",
    shorts: "Шорты",
    skirts: "Юбки",
    pants: "Брюки",
    sets: "Комплекты",
    hoodies: "Худи",
    
    // Product Details
    addToCart: "Добавить в корзину",
    addToWishlist: "Добавить в избранное",
    removeFromWishlist: "Удалить из избранного",
    size: "Размер",
    color: "Цвет",
    quantity: "Количество",
    inStock: "В наличии",
    outOfStock: "Нет в наличии",
    productDetails: "Детали товара",
    sizeGuide: "Таблица размеров",
    careInstructions: "Инструкции по уходу",
    
    // Cart & Checkout
    yourCart: "ВАША КОРЗИНА",
    cartEmpty: "Ваша корзина пуста",
    continueShopping: "Продолжить покупки",
    total: "ИТОГО:",
    subtotal: "Промежуточный итог:",
    shipping: "Доставка:",
    tax: "Налог:",
    secureCheckout: "БЕЗОПАСНАЯ ОПЛАТА",
    freeShipping: "Вы получили бесплатную экспресс-доставку",
    expressShipping: "Экспресс-доставка: Бесплатно",
    youMightAlsoLike: "ВАМ ТАКЖЕ МОЖЕТ ПОНРАВИТЬСЯ",
    proceedToCheckout: "Перейти к оформлению",
    
    // Brand Story & Vision
    ourVision: "Наше Видение",
    visionText1: "С EOA то, что вы носите, больше чем одежда—это физическое представление алтаря Бога.",
    visionText2: "Каждая вещь создана как напоминание о том, что Его присутствие не ограничено одним местом, но движется с вами, куда бы вы ни пошли. Нося EOA, вы несете видимое выражение веры, заявление о том, что ваша жизнь сама по себе является обителью для Бога.",
    visionText3: "Это больше чем стиль; это святилище, которое вы приносите в мир, свидетельство того, что где бы вы ни ступили, Его присутствие идет с вами.",
    brandText1: "Погруженные в мир EOA, где наша реальность сливается с музыкой, и каждый шов рассказывает нашу историю. Это не просто об одежде; это путешествие через наши эмоции и переживания как людей, которые прожили жизнь во всех ее взлетах и падениях.",
    brandText2: "Для нас мода и музыка - это не просто ткань или звук; это чувство надежды, сила, которая дает утешение даже в самые темные времена. От небольших концертов со ста людьми до больших сцен перед 50 000 зрителей — каждое шоу, каждая нота сопровождала нас через взлеты и падения.",
    faith: "Вера",
    faithDescription: "Бог сохранил нас",
    music: "Музыка",
    musicDescription: "Наша смелость",
    family: "Семья",
    familyDescription: "Наша основа",
    style: "Стиль",
    styleDescription: "Наше выражение",
    missionTitle: "Поощрение людей верить в себя",
    missionText: "Наша миссия - поощрять людей верить в себя, раскрывать лучшее в себе и находить исцеление через EOA. Это не просто о моде; это приглашение забыть проблемы, праздновать жизнь и открыть Царство Божье.",
    
    // Collection & Products
    allProducts: "Все Товары",
    noProductsFound: "Товары, соответствующие вашим критериям, не найдены.",
    
    // Hero Section
    eoaLine: "ЛИНИЯ E.O.A",
    beFirstToExperience: "Будьте первыми, кто испытает роскошную христианскую моду",
  },

  zh: {
    // Header & Navigation
    men: "男装",
    women: "女装",
    all: "全部",
    shop: "商店",
    about: "关于我们",
    searchPlaceholder: "搜索产品...",
    signIn: "登录 / 注册",
    
    // Hero & Main Content
    comingSoon: "即将推出",
    notifyMe: "通知我",
    learnMore: "了解更多",
    welcomeToEOA: "欢迎来到 E.O.A Line",
    luxuryChristianFashion: "奢华基督教时尚",
    expressYourFaith: "通过风格表达你的信仰",
    
    // Collections
    laVeiraCollection: "LA VEIRA 系列",
    tumieCollection: "TUMIE 系列",
    newArrivals: "新品上市",
    bestSellers: "畅销商品",
    viewAll: "查看全部",
    jackets: "夹克",
    tshirts: "T恤",
    shorts: "短裤",
    skirts: "裙子",
    pants: "裤子",
    sets: "套装",
    hoodies: "连帽衫",
    
    // Product Details
    addToCart: "加入购物车",
    addToWishlist: "加入心愿单",
    removeFromWishlist: "从心愿单移除",
    size: "尺寸",
    color: "颜色",
    quantity: "数量",
    inStock: "有库存",
    outOfStock: "缺货",
    productDetails: "产品详情",
    sizeGuide: "尺寸指南",
    careInstructions: "护理说明",
    
    // Cart & Checkout
    yourCart: "您的购物车",
    cartEmpty: "您的购物车是空的",
    continueShopping: "继续购物",
    total: "总计:",
    subtotal: "小计:",
    shipping: "运费:",
    tax: "税费:",
    secureCheckout: "安全结账",
    freeShipping: "您已解锁免费快递",
    expressShipping: "快递: 免费",
    youMightAlsoLike: "您可能也喜欢",
    proceedToCheckout: "进行结账",
    
    // Brand Story & Vision
    ourVision: "我们的愿景",
    visionText1: "通过EOA，你所穿的不仅仅是衣服——它是上帝祭坛的物理表现。",
    visionText2: "每一件作品都被设计为提醒，祂的存在不局限于一个地方，而是与你同行，无论你走到哪里。穿着EOA，你携带着信仰的可见表达，宣告你的生命本身就是上帝的居所。",
    visionText3: "这不仅仅是风格；这是你带到世界的圣所，是你所踏之处，祂的存在与你同在的见证。",
    brandText1: "沉浸在EOA的世界中，我们的现实与音乐融合，每一针都诉说着我们的故事。这不仅仅是关于服装；这是一段穿越我们情感和经历的旅程，作为经历过生活起起落落的人。",
    brandText2: "对我们来说，时尚和音乐不仅仅是织物或声音；这是希望的感觉，是即使在最黑暗时刻也能提供慰藉的力量。从百人小型演出到五万观众的大舞台——每场演出，每个音符都伴随我们度过高峰和低谷。",
    faith: "信仰",
    faithDescription: "上帝保守了我们",
    music: "音乐",
    musicDescription: "我们的勇气",
    family: "家庭",
    familyDescription: "我们的根基",
    style: "风格",
    styleDescription: "我们的表达",
    missionTitle: "鼓励人们相信自己",
    missionText: "我们的使命是鼓励人们相信自己，发挥最好的一面，通过EOA找到治愈。这不仅仅是关于时尚；这是忘记烦恼、庆祝生活、揭示上帝国度的邀请。",
    
    // Collection & Products
    allProducts: "所有产品",
    noProductsFound: "未找到符合您条件的产品。",
    
    // Hero Section
    eoaLine: "E.O.A 系列",
    beFirstToExperience: "成为第一个体验奢华基督教时尚的人",
  },

  ja: {
    // Header & Navigation
    men: "メンズ",
    women: "レディース",
    all: "すべて",
    shop: "ショップ",
    about: "私たちについて",
    searchPlaceholder: "商品を検索...",
    signIn: "サインイン / 登録",
    
    // Hero & Main Content
    comingSoon: "近日公開",
    notifyMe: "通知する",
    learnMore: "詳しく見る",
    welcomeToEOA: "E.O.A Lineへようこそ",
    luxuryChristianFashion: "ラグジュアリークリスチャンファッション",
    expressYourFaith: "スタイルを通して信仰を表現する",
    
    // Collections
    laVeiraCollection: "LA VEIRA コレクション",
    tumieCollection: "TUMIE コレクション",
    newArrivals: "新着商品",
    bestSellers: "ベストセラー",
    viewAll: "すべて見る",
    jackets: "ジャケット",
    tshirts: "Tシャツ",
    shorts: "ショーツ",
    skirts: "スカート",
    pants: "パンツ",
    sets: "セット",
    hoodies: "フーディー",
    
    // Product Details
    addToCart: "カートに追加",
    addToWishlist: "ウィッシュリストに追加",
    removeFromWishlist: "ウィッシュリストから削除",
    size: "サイズ",
    color: "色",
    quantity: "数量",
    inStock: "在庫あり",
    outOfStock: "在庫切れ",
    productDetails: "商品詳細",
    sizeGuide: "サイズガイド",
    careInstructions: "お手入れ方法",
    
    // Cart & Checkout
    yourCart: "あなたのカート",
    cartEmpty: "カートは空です",
    continueShopping: "ショッピングを続ける",
    total: "合計:",
    subtotal: "小計:",
    shipping: "送料:",
    tax: "税金:",
    secureCheckout: "安全な決済",
    freeShipping: "無料エクスプレス配送を獲得しました",
    expressShipping: "エクスプレス配送: 無料",
    youMightAlsoLike: "こちらもおすすめ",
    proceedToCheckout: "決済に進む",
    
    // Brand Story & Vision
    ourVision: "私たちのビジョン",
    visionText1: "EOAでは、あなたが着るものは単なる衣服以上のもの—それは神の祭壇の物理的表現です。",
    visionText2: "すべての作品は、神の存在が一つの場所に限定されるのではなく、あなたがどこに行ってもあなたと共に動くことを思い出させるものとして設計されています。EOAを着ることで、あなたは信仰の目に見える表現を運び、あなたの人生そのものが神の住まいであることを宣言します。",
    visionText3: "それはスタイル以上のもの；それはあなたが世界にもたらす聖域であり、あなたが歩むところはどこでも、神の存在があなたと共にあることの証です。",
    brandText1: "EOAの世界に浸り、私たちの現実が音楽と融合し、すべての縫い目が私たちの物語を語ります。それは単に衣服についてではありません；それは人生の浮き沈みをすべて経験した人々としての私たちの感情と体験を通る旅です。",
    brandText2: "私たちにとって、ファッションと音楽は単なる布や音ではありません；それは希望の感情であり、最も暗い時でも慰めを提供する力です。百人の小さなギグから50,000人の観客の前の大きなステージまで—すべてのショー、すべての音符が私たちを山と谷を通して伴ってきました。",
    faith: "信仰",
    faithDescription: "神が私たちを守られた",
    music: "音楽",
    musicDescription: "私たちの勇気",
    family: "家族",
    familyDescription: "私たちの基盤",
    style: "スタイル",
    styleDescription: "私たちの表現",
    missionTitle: "人々が自分自身を信じることを励ます",
    missionText: "私たちの使命は、人々が自分自身を信じ、最高の自分を引き出し、EOAを通して癒しを見つけることを励ますことです。それは単にファッションについてではありません；それは悩みを忘れ、人生を祝い、神の王国を明らかにする招待です。",
    
    // Collection & Products
    allProducts: "すべての商品",
    noProductsFound: "条件に一致する商品が見つかりませんでした。",
    
    // Hero Section
    eoaLine: "E.O.A ライン",
    beFirstToExperience: "ラグジュアリークリスチャンファッションを最初に体験してください",
  },

  ko: {
    // Header & Navigation
    men: "남성",
    women: "여성",
    all: "전체",
    shop: "쇼핑",
    about: "소개",
    searchPlaceholder: "제품 검색...",
    signIn: "로그인 / 회원가입",
    
    // Hero & Main Content
    comingSoon: "곧 출시",
    notifyMe: "알림 받기",
    learnMore: "더 알아보기",
    welcomeToEOA: "E.O.A Line에 오신 것을 환영합니다",
    luxuryChristianFashion: "럭셔리 크리스천 패션",
    expressYourFaith: "스타일을 통해 신앙을 표현하세요",
    
    // Collections
    laVeiraCollection: "LA VEIRA 컬렉션",
    tumieCollection: "TUMIE 컬렉션",
    newArrivals: "신상품",
    bestSellers: "베스트셀러",
    viewAll: "전체 보기",
    jackets: "재킷",
    tshirts: "티셔츠",
    shorts: "반바지",
    skirts: "스커트",
    pants: "바지",
    sets: "세트",
    hoodies: "후드티",
    
    // Product Details
    addToCart: "장바구니에 추가",
    addToWishlist: "위시리스트에 추가",
    removeFromWishlist: "위시리스트에서 제거",
    size: "사이즈",
    color: "색상",
    quantity: "수량",
    inStock: "재고 있음",
    outOfStock: "품절",
    productDetails: "제품 상세정보",
    sizeGuide: "사이즈 가이드",
    careInstructions: "관리 방법",
    
    // Cart & Checkout
    yourCart: "장바구니",
    cartEmpty: "장바구니가 비어있습니다",
    continueShopping: "쇼핑 계속하기",
    total: "총계:",
    subtotal: "소계:",
    shipping: "배송비:",
    tax: "세금:",
    secureCheckout: "안전한 결제",
    freeShipping: "무료 특급 배송을 받으셨습니다",
    expressShipping: "특급 배송: 무료",
    youMightAlsoLike: "추천 상품",
    proceedToCheckout: "결제하기",
    
    // Brand Story & Vision
    ourVision: "우리의 비전",
    visionText1: "EOA와 함께, 당신이 입는 것은 단순한 의복 이상입니다—그것은 하나님의 제단의 물리적 표현입니다.",
    visionText2: "모든 작품은 그분의 존재가 한 곳에 국한되지 않고 당신이 어디를 가든 함께 움직인다는 것을 상기시키도록 설계되었습니다. EOA를 입음으로써, 당신은 신앙의 가시적 표현을 지니고, 당신의 삶 자체가 하나님의 거처라는 선언을 합니다.",
    visionText3: "그것은 스타일 이상입니다; 그것은 당신이 세상에 가져오는 성소이며, 당신이 발을 디디는 곳마다 그분의 존재가 함께한다는 증거입니다.",
    brandText1: "EOA의 세계에 몰입하여, 우리의 현실이 음악과 융합되고, 모든 솔기가 우리의 이야기를 말합니다. 그것은 단순히 의복에 관한 것이 아닙니다; 그것은 인생의 모든 기복을 경험한 사람들로서 우리의 감정과 경험을 통한 여행입니다.",
    brandText2: "우리에게 패션과 음악은 단순한 직물이나 소리가 아닙니다; 그것은 희망의 감정이며, 가장 어두운 시간에도 위안을 제공하는 힘입니다. 백 명의 작은 공연부터 50,000명의 관객 앞의 큰 무대까지 — 모든 쇼, 모든 음표가 우리를 정점과 골짜기를 통해 동반했습니다.",
    faith: "신앙",
    faithDescription: "하나님이 우리를 지키셨습니다",
    music: "음악",
    musicDescription: "우리의 용기",
    family: "가족",
    familyDescription: "우리의 기반",
    style: "스타일",
    styleDescription: "우리의 표현",
    missionTitle: "사람들이 자신을 믿도록 격려하기",
    missionText: "우리의 사명은 사람들이 자신을 믿고, 최고의 모습을 끌어내며, EOA를 통해 치유를 찾도록 격려하는 것입니다. 그것은 단순히 패션에 관한 것이 아닙니다; 그것은 고민을 잊고, 삶을 축하하며, 하나님의 왕국을 드러내는 초대입니다.",
    
    // Collection & Products
    allProducts: "모든 제품",
    noProductsFound: "조건에 맞는 제품을 찾을 수 없습니다.",
    
    // Hero Section
    eoaLine: "E.O.A 라인",
    beFirstToExperience: "럭셔리 크리스천 패션을 가장 먼저 경험해보세요",
  },

  ar: {
    // Header & Navigation
    men: "رجال",
    women: "نساء",
    all: "الكل",
    shop: "متجر",
    about: "حولنا",
    searchPlaceholder: "البحث عن المنتجات...",
    signIn: "تسجيل الدخول / التسجيل",
    
    // Hero & Main Content
    comingSoon: "قريباً",
    notifyMe: "أعلمني",
    learnMore: "اعرف المزيد",
    welcomeToEOA: "مرحباً بك في E.O.A Line",
    luxuryChristianFashion: "أزياء مسيحية فاخرة",
    expressYourFaith: "عبر عن إيمانك من خلال الأناقة",
    
    // Collections
    laVeiraCollection: "مجموعة LA VEIRA",
    tumieCollection: "مجموعة TUMIE",
    newArrivals: "وصل حديثاً",
    bestSellers: "الأكثر مبيعاً",
    viewAll: "عرض الكل",
    jackets: "جاكيتات",
    tshirts: "تي شيرت",
    shorts: "شورتات",
    skirts: "تنانير",
    pants: "بناطيل",
    sets: "طقم",
    hoodies: "هوديز",
    
    // Product Details
    addToCart: "أضف إلى السلة",
    addToWishlist: "أضف إلى المفضلة",
    removeFromWishlist: "إزالة من المفضلة",
    size: "المقاس",
    color: "اللون",
    quantity: "الكمية",
    inStock: "متوفر",
    outOfStock: "نفد المخزون",
    productDetails: "تفاصيل المنتج",
    sizeGuide: "دليل المقاسات",
    careInstructions: "تعليمات العناية",
    
    // Cart & Checkout
    yourCart: "سلتك",
    cartEmpty: "سلتك فارغة",
    continueShopping: "متابعة التسوق",
    total: "المجموع:",
    subtotal: "المجموع الفرعي:",
    shipping: "الشحن:",
    tax: "الضريبة:",
    secureCheckout: "دفع آمن",
    freeShipping: "لقد حصلت على شحن سريع مجاني",
    expressShipping: "الشحن السريع: مجاني",
    youMightAlsoLike: "قد يعجبك أيضاً",
    proceedToCheckout: "المتابعة للدفع",
    
    // Brand Story & Vision
    ourVision: "رؤيتنا",
    visionText1: "مع EOA، ما ترتديه أكثر من مجرد ملابس—إنه التمثيل المادي لمذبح الله.",
    visionText2: "كل قطعة مصممة كتذكير بأن حضوره ليس محصوراً في مكان واحد، بل يتحرك معك أينما ذهبت. بارتداء EOA، تحمل تعبيراً مرئياً عن الإيمان، إعلاناً أن حياتك نفسها مسكن لله.",
    visionText3: "إنه أكثر من أسلوب؛ إنه ملاذ تجلبه إلى العالم، شهادة أنه أينما تخطو، حضوره يخطو معك.",
    brandText1: "منغمسون في عالم EOA، حيث تندمج واقعنا مع الموسيقى، وكل خياطة تحكي حكايتنا. ليس الأمر فقط عن الملابس؛ إنها رحلة عبر مشاعرنا وتجاربنا كأشخاص عاشوا الحياة في كل صعودها وهبوطها.",
    brandText2: "بالنسبة لنا، الموضة والموسيقى ليست مجرد قماش أو صوت؛ إنها شعور بالأمل، قوة توفر العزاء حتى في أحلك الأوقات. من العروض الصغيرة مع مائة شخص إلى المراحل الكبيرة أمام 50,000 متفرج — كل عرض، كل نغمة رافقتنا عبر القمم والوديان.",
    faith: "الإيمان",
    faithDescription: "الله حفظنا",
    music: "الموسيقى",
    musicDescription: "شجاعتنا",
    family: "العائلة",
    familyDescription: "أساسنا",
    style: "الأسلوب",
    styleDescription: "تعبيرنا",
    missionTitle: "تشجيع الناس على الإيمان بأنفسهم",
    missionText: "مهمتنا هي تشجيع الناس على الإيمان بأنفسهم، وإخراج أفضل ما فيهم، والعثور على الشفاء من خلال EOA. ليس الأمر فقط عن الموضة؛ إنها دعوة لنسيان المتاعب، والاحتفال بالحياة، وكشف ملكوت الله.",
    
    // Collection & Products
    allProducts: "جميع المنتجات",
    noProductsFound: "لم يتم العثور على منتجات تطابق معاييرك.",
    
    // Hero Section
    eoaLine: "خط E.O.A",
    beFirstToExperience: "كن أول من يختبر الموضة المسيحية الفاخرة",
  },

  hi: {
    // Header & Navigation
    men: "पुरुष",
    women: "महिला",
    all: "सभी",
    shop: "दुकान",
    about: "हमारे बारे में",
    searchPlaceholder: "उत्पाद खोजें...",
    signIn: "साइन इन / साइन अप",
    
    // Hero & Main Content
    comingSoon: "जल्द आ रहा है",
    notifyMe: "मुझे सूचित करें",
    learnMore: "और जानें",
    welcomeToEOA: "E.O.A Line में आपका स्वागत है",
    luxuryChristianFashion: "लक्जरी क्रिश्चियन फैशन",
    expressYourFaith: "शैली के माध्यम से अपने विश्वास को व्यक्त करें",
    
    // Collections
    laVeiraCollection: "LA VEIRA संग्रह",
    tumieCollection: "TUMIE संग्रह",
    newArrivals: "नए आगमन",
    bestSellers: "सबसे ज्यादा बिकने वाले",
    viewAll: "सभी देखें",
    jackets: "जैकेट",
    tshirts: "टी-शर्ट",
    shorts: "शॉर्ट्स",
    skirts: "स्कर्ट",
    pants: "पैंट",
    sets: "सेट",
    hoodies: "हूडी",
    
    // Product Details
    addToCart: "कार्ट में जोड़ें",
    addToWishlist: "विशलिस्ट में जोड़ें",
    removeFromWishlist: "विशलिस्ट से हटाएं",
    size: "साइज़",
    color: "रंग",
    quantity: "मात्रा",
    inStock: "स्टॉक में",
    outOfStock: "स्टॉक खत्म",
    productDetails: "उत्पाद विवरण",
    sizeGuide: "साइज़ गाइड",
    careInstructions: "देखभाल निर्देश",
    
    // Cart & Checkout
    yourCart: "आपकी कार्ट",
    cartEmpty: "आपकी कार्ट खाली है",
    continueShopping: "खरीदारी जारी रखें",
    total: "कुल:",
    subtotal: "उप-योग:",
    shipping: "शिपिंग:",
    tax: "कर:",
    secureCheckout: "सुरक्षित चेकआउट",
    freeShipping: "आपने मुफ्त एक्सप्रेस शिपिंग अनलॉक की है",
    expressShipping: "एक्सप्रेस शिपिंग: मुफ्त",
    youMightAlsoLike: "आपको यह भी पसंद आ सकता है",
    proceedToCheckout: "चेकआउट पर जाएं",
    
    // Brand Story & Vision
    ourVision: "हमारी दृष्टि",
    visionText1: "EOA के साथ, आप जो पहनते हैं वह केवल कपड़े से कहीं अधिक है—यह भगवान की वेदी का भौतिक प्रतिनिधित्व है।",
    visionText2: "हर टुकड़ा इस याद दिलाने के लिए डिज़ाइन किया गया है कि उनकी उपस्थिति एक स्थान तक सीमित नहीं है, बल्कि आपके साथ चलती है जहाँ भी आप जाते हैं। EOA पहनकर, आप विश्वास की एक दृश्य अभिव्यक्ति ले जाते हैं, एक घोषणा कि आपका जीवन स्वयं भगवान का निवास स्थान है।",
    visionText3: "यह शैली से कहीं अधिक है; यह एक अभयारण्य है जिसे आप दुनिया में लाते हैं, एक गवाही कि जहाँ भी आप कदम रखते हैं, उनकी उपस्थिति आपके साथ कदम रखती है।",
    brandText1: "EOA की दुनिया में डूबे हुए, जहाँ हमारी वास्तविकता संगीत के साथ मिल जाती है, और हर सीम हमारी कहानी कहती है। यह केवल कपड़ों के बारे में नहीं है; यह उन लोगों के रूप में हमारी भावनाओं और अनुभवों के माध्यम से एक यात्रा है जिन्होंने जीवन को उसकी सभी ऊंचाइयों और चढ़ावों में जिया है।",
    brandText2: "हमारे लिए, फैशन और संगीत केवल एक कपड़ा या ध्वनि नहीं है; यह आशा की भावना है, एक शक्ति जो सबसे अंधेरे समय में भी सांत्वना प्रदान करती है। सौ लोगों के साथ छोटे गिग्स से लेकर 50,000 दर्शकों के सामने बड़े मंच तक — हर शो, हर नोट ने हमें चोटियों और घाटियों के माध्यम से साथ दिया है।",
    faith: "विश्वास",
    faithDescription: "भगवान ने हमें रखा है",
    music: "संगीत",
    musicDescription: "हमारा साहस",
    family: "परिवार",
    familyDescription: "हमारी नींव",
    style: "शैली",
    styleDescription: "हमारी अभिव्यक्ति",
    missionTitle: "लोगों को खुद पर विश्वास करने के लिए प्रोत्साहित करना",
    missionText: "हमारा मिशन लोगों को खुद पर विश्वास करने, अपना सर्वश्रेष्ठ निकालने और EOA के माध्यम से उपचार खोजने के लिए प्रोत्साहित करना है। यह केवल फैशन के बारे में नहीं है; यह परेशानियों को भूलने, जीवन का जश्न मनाने और भगवान के राज्य को प्रकट करने का निमंत्रण है।",
    
    // Collection & Products
    allProducts: "सभी उत्पाद",
    noProductsFound: "आपके मानदंडों से मेल खाने वाले कोई उत्पाद नहीं मिले।",
    
    // Hero Section
    eoaLine: "E.O.A लाइन",
    beFirstToExperience: "लक्जरी क्रिश्चियन फैशन का अनुभव करने वाले पहले व्यक्ति बनें",
  },

  tr: {
    // Header & Navigation
    men: "Erkek",
    women: "Kadın",
    all: "Hepsi",
    shop: "Mağaza",
    about: "Hakkımızda",
    searchPlaceholder: "Ürün ara...",
    signIn: "Giriş Yap / Kayıt Ol",
    
    // Hero & Main Content
    comingSoon: "YAKINDA",
    notifyMe: "BENİ BİLGİLENDİR",
    learnMore: "DAHA FAZLA ÖĞRENİN",
    welcomeToEOA: "E.O.A Line'a Hoş Geldiniz",
    luxuryChristianFashion: "Lüks Hristiyan Modası",
    expressYourFaith: "İnancınızı stil ile ifade edin",
    
    // Collections
    laVeiraCollection: "LA VEIRA KOLEKSİYONU",
    tumieCollection: "TUMIE KOLEKSİYONU",
    newArrivals: "Yeni Gelenler",
    bestSellers: "En Çok Satanlar",
    viewAll: "Hepsini Gör",
    jackets: "Ceketler",
    tshirts: "Tişörtler",
    shorts: "Şortlar",
    skirts: "Etekler",
    pants: "Pantolonlar",
    sets: "Takımlar",
    hoodies: "Kapüşonlular",
    
    // Product Details
    addToCart: "Sepete Ekle",
    addToWishlist: "İstek Listesine Ekle",
    removeFromWishlist: "İstek Listesinden Çıkar",
    size: "Beden",
    color: "Renk",
    quantity: "Miktar",
    inStock: "Stokta",
    outOfStock: "Stokta Yok",
    productDetails: "Ürün Detayları",
    sizeGuide: "Beden Rehberi",
    careInstructions: "Bakım Talimatları",
    
    // Cart & Checkout
    yourCart: "SEPETİNİZ",
    cartEmpty: "Sepetiniz boş",
    continueShopping: "Alışverişe Devam Et",
    total: "TOPLAM:",
    subtotal: "Ara Toplam:",
    shipping: "Kargo:",
    tax: "Vergi:",
    secureCheckout: "GÜVENLİ ÖDEME",
    freeShipping: "Ücretsiz ekspres kargo kazandınız",
    expressShipping: "Ekspres Kargo: Ücretsiz",
    youMightAlsoLike: "BEĞENEBİLECEKLERİNİZ",
    proceedToCheckout: "Ödemeye Geç",
    
    // Brand Story & Vision
    ourVision: "Vizyonumuz",
    visionText1: "EOA ile giydiğiniz şey sadece giysi değil—Tanrı'nın sunağının fiziksel temsilidir.",
    visionText2: "Her parça, O'nun varlığının tek bir yere sınırlı olmadığını, nereye giderseniz gidin sizinle birlikte hareket ettiğini hatırlatmak için tasarlanmıştır. EOA giyerek, görünür bir inanç ifadesi taşırsınız, yaşamınızın kendisinin Tanrı için bir konut olduğunun beyanı.",
    visionText3: "Bu stilden fazlası; dünyaya getirdiğiniz bir kutsal alan, nereye adım atarsanız atın, O'nun varlığının sizinle birlikte adım attığının tanıklığı.",
    brandText1: "EOA dünyasına dalmış, gerçekliğimizin müzikle birleştiği ve her dikişin hikayemizi anlattığı yer. Bu sadece giyim hakkında değil; yaşamı tüm inişli çıkışlı yaşamış insanlar olarak duygularımız ve deneyimlerimiz boyunca bir yolculuk.",
    brandText2: "Bizim için moda ve müzik sadece bir kumaş veya ses değil; umut duygusu, en karanlık zamanlarda bile teselli sağlayan bir güç. Yüz kişilik küçük konserlerden 50.000 seyirci önündeki büyük sahnelere — her gösteri, her nota bizi zirveler ve vadiler boyunca eşlik etti.",
    faith: "İnanç",
    faithDescription: "Tanrı bizi korudu",
    music: "Müzik",
    musicDescription: "Cesaretimiz",
    family: "Aile",
    familyDescription: "Temelimiz",
    style: "Stil",
    styleDescription: "İfademiz",
    missionTitle: "İnsanları kendilerine inanmaya teşvik etmek",
    missionText: "Misyonumuz insanları kendilerine inanmaya, en iyilerini ortaya çıkarmaya ve EOA aracılığıyla şifa bulmaya teşvik etmektir. Bu sadece moda hakkında değil; sıkıntıları unutmaya, hayatı kutlamaya ve Tanrı'nın Krallığını ortaya çıkarmaya davet.",
    
    // Collection & Products
    allProducts: "Tüm Ürünler",
    noProductsFound: "Kriterlerinize uygun ürün bulunamadı.",
    
    // Hero Section
    eoaLine: "E.O.A HATTI",
    beFirstToExperience: "Lüks Hristiyan modasını deneyimleyen ilk kişi olun",
  },

  nl: {
    // Header & Navigation
    men: "Heren",
    women: "Dames",
    all: "Alle",
    shop: "Winkel",
    about: "Over ons",
    searchPlaceholder: "Zoek producten...",
    signIn: "Inloggen / Registreren",
    
    // Hero & Main Content
    comingSoon: "BINNENKORT",
    notifyMe: "WAARSCHUW MIJ",
    learnMore: "MEER WETEN",
    welcomeToEOA: "Welkom bij E.O.A Line",
    luxuryChristianFashion: "Luxe Christelijke Mode",
    expressYourFaith: "Druk je geloof uit door stijl",
    
    // Collections
    laVeiraCollection: "LA VEIRA COLLECTIE",
    tumieCollection: "TUMIE COLLECTIE",
    newArrivals: "Nieuwe Aankomsten",
    bestSellers: "Bestsellers",
    viewAll: "Bekijk Alles",
    jackets: "Jassen",
    tshirts: "T-shirts",
    shorts: "Shorts",
    skirts: "Rokken",
    pants: "Broeken",
    sets: "Sets",
    hoodies: "Hoodies",
    
    // Product Details
    addToCart: "Toevoegen aan Winkelwagen",
    addToWishlist: "Toevoegen aan Verlanglijst",
    removeFromWishlist: "Verwijderen van Verlanglijst",
    size: "Maat",
    color: "Kleur",
    quantity: "Hoeveelheid",
    inStock: "Op Voorraad",
    outOfStock: "Uitverkocht",
    productDetails: "Productdetails",
    sizeGuide: "Maatgids",
    careInstructions: "Verzorgingsinstructies",
    
    // Cart & Checkout
    yourCart: "UW WINKELWAGEN",
    cartEmpty: "Uw winkelwagen is leeg",
    continueShopping: "Verder Winkelen",
    total: "TOTAAL:",
    subtotal: "Subtotaal:",
    shipping: "Verzending:",
    tax: "Belasting:",
    secureCheckout: "VEILIGE AFREKENING",
    freeShipping: "U heeft gratis express verzending ontgrendeld",
    expressShipping: "Express Verzending: Gratis",
    youMightAlsoLike: "U VINDT DIT MISSCHIEN OOK LEUK",
    proceedToCheckout: "Doorgaan naar Afrekening",
    
    // Brand Story & Vision
    ourVision: "Onze Visie",
    visionText1: "Met EOA is wat je draagt meer dan kleding—het is de fysieke representatie van Gods altaar.",
    visionText2: "Elk stuk is ontworpen als herinnering dat Zijn aanwezigheid niet beperkt is tot één plaats, maar met je meebeweegt waar je ook gaat. Door EOA te dragen, draag je een zichtbare uitdrukking van geloof, een verklaring dat je leven zelf een woonplaats voor God is.",
    visionText3: "Het is meer dan stijl; het is een heiligdom dat je de wereld inbrengt, een getuigenis dat waar je ook stapt, Zijn aanwezigheid met je meestapt.",
    brandText1: "Ondergedompeld in de wereld van EOA, waar onze realiteit samensmelt met muziek, en elke naad ons verhaal vertelt. Het gaat niet alleen over kleding; het is een reis door onze emoties en ervaringen als mensen die het leven hebben geleefd in al zijn hoogte- en dieptepunten.",
    brandText2: "Voor ons zijn mode en muziek niet alleen een stof of geluid; het is een gevoel van hoop, een kracht die troost biedt zelfs in de donkerste tijden. Van kleine optredens met honderd mensen tot grote podia voor 50.000 toeschouwers — elke show, elke noot heeft ons begeleid door pieken en dalen.",
    faith: "Geloof",
    faithDescription: "God heeft ons bewaard",
    music: "Muziek",
    musicDescription: "Onze moed",
    family: "Familie",
    familyDescription: "Ons fundament",
    style: "Stijl",
    styleDescription: "Onze uitdrukking",
    missionTitle: "Mensen aanmoedigen om in zichzelf te geloven",
    missionText: "Onze missie is om mensen aan te moedigen om in zichzelf te geloven, het beste in hen naar boven te halen en genezing te vinden door EOA. Het gaat niet alleen over mode; het is een uitnodiging om problemen te vergeten, het leven te vieren en Gods Koninkrijk te onthullen.",
    
    // Collection & Products
    allProducts: "Alle Producten",
    noProductsFound: "Geen producten gevonden die voldoen aan uw criteria.",
    
    // Hero Section
    eoaLine: "E.O.A LIJN",
    beFirstToExperience: "Wees de eerste om luxe christelijke mode te ervaren",
  },

  sv: {
    // Header & Navigation
    men: "Herr",
    women: "Dam",
    all: "Alla",
    shop: "Butik",
    about: "Om oss",
    searchPlaceholder: "Sök produkter...",
    signIn: "Logga in / Registrera",
    
    // Hero & Main Content
    comingSoon: "KOMMER SNART",
    notifyMe: "MEDDELA MIG",
    learnMore: "LÄR DIG MER",
    welcomeToEOA: "Välkommen till E.O.A Line",
    luxuryChristianFashion: "Lyxig Kristen Mode",
    expressYourFaith: "Uttryck din tro genom stil",
    
    // Collections
    laVeiraCollection: "LA VEIRA KOLLEKTION",
    tumieCollection: "TUMIE KOLLEKTION",
    newArrivals: "Nyheter",
    bestSellers: "Bästsäljare",
    viewAll: "Se Alla",
    jackets: "Jackor",
    tshirts: "T-shirts",
    shorts: "Shorts",
    skirts: "Kjolar",
    pants: "Byxor",
    sets: "Set",
    hoodies: "Hoodies",
    
    // Product Details
    addToCart: "Lägg i Kundvagn",
    addToWishlist: "Lägg till Önskelista",
    removeFromWishlist: "Ta bort från Önskelista",
    size: "Storlek",
    color: "Färg",
    quantity: "Antal",
    inStock: "I Lager",
    outOfStock: "Slutsåld",
    productDetails: "Produktdetaljer",
    sizeGuide: "Storleksguide",
    careInstructions: "Skötselinstruktioner",
    
    // Cart & Checkout
    yourCart: "DIN KUNDVAGN",
    cartEmpty: "Din kundvagn är tom",
    continueShopping: "Fortsätt Handla",
    total: "TOTALT:",
    subtotal: "Delsumma:",
    shipping: "Frakt:",
    tax: "Skatt:",
    secureCheckout: "SÄKER BETALNING",
    freeShipping: "Du har låst upp gratis expressfrakt",
    expressShipping: "Expressfrakt: Gratis",
    youMightAlsoLike: "DU KANSKE OCKSÅ GILLAR",
    proceedToCheckout: "Gå till Kassan",
    
    // Brand Story & Vision
    ourVision: "Vår Vision",
    visionText1: "Med EOA är det du bär mer än kläder—det är den fysiska representationen av Guds altare.",
    visionText2: "Varje plagg är designat som en påminnelse om att Hans närvaro inte är begränsad till en plats, utan rör sig med dig vart du än går. Genom att bära EOA bär du ett synligt uttryck för tro, en förklaring att ditt liv självt är en boning för Gud.",
    visionText3: "Det är mer än stil; det är en helgedom du för in i världen, ett vittnesbörd om att vart du än stegar, Hans närvaro stegar med dig.",
    brandText1: "Fördjupade i EOAs värld, där vår verklighet smälter samman med musik, och varje söm berättar vår historia. Det handlar inte bara om kläder; det är en resa genom våra känslor och upplevelser som människor som har levt livet i alla dess höjder och djup.",
    brandText2: "För oss är mode och musik inte bara ett tyg eller ett ljud; det är en känsla av hopp, en kraft som ger tröst även i de mörkaste tiderna. Från små spelningar med hundra personer till stora scener inför 50 000 åskådare — varje show, varje ton har följt oss genom toppar och dalar.",
    faith: "Tro",
    faithDescription: "Gud har bevarat oss",
    music: "Musik",
    musicDescription: "Vårt mod",
    family: "Familj",
    familyDescription: "Vår grund",
    style: "Stil",
    styleDescription: "Vårt uttryck",
    missionTitle: "Uppmuntra människor att tro på sig själva",
    missionText: "Vårt uppdrag är att uppmuntra människor att tro på sig själva, få fram det bästa i dem och finna helande genom EOA. Det handlar inte bara om mode; det är en inbjudan att glömma bekymmer, fira livet och avslöja Guds rike.",
    
    // Collection & Products
    allProducts: "Alla Produkter",
    noProductsFound: "Inga produkter hittades som matchar dina kriterier.",
    
    // Hero Section
    eoaLine: "E.O.A LINJE",
    beFirstToExperience: "Var först med att uppleva lyxig kristen mode",
  },

  no: {
    // Header & Navigation
    men: "Menn",
    women: "Kvinner",
    all: "Alle",
    shop: "Butikk",
    about: "Om oss",
    searchPlaceholder: "Søk produkter...",
    signIn: "Logg inn / Registrer",
    
    // Hero & Main Content
    comingSoon: "KOMMER SNART",
    notifyMe: "VARSLE MEG",
    learnMore: "LÆR MER",
    welcomeToEOA: "Velkommen til E.O.A Line",
    luxuryChristianFashion: "Luksuriøs Kristen Mote",
    expressYourFaith: "Uttrykk din tro gjennom stil",
    
    // Collections
    laVeiraCollection: "LA VEIRA KOLLEKSJON",
    tumieCollection: "TUMIE KOLLEKSJON",
    newArrivals: "Nyheter",
    bestSellers: "Bestselgere",
    viewAll: "Se Alle",
    jackets: "Jakker",
    tshirts: "T-skjorter",
    shorts: "Shorts",
    skirts: "Skjørt",
    pants: "Bukser",
    sets: "Sett",
    hoodies: "Hettegensere",
    
    // Product Details
    addToCart: "Legg i Handlekurv",
    addToWishlist: "Legg til Ønskeliste",
    removeFromWishlist: "Fjern fra Ønskeliste",
    size: "Størrelse",
    color: "Farge",
    quantity: "Antall",
    inStock: "På Lager",
    outOfStock: "Utsolgt",
    productDetails: "Produktdetaljer",
    sizeGuide: "Størrelsesguide",
    careInstructions: "Pleieinstruksjoner",
    
    // Cart & Checkout
    yourCart: "DIN HANDLEKURV",
    cartEmpty: "Handlekurven din er tom",
    continueShopping: "Fortsett å Handle",
    total: "TOTALT:",
    subtotal: "Delsum:",
    shipping: "Frakt:",
    tax: "Skatt:",
    secureCheckout: "SIKKER BETALING",
    freeShipping: "Du har låst opp gratis ekspressfrakt",
    expressShipping: "Ekspressfrakt: Gratis",
    youMightAlsoLike: "DU LIKER KANSKJE OGSÅ",
    proceedToCheckout: "Gå til Kassen",
    
    // Brand Story & Vision
    ourVision: "Vår Visjon",
    visionText1: "Med EOA er det du bærer mer enn klær—det er den fysiske representasjonen av Guds alter.",
    visionText2: "Hvert plagg er designet som en påminnelse om at Hans tilstedeværelse ikke er begrenset til ett sted, men beveger seg med deg hvor du enn går. Ved å bære EOA bærer du et synlig uttrykk for tro, en erklæring om at ditt liv selv er en bolig for Gud.",
    visionText3: "Det er mer enn stil; det er en helligdom du bringer inn i verden, et vitnesbyrd om at hvor du enn tråkker, Hans tilstedeværelse tråkker med deg.",
    brandText1: "Fordypet i EOAs verden, hvor vår virkelighet smelter sammen med musikk, og hver søm forteller vår historie. Det handler ikke bare om klær; det er en reise gjennom våre følelser og opplevelser som mennesker som har levd livet i alle dets høyder og dybder.",
    brandText2: "For oss er mote og musikk ikke bare et stoff eller en lyd; det er en følelse av håp, en kraft som gir trøst selv i de mørkeste tider. Fra små konserter med hundre mennesker til store scener foran 50 000 tilskuere — hvert show, hver tone har fulgt oss gjennom topper og daler.",
    faith: "Tro",
    faithDescription: "Gud har bevart oss",
    music: "Musikk",
    musicDescription: "Vårt mot",
    family: "Familie",
    familyDescription: "Vårt fundament",
    style: "Stil",
    styleDescription: "Vårt uttrykk",
    missionTitle: "Oppmuntre mennesker til å tro på seg selv",
    missionText: "Vårt oppdrag er å oppmuntre mennesker til å tro på seg selv, få frem det beste i dem og finne helbredelse gjennom EOA. Det handler ikke bare om mote; det er en invitasjon til å glemme bekymringer, feire livet og avsløre Guds rike.",
    
    // Collection & Products
    allProducts: "Alle Produkter",
    noProductsFound: "Ingen produkter funnet som matcher dine kriterier.",
    
    // Hero Section
    eoaLine: "E.O.A LINJE",
    beFirstToExperience: "Vær den første til å oppleve luksuriøs kristen mote",
  },

  da: {
    // Header & Navigation
    men: "Mænd",
    women: "Kvinder",
    all: "Alle",
    shop: "Butik",
    about: "Om os",
    searchPlaceholder: "Søg produkter...",
    signIn: "Log ind / Tilmeld",
    
    // Hero & Main Content
    comingSoon: "KOMMER SNART",
    notifyMe: "GIV MIG BESKED",
    learnMore: "LÆR MERE",
    welcomeToEOA: "Velkommen til E.O.A Line",
    luxuryChristianFashion: "Luksuriøs Kristen Mode",
    expressYourFaith: "Udtryk din tro gennem stil",
    
    // Collections
    laVeiraCollection: "LA VEIRA KOLLEKTION",
    tumieCollection: "TUMIE KOLLEKTION",
    newArrivals: "Nyheder",
    bestSellers: "Bestsellere",
    viewAll: "Se Alle",
    jackets: "Jakker",
    tshirts: "T-shirts",
    shorts: "Shorts",
    skirts: "Nederdele",
    pants: "Bukser",
    sets: "Sæt",
    hoodies: "Hættetrøjer",
    
    // Product Details
    addToCart: "Tilføj til Kurv",
    addToWishlist: "Tilføj til Ønskeliste",
    removeFromWishlist: "Fjern fra Ønskeliste",
    size: "Størrelse",
    color: "Farve",
    quantity: "Antal",
    inStock: "På Lager",
    outOfStock: "Udsolgt",
    productDetails: "Produktdetaljer",
    sizeGuide: "Størrelsesguide",
    careInstructions: "Plejeinstruktioner",
    
    // Cart & Checkout
    yourCart: "DIN KURV",
    cartEmpty: "Din kurv er tom",
    continueShopping: "Fortsæt med at Handle",
    total: "TOTAL:",
    subtotal: "Subtotal:",
    shipping: "Forsendelse:",
    tax: "Skat:",
    secureCheckout: "SIKKER BETALING",
    freeShipping: "Du har låst op for gratis ekspressforsendelse",
    expressShipping: "Ekspressforsendelse: Gratis",
    youMightAlsoLike: "DU KAN OGSÅ LIDE",
    proceedToCheckout: "Gå til Kassen",
    
    // Brand Story & Vision
    ourVision: "Vores Vision",
    visionText1: "Med EOA er det du bærer mere end tøj—det er den fysiske repræsentation af Guds alter.",
    visionText2: "Hvert stykke er designet som en påmindelse om, at Hans tilstedeværelse ikke er begrænset til ét sted, men bevæger sig med dig, hvor du end går. Ved at bære EOA bærer du et synligt udtryk for tro, en erklæring om at dit liv selv er en bolig for Gud.",
    visionText3: "Det er mere end stil; det er en helligdom, du bringer ind i verden, et vidnesbyrd om at hvor du end træder, Hans tilstedeværelse træder med dig.",
    brandText1: "Fordybet i EOAs verden, hvor vores virkelighed smelter sammen med musik, og hver søm fortæller vores historie. Det handler ikke kun om tøj; det er en rejse gennem vores følelser og oplevelser som mennesker, der har levet livet i alle dets op- og nedture.",
    brandText2: "For os er mode og musik ikke bare et stof eller en lyd; det er en følelse af håb, en kraft der giver trøst selv i de mørkeste tider. Fra små koncerter med hundrede mennesker til store scener foran 50.000 tilskuere — hvert show, hver tone har ledsaget os gennem toppe og dale.",
    faith: "Tro",
    faithDescription: "Gud har bevaret os",
    music: "Musik",
    musicDescription: "Vores mod",
    family: "Familie",
    familyDescription: "Vores fundament",
    style: "Stil",
    styleDescription: "Vores udtryk",
    missionTitle: "Opmuntre mennesker til at tro på sig selv",
    missionText: "Vores mission er at opmuntre mennesker til at tro på sig selv, få det bedste frem i dem og finde helbredelse gennem EOA. Det handler ikke kun om mode; det er en invitation til at glemme bekymringer, fejre livet og afsløre Guds rige.",
    
    // Collection & Products
    allProducts: "Alle Produkter",
    noProductsFound: "Ingen produkter fundet, der matcher dine kriterier.",
    
    // Hero Section
    eoaLine: "E.O.A LINJE",
    beFirstToExperience: "Vær den første til at opleve luksuriøs kristen mode",
  },

  fi: {
    // Header & Navigation
    men: "Miehet",
    women: "Naiset",
    all: "Kaikki",
    shop: "Kauppa",
    about: "Tietoa meistä",
    searchPlaceholder: "Etsi tuotteita...",
    signIn: "Kirjaudu / Rekisteröidy",
    
    // Hero & Main Content
    comingSoon: "TULOSSA PIAN",
    notifyMe: "ILMOITA MINULLE",
    learnMore: "LISE LISÄÄ",
    welcomeToEOA: "Tervetuloa E.O.A Lineen",
    luxuryChristianFashion: "Luksus Kristillinen Muoti",
    expressYourFaith: "Ilmaise uskosi tyylin kautta",
    
    // Collections
    laVeiraCollection: "LA VEIRA KOKOELMA",
    tumieCollection: "TUMIE KOKOELMA",
    newArrivals: "Uutuudet",
    bestSellers: "Myydyimmät",
    viewAll: "Näytä Kaikki",
    jackets: "Takit",
    tshirts: "T-paidat",
    shorts: "Shortsit",
    skirts: "Hameet",
    pants: "Housut",
    sets: "Setit",
    hoodies: "Hupparit",
    
    // Product Details
    addToCart: "Lisää Ostoskoriin",
    addToWishlist: "Lisää Toivelistaan",
    removeFromWishlist: "Poista Toivelistasta",
    size: "Koko",
    color: "Väri",
    quantity: "Määrä",
    inStock: "Varastossa",
    outOfStock: "Loppuunmyyty",
    productDetails: "Tuotetiedot",
    sizeGuide: "Kokoopas",
    careInstructions: "Hoito-ohjeet",
    
    // Cart & Checkout
    yourCart: "OSTOSKORISI",
    cartEmpty: "Ostoskorisi on tyhjä",
    continueShopping: "Jatka Ostoksia",
    total: "YHTEENSÄ:",
    subtotal: "Välisumma:",
    shipping: "Toimitus:",
    tax: "Vero:",
    secureCheckout: "TURVALLINEN MAKSU",
    freeShipping: "Olet avannut ilmaisen pikatolimituksen",
    expressShipping: "Pikatoimitus: Ilmainen",
    youMightAlsoLike: "SAATAT MYÖS PITÄÄ",
    proceedToCheckout: "Siirry Kassalle",
    
    // Brand Story & Vision
    ourVision: "Visiomme",
    visionText1: "EOAn kanssa se mitä käytät on enemmän kuin vaatteita—se on Jumalan alttarin fyysinen esitys.",
    visionText2: "Jokainen kappale on suunniteltu muistutukseksi siitä, että Hänen läsnäolonsa ei ole rajoitettu yhteen paikkaan, vaan liikkuu kanssasi minne tahansa menetkin. Käyttämällä EOAa kannat näkyvää uskon ilmaisua, julistusta siitä, että elämäsi itsessään on Jumalan asuinpaikka.",
    visionText3: "Se on enemmän kuin tyyliä; se on pyhäkkö jonka tuot maailmaan, todistus siitä, että minne tahansa astutkin, Hänen läsnäolonsa astuu kanssasi.",
    brandText1: "Uppoutuneena EOAn maailmaan, jossa todellisuutemme sulautuu musiikin kanssa, ja jokainen ommel kertoo tarinamme. Kyse ei ole vain vaatteista; se on matka tunteidemme ja kokemuksiemme läpi ihmisinä, jotka ovat eläneet elämän kaikissa sen korkeuksissa ja syvyyksissä.",
    brandText2: "Meille muoti ja musiikki ei ole vain kangasta tai ääntä; se on toivon tunne, voima joka tarjoaa lohtua jopa pimeimpinä aikoina. Pienistä keikoista sadan ihmisen kanssa suuriin laveihin 50 000 katsojan edessä — jokainen show, jokainen nuotti on seurannut meitä huippujen ja laaksojen läpi.",
    faith: "Usko",
    faithDescription: "Jumala on säilyttänyt meidät",
    music: "Musiikki",
    musicDescription: "Rohkeutemme",
    family: "Perhe",
    familyDescription: "Perustamme",
    style: "Tyyli",
    styleDescription: "Ilmaisumme",
    missionTitle: "Rohkaista ihmisiä uskomaan itseensä",
    missionText: "Tehtävämme on rohkaista ihmisiä uskomaan itseensä, tuoda esiin paras heissä ja löytää parantumista EOAn kautta. Kyse ei ole vain muodista; se on kutsu unohtaa murheet, juhlia elämää ja paljastaa Jumalan valtakunta.",
    
    // Collection & Products
    allProducts: "Kaikki Tuotteet",
    noProductsFound: "Kriteereitäsi vastaavia tuotteita ei löytynyt.",
    
    // Hero Section
    eoaLine: "E.O.A LINJA",
    beFirstToExperience: "Ole ensimmäinen kokemassa luksus kristillistä muotia",
  },

  pl: {
    // Header & Navigation
    men: "Mężczyźni",
    women: "Kobiety",
    all: "Wszystkie",
    shop: "Sklep",
    about: "O nas",
    searchPlaceholder: "Szukaj produktów...",
    signIn: "Zaloguj / Zarejestruj",
    
    // Hero & Main Content
    comingSoon: "WKRÓTCE",
    notifyMe: "POWIADOM MNIE",
    learnMore: "DOWIEDZ SIĘ WIĘCEJ",
    welcomeToEOA: "Witamy w E.O.A Line",
    luxuryChristianFashion: "Luksusowa Moda Chrześcijańska",
    expressYourFaith: "Wyraź swoją wiarę przez styl",
    
    // Collections
    laVeiraCollection: "KOLEKCJA LA VEIRA",
    tumieCollection: "KOLEKCJA TUMIE",
    newArrivals: "Nowości",
    bestSellers: "Bestsellery",
    viewAll: "Zobacz Wszystkie",
    jackets: "Kurtki",
    tshirts: "T-shirty",
    shorts: "Szorty",
    skirts: "Spódnice",
    pants: "Spodnie",
    sets: "Zestawy",
    hoodies: "Bluzy z kapturem",
    
    // Product Details
    addToCart: "Dodaj do Koszyka",
    addToWishlist: "Dodaj do Listy Życzeń",
    removeFromWishlist: "Usuń z Listy Życzeń",
    size: "Rozmiar",
    color: "Kolor",
    quantity: "Ilość",
    inStock: "W magazynie",
    outOfStock: "Wyprzedane",
    productDetails: "Szczegóły Produktu",
    sizeGuide: "Przewodnik Rozmiarów",
    careInstructions: "Instrukcje Pielęgnacji",
    
    // Cart & Checkout
    yourCart: "TWÓJ KOSZYK",
    cartEmpty: "Twój koszyk jest pusty",
    continueShopping: "Kontynuuj Zakupy",
    total: "RAZEM:",
    subtotal: "Suma częściowa:",
    shipping: "Dostawa:",
    tax: "Podatek:",
    secureCheckout: "BEZPIECZNA PŁATNOŚĆ",
    freeShipping: "Odblokowałeś darmową dostawę ekspresową",
    expressShipping: "Dostawa Ekspresowa: Darmowa",
    youMightAlsoLike: "MOŻE CI SIĘ RÓWNIEŻ SPODOBAĆ",
    proceedToCheckout: "Przejdź do Kasy",
    
    // Brand Story & Vision
    ourVision: "Nasza Wizja",
    visionText1: "Z EOA to, co nosisz, to więcej niż ubranie—to fizyczna reprezentacja ołtarza Boga.",
    visionText2: "Każdy element został zaprojektowany jako przypomnienie, że Jego obecność nie jest ograniczona do jednego miejsca, ale porusza się z tobą, gdziekolwiek pójdziesz. Nosząc EOA, niesiesz widoczny wyraz wiary, deklarację, że twoje życie samo w sobie jest mieszkaniem dla Boga.",
    visionText3: "To więcej niż styl; to sanktuarium, które wnosisz do świata, świadectwo, że gdziekolwiek stąpasz, Jego obecność stąpa z tobą.",
    brandText1: "Zanurzeni w świecie EOA, gdzie nasza rzeczywistość łączy się z muzyką, a każdy szew opowiada naszą historię. To nie tylko o ubraniach; to podróż przez nasze emocje i doświadczenia jako ludzi, którzy przeżyli życie we wszystkich jego wzlotach i upadkach.",
    brandText2: "Dla nas moda i muzyka to nie tylko tkanina czy dźwięk; to uczucie nadziei, siła która zapewnia pocieszenie nawet w najciemniejszych czasach. Od małych koncertów ze stu ludźmi po wielkie sceny przed 50 000 widzów — każdy show, każda nuta towarzyszyła nam przez szczyty i doliny.",
    faith: "Wiara",
    faithDescription: "Bóg nas zachował",
    music: "Muzyka",
    musicDescription: "Nasza odwaga",
    family: "Rodzina",
    familyDescription: "Nasz fundament",
    style: "Styl",
    styleDescription: "Nasze wyrażenie",
    missionTitle: "Zachęcanie ludzi do wiary w siebie",
    missionText: "Naszą misją jest zachęcanie ludzi do wiary w siebie, wydobywania z nich tego co najlepsze i znajdowania uzdrowienia przez EOA. To nie tylko o modzie; to zaproszenie do zapomnienia kłopotów, świętowania życia i odsłonięcia Królestwa Bożego.",
    
    // Collection & Products
    allProducts: "Wszystkie Produkty",
    noProductsFound: "Nie znaleziono produktów spełniających twoje kryteria.",
    
    // Hero Section
    eoaLine: "LINIA E.O.A",
    beFirstToExperience: "Bądź pierwszym, który doświadczy luksusowej mody chrześcijańskiej",
  },

  uk: {
    // Header & Navigation
    men: "Чоловіки",
    women: "Жінки",
    all: "Всі",
    shop: "Магазин",
    about: "Про нас",
    searchPlaceholder: "Пошук товарів...",
    signIn: "Увійти / Реєстрація",
    
    // Hero & Main Content
    comingSoon: "НЕЗАБАРОМ",
    notifyMe: "ПОВІДОМИТИ МЕНЕ",
    learnMore: "ДІЗНАТИСЯ БІЛЬШЕ",
    welcomeToEOA: "Ласкаво просимо до E.O.A Line",
    luxuryChristianFashion: "Розкішна Християнська Мода",
    expressYourFaith: "Виражайте свою віру через стиль",
    
    // Collections
    laVeiraCollection: "КОЛЕКЦІЯ LA VEIRA",
    tumieCollection: "КОЛЕКЦІЯ TUMIE",
    newArrivals: "Новинки",
    bestSellers: "Бестселери",
    viewAll: "Переглянути Все",
    jackets: "Куртки",
    tshirts: "Футболки",
    shorts: "Шорти",
    skirts: "Спідниці",
    pants: "Штани",
    sets: "Комплекти",
    hoodies: "Худі",
    
    // Product Details
    addToCart: "Додати в Кошик",
    addToWishlist: "Додати до Бажань",
    removeFromWishlist: "Видалити з Бажань",
    size: "Розмір",
    color: "Колір",
    quantity: "Кількість",
    inStock: "В наявності",
    outOfStock: "Немає в наявності",
    productDetails: "Деталі Товару",
    sizeGuide: "Таблиця Розмірів",
    careInstructions: "Інструкції з Догляду",
    
    // Cart & Checkout
    yourCart: "ВАШ КОШИК",
    cartEmpty: "Ваш кошик порожній",
    continueShopping: "Продовжити Покупки",
    total: "РАЗОМ:",
    subtotal: "Проміжний підсумок:",
    shipping: "Доставка:",
    tax: "Податок:",
    secureCheckout: "БЕЗПЕЧНА ОПЛАТА",
    freeShipping: "Ви отримали безкоштовну експрес-доставку",
    expressShipping: "Експрес-доставка: Безкоштовно",
    youMightAlsoLike: "ВАМ ТАКОЖ МОЖЕ СПОДОБАТИСЯ",
    proceedToCheckout: "Перейти до Оформлення",
    
    // Brand Story & Vision
    ourVision: "Наше Бачення",
    visionText1: "З EOA те, що ви носите, більше ніж одяг—це фізичне представлення вівтаря Бога.",
    visionText2: "Кожна річ створена як нагадування про те, що Його присутність не обмежена одним місцем, а рухається з вами, куди б ви не пішли. Носячи EOA, ви несете видимий вираз віри, заяву про те, що ваше життя саме по собі є оселею для Бога.",
    visionText3: "Це більше ніж стиль; це святилище, яке ви приносите у світ, свідчення того, що куди б ви не ступили, Його присутність крокує з вами.",
    brandText1: "Занурені у світ EOA, де наша реальність зливається з музикою, і кожен шов розповідає нашу історію. Це не просто про одяг; це подорож через наші емоції та переживання як людей, які прожили життя в усіх його злетах і падіннях.",
    brandText2: "Для нас мода і музика - це не просто тканина чи звук; це почуття надії, сила, яка дає втіху навіть у найтемніші часи. Від невеликих концертів зі ста людьми до великих сцен перед 50 000 глядачів — кожне шоу, кожна нота супроводжувала нас через піки і долини.",
    faith: "Віра",
    faithDescription: "Бог зберіг нас",
    music: "Музика",
    musicDescription: "Наша сміливість",
    family: "Сім'я",
    familyDescription: "Наша основа",
    style: "Стиль",
    styleDescription: "Наш вираз",
    missionTitle: "Заохочення людей вірити в себе",
    missionText: "Наша місія - заохочувати людей вірити в себе, розкривати найкраще в них і знаходити зцілення через EOA. Це не просто про моду; це запрошення забути проблеми, святкувати життя і розкрити Царство Боже.",
    
    // Collection & Products
    allProducts: "Всі Товари",
    noProductsFound: "Товари, що відповідають вашим критеріям, не знайдені.",
    
    // Hero Section
    eoaLine: "ЛІНІЯ E.O.A",
    beFirstToExperience: "Будьте першими, хто випробує розкішну християнську моду",
  },
};

interface LocalizationContextType {
  language: string;
  currency: string;
  setLanguage: (lang: string) => void;
  setCurrency: (curr: string) => void;
  t: (key: string) => string;
  formatPrice: (price: number) => string;
  languages: typeof languages;
  currencies: typeof currencies;
  showWelcomeModal: boolean;
  setShowWelcomeModal: (show: boolean) => void;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

export const LocalizationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [currency, setCurrency] = useState('EUR');
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  useEffect(() => {
    // Check if user has already selected preferences
    const savedLanguage = localStorage.getItem('eoa-language');
    const savedCurrency = localStorage.getItem('eoa-currency');
    const hasSeenWelcome = localStorage.getItem('eoa-welcome-seen');

    if (savedLanguage) setLanguage(savedLanguage);
    if (savedCurrency) setCurrency(savedCurrency);
    
    // Show welcome modal if first visit
    if (!hasSeenWelcome) {
      setShowWelcomeModal(true);
    }
  }, []);

  const handleSetLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem('eoa-language', lang);
    
    // Update document language attribute for accessibility
    document.documentElement.lang = lang;
    
    // Update page title based on language
    const titles = {
      en: 'E.O.A Line - Luxury Christian Fashion',
      de: 'E.O.A Line - Luxuriöse Christliche Mode',
      fr: 'E.O.A Line - Mode Chrétienne de Luxe',
      es: 'E.O.A Line - Moda Cristiana de Lujo',
      it: 'E.O.A Line - Moda Cristiana di Lusso',
      pt: 'E.O.A Line - Moda Cristã de Luxo',
      ru: 'E.O.A Line - Роскошная Христианская Мода',
      zh: 'E.O.A Line - 奢华基督教时尚',
      ja: 'E.O.A Line - ラグジュアリークリスチャンファッション',
      ko: 'E.O.A Line - 럭셔리 크리스천 패션',
      ar: 'E.O.A Line - أزياء مسيحية فاخرة',
      hi: 'E.O.A Line - लक्जरी क्रिश्चियन फैशन',
      tr: 'E.O.A Line - Lüks Hristiyan Modası',
      nl: 'E.O.A Line - Luxe Christelijke Mode',
      sv: 'E.O.A Line - Lyxig Kristen Mode',
      no: 'E.O.A Line - Luksuriøs Kristen Mote',
      da: 'E.O.A Line - Luksuriøs Kristen Mode',
      fi: 'E.O.A Line - Luksus Kristillinen Muoti',
      pl: 'E.O.A Line - Luksusowa Moda Chrześcijańska',
      uk: 'E.O.A Line - Розкішна Християнська Мода',
    };
    document.title = titles[lang as keyof typeof titles] || titles.en;
  };

  const handleSetCurrency = (curr: string) => {
    setCurrency(curr);
    localStorage.setItem('eoa-currency', curr);
  };

  const t = (key: string): string => {
    const currentTranslations = translations[language as keyof typeof translations] || translations.en;
    return currentTranslations[key as keyof typeof currentTranslations] || key;
  };

  const formatPrice = (price: number): string => {
    const currencyData = currencies.find(c => c[0] === currency);
    const symbol = currencyData?.[2] || '€';
    
    // Simple conversion rates (in real app, use live rates)
    const rates: { [key: string]: number } = {
      USD: 1.1,
      EUR: 1,
      GBP: 0.85,
      JPY: 130,
      AUD: 1.5,
      CAD: 1.4,
      CHF: 1.05,
      CNY: 7.5,
      SEK: 10.5,
      NOK: 10.8,
      DKK: 7.4,
      PLN: 4.3,
      RUB: 85,
      TRY: 18,
      INR: 82,
      BRL: 5.5,
      UAH: 37,
    };

    const convertedPrice = price * (rates[currency] || 1);
    
    // Get locale based on language for proper number formatting
    const locales = {
      en: 'en-US',
      de: 'de-DE',
      fr: 'fr-FR',
      es: 'es-ES',
      it: 'it-IT',
      pt: 'pt-PT',
      ru: 'ru-RU',
      zh: 'zh-CN',
      ja: 'ja-JP',
      ko: 'ko-KR',
      ar: 'ar-SA',
      hi: 'hi-IN',
      tr: 'tr-TR',
      nl: 'nl-NL',
      sv: 'sv-SE',
      no: 'no-NO',
      da: 'da-DK',
      fi: 'fi-FI',
      pl: 'pl-PL',
      uk: 'uk-UA',
    };
    
    const locale = locales[language as keyof typeof locales] || 'en-US';
    
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
    }).format(convertedPrice);
  };

  return (
    <LocalizationContext.Provider value={{
      language,
      currency,
      setLanguage: handleSetLanguage,
      setCurrency: handleSetCurrency,
      t,
      formatPrice,
      languages,
      currencies,
      showWelcomeModal,
      setShowWelcomeModal
    }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (context === undefined) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};