export type TranslationKeys = {
    designed: string;
    shipping: string;
    reviews: string;
    swatches: string;
    financing: string;
    support: string;
    contact: string;
    locations: string;
    carouselTitle: string;
    carouselTitleMobile: string;
    favorites: string;
    noFavoritesMessage: string;
    favoritesTitle: string;
    seating: string;
    tables: string;
    storage: string;
    accessories: string;
    rugs: string;
    outdoor: string;
    signupPrompt: string;
    signupPlaceholder: string;
    signupButton: string;
    Shop: string;
    Explore: string;
    Company: string;
    Support: string;
    FollowUs: string;
    copyright: string;
    privacy: string;
    terms: string;
};

export type SupportedLanguages = "EN" | "FR";

const translations: Record<SupportedLanguages, TranslationKeys> = {
    EN: {
        // TopNavBar
        designed: "Designed in North America",
        shipping: "Fast & Free Shipping",
        reviews: "Reviews",
        swatches: "Free Swatches",
        financing: "Financing",
        support: "Support",
        contact: "Contact Us",
        locations: "Our Locations",

        //header
        seating: "Seating",
        tables: "Tables",
        storage: "Storage",
        accessories: "Accessories",
        rugs: "Washable Rugs",
        outdoor: "Outdoor",

        // Carousel
        carouselTitle: "A day in the life",
        carouselTitleMobile: "A day in the life...",
        favorites: "❤️ Favorites",
        noFavoritesMessage: "You have not saved any videos yet. Tap the ❤️ to save your favorites!",
        favoritesTitle: "Your Favorites",

        // Signup Section
        signupPrompt: "Join the Cozey Family to stay ahead on product launches and exclusive content.",
        signupPlaceholder: "Email",
        signupButton: "Sign up",

        //footer 
        Shop: "Shop",
        Explore: "Explore",
        Company: "Company",
        Support: "Support",
        FollowUs: "Follow Us",
        copyright: "© 2024 Cozey Inc. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Use",
    },

    FR: {
        // TopNavBar
        designed: "Conçu en Amérique du Nord",
        shipping: "Livraison rapide et gratuite",
        reviews: "Avis",
        swatches: "Échantillons gratuits",
        financing: "Financement",
        support: "Assistance",
        contact: "Nous contacter",
        locations: "Nos emplacements",

        //header
        seating: "Canapés",
        tables: "Tables",
        storage: "Rangement",
        accessories: "Accessoires",
        rugs: "Tapis lavables",
        outdoor: "Extérieur",

        // Carousel
        carouselTitle: "Une journée dans la vie",
        carouselTitleMobile: "Une journée dans la vie...",
        favorites: "❤️ Favoris",
        noFavoritesMessage: "Vous n'avez enregistré aucune vidéo. Touchez ❤️ pour enregistrer vos favoris !",
        favoritesTitle: "Vos Favoris",

        // Signup Section
        signupPrompt: "Rejoignez la famille Cozey pour rester informé des lancements de produits et du contenu exclusif.",
        signupPlaceholder: "E-mail",
        signupButton: "S'inscrire",

        //footer
        Shop: "Boutique",
        Explore: "Explorer",
        Company: "Entreprise",
        Support: "Soutien",
        FollowUs: "Suivez-nous",
        copyright: "© 2024 Cozey Inc. Tous droits réservés.",
        privacy: "Politique de confidentialité",
        terms: "Conditions d'utilisation",
    },
};

export default translations;
