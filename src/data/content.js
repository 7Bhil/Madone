export const school = {
  name: "La Madone",
  fullName: "Complexe Scolaire Privé La Madone",
  tagline: "L'Excellence Pédagogique au Service de Chaque Enfant",
  city: "Cotonou, Bénin",
  founded: "1998",
  director: "Mme Marie-Clarisse Kouassi",
  directorTitle: "Directrice Générale & Fondatrice",
  directorQuote: "À La Madone, nous ne formons pas seulement des élèves brillants, nous éveillons des esprits curieux, confiants et préparés aux défis de demain.",
  email: "contact@lamadone.bj",
  admissionsEmail: "admissions@lamadone.bj",
  phone: "+229 21 33 45 67",
  whatsapp: "+229 97 00 12 34",
  address: "Quartier Haie Vive, Rue 812, Cotonou - Bénin",
  googleMapsUrl: "https://maps.google.com/?q=Cotonou+Benin",
  hours: "Du Lundi au Vendredi : 07h00 - 18h00 | Samedi : 08h00 - 12h00",
};

export const nav = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/apropos" },
  { label: "Classes & Programmes", href: "/classes" },
  { label: "Vie Scolaire & Cantine", href: "/vie-scolaire" },
  { label: "Simulateur Tarifs", href: "/#simulateur" },
  { label: "Actualités", href: "/actualites" },
  { label: "Galerie", href: "/galerie" },
  { label: "FAQ", href: "/faq" },
  { label: "Inscription", href: "/inscription" },
  { label: "Contact", href: "/contact" },
];

export const classes = [
  {
    id: "maternelle",
    level: "Maternelle (Toute Petite à Grande Section)",
    age: "2 à 5 ans",
    detail: "Éveil sensoriel, apprentissage du langage, motricité fine et initiation ludique à l'anglais.",
    iconName: "Baby",
    highlights: [
      "Salles de sieste climatisées & sécurisées",
      "Ateliers de psychomotricité & éveil musical",
      "Encadrement renforcé : 1 enseignante + 1 assistante par classe",
      "Initiation bilingue Anglais-Français"
    ],
    schedule: "08h00 - 12h30 | Garderie jusqu'à 17h30",
    annualFee: 350000,
  },
  {
    id: "ci-cp",
    level: "Cycle Fondamental (CI - CP)",
    age: "6 à 7 ans",
    detail: "Acquisition solide de la lecture, de l'écriture manuscrite et des bases de la logique mathématique.",
    iconName: "BookOpen",
    highlights: [
      "Méthode syllabique & lecture fluide en moins de 6 mois",
      "Calcul mental & logique visuelle (méthode de Singapour)",
      "Ateliers d'informatique & codage sur tablette",
      "Évaluation continue bienveillante"
    ],
    schedule: "08h00 - 15h30",
    annualFee: 420000,
  },
  {
    id: "ce1-ce2",
    level: "Cycle de Consolidation (CE1 - CE2)",
    age: "8 à 9 ans",
    detail: "Approfondissement de la langue française, sciences expérimentales et initiation à la robotique.",
    iconName: "Award",
    highlights: [
      "Maîtrise de la grammaire & expression écrite",
      "Laboratoire STEM (Sciences, Robotique LEGO)",
      "Histoire, Géographie & Culture du Bénin",
      "Sorties pédagogiques & visites de musées"
    ],
    schedule: "08h00 - 15h30",
    annualFee: 460000,
  },
  {
    id: "cm1-cm2",
    level: "Cycle d'Orientation & CEP (CM1 - CM2)",
    age: "10 à 11 ans",
    detail: "Préparation intensive au Certificat d'Études Primaires (CEP) et à l'entrée en 6e dans les meilleurs collèges.",
    iconName: "GraduationCap",
    highlights: [
      "100% de réussite au CEP depuis 10 ans",
      "Examens blancs mensuels & tutorat personnalisé",
      "Anglais renforcé & certification Cambridge Young Learners",
      "Développement du leadership & expression orale"
    ],
    schedule: "08h00 - 16h00",
    annualFee: 500000,
  },
];

export const tuitionOptions = {
  levels: [
    { label: "Maternelle (TPS, PS, MS, GS)", value: "maternelle", basePrice: 350000 },
    { label: "CI - CP (Cycle Fondamental)", value: "ci-cp", basePrice: 420000 },
    { label: "CE1 - CE2 (Cycle de Consolidation)", value: "ce1-ce2", basePrice: 460000 },
    { label: "CM1 - CM2 (Préparation CEP & 6e)", value: "cm1-cm2", basePrice: 500000 },
  ],
  canteen: [
    { label: "Sans cantine (Panier repas personnel)", price: 0 },
    { label: "Cantine Bio & Équilibrée (5 jours/semaine)", price: 180000 },
  ],
  transport: [
    { label: "Pas de transport scolaire", price: 0 },
    { label: "Zone 1 (Haie Vive, Cadjehoun, Cocotomey)", price: 120000 },
    { label: "Zone 2 (Fidjrossè, Akpakpa, Kouhounou)", price: 160000 },
    { label: "Zone 3 (Calavi, Agla, Gbégamey)", price: 200000 },
  ],
  extracurriculars: [
    { id: "robotique", label: "Club Robotique & Codage STEM", price: 60000 },
    { id: "echecs", label: "Club d'Échecs & Stratégie", price: 40000 },
    { id: "anglais", label: "Intensif Anglais Cambridge", price: 50000 },
    { id: "taekwondo", label: "Taekwondo / Arts Martiaux", price: 45000 },
    { id: "musique", label: "Musique & Piano", price: 50000 },
    { id: "garderie", label: "Garderie du Soir (jusqu'à 18h)", price: 70000 },
  ],
};

export const about = {
  history: "Fondé en 1998, le Complexe Scolaire La Madone s'est imposé comme une référence d'excellence académique à Cotonou. Partant d'une promotion initiale de 15 élèves, notre établissement accueille aujourd'hui plus de 350 enfants dans un cadre moderne, sécurisé et stimulant.",
  mission: "Inculquer la passion d'apprendre, le respect des valeurs morales et civiques, et garantir à chaque élève les compétences clés pour réussir brillamment son parcours scolaire et personnel.",
  values: [
    { title: "Excellence Académique", description: "Un suivi rigoureux et des méthodes pédagogiques innovantes pour garantir un taux de réussite de 100% au CEP.", icon: "Award" },
    { title: "Bienveillance & Sécurité", description: "Un cadre chaleureux où chaque enfant est écouté, encouragé et épanoui en toute sécurité.", icon: "Heart" },
    { title: "Bilinguisme & Innovation", description: "Initiation précoce à l'Anglais et intégration des outils numériques (tablettes, robotique) dès le primaire.", icon: "Sparkles" },
    { title: "Partenariat avec les Familles", description: "Une communication continue avec les parents via notre portail numérique et des rencontres régulières.", icon: "Users" },
  ],
  team: [
    { name: "Mme Marie-Clarisse Kouassi", role: "Directrice Générale", experience: "26 ans dans l'enseignement privé", image: "/images/hero_building.png" },
    { name: "M. Jean-Baptiste Koffi", role: "Directeur Pédagogique", experience: "18 ans d'encadrement pédagogique", image: "/images/classroom_tech.png" },
    { name: "Mme Awa Diallo", role: "Responsable Petite Enfance", experience: "12 ans en pédagogie Montessori & Maternelle", image: "/images/activities_stem.png" },
    { name: "M. Paul Mensah", role: "Coordonnateur STEM & Robotique", experience: "Ingénieur Pédagogique & Spécialiste Numérique", image: "/images/classroom_tech.png" },
  ],
  stats: [
    { number: "100%", label: "Taux de réussite au CEP (10 ans consécutifs)" },
    { number: "25+", label: "Années d'excellence éducative" },
    { number: "350+", label: "Élèves épanouis chaque année" },
    { number: "100%", label: "Salles climatissées & sécurisées" },
  ],
};

export const parentPortalMock = {
  student: {
    name: "Kouassi Marie-Lys",
    class: "Classe de CM2 Elite",
    matricule: "MAD-2024-089",
    avatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=200&q=80",
    average: "18.45 / 20",
    rank: "1ère / 28 élèves",
    attendance: "99.2%",
  },
  grades: [
    { subject: "Mathématiques", note: "19.5/20", appreciation: "Excellente maîtrise du calcul et de la géométrie" },
    { subject: "Français & Dictée", note: "18.0/20", appreciation: "Orthographe impeccable, expression écrite fluide" },
    { subject: "Anglais Bilingue", note: "19.0/20", appreciation: "Aisance orale remarquable" },
    { subject: "Sciences & STEM", note: "17.5/20", appreciation: "Esprit d'analyse très développé" },
    { subject: "Histoire & Géographie", note: "18.5/20", appreciation: "Travail très sérieux et soigné" },
  ],
  recentHomework: [
    { subject: "Mathématiques", task: "Exercices 4 et 5 page 62 sur les fractions", dueDate: "Demain" },
    { subject: "Anglais", task: "Apprendre le vocabulaire de l'unité 4", dueDate: "Jeudi" },
    { subject: "Sciences", task: "Préparer la maquette du système solaire", dueDate: "Lundi prochain" },
  ],
};

export const canteenMenu = {
  week: "Semaine du 25 au 29 Août",
  days: [
    { day: "Lundi", starter: "Salade de concombres et maïs doux", main: "Poulet rôti, riz au gras traditionnel et banane aloko", dessert: "Compote de pommes vertes bio" },
    { day: "Mardi", starter: "Carottes râpées à la vinaigrette douce", main: "Filet de capitaine poêlé, purée de patates douces maison", dessert: "Banane locale et carré de chocolat" },
    { day: "Mercredi", starter: "Velouté de légumes du jardin", main: "Spaghetti bolognaise à la viande fraîche hachée", dessert: "Salade de fruits frais (Papaye, Ananas, Orange)" },
    { day: "Jeudi", starter: "Œufs durs mimosa sur lit de salade", main: "Ragout de bœuf tendre, frites d'igname croustillantes", dessert: "Yaourt nature sucré au miel" },
    { day: "Vendredi", starter: "Tomates fraiches et fromage blanc", main: "Riz cantonnais aux crevettes et petits légumes", dessert: "Gâteau moelleux aux bananes fait maison" },
  ],
};

export const news = [
  {
    id: 1,
    title: "Ouverture officielle des Inscriptions 2024-2025",
    date: "15 Août 2024",
    category: "Inscriptions",
    excerpt: "Les pré-inscriptions pour l'année scolaire 2024-2025 sont désormais ouvertes en ligne et au secrétariat.",
    content: "Le Complexe Scolaire La Madone a le plaisir d'annoncer l'ouverture du recrutement des élèves pour la prochaine rentrée académique. En raison de l'effectif limité à 25 élèves par classe pour préserver la qualité du suivi, nous invitons les familles à effectuer leur pré-inscription dans les plus brefs délais.",
    image: "/images/hero_building.png",
  },
  {
    id: 2,
    title: "100% de réussite au CEP 2024 avec Mention Spéciale !",
    date: "10 Juillet 2024",
    category: "Excellence",
    excerpt: "Nos élèves de CM2 ont obtenu une réussite totale au CEP avec plus de 85% de mentions Très Bien.",
    content: "Toute la communauté éducative félicite nos candidats de la promotion 2024 du Certificat d'Études Primaires. Grâce au dévouement de nos enseignants et à la rigueur de notre programme, 100% de nos candidats ont décroché leur diplôme avec des notes remarquables.",
    image: "/images/classroom_tech.png",
  },
  {
    id: 3,
    title: "Inauguration du Nouveau Laboratoire de Robotique STEM",
    date: "02 Mai 2024",
    category: "Innovation",
    excerpt: "Installation de 20 nouveaux kits de robotique LEGO Education et de tablettes tactiles pour les élèves du CE1 au CM2.",
    content: "Dans le cadre de notre plan d'innovation numérique, l'école s'est dotée d'un espace STEM moderne permettant aux enfants d'apprendre la logique de programmation, la résolution de problèmes et la robotique de manière ludique et collaborative.",
    image: "/images/activities_stem.png",
  },
  {
    id: 4,
    title: "Journée Portes Ouvertes & Visites du Campus",
    date: "25 Septembre 2024",
    category: "Événement",
    excerpt: "Venez rencontrer l'équipe dirigeante et visiter nos infrastructures lors de notre journée portes ouvertes.",
    content: "Parents et futurs élèves sont invités à visiter nos salles de classe, la cantine bio, nos terrains de sport et à échanger avec nos professeurs lors d'une matinée d'immersion conviviale.",
    image: "/images/canteen_food.png",
  },
];

export const gallery = {
  categories: ["Toutes", "Infrastructures", "Classes", "Activités STEM", "Cantine"],
  images: [
    { id: 1, src: "/images/hero_building.png", category: "Infrastructures", title: "Entrée Principale du Campus" },
    { id: 2, src: "/images/classroom_tech.png", category: "Classes", title: "Salle de Classe Numérique & Interactive" },
    { id: 3, src: "/images/activities_stem.png", category: "Activités STEM", title: "Atelier Robotique & Codage LEGO" },
    { id: 4, src: "/images/canteen_food.png", category: "Cantine", title: "Restaurant Scolaire & Repas Équilibrés" },
    { id: 5, src: "/images/hero_building.png", category: "Infrastructures", title: "Espace Vert & Cour de Récréation" },
    { id: 6, src: "/images/classroom_tech.png", category: "Classes", title: "Atelier de Lecture & Bilinguisme" },
  ],
};

export const testimonials = [
  {
    id: 1,
    name: "Dr. Alain Soglo",
    role: "Parent d'élève en CM2 & CP",
    comment: "Mes deux enfants fréquentent La Madone depuis la Maternelle. La qualité du corps enseignant et l'encadrement sont inégalés à Cotonou. Ma fille aînée a une maîtrise impressionnante de l'anglais et du calcul !",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 2,
    name: "Mme Beatrice Dossou",
    role: "Mère de famille (CM1)",
    comment: "Le portail numérique pour suivre les notes et les devoirs au quotidien est une révolution. On se sent vraiment impliqué dans la scolarité de son enfant en toute sérénité.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 3,
    name: "M. Rodrigue Lawson",
    role: "Directeur Financier & Parent",
    comment: "Le cadre est sécurisé, propre, climatisé et l'apprentissage de la robotique dès le CE2 donne un coup d'avance incroyable à nos enfants pour le futur.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
  },
];

export const faq = [
  {
    question: "Quelles sont les pièces requises pour une pré-inscription ?",
    answer: "Pour constituer le dossier d'inscription, il vous faut : la copie de l'acte de naissance de l'enfant, 4 photos d'identité récentes, le carnet de vaccination/santé à jour, et les bulletins de notes de l'année précédente pour les admissions au CP, CE1, CE2, CM1 ou CM2.",
  },
  {
    question: "Quels sont les horaires d'ouverture et de garderie ?",
    answer: "L'école accueille les élèves à partir de 07h15. Les cours se déroulent de 08h00 à 15h30 (12h30 pour la maternelle). Une garderie du soir sécurisée avec étude surveillée est assurée jusqu'à 18h00.",
  },
  {
    question: "Comment fonctionne le service de transport scolaire ?",
    answer: "Notre flotte de bus climatisés couvre 3 grandes zones de Cotonou et ses environs (Haie Vive, Akpakpa, Fidjrossè, Calavi, Gbégamey). Chaque bus est équipé de ceintures de sécurité et accompagné d'une assistante de trajet qualifiée.",
  },
  {
    question: "Comment est structuré le suivi des repas à la cantine ?",
    answer: "Notre chef cuisinier élabore chaque semaine des menus équilibrés à base d'ingrédients frais et contrôlés. Les régimes alimentaires particuliers (allergies, convictions) sont scrupuleusement pris en compte sur présentation d'une fiche médicale.",
  },
  {
    question: "Est-il possible de régler les frais de scolarité en plusieurs tranches ?",
    answer: "Oui, la scolarité peut être réglée en 3 tranches (1ère tranche à l'inscription en septembre, 2e tranche en décembre, 3e tranche en mars) ou par prélèvement mensuel sur demande.",
  },
];

export const partners = [
  { name: "Ministère de l'Éducation Maternelle et Primaire", description: "Agrément officiel et tutelle administrative" },
  { name: "UNICEF Bénin", description: "Partenaire pour la protection de l'enfance et la santé" },
  { name: "Alliance Française de Cotonou", description: "Partenariat culturel & ateliers de lecture" },
  { name: "British Council Bénin", description: "Partenaire certification Anglais Young Learners" },
];

export const legal = {
  mentions: {
    title: "Mentions légales",
    editor: "Complexe Scolaire Privé La Madone",
    address: "Quartier Haie Vive, Rue 812, Cotonou - Bénin",
    phone: "+229 21 33 45 67",
    email: "contact@lamadone.bj",
    siret: "N° Agrément Ministériel : 2012/MEMP/DC/SG",
    hosting: "Hébergement Web : OVH Cloud SAS",
  },
  privacy: {
    title: "Politique de confidentialité",
    introduction: "Le Complexe Scolaire La Madone attache une importance capitale à la confidentialité des données personnelles de ses élèves et de leurs familles.",
    dataCollection: "Nous collectons les données strictement nécessaires aux démarches d'admission (Nom, prénom, date de naissance, bulletins, coordonnées téléphoniques et email des responsables légaux).",
    dataUsage: "Vos informations sont exclusivement destinées à la gestion scolaire administrative, au suivi pédagogique et à la communication directe école-famille.",
    dataRights: "Conformément à la réglementation sur les données personnelles, vous pouvez à tout moment demander l'accès, la rectification ou la suppression des données vous concernant via email : contact@lamadone.bj.",
    cookies: "Ce site utilise des cookies de navigation anonymes indispensables au bon fonctionnement des formulaires dynamiques.",
  },
};