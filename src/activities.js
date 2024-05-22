const activities = [
    // Sport Activities
    {
        category: "sport",
        title: 'Tournoi de tennis',
        address: "Roland Garros, 75016 Paris",
        description: "Assistez au célèbre tournoi de tennis de Roland Garros, où les meilleurs joueurs du monde s'affrontent sur terre battue.",
        img: "https://images.unsplash.com/photo-1512412046876-f386342eddb3?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: true
    },
    {
        category: "sport",
        title: 'Cours de natation',
        address: "Piscine Molitor, 75016 Paris",
        description: "Participez à des cours de natation pour débutants dans l'emblématique piscine Molitor, un cadre luxueux et historique.",
        img: "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: true
    },
    {
        category: "sport",
        title: 'Escalade',
        address: "Mur de l'Escalade, 75014 Paris",
        description: "Testez vos compétences en escalade sur le Mur de l'Escalade, adapté à tous les niveaux, des débutants aux experts.",
        img: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?q=80&w=2319&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "sport",
        title: 'BootCamp fitness',
        address: "Parc des Princes, 75016 Paris",
        description: "Rejoignez un bootcamp de fitness en groupe au Parc des Princes pour améliorer votre condition physique de manière ludique et dynamique.",
        img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "sport",
        title: 'Match de hokey',
        address: "AccorHotels Arena, 75012 Paris",
        description: "Venez encourager votre équipe préférée lors d'un match de hockey sur glace à l'AccorHotels Arena, une ambiance électrisante garantie.",
        img: "https://images.unsplash.com/photo-1562771379-eafdca7a02f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "sport",
        title: 'Ultimate frisbee',
        address: "Parc de la Villette, 75019 Paris",
        description: "Rejoignez une ligue de frisbee ultime au Parc de la Villette, un sport collectif et convivial qui allie compétition et plaisir.",
        img: "https://images.unsplash.com/photo-1562771379-eafdca7a02f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "sport",
        title: 'Séances de yoga',
        address: "Bois de Vincennes, 75012 Paris",
        description: "Détendez-vous avec des séances de yoga en plein air dans le cadre paisible du Bois de Vincennes.",
        img: "https://images.unsplash.com/photo-1600881333168-2ef49b341f30?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "sport",
        title: 'Match de baseball',
        address: "Stade Charléty, 75013 Paris",
        description: "Assistez à un match de baseball local au Stade Charléty, un sport américain passionnant à découvrir.",
        img: "https://images.unsplash.com/photo-1582650448629-3c854f356544?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "sport",
        title: 'Cours de crossfit',
        address: "CrossFit Louvre, 75002 Paris",
        description: "Participez à une compétition de CrossFit au CrossFit Louvre, un défi physique intense et stimulant.",
        img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "sport",
        title: 'Tournoi de rugby',
        address: "Stade Sébastien Charléty, 75013 Paris",
        description: "Venez assister à un tournoi de rugby amateur au Stade Sébastien Charléty, une belle occasion de voir du sport en plein cœur de Paris.",
        img: "https://images.unsplash.com/photo-1529663297269-6d349ec39b57?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "sport",
        title: 'Cours de boxe',
        address: "Club de l'Étoile, 75017 Paris",
        description: "Inscrivez-vous à des cours de boxe pour tous niveaux au Club de l'Étoile et apprenez les techniques de cet art martial dans une ambiance conviviale.",
        img: "https://images.unsplash.com/photo-1622599511051-16f55a1234d0?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "sport",
        title: 'Cours de zumba',
        address: "Gymnase Japy, 75011 Paris",
        description: "Participez à des cours de Zumba en soirée au Gymnase Japy pour une séance de fitness rythmée et amusante.",
        img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "sport",
        title: 'Découverte natation synchronisée',
        address: "Piscine Pontoise, 75005 Paris",
        description: "Découvrez la natation synchronisée pour débutants à la Piscine Pontoise, une discipline gracieuse et artistique.",
        img: "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "sport",
        title: 'Course à pied',
        address: "Parc Montsouris, 75014 Paris",
        description: "Rejoignez une course à pied communautaire au Parc Montsouris et faites de l'exercice tout en rencontrant de nouvelles personnes.",
        img: "https://images.unsplash.com/photo-1562771379-eafdca7a02f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "sport",
        title: 'Cours de basketball',
        address: "Gymnase Auguste Blanqui, 75013 Paris",
        description: "Inscrivez vos enfants à des cours de basketball au Gymnase Auguste Blanqui, un excellent moyen pour eux de rester actifs et de développer des compétences en équipe.",
        img: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?q=80&w=2627&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },

    // Culture Activities
    {
        category: "culture",
        title: 'Musée du louvre',
        address: "Musée du Louvre, 75001 Paris",
        description: "Explorez une exposition d'art au Musée du Louvre mettant en vedette des artistes locaux, une opportunité de découvrir des talents émergents.",
        img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: true
    },
    {
        category: "culture",
        title: 'Théâtre Champs-Élysées',
        address: "Théâtre des Champs-Élysées, 75008 Paris",
        description: "Assistez à une représentation théâtrale en direct au Théâtre des Champs-Élysées, un spectacle captivant dans un cadre prestigieux.",
        img: "https://images.unsplash.com/photo-1516307365426-bea591f05011?q=80&w=3259&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: true
    },
    {
        category: "culture",
        title: 'Quartier Latin',
        address: "Quartier Latin, 75005 Paris",
        description: "Participez à une visite historique du Quartier Latin et découvrez l'histoire riche et les secrets de ce quartier emblématique de Paris.",
        img: "https://images.unsplash.com/photo-1597239685707-27572d3b411b?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "culture",
        title: 'Concert musique classique',
        address: "Philharmonie de Paris, 75019 Paris",
        description: "Assistez à un concert de musique classique à la Philharmonie de Paris, une expérience sonore exceptionnelle dans un cadre moderne.",
        img: "https://images.unsplash.com/photo-1516307365426-bea591f05011?q=80&w=3259&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "culture",
        title: 'Séance de dédicaces',
        address: "Bibliothèque nationale de France, 75013 Paris",
        description: "Participez à un événement de lecture et de dédicace à la Bibliothèque nationale de France, une occasion de rencontrer des auteurs et d'explorer des œuvres littéraires.",
        img: "https://images.unsplash.com/photo-1572953109213-3be62398eb95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "culture",
        title: 'Festival culturel',
        address: "La Villette, 75019 Paris",
        description: "Venez profiter d'un festival culturel à La Villette avec de la nourriture, de la musique et des performances artistiques, une fête pour tous les sens.",
        img: "https://images.unsplash.com/photo-1474899351970-ee05f7dd1334?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "culture",
        title: 'Projection film Cinémathèque',
        address: "Cinémathèque Française, 75012 Paris",
        description: "Assistez à une projection de film suivie d'une discussion à la Cinémathèque Française, un rendez-vous pour les cinéphiles.",
        img: "https://images.unsplash.com/photo-1604355714851-c1d5990e1696?q=80&w=3368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "culture",
        title: 'Conférence enjeux contemporains',
        address: "Sorbonne Université, 75005 Paris",
        description: "Assistez à une conférence publique à la Sorbonne Université sur les enjeux contemporains, animée par des experts et des universitaires.",
        img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "culture",
        title: 'Inauguration exposition',
        address: "Galerie Perrotin, 75003 Paris",
        description: "Découvrez l'inauguration d'une nouvelle exposition à la Galerie Perrotin, mettant en avant le travail d'un artiste contemporain émergent.",
        img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "culture",
        title: 'Performance de ballet',
        address: "Opéra Garnier, 75009 Paris",
        description: "Assistez à une performance de ballet à l'Opéra Garnier, un spectacle de danse classique dans un cadre somptueux.",
        img: "https://images.unsplash.com/photo-1516307365426-bea591f05011?q=80&w=3259&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "culture",
        title: 'Soirée opéra',
        address: "Opéra Bastille, 75012 Paris",
        description: "Profitez d'une soirée d'opéra à l'Opéra Bastille, avec des arias célèbres interprétées par des chanteurs de renommée internationale.",
        img: "https://images.unsplash.com/photo-1516307365426-bea591f05011?q=80&w=3259&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "culture",
        title: 'Exposition scientifique',
        address: "Cité des Sciences et de l'Industrie, 75019 Paris",
        description: "Visitez une exposition scientifique sur l'exploration spatiale à la Cité des Sciences et de l'Industrie, une aventure éducative pour tous les âges.",
        img: "https://images.unsplash.com/photo-1572953109213-3be62398eb95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "culture",
        title: 'Foire artisanale',
        address: "Marché des Enfants Rouges, 75003 Paris",
        description: "Parcourez la foire artisanale au Marché des Enfants Rouges et découvrez des produits faits main uniques et créatifs.",
        img: "https://images.unsplash.com/photo-1474899351970-ee05f7dd1334?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "culture",
        title: 'Débat sur les enjeux politiques',
        address: "Maison de la Radio, 75016 Paris",
        description: "Assistez à un débat sur les enjeux politiques actuels à la Maison de la Radio, animé par des journalistes et des experts.",
        img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "culture",
        title: 'Défilé de mode',
        address: "Palais de Tokyo, 75116 Paris",
        description: "Assistez à un défilé de mode au Palais de Tokyo, mettant en vedette des créations de designers locaux et internationaux.",
        img: "https://images.unsplash.com/photo-1554881070-74595ca2b74c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
        // Nature Activities
    {
        category: "nature",
        title: 'Promenade dans le Jardin des Plantes',
        address: "Jardin des Plantes, 75005 Paris",
        description: "Promenez-vous dans le Jardin des Plantes, un vaste jardin botanique avec une grande variété de plantes, serres tropicales, et une ménagerie.",
        img: "https://images.unsplash.com/photo-1688510563600-387f57a2df32?q=80&w=3268&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: true
    },
    {
        category: "nature",
        title: 'Exploration du bois du boulogne',
        address: "Bois de Boulogne, 75016 Paris",
        description: "Explorez le Bois de Boulogne, un immense parc urbain offrant des sentiers de randonnée, des lacs pour faire du canotage, et des jardins paysagers.",
        img: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: true
    },
    {
        category: "nature",  
        title: 'Détente au Parc des Buttes-Chaumont',          
        address: "Parc des Buttes-Chaumont, 75019 Paris",
        description: "Détendez-vous au Parc des Buttes-Chaumont, un parc pittoresque avec des falaises escarpées, des cascades, et des vues panoramiques sur la ville.",
        img: "https://images.unsplash.com/photo-1688510563600-387f57a2df32?q=80&w=3268&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "nature",
        title: 'Visite du Parc Monceau',
        address: "Parc Monceau, 75008 Paris",
        description: "Visitez le Parc Monceau, un parc élégant du 19ème siècle avec des statues, des ponts et un grand étang, idéal pour une promenade paisible.",
        img: "https://images.unsplash.com/photo-1605494110660-61bdc11ab9ca?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "nature",
        title: 'Découvrir le Bois de Vincennes',
        address: "Bois de Vincennes, 75012 Paris",
        description: "Découvrez le Bois de Vincennes, le plus grand espace vert de Paris, offrant des sentiers de randonnée, un zoo, des jardins botaniques et un lac pour faire du bateau.",
        img: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "nature",
        title: 'Espaces verts du Parc de la Vilette',
        address: "Parc de la Villette, 75019 Paris",
        description: "Profitez des espaces verts du Parc de la Villette, avec ses jardins thématiques, ses installations artistiques et ses événements en plein air.",
        img: "https://images.unsplash.com/photo-1585938389612-a552a28d6914?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "nature",
        title: 'Jardin du Luxembourg',
        address: "Jardin du Luxembourg, 75006 Paris",
        description: "Promenez-vous dans le Jardin du Luxembourg, célèbre pour ses magnifiques parterres de fleurs, ses sculptures et son grand bassin central.",
        img: "https://images.unsplash.com/photo-1585938389612-a552a28d6914?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "nature",
        title: 'Parc de Bercy',
        address: "Parc de Bercy, 75012 Paris",
        description: "Explorez le Parc de Bercy, un espace vert moderne avec des jardins à thème, des vignes, et des aires de jeux pour enfants.",
        img: "https://images.unsplash.com/photo-1585938389612-a552a28d6914?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "nature",
        title: 'Découvrir le Parc André Citroën',
        address: "Parc André Citroën, 75015 Paris",
        description: "Découvrez le Parc André Citroën, un parc contemporain avec des serres tropicales, des jardins en mouvement et une vue panoramique depuis le ballon captif.",
        img: "https://images.unsplash.com/photo-1605494110660-61bdc11ab9ca?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "nature",
        title: "Visiter le Jardin d'Acclimatation",
        address: "Jardin d'Acclimatation, 75116 Paris",
        description: "Visitez le Jardin d'Acclimatation, un parc d'attractions historique avec des jardins, des manèges et des activités pour toute la famille.",
        img: "https://images.unsplash.com/photo-1688510563600-387f57a2df32?q=80&w=3268&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "nature",
        title: 'Détendez-vous au Square du Vert-Galant',
        address: "Square du Vert-Galant, 75001 Paris",
        description: "Détendez-vous au Square du Vert-Galant, un petit jardin charmant situé à la pointe de l'Île de la Cité, offrant une vue imprenable sur la Seine.",
        img: "https://images.unsplash.com/photo-1605494110660-61bdc11ab9ca?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "nature",
        title: 'Explorez le Parc Floral de Paris',
        address: "Parc Floral de Paris, 75012 Paris",
        description: "Explorez le Parc Floral de Paris, un grand jardin botanique avec des collections de plantes, des concerts en plein air et des aires de jeux.",
        img: "https://images.unsplash.com/photo-1585938389612-a552a28d6914?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "nature",
        title: 'Promenez-vous dans le Jardin des Tuileries',
        address: "Jardin des Tuileries, 75001 Paris",
        description: "Promenez-vous dans le Jardin des Tuileries, un parc historique entre le Louvre et la Place de la Concorde, avec des statues, des bassins et des allées ombragées.",
        img: "https://images.unsplash.com/photo-1665952556523-c5ec4a157443?q=80&w=3333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "nature",
        title: 'Détente au Parc Montsouris',
        address: "Parc Montsouris, 75014 Paris",
        description: "Détendez-vous au Parc Montsouris, un grand parc avec des pelouses, des lacs artificiels et des sentiers ombragés, parfait pour un pique-nique.",
        img: "https://images.unsplash.com/photo-1605494110660-61bdc11ab9ca?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    },
    {
        category: "nature",
        title: 'Vues panoramiques sur Paris',
        address: "Parc de Belleville, 75020 Paris",
        description: "Profitez des vues panoramiques sur Paris depuis le Parc de Belleville, un parc en terrasses avec des jardins, des aires de jeux et des œuvres d'art.",
        img: "https://images.unsplash.com/photo-1701467562238-eb3a726e3dc4?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        popular: false
    }
    ]
    
 export default activities;  
