const body = $("body");
const header = $("#header");
const main = $("#main");
const footer = $("#footer");
// console.log(header[0].innerHTML);

const animes = [
  {
    id: 1,
    animeName: "Steins;Gate",
    Characters: ["Okabe Rintarou", "Makise, Kurisu"],
    imageSrc: "https://cdn.myanimelist.net/images/anime/1935/127974l.jpg",
    description: `Eccentric scientist Rintarou Okabe has a never-ending thirst for scientific exploration. Together with his ditzy but well-meaning friend Mayuri Shiina and his roommate Itaru Hashida, Rintarou founds the Future Gadget Laboratory in the hopes of creating technological innovations that baffle the human psyche. Despite claims of grandeur, the only notable "gadget" the trio have created is a microwave that has the mystifying power to turn bananas into green goo.
    
        However, when Rintarou decides to attend neuroscientist Kurisu Makise's conference on time travel, he experiences a series of strange events that lead him to believe that there is more to the "Phone Microwave" gadget than meets the eye. Apparently able to send text messages into the past using the microwave, Rintarou dabbles further with the "time machine," attracting the ire and attention of the mysterious organization SERN.
        
        Due to the novel discovery, Rintarou and his friends find themselves in an ever-present danger. As he works to mitigate the damage his invention has caused to the timeline, he is not only fighting a battle to save his loved ones, but also one against his degrading sanity.`,
    rate: 9.07,
    Genres: ["Drama", "Sci-Fi", "Suspense"],
    type: "TV",
    Studios: "White Fox",
  },
  {
    id: 2,
    animeName: "Vinland Saga",
    Characters: ["Thorfinn", "Askeladd"],
    imageSrc: "https://cdn.myanimelist.net/images/anime/1500/103005l.jpg",
    description: `Young Thorfinn grew up listening to the stories of old sailors that had traveled the ocean and reached the place of legend, Vinland. It's said to be warm and fertile, a place where there would be no need for fighting—not at all like the frozen village in Iceland where he was born, and certainly not like his current life as a mercenary. War is his home now. Though his father once told him, "You have no enemies, nobody does. There is nobody who it's okay to hurt," as he grew, Thorfinn knew that nothing was further from the truth.

    The war between England and the Danes grows worse with each passing year. Death has become commonplace, and the viking mercenaries are loving every moment of it. Allying with either side will cause a massive swing in the balance of power, and the vikings are happy to make names for themselves and take any spoils they earn along the way. Among the chaos, Thorfinn must take his revenge and kill Askeladd, the man who murdered his father. The only paradise for the vikings, it seems, is the era of war and death that rages on.`,
    rate: 8.75,
    Genres: ["Action", "Adventure", "Drama"],
    type: "TV",
    Studios: "Wit Studio",
  },
  {
    id: 3,
    animeName: "Shigatsu wa Kimi no Uso",
    Characters: ["Miyazono, Kaori", "Arima, Kousei"],
    imageSrc: "https://cdn.myanimelist.net/images/anime/3/67177l.jpg",
    description: `Kousei Arima is a child prodigy known as the "Human Metronome" for playing the piano with precision and perfection. Guided by a strict mother and rigorous training, Kousei dominates every competition he enters, earning the admiration of his musical peers and praise from audiences. When his mother suddenly passes away, the subsequent trauma makes him unable to hear the sound of a piano, and he never takes the stage thereafter.

    Nowadays, Kousei lives a quiet and unassuming life as a junior high school student alongside his friends Tsubaki Sawabe and Ryouta Watari. While struggling to get over his mother's death, he continues to cling to music. His monochrome life turns upside down the day he encounters the eccentric violinist Kaori Miyazono, who thrusts him back into the spotlight as her accompanist. Through a little lie, these two young musicians grow closer together as Kaori tries to fill Kousei's world with color.
    `,
    rate: 8.65,
    Genres: ["Drama", "Romance", ""],
    type: "TV",
    Studios: "A-1 Pictures",
  },
  {
    id: 4,
    animeName: "Violet Evergarden",
    Characters: ["Evergarden, Violet", "Bougainvillea, Gilbert"],
    imageSrc:
      "https://cdn.myanimelist.net/images/anime/1795/95088l.jpg?_gl=1*81trfa*_ga*MjU0NDY1OTIzLjE2NzkzMDQ2NzY.*_ga_26FEP9527K*MTcwMDY3NDIxNi4xMy4xLjE3MDA2NzU1MzQuNjAuMC4w",
    description: `The Great War finally came to an end after four long years of conflict; fractured in two, the continent of Telesis slowly began to flourish once again. Caught up in the bloodshed was Violet Evergarden, a young girl raised for the sole purpose of decimating enemy lines. Hospitalized and maimed in a bloody skirmish during the War's final leg, she was left with only words from the person she held dearest, but with no understanding of their meaning.

    Recovering from her wounds, Violet starts a new life working at CH Postal Services after a falling out with her new intended guardian family. There, she witnesses by pure chance the work of an "Auto Memory Doll," amanuenses that transcribe people's thoughts and feelings into words on paper. Moved by the notion, Violet begins work as an Auto Memory Doll, a trade that will take her on an adventure, one that will reshape the lives of her clients and hopefully lead to self-discovery.
    `,
    rate: 8.67,
    Genres: ["Drama", "Fantasy"],
    type: "TV",
    Studios: "Kyoto Animation",
  },
  {
    id: 5,
    animeName: "Guilty Crown",
    Characters: ["Yuzuriha, Inori", "Ouma, Shuu"],
    imageSrc: "https://cdn.myanimelist.net/images/anime/1566/133912l.jpg",
    description: `On December 24, 2029—the day colloquially known as the "Lost Christmas"—the Apocalypse Virus spread across Japan, bringing death to its citizens and plunging the country into utter chaos. In an effort to establish order, the United Nations sends the GHQ to assist with the crisis by containing the outbreak while removing all political autonomy in the process. A decade later, the country still lives under their control, unable to break free from their draconian rule.

    Frustrated with the state of the nation, a resistance group named the Funeral Parlor aims to liberate Japan from the GHQ. Led by the charismatic Gai Tsutsugami, the group plots to steal a vial containing the "Void Genome" to further their goals. The vial falls into the hands of internet vocalist Inori Yuzuriha, who ends up being hunted by the GHQ's Anti-Bodies forces. Having nowhere to go, she seeks refuge in a warehouse where she meets Shuu Ouma—a socially awkward high school student who is a huge fan of her music.
    
    Shuu gets dragged into the conflict the moment he rescues Inori, and the Void Genome shatters in his hand, granting him the "Power of the Kings." While learning how to control his grand new ability, Shuu must now fight to liberate Japan from its cruel oppressors.
    `,
    rate: 7.41,
    Genres: ["Action", "Drama", "Sci-Fi"],
    type: "TV",
    Studios: "Production I.G",
  },
  {
    id: 6,
    animeName: "Fate/Zero",
    Characters: ["Saber", "Emiya, Kiritsugu"],
    imageSrc: "https://cdn.myanimelist.net/images/anime/1345/98624l.jpg",
    description: `With the promise of granting any wish, the omnipotent Holy Grail triggered three wars in the past, each too cruel and fierce to leave a victor. In spite of that, the wealthy Einzbern family is confident that the Fourth Holy Grail War will be different; namely, with a vessel of the Holy Grail now in their grasp. Solely for this reason, the much hated "Magus Killer" Kiritsugu Emiya is hired by the Einzberns, with marriage to their only daughter Irisviel as binding contract.

    Kiritsugu now stands at the center of a cutthroat game of survival, facing off against six other participants, each armed with an ancient familiar, and fueled by unique desires and ideals. Accompanied by his own familiar, Saber, the notorious mercenary soon finds his greatest opponent in Kirei Kotomine, a priest who seeks salvation from the emptiness within himself in pursuit of Kiritsugu.
    
    Based on the light novel written by Gen Urobuchi, Fate/Zero depicts the events of the Fourth Holy Grail War—10 years prior to Fate/stay night. Witness a battle royale in which no one is guaranteed to survive.
    `,
    rate: 8.28,
    Genres: ["Action", "Fantasy", "Supernatural"],
    type: "TV",
    Studios: "ufotable",
  },
  {
    id: 7,
    animeName: "Fate/Zero",
    Characters: ["Saber", "Emiya, Kiritsugu"],
    imageSrc: "https://cdn.myanimelist.net/images/anime/1345/98624l.jpg",
    description: `With the promise of granting any wish, the omnipotent Holy Grail triggered three wars in the past, each too cruel and fierce to leave a victor. In spite of that, the wealthy Einzbern family is confident that the Fourth Holy Grail War will be different; namely, with a vessel of the Holy Grail now in their grasp. Solely for this reason, the much hated "Magus Killer" Kiritsugu Emiya is hired by the Einzberns, with marriage to their only daughter Irisviel as binding contract.

    Kiritsugu now stands at the center of a cutthroat game of survival, facing off against six other participants, each armed with an ancient familiar, and fueled by unique desires and ideals. Accompanied by his own familiar, Saber, the notorious mercenary soon finds his greatest opponent in Kirei Kotomine, a priest who seeks salvation from the emptiness within himself in pursuit of Kiritsugu.
    
    Based on the light novel written by Gen Urobuchi, Fate/Zero depicts the events of the Fourth Holy Grail War—10 years prior to Fate/stay night. Witness a battle royale in which no one is guaranteed to survive.
    `,
    rate: 8.28,
    Genres: ["Action", "Fantasy", "Supernatural"],
    type: "TV",
    Studios: "ufotable",
  },
  {
    id: 8,
    animeName: "Fate/Zero",
    Characters: ["Saber", "Emiya, Kiritsugu"],
    imageSrc: "https://cdn.myanimelist.net/images/anime/1345/98624l.jpg",
    description: `With the promise of granting any wish, the omnipotent Holy Grail triggered three wars in the past, each too cruel and fierce to leave a victor. In spite of that, the wealthy Einzbern family is confident that the Fourth Holy Grail War will be different; namely, with a vessel of the Holy Grail now in their grasp. Solely for this reason, the much hated "Magus Killer" Kiritsugu Emiya is hired by the Einzberns, with marriage to their only daughter Irisviel as binding contract.

    Kiritsugu now stands at the center of a cutthroat game of survival, facing off against six other participants, each armed with an ancient familiar, and fueled by unique desires and ideals. Accompanied by his own familiar, Saber, the notorious mercenary soon finds his greatest opponent in Kirei Kotomine, a priest who seeks salvation from the emptiness within himself in pursuit of Kiritsugu.
    
    Based on the light novel written by Gen Urobuchi, Fate/Zero depicts the events of the Fourth Holy Grail War—10 years prior to Fate/stay night. Witness a battle royale in which no one is guaranteed to survive.
    `,
    rate: 8.28,
    Genres: ["Action", "Fantasy", "Supernatural"],
    type: "TV",
    Studios: "ufotable",
  },
  {
    id: 9,
    animeName: "Fate/Zero",
    Characters: ["Saber", "Emiya, Kiritsugu"],
    imageSrc: "https://cdn.myanimelist.net/images/anime/1345/98624l.jpg",
    description: `With the promise of granting any wish, the omnipotent Holy Grail triggered three wars in the past, each too cruel and fierce to leave a victor. In spite of that, the wealthy Einzbern family is confident that the Fourth Holy Grail War will be different; namely, with a vessel of the Holy Grail now in their grasp. Solely for this reason, the much hated "Magus Killer" Kiritsugu Emiya is hired by the Einzberns, with marriage to their only daughter Irisviel as binding contract.

    Kiritsugu now stands at the center of a cutthroat game of survival, facing off against six other participants, each armed with an ancient familiar, and fueled by unique desires and ideals. Accompanied by his own familiar, Saber, the notorious mercenary soon finds his greatest opponent in Kirei Kotomine, a priest who seeks salvation from the emptiness within himself in pursuit of Kiritsugu.
    
    Based on the light novel written by Gen Urobuchi, Fate/Zero depicts the events of the Fourth Holy Grail War—10 years prior to Fate/stay night. Witness a battle royale in which no one is guaranteed to survive.
    `,
    rate: 8.28,
    Genres: ["Action", "Fantasy", "Supernatural"],
    type: "TV",
    Studios: "ufotable",
  },
  {
    id: 10,
    animeName: "Fate/Zero",
    Characters: ["Saber", "Emiya, Kiritsugu"],
    imageSrc: "https://cdn.myanimelist.net/images/anime/1345/98624l.jpg",
    description: `With the promise of granting any wish, the omnipotent Holy Grail triggered three wars in the past, each too cruel and fierce to leave a victor. In spite of that, the wealthy Einzbern family is confident that the Fourth Holy Grail War will be different; namely, with a vessel of the Holy Grail now in their grasp. Solely for this reason, the much hated "Magus Killer" Kiritsugu Emiya is hired by the Einzberns, with marriage to their only daughter Irisviel as binding contract.

    Kiritsugu now stands at the center of a cutthroat game of survival, facing off against six other participants, each armed with an ancient familiar, and fueled by unique desires and ideals. Accompanied by his own familiar, Saber, the notorious mercenary soon finds his greatest opponent in Kirei Kotomine, a priest who seeks salvation from the emptiness within himself in pursuit of Kiritsugu.
    
    Based on the light novel written by Gen Urobuchi, Fate/Zero depicts the events of the Fourth Holy Grail War—10 years prior to Fate/stay night. Witness a battle royale in which no one is guaranteed to survive.
    `,
    rate: 8.28,
    Genres: ["Action", "Fantasy", "Supernatural"],
    type: "TV",
    Studios: "ufotable",
  },
  {
    id: 11,
    animeName: "Fate/Zero",
    Characters: ["Saber", "Emiya, Kiritsugu"],
    imageSrc: "https://cdn.myanimelist.net/images/anime/1345/98624l.jpg",
    description: `With the promise of granting any wish, the omnipotent Holy Grail triggered three wars in the past, each too cruel and fierce to leave a victor. In spite of that, the wealthy Einzbern family is confident that the Fourth Holy Grail War will be different; namely, with a vessel of the Holy Grail now in their grasp. Solely for this reason, the much hated "Magus Killer" Kiritsugu Emiya is hired by the Einzberns, with marriage to their only daughter Irisviel as binding contract.

    Kiritsugu now stands at the center of a cutthroat game of survival, facing off against six other participants, each armed with an ancient familiar, and fueled by unique desires and ideals. Accompanied by his own familiar, Saber, the notorious mercenary soon finds his greatest opponent in Kirei Kotomine, a priest who seeks salvation from the emptiness within himself in pursuit of Kiritsugu.
    
    Based on the light novel written by Gen Urobuchi, Fate/Zero depicts the events of the Fourth Holy Grail War—10 years prior to Fate/stay night. Witness a battle royale in which no one is guaranteed to survive.
    `,
    rate: 8.28,
    Genres: ["Action", "Fantasy", "Supernatural"],
    type: "TV",
    Studios: "ufotable",
  },
  {
    id: 12,
    animeName: "Fate/Zero",
    Characters: ["Saber", "Emiya, Kiritsugu"],
    imageSrc: "https://cdn.myanimelist.net/images/anime/1345/98624l.jpg",
    description: `With the promise of granting any wish, the omnipotent Holy Grail triggered three wars in the past, each too cruel and fierce to leave a victor. In spite of that, the wealthy Einzbern family is confident that the Fourth Holy Grail War will be different; namely, with a vessel of the Holy Grail now in their grasp. Solely for this reason, the much hated "Magus Killer" Kiritsugu Emiya is hired by the Einzberns, with marriage to their only daughter Irisviel as binding contract.

    Kiritsugu now stands at the center of a cutthroat game of survival, facing off against six other participants, each armed with an ancient familiar, and fueled by unique desires and ideals. Accompanied by his own familiar, Saber, the notorious mercenary soon finds his greatest opponent in Kirei Kotomine, a priest who seeks salvation from the emptiness within himself in pursuit of Kiritsugu.
    
    Based on the light novel written by Gen Urobuchi, Fate/Zero depicts the events of the Fourth Holy Grail War—10 years prior to Fate/stay night. Witness a battle royale in which no one is guaranteed to survive.
    `,
    rate: 8.28,
    Genres: ["Action", "Fantasy", "Supernatural"],
    type: "TV",
    Studios: "ufotable",
  },
  {
    id: 13,
    animeName: "Fate/Zero",
    Characters: ["Saber", "Emiya, Kiritsugu"],
    imageSrc: "https://cdn.myanimelist.net/images/anime/1345/98624l.jpg",
    description: `With the promise of granting any wish, the omnipotent Holy Grail triggered three wars in the past, each too cruel and fierce to leave a victor. In spite of that, the wealthy Einzbern family is confident that the Fourth Holy Grail War will be different; namely, with a vessel of the Holy Grail now in their grasp. Solely for this reason, the much hated "Magus Killer" Kiritsugu Emiya is hired by the Einzberns, with marriage to their only daughter Irisviel as binding contract.

    Kiritsugu now stands at the center of a cutthroat game of survival, facing off against six other participants, each armed with an ancient familiar, and fueled by unique desires and ideals. Accompanied by his own familiar, Saber, the notorious mercenary soon finds his greatest opponent in Kirei Kotomine, a priest who seeks salvation from the emptiness within himself in pursuit of Kiritsugu.
    
    Based on the light novel written by Gen Urobuchi, Fate/Zero depicts the events of the Fourth Holy Grail War—10 years prior to Fate/stay night. Witness a battle royale in which no one is guaranteed to survive.
    `,
    rate: 8.28,
    Genres: ["Action", "Fantasy", "Supernatural"],
    type: "TV",
    Studios: "ufotable",
  },
];

const renderAnimesList = (array) => {
  array.forEach((elem, i) => {
    const animeDiv = $(`<div class="anime-div" id="${elem.id}"></div>`);
    const animeImage = $(
      `<img class="anime-img" src="${elem.imageSrc}" alt="${elem.animeName}"/>`
    );
const animeName = $(`<p class="anime-name">${elem.animeName}</p>`)
    animeDiv.append(animeImage,animeName);
    main.append(animeDiv);
  });
};

renderAnimesList(animes);
