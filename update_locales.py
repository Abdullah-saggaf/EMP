import json
import os

# Base directory for messages
MSG_DIR = r"C:\Users\sagga\OneDrive\Desktop\fisal\properties-empireamb\messages"

# ─── TRANSLATION DICTIONARIES ───

en_updates = {
    "mission": {
        "sectionLabel": "Our Mission Since 2018",
        "headline": "Elevating Real Estate Standards to <highlight>Unreachable</highlight> Levels.",
        "body1": "Our story began in 2018 with a clear goal: to move beyond the limitations of generic agencies and create a high-authority advisory hub.",
        "body2": "We connect international capital with premium investment opportunities, creating value based on deep market analysis and long-term strategic thinking.",
        "stats": {
            "founded": "Founded",
            "portfolio": "Portfolio Value",
            "languages": "Global Languages",
            "divisions": "Core Divisions"
        }
    },
    "featuredProperties": {
        "sectionLabel": "Premium Collection",
        "headline": "Featured <highlight>Properties</highlight>",
        "subtitle": "Exclusive access to tier-1 international investments.",
        "cta": "View All Properties"
    },
    "academyCta": {
        "sectionLabel": "Educational Academy",
        "headline": "Master the <highlight>Premium</highlight> Market.",
        "subtitle": "Join our high-performance training for Sales, Negotiations, and Lead Generation in the international real estate corridor.",
        "viewModules": "View All Modules",
        "aboutUs": "About AMP Empire"
    },
    "hero": {
        "badge": "Est. 2018 Warsaw Global HQ",
        "portfolioCta": "View Portfolio"
    },
    "properties": {
        "client": {
            "searchPlaceholder": "Search by city, country, type, or property name…",
            "filterLabel": "Filter",
            "allCountries": "All Countries",
            "allTypes": "All Property Types",
            "sort": {
                "newest": "Newest First",
                "oldest": "Oldest First",
                "priceDesc": "Price: High to Low",
                "priceAsc": "Price: Low to High"
            },
            "clearBtn": "Clear",
            "resultsFound": "{count} properties found",
            "resultFound": "{count} property found",
            "resultsFor": "Results for \"{query}\"",
            "clearAllFilters": "Clear All Filters"
        }
    },
    "propertyDetails": {
        "recentlyListed": "Recently Listed",
        "listedBuilt": "Listed/Built {year}",
        "save": "Save",
        "share": "Share",
        "sidebarTitle": "AMP Empire",
        "sidebarDesc": "Premium Real Estate Advisory & Investment Corridors. Contact us to learn more about this exclusive property.",
        "whatsappBtn": "Contact on WhatsApp",
        "featuresGroups": {
            "climate": "Climate & Smart Home",
            "leisure": "Leisure & Wellness",
            "security": "Building & Security",
            "kitchen": "Kitchen & Interior",
            "outdoor": "Outdoors & Views",
            "parking": "Parking & Facilities",
            "other": "Other Features"
        }
    },
    "about": {
        "heroWord1": "AMP",
        "heroWord2": "Empire",
        "pillars": {
            "sectionLabel": "Who We Are",
            "p1": { "title": "Institutional Foundation", "text": "Founded in Warsaw, Poland, AMP Empire operates as a registered institutional hub bridging capital across European and Middle Eastern markets." },
            "p2": { "title": "Mission", "text": "To elevate real estate service standards to an unreachable level — moving beyond generic agency limitations to high-authority advisory." },
            "p3": { "title": "Global Reach", "text": "Operating across multiple international capital corridors, our advisory network spans 6 language markets and premium tier-1 locations." },
            "p4": { "title": "The Team", "text": "Composed of seasoned advisors, certified brokers, and trained negotiators, our team executes with institutional precision." }
        },
        "timeline": {
            "sectionLabel": "Our Journey",
            "event1": "AMP Empire founded in Warsaw, Poland",
            "event2": "Expanded into Middle Eastern real estate corridors",
            "event3": "Launched Academic Division with international curriculum",
            "event4": "Portfolio surpasses €2B in managed assets",
            "event5": "6-language digital platform launched globally"
        },
        "legal": {
            "sectionLabel": "Legal Registry",
            "company": "AMP EMPIRE ALEKSANDRA BRZEZIŃSKA",
            "address": "ul. Dzielna 11a lok. 28, 01-023 Warszawa, Poland",
            "registry": "Founded 2018 · NIP: 9541283669 · REGON: 273474870",
            "cta": "Get in Touch"
        },
        "quote": {
            "author": "AMP Empire — Warsaw HQ"
        }
    },
    "services": {
        "heroWord1": "Professional",
        "heroWord2": "Sectors",
        "ctas": {
            "explore": "Explore Sector",
            "advisory": "View Advisory",
            "manage": "Manage Assets",
            "request": "Request Advisory",
            "exploreLink": "Explore"
        }
    },
    "courses": {
        "heroWord1": "Expert",
        "heroWord2": "Training",
        "heroWord3": "Modules",
        "highlights": {
            "h1": "Expert-led sessions",
            "h2": "Real-world simulations",
            "h3": "International market focus",
            "h4": "Flexible online format",
            "h5": "Multilingual support",
            "h6": "Certificate upon completion"
        },
        "enroll": {
            "sectionLabel": "Enroll Now",
            "headline": "Start Your Training Journey",
            "subtitle": "Join the elite circle of real estate professionals mastering the global capital corridors.",
            "cta": "Register Interest"
        }
    },
    "contact": {
        "heroSubtitle": "Leading international capital corridors through institutional precision.",
        "info": {
            "title": "Institutional Foundation",
            "legalNameLabel": "Full Legal Name",
            "hqLabel": "Warsaw Headquarters",
            "emailLabel": "Direct Inquiries",
            "phoneLabel": "Phone Line",
            "nipLabel": "Tax ID (NIP)",
            "regonLabel": "Registry (REGON)"
        },
        "form": {
            "title": "Lead Capture Form",
            "subtitle": "Connect with our strategic advisors today.",
            "successTitle": "Request Received",
            "successDesc": "An institutional advisor will contact you shortly.",
            "sendAnother": "Send another request",
            "labels": {
                "name": "Full Name",
                "email": "Email Address",
                "sector": "Sector Interests",
                "message": "Message / Inquiry"
            },
            "placeholders": {
                "name": "Jane Doe",
                "email": "jane@example.com",
                "message": "Describe your goals..."
            },
            "options": {
                "realEstate": "Real Estate & Property Management",
                "consulting": "Strategic Advisory & Consulting",
                "hospitality": "Hospitality & Lifestyle Assets",
                "academy": "Educational Academy"
            },
            "submit": "Submit Request",
            "processing": "Processing..."
        }
    }
}

pl_updates = {
    "mission": {
        "sectionLabel": "Nasza Misja od 2018",
        "headline": "Podnosimy standardy nieruchomości do <highlight>nieosiągalnych</highlight> poziomów.",
        "body1": "Nasza historia rozpoczęła się w 2018 roku od jasnego celu: wyjść poza ograniczenia zwykłych agencji i stworzyć autorytatywne centrum doradztwa.",
        "body2": "Łączymy kapitał międzynarodowy z inwestycjami premium, tworząc wartość opartą na głębokiej analizie i długoterminowym myśleniu strategicznym.",
        "stats": {"founded": "Rok Założenia", "portfolio": "Wartość Portfela", "languages": "Języki Globalne", "divisions": "Dywizje Główne"}
    },
    "featuredProperties": {
        "sectionLabel": "Kolekcja Premium",
        "headline": "Wyróżnione <highlight>Nieruchomości</highlight>",
        "subtitle": "Ekskluzywny dostęp do międzynarodowych inwestycji najwyższej klasy.",
        "cta": "Zobacz Wszystkie"
    },
    "academyCta": {
        "sectionLabel": "Akademia Edukacyjna",
        "headline": "Opanuj Rynek <highlight>Premium</highlight>.",
        "subtitle": "Dołącz do naszego szkolenia o wysokiej wydajności z zakresu Sprzedaży, Negocjacji i Generowania Leadów w międzynarodowym korytarzu nieruchomości.",
        "viewModules": "Zobacz Wszystkie Moduły",
        "aboutUs": "O AMP Empire"
    },
    "hero": {
        "badge": "Zał. 2018 Globalna Centrala w Warszawie",
        "portfolioCta": "Zobacz Portfolio"
    },
    "properties": {
        "client": {
            "searchPlaceholder": "Szukaj po mieście, kraju, typie lub nazwie...",
            "filterLabel": "Filtruj",
            "allCountries": "Wszystkie Kraje",
            "allTypes": "Wszystkie Typy",
            "sort": {
                "newest": "Najnowsze",
                "oldest": "Najstarsze",
                "priceDesc": "Cena: od najwyższej",
                "priceAsc": "Cena: od najniższej"
            },
            "clearBtn": "Wyczyść",
            "resultsFound": "Znaleziono {count} nieruchomości",
            "resultFound": "Znaleziono {count} nieruchomość",
            "resultsFor": "Wyniki dla \"{query}\"",
            "clearAllFilters": "Wyczyść Filtry"
        }
    },
    "propertyDetails": {
        "recentlyListed": "Ostatnio Dodane",
        "listedBuilt": "Dodano/Zbudowano {year}",
        "save": "Zapisz",
        "share": "Udostępnij",
        "sidebarTitle": "AMP Empire",
        "sidebarDesc": "Doradztwo Premium i Korytarze Inwestycyjne. Skontaktuj się z nami, aby dowiedzieć się więcej o tej ekskluzywnej ofercie.",
        "whatsappBtn": "Kontakt przez WhatsApp",
        "featuresGroups": {
            "climate": "Klimatyzacja i Smart Home",
            "leisure": "Relaks i Wellness",
            "security": "Bezpieczeństwo i Budynek",
            "kitchen": "Kuchnia i Wnętrze",
            "outdoor": "Na Zewnątrz i Widoki",
            "parking": "Parking i Udogodnienia",
            "other": "Inne Udogodnienia"
        }
    },
    "about": {
        "heroWord1": "AMP",
        "heroWord2": "Empire",
        "pillars": {
            "sectionLabel": "Kim Jesteśmy",
            "p1": { "title": "Fundament Instytucjonalny", "text": "Firma AMP Empire założona w Warszawie pełni funkcję zarejestrowanego ośrodka instytucjonalnego, łączącego kapitał pomiędzy rynkami Europy i Bliskiego Wschodu." },
            "p2": { "title": "Misja", "text": "Podniesienie standardów usług na rynku nieruchomości do nieosiągalnego poziomu – przechodząc od ograniczeń tradycyjnych agencji do doradztwa o najwyższym autorytecie." },
            "p3": { "title": "Globalny Zasięg", "text": "Działając w obrębie międzynarodowych korytarzy kapitałowych, nasza sieć doradcza obejmuje 6 rynków językowych oraz najbardziej prestiżowe lokalizacje na świecie." },
            "p4": { "title": "Zespół", "text": "Złożony z doświadczonych doradców, licencjonowanych pośredników i certyfikowanych negocjatorów, nasz zespół działa z niezwykłą instytucjonalną precyzją." }
        },
        "timeline": {
            "sectionLabel": "Nasza Droga",
            "event1": "Założenie AMP Empire w Warszawie",
            "event2": "Ekspansja na rynki nieruchomości Bliskiego Wschodu",
            "event3": "Uruchomienie Dywizji Akademickiej z międzynarodowym programem",
            "event4": "Wartość zarządzanego portfela przekracza 2 miliardy EUR",
            "event5": "Globalne wdrożenie platformy cyfrowej w 6 językach"
        },
        "legal": {
            "sectionLabel": "Rejestr Prawny",
            "company": "AMP EMPIRE ALEKSANDRA BRZEZIŃSKA",
            "address": "ul. Dzielna 11a lok. 28, 01-023 Warszawa, Polska",
            "registry": "Zał. 2018 · NIP: 9541283669 · REGON: 273474870",
            "cta": "Skontaktuj Się"
        },
        "quote": {
            "author": "AMP Empire — Centrala Warszawa"
        }
    },
    "services": {
        "heroWord1": "Sektory",
        "heroWord2": "Profesjonalne",
        "ctas": {
            "explore": "Eksploruj Sektor",
            "advisory": "Zobacz Doradztwo",
            "manage": "Zarządzaj Aktywami",
            "request": "Zapytaj o Doradztwo",
            "exploreLink": "Eksploruj"
        }
    },
    "courses": {
        "heroWord1": "Eksperckie",
        "heroWord2": "Szkolenia",
        "heroWord3": "Muduły",
        "highlights": {
            "h1": "Sesje pod okiem ekspertów",
            "h2": "Symulacje rzeczywistych sytuacji",
            "h3": "Skupienie na rynkach dyskrecjonalnych",
            "h4": "Elastyczny format online",
            "h5": "Wsparcie wielojęzyczne",
            "h6": "Certyfikat po ukończeniu"
        },
        "enroll": {
            "sectionLabel": "Zapisz Się",
            "headline": "Rozpocznij Swoją Przygodę ze Szkoleniach",
            "subtitle": "Dołącz do elitarnej grupy profesjonalistów na rynku nieruchomości.",
            "cta": "Zarejestruj Zainteresowanie"
        }
    },
    "contact": {
        "heroSubtitle": "Prowadzimy międzynarodowe korytarze kapitałowe z instytucjonalną precyzją.",
        "info": {
            "title": "Fundament Instytucjonalny",
            "legalNameLabel": "Pełna Nazwa Prawna",
            "hqLabel": "Centrala Warszawa",
            "emailLabel": "Zastrzeżenia Bezpośrednie",
            "phoneLabel": "Linia Telefoniczna",
            "nipLabel": "NIP",
            "regonLabel": "REGON"
        },
        "form": {
            "title": "Formularz Kontaktowy",
            "subtitle": "Porozmawiaj z naszymi doradcami już dziś.",
            "successTitle": "Zapytanie Otrzymane",
            "successDesc": "Nasz doradca skontaktuje się z Tobą wkrótce.",
            "sendAnother": "Wyślij kolejne zapytanie",
            "labels": {
                "name": "Imię i Nazwisko",
                "email": "Adres Email",
                "sector": "Zainteresowanie Sektorem",
                "message": "Wiadomość / Zapytanie"
            },
            "placeholders": {
                "name": "Jan Kowalski",
                "email": "jan@example.com",
                "message": "Opisz swoje cele..."
            },
            "options": {
                "realEstate": "Nieruchomości i Zarządzanie Aktywami",
                "consulting": "Doradztwo Strategiczne",
                "hospitality": "Hotelarze i Aktywa Lifestyle",
                "academy": "Akademia Edukacyjna"
            },
            "submit": "Wyślij Zapytanie",
            "processing": "Wysyłanie..."
        }
    }
}

ar_updates = {
    "mission": {
        "sectionLabel": "مهمتنا منذ 2018",
        "headline": "نرفع معايير العقارات إلى مستويات <highlight>استثنائية</highlight>.",
        "body1": "بدأت قصتنا في عام 2018 بهدف واضح: تجاوز قيود الوكالات العادية وإنشاء مركز استشاري ذو موثوقية عالية.",
        "body2": "نحن نربط رأس المال الدولي بفرص استثمارية فاخرة، ونصنع القيمة بناءً على التحليل العميق للسوق والتفكير الاستراتيجي طويل المدى.",
        "stats": {"founded": "تاريخ التأسيس", "portfolio": "قيمة المحفظة", "languages": "اللغات العالمية", "divisions": "الأقسام الأساسية"}
    },
    "featuredProperties": {
        "sectionLabel": "التشكيلة الفاخرة",
        "headline": "عقارات <highlight>مميزة</highlight>",
        "subtitle": "دخول حصري إلى استثمارات دولية من الدرجة الأولى.",
        "cta": "شاهد كل العقارات"
    },
    "academyCta": {
        "sectionLabel": "الأكاديمية التعليمية",
        "headline": "احتراف سوق <highlight>العقارات الفاخرة</highlight>.",
        "subtitle": "انضم إلى برامجنا التدريبية عالية الأداء في المبيعات، التفاوض، وتوليد العملاء في سوق العقارات الدولي.",
        "viewModules": "شاهد كل الوحدات",
        "aboutUs": "عن AMP Empire"
    },
    "hero": {
        "badge": "تأسست في 2018، مقر وارسو",
        "portfolioCta": "شاهد المحفظة"
    },
    "properties": {
        "client": {
            "searchPlaceholder": "ابحث بالمدينة، الدولة، النوع أو اسم العقار...",
            "filterLabel": "تصفية",
            "allCountries": "كل الدول",
            "allTypes": "كل الأنواع",
            "sort": {
                "newest": "الأحدث أولاً",
                "oldest": "الأقدم أولاً",
                "priceDesc": "السعر: من الأعلى للأقل",
                "priceAsc": "السعر: من الأقل للأعلى"
            },
            "clearBtn": "مسح",
            "resultsFound": "وجدنا {count} عقار",
            "resultFound": "وجدنا {count} عقار",
            "resultsFor": "نتائج \"{query}\"",
            "clearAllFilters": "مسح كل الفلاتر"
        }
    },
    "propertyDetails": {
        "recentlyListed": "أُضيف حديثاً",
        "listedBuilt": "أُضيف/بُني {year}",
        "save": "حفظ",
        "share": "مشاركة",
        "sidebarTitle": "AMP Empire",
        "sidebarDesc": "استشارات العقارات الفاخرة وممرات الاستثمار. اتصل بنا لمعرفة المزيد عن هذا العقار الحصري.",
        "whatsappBtn": "تواصل عبر واتساب",
        "featuresGroups": {
            "climate": "المناخ والمنازل الذكية",
            "leisure": "الاسترخاء والصحة",
            "security": "البناء والأمان",
            "kitchen": "المطبخ والديكور الداخلي",
            "outdoor": "الخارج والإطلالات",
            "parking": "مواقف السيارات والمرافق",
            "other": "ميزات أخرى"
        }
    },
    "about": {
        "heroWord1": "AMP",
        "heroWord2": "Empire",
        "pillars": {
            "sectionLabel": "من نحن",
            "p1": { "title": "أساس مؤسسي", "text": "تأسست AMP Empire في وارسو (بولندا)، وتعمل كمركز مؤسسي مسجل يربط رأس المال عبر الأسواق الأوروبية والشرق أوسطية." },
            "p2": { "title": "المهمة", "text": "تطوير معايير الخدمات العقارية لتصل إلى مستوى لا يمكن مضاهاته — وتخطي القيود التقليدية عبر تقديم استشارات ذات سلطة عالية." },
            "p3": { "title": "الوصول العالمي", "text": "نعمل عبر ممرات رأس مال دولية متعددة، وتمتد شبكتنا الاستشارية لتشمل 6 أسواق لغوية ومواقع من الدرجة الأولى (Tier-1)." },
            "p4": { "title": "الفريق", "text": "يتكون فريقنا من مستشارين متمرسين، ووسطاء معتمدين، ومفاوضين مدربين، حيث يعتمد أداؤهم على الدقة المؤسسية." }
        },
        "timeline": {
            "sectionLabel": "مسيرتنا",
            "event1": "تأسيس AMP Empire في وارسو، بولندا",
            "event2": "التوسع في ممرات العقارات في الشرق الأوسط",
            "event3": "إطلاق القسم الأكاديمي بمنهاج تعليمي دولي",
            "event4": "تجاوزت قيمة المحفظة المُدارة 2 مليار يورو",
            "event5": "إطلاق منصة رقمية عالمية تدعم 6 لغات"
        },
        "legal": {
            "sectionLabel": "السجل القانوني",
            "company": "AMP EMPIRE ALEKSANDRA BRZEZIŃSKA",
            "address": "ul. Dzielna 11a lok. 28, 01-023 Warszawa, Poland",
            "registry": "تأسست 2018 · NIP: 9541283669 · REGON: 273474870",
            "cta": "تواصل معنا"
        },
        "quote": {
            "author": "AMP Empire — المقر الرئيسي (وارسو)"
        }
    },
    "services": {
        "heroWord1": "القطاعات",
        "heroWord2": "المهنية",
        "ctas": {
            "explore": "اكتشف القطاع",
            "advisory": "عرض الاستشارات",
            "manage": "إدارة الأصول",
            "request": "طلب استشارة",
            "exploreLink": "اكتشف"
        }
    },
    "courses": {
        "heroWord1": "وحدات",
        "heroWord2": "التدريب",
        "heroWord3": "الاحترافية",
        "highlights": {
            "h1": "جلسات بقيادة خبراء",
            "h2": "محاكاة واقعية محترفة",
            "h3": "التركيز على السوق الدولي",
            "h4": "نظام أونلاين مرن",
            "h5": "دعم بلغات متعددة",
            "h6": "شهادة بعد استكمال الدورة"
        },
        "enroll": {
            "sectionLabel": "سجّل الآن",
            "headline": "ابدأ رحلة تدريبك",
            "subtitle": "انضم إلى دائرة النخبة لتصبح خبيراً دولياً في العقارات.",
            "cta": "سجل اهتمامك"
        }
    },
    "contact": {
        "heroSubtitle": "نوجه مسارات رأس المال الدولي بدقة مؤسسية.",
        "info": {
            "title": "الأساس المؤسسي",
            "legalNameLabel": "الاسم القانوني الكامل",
            "hqLabel": "المقر الرئيسي في وارسو",
            "emailLabel": "الاستفسارات المباشرة",
            "phoneLabel": "خط الهاتف",
            "nipLabel": "رقم التعريف الضريبي (NIP)",
            "regonLabel": "السجل (REGON)"
        },
        "form": {
            "title": "نموذج جمع البيانات",
            "subtitle": "أخبرنا باحتياجاتك اليوم.",
            "successTitle": "تم استلام الطلب",
            "successDesc": "سيتصل بك مستشارنا عبر الهاتف / البريد الإلكتروني قريباً.",
            "sendAnother": "أرسل طلب آخر",
            "labels": {
                "name": "الاسم الكامل",
                "email": "البريد الإلكتروني",
                "sector": "اهتمامك بالقطاع",
                "message": "الرسالة / الاستفسار"
            },
            "placeholders": {
                "name": "الاسم...",
                "email": "البريد...",
                "message": "صف أهدافك..."
            },
            "options": {
                "realEstate": "العقارات وإدارة الأملاك",
                "consulting": "الاستشارات الاستراتيجية",
                "hospitality": "الضيافة والأصول",
                "academy": "الأكاديمية التعليمية"
            },
            "submit": "إرسال الطلب",
            "processing": "جاري الإرسال..."
        }
    }
}

de_updates = {
    "mission": {
        "sectionLabel": "Unsere Mission seit 2018",
        "headline": "Wir heben Immobilienstandards auf <highlight>unerreichbare</highlight> Niveaus.",
        "body1": "Unsere Geschichte begann 2018 mit einem klaren Ziel: Die Grenzen herkömmlicher Agenturen zu überschreiten und ein beratendes Zentrum von hoher Autorität zu schaffen.",
        "body2": "Wir verbinden internationales Kapital mit erstklassigen Investitionsmöglichkeiten und schaffen Werte, die auf fundierten Marktanalysen und langfristigem strategischem Denken basieren.",
        "stats": {"founded": "Gegründet", "portfolio": "Portfoliowert", "languages": "Globale Sprachen", "divisions": "Kerndivisionen"}
    },
    "featuredProperties": {
        "sectionLabel": "Premium-Kollektion",
        "headline": "Ausgewählte <highlight>Immobilien</highlight>",
        "subtitle": "Exklusiver Zugang zu internationalen erstklassigen Investitionen.",
        "cta": "Alle Immobilien ansehen"
    },
    "academyCta": {
        "sectionLabel": "Bildungsakademie",
        "headline": "Meistern Sie den <highlight>Premium-Sektor</highlight>.",
        "subtitle": "Nehmen Sie an unserem hochleistungsfähigen Training für Vertrieb, Verhandlungen und Lead-Generierung in der internationalen Immobilienwirtschaft teil.",
        "viewModules": "Alle Module ansehen",
        "aboutUs": "Über AMP Empire"
    },
    "hero": {
        "badge": "Gegr. 2018, Globales HQ in Warschau",
        "portfolioCta": "Portfolio ansehen"
    },
    "properties": {
        "client": {
            "searchPlaceholder": "Suchen Sie nach Stadt, Land, Typ oder Name...",
            "filterLabel": "Filtern",
            "allCountries": "Alle Länder",
            "allTypes": "Alle Typen",
            "sort": {
                "newest": "Neueste",
                "oldest": "Älteste",
                "priceDesc": "Preis: Absteigend",
                "priceAsc": "Preis: Aufsteigend"
            },
            "clearBtn": "Löschen",
            "resultsFound": "{count} Immobilien gefunden",
            "resultFound": "{count} Immobilie gefunden",
            "resultsFor": "Ergebnisse für \"{query}\"",
            "clearAllFilters": "Alle Filter löschen"
        }
    },
    "propertyDetails": {
        "recentlyListed": "Neu gelistet",
        "listedBuilt": "Gelistet/Gebaut {year}",
        "save": "Speichern",
        "share": "Teilen",
        "sidebarTitle": "AMP Empire",
        "sidebarDesc": "Premium-Immobilienberatung. Kontaktieren Sie uns für Details zu dieser exklusiven Immobilie.",
        "whatsappBtn": "Auf WhatsApp kontaktieren",
        "featuresGroups": {
            "climate": "Klima & Smart Home",
            "leisure": "Freizeit & Wellness",
            "security": "Sicherheit & Gebäude",
            "kitchen": "Küche & Innenausstattung",
            "outdoor": "Außenbereich & Aussicht",
            "parking": "Parken & Einrichtungen",
            "other": "Sonstige Merkmale"
        }
    },
    "about": {
        "heroWord1": "AMP",
        "heroWord2": "Empire",
        "pillars": {
            "sectionLabel": "Wer wir sind",
            "p1": { "title": "Institutionelles Fundament", "text": "AMP Empire wurde in Warschau gegründet und fungiert als registriertes institutionelles Zentrum..." },
            "p2": { "title": "Mission", "text": "Standards in der Immobilienbranche auf ein unerreichbares Niveau zu heben..." },
            "p3": { "title": "Globale Reichweite", "text": "Unser Netzwerk agiert entlang zahlreicher internationaler Kapitalströme..." },
            "p4": { "title": "Das Team", "text": "Bestehend aus erfahrenen Beratern, Prüfern und verifizierten Experten." }
        },
        "timeline": {
            "sectionLabel": "Die Meilensteine",
            "event1": "Gründung von AMP Empire in Warschau",
            "event2": "Expansion in den Immobilienmarkt des Nahen Ostens",
            "event3": "Start der akademischen Division mit internationalem Programm",
            "event4": "Verwaltetes Portfolio überschreitet 2 Mrd. €",
            "event5": "Digitale Plattform in 6 Sprachen weltweit gelauncht"
        },
        "legal": {
            "sectionLabel": "Rechtsregister",
            "company": "AMP EMPIRE ALEKSANDRA BRZEZIŃSKA",
            "address": "ul. Dzielna 11a lok. 28, 01-023 Warschau, Polen",
            "registry": "Gegründet 2018 · NIP: 9541283669 · REGON: 273474870",
            "cta": "Kontaktieren"
        },
        "quote": {
            "author": "AMP Empire — Warschau HQ"
        }
    },
    "services": {
        "heroWord1": "Professionelle",
        "heroWord2": "Sektoren",
        "ctas": {
            "explore": "Sektor Entdecken",
            "advisory": "Beratung Anzeigen",
            "manage": "Vermögensverwaltung",
            "request": "Beratung anfragen",
            "exploreLink": "Entdecken"
        }
    },
    "courses": {
        "heroWord1": "Experten",
        "heroWord2": "Trainings",
        "heroWord3": "Module",
        "highlights": {
            "h1": "Von Experten geleitete Sitzungen",
            "h2": "Simulationen aus der realen Welt",
            "h3": "Fokus auf internationale Märkte",
            "h4": "Flexibles Online-Format",
            "h5": "Mehrsprachiger Support",
            "h6": "Zertifikat nach Abschluss"
        },
        "enroll": {
            "sectionLabel": "Jetzt Einschreiben",
            "headline": "Starten Sie Ihr Training",
            "subtitle": "Treten Sie dem Elite-Kreis von Immobilienprofis bei.",
            "cta": "Interesse bekunden"
        }
    },
    "contact": {
        "heroSubtitle": "Führende internationale Kapitalströme durch institutionelle Präzision.",
        "info": {
            "title": "Institutionelles Fundament",
            "legalNameLabel": "Vollständiger Name",
            "hqLabel": "Zentrale Warschau",
            "emailLabel": "Direkte Anfragen",
            "phoneLabel": "Telefon",
            "nipLabel": "Steuernummer (NIP)",
            "regonLabel": "Register (REGON)"
        },
        "form": {
            "title": "Anfrage Formular",
            "subtitle": "Kontaktieren Sie unsere strategischen Berater.",
            "successTitle": "Anfrage erhalten",
            "successDesc": "Wir werden uns umgehend bei Ihnen melden.",
            "sendAnother": "Weitere Anfrage senden",
            "labels": {
                "name": "Vollständiger Name",
                "email": "E-Mail-Adresse",
                "sector": "Sektor",
                "message": "Nachricht / Anfrage"
            },
            "placeholders": {
                "name": "Jane Doe",
                "email": "jane@example.com",
                "message": "Ziele beschreiben..."
            },
            "options": {
                "realEstate": "Immobilien & Hausverwaltung",
                "consulting": "Strategische Beratung",
                "hospitality": "Gastgewerbe & Lifestyle",
                "academy": "Bildungsakademie"
            },
            "submit": "Anfrage Senden",
            "processing": "Wird bearbeitet..."
        }
    }
}

es_updates = {
    "mission": {
        "sectionLabel": "Nuestra Misión desde 2018",
        "headline": "Elevando los estándares inmobiliarios a niveles <highlight>inalcanzables</highlight>.",
        "body1": "Nuestra historia comenzó en 2018 con un objetivo claro: ir más allá de las limitaciones de las agencias genéricas y crear un centro de asesoramiento de alta autoridad.",
        "body2": "Conectamos capital internacional con oportunidades de inversión premium, creando valor basado en profundos análisis de mercado y pensamiento estratégico a largo plazo.",
        "stats": {"founded": "Fundado", "portfolio": "Valor del Portafolio", "languages": "Idiomas Globales", "divisions": "Divisiones Principales"}
    },
    "featuredProperties": {
        "sectionLabel": "Colección Premium",
        "headline": "<highlight>Propiedades</highlight> Destacadas",
        "subtitle": "Acceso exclusivo a inversiones internacionales de primer nivel.",
        "cta": "Ver Todas las Propiedades"
    },
    "academyCta": {
        "sectionLabel": "Academia Educativa",
        "headline": "Domina el Mercado <highlight>Premium</highlight>.",
        "subtitle": "Únase a nuestra capacitación de alto rendimiento en Ventas, Negociaciones y Generación de Leads en el mercado inmobiliario internacional.",
        "viewModules": "Ver Todos los Módulos",
        "aboutUs": "Sobre AMP Empire"
    },
    "hero": {
        "badge": "Est. 2018 Sede Global en Varsovia",
        "portfolioCta": "Ver Portafolio"
    },
    "properties": {
        "client": {
            "searchPlaceholder": "Buscar por ciudad, país, tipo o nombre de la propiedad...",
            "filterLabel": "Filtrar",
            "allCountries": "Todos los Países",
            "allTypes": "Todos los Tipos",
            "sort": {
                "newest": "Más Recientes",
                "oldest": "Más Antiguos",
                "priceDesc": "Precio: Mayor a Menor",
                "priceAsc": "Precio: Menor a Mayor"
            },
            "clearBtn": "Limpiar",
            "resultsFound": "{count} propiedades encontradas",
            "resultFound": "{count} propiedad encontrada",
            "resultsFor": "Resultados para \"{query}\"",
            "clearAllFilters": "Limpiar Filtros"
        }
    },
    "propertyDetails": {
        "recentlyListed": "Listado Recientemente",
        "listedBuilt": "Listado/Construido en {year}",
        "save": "Guardar",
        "share": "Compartir",
        "sidebarTitle": "AMP Empire",
        "sidebarDesc": "Asesoramiento Inmobiliario Premium. Contáctenos para más detalles sobre esta exclusividad.",
        "whatsappBtn": "Contactar por WhatsApp",
        "featuresGroups": {
            "climate": "Clima y Hogar Inteligente",
            "leisure": "Ocio y Bienestar",
            "security": "Seguridad y Edificio",
            "kitchen": "Cocina e Interiores",
            "outdoor": "Exteriores y Vistas",
            "parking": "Estacionamiento e Instalaciones",
            "other": "Otras Características"
        }
    },
    "about": {
        "heroWord1": "AMP",
        "heroWord2": "Empire",
        "pillars": {
            "sectionLabel": "Quiénes Somos",
            "p1": { "title": "Base Institucional", "text": "Fundada en Varsovia, AMP Empire opera como un centro institucional registrado que conecta capitales..." },
            "p2": { "title": "Misión", "text": "Elevar los estándares de servicio inmobiliario a niveles inalcanzables..." },
            "p3": { "title": "Alcance Global", "text": "Operando a través de múltiples corredores de capital internacional..." },
            "p4": { "title": "El Equipo", "text": "Compuesto por asesores experimentados, corredores certificados y negociadores capacitados." }
        },
        "timeline": {
            "sectionLabel": "Nuestro Viaje",
            "event1": "Fundación de AMP Empire en Varsovia, Polonia",
            "event2": "Expansión en los corredores inmobiliarios de Medio Oriente",
            "event3": "Lanzamiento de la División Académica",
            "event4": "La cartera supera los 2.000 millones de euros en activos",
            "event5": "Plataforma digital disponible en 6 idiomas"
        },
        "legal": {
            "sectionLabel": "Registro Legal",
            "company": "AMP EMPIRE ALEKSANDRA BRZEZIŃSKA",
            "address": "ul. Dzielna 11a lok. 28, 01-023 Varsovia, Polonia",
            "registry": "Fundado en 2018 · NIP: 9541283669 · REGON: 273474870",
            "cta": "Ponerse en Contacto"
        },
        "quote": {
            "author": "AMP Empire — Sede Varsovia"
        }
    },
    "services": {
        "heroWord1": "Sectores",
        "heroWord2": "Profesionales",
        "ctas": {
            "explore": "Explorar Sector",
            "advisory": "Ver Asesoría",
            "manage": "Manejar Activos",
            "request": "Solicitar Asesoría",
            "exploreLink": "Explorar"
        }
    },
    "courses": {
        "heroWord1": "Módulos de",
        "heroWord2": "Formación",
        "heroWord3": "Avanzada",
        "highlights": {
            "h1": "Sesiones dirigidas por expertos",
            "h2": "Simulaciones en el mundo real",
            "h3": "Enfoque en el mercado internacional",
            "h4": "Formato en línea flexible",
            "h5": "Soporte multilingüe",
            "h6": "Certificado final"
        },
        "enroll": {
            "sectionLabel": "Inscríbase Ahora",
            "headline": "Inicie su Formación",
            "subtitle": "Únase al círculo élite de profesionales inmobiliarios.",
            "cta": "Registrar Interés"
        }
    },
    "contact": {
        "heroSubtitle": "Liderando los principales corredores de capital internacional con precisión institucional.",
        "info": {
            "title": "Base Institucional",
            "legalNameLabel": "Nombre Legal Completo",
            "hqLabel": "Sede Central de Varsovia",
            "emailLabel": "Consultas Directas",
            "phoneLabel": "Línea Telefónica",
            "nipLabel": "Identificación Fiscal (NIP)",
            "regonLabel": "Registro (REGON)"
        },
        "form": {
            "title": "Formulario de Captación",
            "subtitle": "Conéctese con nuestros asesores estratégicos.",
            "successTitle": "Solicitud Recibida",
            "successDesc": "Nos pondremos en contacto con usted brevemente.",
            "sendAnother": "Enviar otra solicitud",
            "labels": {
                "name": "Nombre Completo",
                "email": "Dirección de E-mail",
                "sector": "Interés del Sector",
                "message": "Mensaje / Consulta"
            },
            "placeholders": {
                "name": "Juana Pérez",
                "email": "juana@example.com",
                "message": "Describa sus objetivos..."
            },
            "options": {
                "realEstate": "Inmobiliaria y Gestión",
                "consulting": "Asesoramiento Estratégico",
                "hospitality": "Hostelería y Estilo de Vida",
                "academy": "Academia de Educación"
            },
            "submit": "Enviar Solicitud",
            "processing": "Procesando..."
        }
    }
}

tr_updates = {
    "mission": {
        "sectionLabel": "2018'den Beri Misyonumuz",
        "headline": "Gayrimenkul standartlarını <highlight>erişilmez</highlight> seviyelere yükseltiyoruz.",
        "body1": "Hikayemiz 2018'de net bir hedefle başladı: Basit ajansların sınırlamalarını aşmak ve yüksek otoriteye sahip bir danışmanlık merkezi oluşturmak.",
        "body2": "Derin piyasa analizi ve uzun vadeli stratejik düşünce temelinde uluslararası sermayeyi birinci sınıf yatırım fırsatlarıyla buluşturuyoruz.",
        "stats": {"founded": "Kuruluş", "portfolio": "Portföy Değeri", "languages": "Global Diller", "divisions": "Ana Bölümler"}
    },
    "featuredProperties": {
        "sectionLabel": "Premium Koleksiyon",
        "headline": "Öne Çıkan <highlight>Gayrimenkuller</highlight>",
        "subtitle": "Uluslararası yatırım yollarına özel erişim.",
        "cta": "Tüm Gayrimenkulleri Gör"
    },
    "academyCta": {
        "sectionLabel": "Eğitim Akademisi",
        "headline": "<highlight>Premium</highlight> Pazarda Ustalaşın.",
        "subtitle": "Uluslararası gayrimenkul koridorlarında Satış, Müzakere ve Müşteri Yaratma konularında yüksek performanslı eğitimlerimize katılın.",
        "viewModules": "Tüm Modülleri İncele",
        "aboutUs": "AMP Empire Hakkında"
    },
    "hero": {
        "badge": "2018'de Kuruldu - Varşova Ana Merkezi",
        "portfolioCta": "Portföyü İncele"
    },
    "properties": {
        "client": {
            "searchPlaceholder": "Şehir, ülke, tür veya ada göre ara...",
            "filterLabel": "Filtrele",
            "allCountries": "Tüm Ülkeler",
            "allTypes": "Tüm Türler",
            "sort": {
                "newest": "En Yeniler",
                "oldest": "En Eskiler",
                "priceDesc": "Fiyat: Yüksekten Düşüğe",
                "priceAsc": "Fiyat: Düşükten Yükseğe"
            },
            "clearBtn": "Temizle",
            "resultsFound": "{count} gayrimenkul bulundu",
            "resultFound": "{count} gayrimenkul bulundu",
            "resultsFor": "\"{query}\" için sonuçlar",
            "clearAllFilters": "Filtreleri Temizle"
        }
    },
    "propertyDetails": {
        "recentlyListed": "Yeni Eklenenler",
        "listedBuilt": "Eklenme/İnşa {year}",
        "save": "Kaydet",
        "share": "Paylaş",
        "sidebarTitle": "AMP Empire",
        "sidebarDesc": "Premium Gayrimenkul Danışmanlığı. Bu fırsat hakkında daha fazla detay almak için bizimle iletişime geçin.",
        "whatsappBtn": "WhatsApp ile İletişim",
        "featuresGroups": {
            "climate": "İklim ve Akıllı Ev",
            "leisure": "Rekreasyon ve Sağlık",
            "security": "Güvenlik ve Bina",
            "kitchen": "Mutfak ve İç Tasarım",
            "outdoor": "Dış Mekan ve Manzara",
            "parking": "Otopark ve Tesisler",
            "other": "Diğer Özellikler"
        }
    },
    "about": {
        "heroWord1": "AMP",
        "heroWord2": "Empire",
        "pillars": {
            "sectionLabel": "Biz Kimiz",
            "p1": { "title": "Kurumsal Temel", "text": "Polonya'nın Varşova kentinde kurulan AMP Empire..." },
            "p2": { "title": "Misyon", "text": "Gayrimenkul hizmet standartlarını eşsiz bir seviyeye yükseltmek..." },
            "p3": { "title": "Global Erişim", "text": "Merkezimiz 6 dil pazarını kapsamaktadır..." },
            "p4": { "title": "Takım", "text": "Deneyimli danışmanlardan ve uzmanlardan oluşmaktadır." }
        },
        "timeline": {
            "sectionLabel": "Yolculuğumuz",
            "event1": "Polonya'nın Varşova kentinde AMP Empire kuruldu",
            "event2": "Orta Doğu gayrimenkul koridorlarına genişletildi",
            "event3": "Uluslararası müfredata sahip Akademi Bölümü açıldı",
            "event4": "Portföy değeri 2 milyar Euro'yu aştı",
            "event5": "6 dilli küresel dijital platform yayınlandı"
        },
        "legal": {
            "sectionLabel": "Yasal Sicil",
            "company": "AMP EMPIRE ALEKSANDRA BRZEZIŃSKA",
            "address": "ul. Dzielna 11a lok. 28, 01-023 Varşova, Polonya",
            "registry": "Kuruluş 2018 · NIP: 9541283669 · REGON: 273474870",
            "cta": "İletişime Geç"
        },
        "quote": {
            "author": "AMP Empire — Varşova Merkez"
        }
    },
    "services": {
        "heroWord1": "Profesyonel",
        "heroWord2": "Sektörler",
        "ctas": {
            "explore": "Sektörü Keşfet",
            "advisory": "Danışmanlık Hizmetleri",
            "manage": "Varlık Yönetimi",
            "request": "Danışmanlık İste",
            "exploreLink": "Keşfet"
        }
    },
    "courses": {
        "heroWord1": "Uzman",
        "heroWord2": "Eğitim",
        "heroWord3": "Modülleri",
        "highlights": {
            "h1": "Uzman rehberliğinde oturumlar",
            "h2": "Gerçek dünya simülasyonları",
            "h3": "Uluslararası piyasa odaklı",
            "h4": "Esnek çevrimiçi format",
            "h5": "Çok dilli destek",
            "h6": "Tamamlama sertifikası"
        },
        "enroll": {
            "sectionLabel": "Şimdi Kayıt Olun",
            "headline": "Eğitim Yolculuğunuza Başlayın",
            "subtitle": "Uluslararası alanda gayrimenkul profesyonellerinin elit çevresine katılın.",
            "cta": "Kayıt Formu"
        }
    },
    "contact": {
        "heroSubtitle": "Uluslararası sermaye koridorlarına kurumsal hassasiyetle liderlik ediyoruz.",
        "info": {
            "title": "Kurumsal Temel",
            "legalNameLabel": "Tam Yasal Adı",
            "hqLabel": "Varşova Merkez Ofis",
            "emailLabel": "Doğrudan İletişim",
            "phoneLabel": "Telefon Hattı",
            "nipLabel": "Vergi Kimlik No (NIP)",
            "regonLabel": "Sicil Numarası (REGON)"
        },
        "form": {
            "title": "İletişim Formu",
            "subtitle": "Stratejik danışmanlarımızla bugün bağlantı kurun.",
            "successTitle": "Talep Alındı",
            "successDesc": "Kurumsal danışmanımız kısa süre içinde iletişime geçecektir.",
            "sendAnother": "Başka bir talep gönder",
            "labels": {
                "name": "Tam Adı",
                "email": "E-posta Adresi",
                "sector": "Sektör İlgisi",
                "message": "Mesajınız / Sorunuz"
            },
            "placeholders": {
                "name": "Ali Veli",
                "email": "ali@example.com",
                "message": "Hedeflerinizi açıklayın..."
            },
            "options": {
                "realEstate": "Gayrimenkul ve Mülk Yönetimi",
                "consulting": "Stratejik Danışmanlık",
                "hospitality": "Ağırlama ve Otelcilik",
                "academy": "Eğitim Akademisi"
            },
            "submit": "Talebi Gönder",
            "processing": "İşleniyor..."
        }
    }
}

updates_map = {
    "en.json": en_updates,
    "pl.json": pl_updates,
    "ar.json": ar_updates,
    "de.json": de_updates,
    "es.json": es_updates,
    "tr.json": tr_updates
}

def update_json_file(file_path, updates):
    if not os.path.exists(file_path):
        print(f"Error: {file_path} not found.")
        return

    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    # Deep update the dictionary
    def deep_update(d, u):
        for k, v in u.items():
            if isinstance(v, dict) and k in d and isinstance(d[k], dict):
                deep_update(d[k], v)
            else:
                d[k] = v
        return d

    new_data = deep_update(data, updates)

    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(new_data, f, ensure_ascii=False, indent=2)
    print(f"Updated {file_path}")

def main():
    for file_name, updates in updates_map.items():
        file_path = os.path.join(MSG_DIR, file_name)
        update_json_file(file_path, updates)

if __name__ == "__main__":
    main()
