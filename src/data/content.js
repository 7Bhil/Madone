export const school = {
  name: "La Madone",
  tagline: "Cours primaire",
  city: "Cotonou",
  founded: "1998",
  director: "Mme Marie Kouassi",
  email: "contact@lamadone.bj",
  phone: "+229 97 00 00 00",
  address: "Cotonou, Bénin",
};

export const nav = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/apropos" },
  { label: "Classes", href: "/classes" },
  { label: "Vie scolaire", href: "/vie-scolaire" },
  { label: "Actualités", href: "/actualites" },
  { label: "Galerie", href: "/galerie" },
  { label: "FAQ", href: "/faq" },
  { label: "Inscription", href: "/inscription" },
  { label: "Contact", href: "/contact" },
];

export const classes = [
  { level: "Maternelle", detail: "Petite, Moyenne et Grande section" },
  { level: "CI - CP", detail: "Apprentissage de la lecture et du calcul" },
  { level: "CE1 - CE2", detail: "Consolidation des bases" },
  { level: "CM1 - CM2", detail: "Préparation à l'entrée en 6e" },
];

export const about = {
  history: "Fondée en 1998, l'École La Madone a accueilli sa première classe de 15 élèves dans une petite maison de Cotonou. Au fil des années, l'école s'est développée pour devenir un établissement reconnu pour son excellence pédagogique et son accompagnement personnalisé de chaque élève.",
  mission: "Notre mission est d'offrir un environnement éducatif bienveillant où chaque enfant peut s'épanouir, développer son potentiel et acquérir les compétences nécessaires pour réussir dans sa vie future.",
  values: [
    { title: "Excellence", description: "Nous visons l'excellence académique tout en respectant le rythme de chaque enfant." },
    { title: "Bienveillance", description: "Chaque élève est respecté, écouté et encouragé dans son parcours d'apprentissage." },
    { title: "Inclusion", description: "Nous accueillons tous les enfants sans distinction et adaptons notre enseignement à leurs besoins." },
    { title: "Partenariat", description: "Nous travaillons en étroite collaboration avec les familles pour le succès de chaque élève." },
  ],
  team: [
    { name: "Mme Marie Kouassi", role: "Directrice", experience: "20 ans d'expérience en éducation primaire" },
    { name: "M. Jean Koffi", role: "Directeur pédagogique", experience: "15 ans d'enseignement" },
    { name: "Mme Awa Diallo", role: "Enseignante Maternelle", experience: "8 ans d'expérience" },
    { name: "M. Paul Mensah", role: "Enseignant CP-CE1", experience: "12 ans d'expérience" },
    { name: "Mme Fatou Bamba", role: "Enseignante CE2-CM1", experience: "10 ans d'expérience" },
    { name: "M. Charles Adjovi", role: "Enseignant CM2", experience: "18 ans d'expérience" },
  ],
  stats: [
    { number: "25+", label: "Années d'expérience" },
    { number: "300+", label: "Élèves accueillis" },
    { number: "15", label: "Enseignants qualifiés" },
    { number: "98%", label: "Taux de réussite" },
  ],
};

export const news = [
  {
    id: 1,
    title: "Rentrée scolaire 2024-2025",
    date: "15 Septembre 2024",
    category: "Actualités",
    excerpt: "La rentrée scolaire aura lieu le lundi 15 septembre 2024. Les inscriptions sont ouvertes dès maintenant.",
    content: "Nous sommes heureux d'accueillir vos enfants pour cette nouvelle année scolaire. Les inscriptions sont ouvertes du 1er au 30 août. N'oubliez pas de fournir tous les documents requis : certificat de naissance, photos d'identité, carnet de santé et bulletin scolaire de l'année précédente.",
    image: "/images/news/rentree.jpg",
  },
  {
    id: 2,
    title: "Journée portes ouvertes",
    date: "20 Octobre 2024",
    category: "Événement",
    excerpt: "Venez découvrir notre école lors de notre journée portes ouvertes le 20 octobre de 9h à 16h.",
    content: "Cette journée est l'occasion idéale pour visiter nos installations, rencontrer notre équipe pédagogique et découvrir notre approche éducative. Des activités seront proposées aux enfants et des conférences pour les parents.",
    image: "/images/news/portes-ouvertes.jpg",
  },
  {
    id: 3,
    title: "Fête de fin d'année",
    date: "15 Juillet 2024",
    category: "Événement",
    excerpt: "Célébration de la fin d'année scolaire avec remise des prix et spectacle des élèves.",
    content: "Nos élèves ont brillé lors de la fête de fin d'année ! Remise des prix, spectacles de danse, chants et pièces de théâtre ont marqué cette journée mémorable. Félicitations à tous nos élèves pour leur excellent travail cette année.",
    image: "/images/news/fete-fin-annee.jpg",
  },
  {
    id: 4,
    title: "Nouveau programme d'anglais",
    date: "1 Septembre 2024",
    category: "Nouveauté",
    excerpt: "Lancement d'un programme d'anglais intensif pour les classes de CM1 et CM2.",
    content: "Pour mieux préparer nos élèves à l'avenir, nous introduisons un programme d'anglais intensif dès la classe de CM1. Des cours quotidiens de 30 minutes permettront aux enfants de développer leurs compétences linguistiques de manière progressive et ludique.",
    image: "/images/news/anglais.jpg",
  },
];

export const gallery = {
  categories: ["Toutes", "Classes", "Activités", "Événements", "Installations"],
  images: [
    { id: 1, src: "/images/gallery/class1.jpg", category: "Classes", alt: "Classe de maternelle" },
    { id: 2, src: "/images/gallery/class2.jpg", category: "Classes", alt: "Classe de CP" },
    { id: 3, src: "/images/gallery/activity1.jpg", category: "Activités", alt: "Activité sportive" },
    { id: 4, src: "/images/gallery/activity2.jpg", category: "Activités", alt: "Atelier d'art" },
    { id: 5, src: "/images/gallery/event1.jpg", category: "Événements", alt: "Fête de fin d'année" },
    { id: 6, src: "/images/gallery/event2.jpg", category: "Événements", alt: "Journée portes ouvertes" },
    { id: 7, src: "/images/gallery/facility1.jpg", category: "Installations", alt: "Bibliothèque" },
    { id: 8, src: "/images/gallery/facility2.jpg", category: "Installations", alt: "Cantine" },
    { id: 9, src: "/images/gallery/class3.jpg", category: "Classes", alt: "Classe de CM2" },
    { id: 10, src: "/images/gallery/activity3.jpg", category: "Activités", alt: "Sortie pédagogique" },
    { id: 11, src: "/images/gallery/facility3.jpg", category: "Installations", alt: "Cour de récréation" },
    { id: 12, src: "/images/gallery/event3.jpg", category: "Événements", alt: "Remise des prix" },
  ],
};

export const faq = [
  {
    question: "Quels sont les horaires de l'école ?",
    answer: "L'école est ouverte du lundi au vendredi de 7h30 à 16h30. Les cours commencent à 8h00 et se terminent à 15h30. Une garderie est disponible avant et après les cours sur demande.",
  },
  {
    question: "Comment procéder à l'inscription de mon enfant ?",
    answer: "Les inscriptions se font en ligne via notre formulaire de pré-inscription ou directement au secrétariat de l'école. Les documents requis sont : certificat de naissance, photos d'identité, carnet de santé et bulletin scolaire de l'année précédente.",
  },
  {
    question: "Quels sont les frais de scolarité ?",
    answer: "Les frais de scolarité varient selon le niveau. Pour connaître les tarifs actuels, veuillez contacter l'administration par téléphone ou email. Des facilités de paiement sont disponibles sur demande.",
  },
  {
    question: "Y a-t-il un service de cantine ?",
    answer: "Oui, une cantine est disponible avec des repas équilibrés préparés sur place. Les menus sont affichés chaque semaine et prennent en compte les allergies alimentaires signalées.",
  },
  {
    question: "Un service de transport est-il disponible ?",
    answer: "Oui, un service de transport scolaire est disponible sur demande. Les itinéraires sont organisés selon les zones de résidence des élèves. Contactez-nous pour connaître les disponibilités dans votre secteur.",
  },
  {
    question: "Comment sont gérés les devoirs et leçons ?",
    answer: "Les devoirs sont donnés de manière raisonnable et adaptés à l'âge des élèves. Un cahier de correspondance permet la communication entre les parents et les enseignants concernant le travail à la maison.",
  },
  {
    question: "Que se passe-t-il en cas d'absence ou de maladie ?",
    answer: "En cas d'absence, les parents doivent informer l'école le matin même. Pour les maladies prolongées, un certificat médical est requis. Les leçons importantes peuvent être récupérées au secrétariat.",
  },
  {
    question: "Les parents peuvent-ils rencontrer les enseignants ?",
    answer: "Oui, des réunions parents-professeurs sont organisées chaque trimestre. Des rendez-vous individuels peuvent également être pris sur demande avec chaque enseignant.",
  },
];

export const legal = {
  mentions: {
    title: "Mentions légales",
    editor: "École La Madone",
    address: "Cotonou, Bénin",
    phone: "+229 97 00 00 00",
    email: "contact@lamadone.bj",
    siret: "123 456 789 00000",
    hosting: "Hébergement : [Nom de l'hébergeur]",
  },
  privacy: {
    title: "Politique de confidentialité",
    introduction: "Nous collectons et traitons vos données personnelles avec le plus grand respect. Cette politique explique comment nous utilisons ces informations.",
    dataCollection: "Nous collectons les informations suivantes : nom, prénom, adresse, téléphone, email, informations relatives à l'élève (âge, classe, niveau scolaire).",
    dataUsage: "Ces données sont utilisées uniquement pour la gestion scolaire, la communication avec les familles et l'amélioration de nos services.",
    dataRights: "Vous avez le droit d'accéder, de rectifier et de supprimer vos données personnelles. Pour exercer ces droits, contactez-nous via email.",
    cookies: "Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez configurer votre navigateur pour refuser les cookies.",
  },
};

export const partners = [
  { name: "Ministère de l'Éducation", logo: "/images/partners/ministere.png", description: "Partenaire institutionnel" },
  { name: "UNICEF Bénin", logo: "/images/partners/unicef.png", description: "Partenaire éducatif" },
  { name: "Alliance Française", logo: "/images/partners/alliance.png", description: "Partenaire culturel" },
  { name: "Banque Mondiale", logo: "/images/partners/banque.png", description: "Partenaire de développement" },
];

export const seo = {
  title: "École La Madone - Cours Primaire à Cotonou",
  description: "École primaire La Madone à Cotonou. De la maternelle au CM2, un accompagnement attentif pour chaque enfant dans un environnement bienveillant.",
  keywords: "école primaire, Cotonou, Bénin, maternelle, CM2, éducation, scolarité",
  ogImage: "/images/og-image.jpg",
};