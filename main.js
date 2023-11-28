//* /////////////////////// data from API ////////////////////

$.ajax({
  url: "https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0",
  success: (data) => {
    dataFromApi(data.data);
  },
  error: (err) => {
    dataFromApi(err.statusText);
  },
});

// let animesFromApi;
const dataFromApi = (animesFromApi) => {
  // animesFromApi = data;

  console.log("animesFromApi", animesFromApi);
  //* ////////////////// anime test array of objects ///////////////

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
      trailerSrc: `https://www.youtube.com/embed/LwcTi86cFeg`,
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
      trailerSrc: "https://www.youtube.com/embed/watch?v=LwcTi86cFeg",
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
      trailerSrc: "https://www.youtube.com/embed/watch?v=LwcTi86cFeg",
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
      trailerSrc: "https://www.youtube.com/embed/watch?v=LwcTi86cFeg",
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
      trailerSrc: "https://www.youtube.com/embed/watch?v=LwcTi86cFeg",
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
      trailerSrc: "https://www.youtube.com/embed/watch?v=LwcTi86cFeg",
    },
    {
      id: 7,
      animeName: "Steins;Gate Movie",
      Characters: ["Okabe Rintarou", "Makise, Kurisu"],
      imageSrc: "https://cdn.myanimelist.net/images/anime/1935/127974l.jpg",
      description: `Eccentric scientist Rintarou Okabe has a never-ending thirst for scientific exploration. Together with his ditzy but well-meaning friend Mayuri Shiina and his roommate Itaru Hashida, Rintarou founds the Future Gadget Laboratory in the hopes of creating technological innovations that baffle the human psyche. Despite claims of grandeur, the only notable "gadget" the trio have created is a microwave that has the mystifying power to turn bananas into green goo.
    
        However, when Rintarou decides to attend neuroscientist Kurisu Makise's conference on time travel, he experiences a series of strange events that lead him to believe that there is more to the "Phone Microwave" gadget than meets the eye. Apparently able to send text messages into the past using the microwave, Rintarou dabbles further with the "time machine," attracting the ire and attention of the mysterious organization SERN.
        
        Due to the novel discovery, Rintarou and his friends find themselves in an ever-present danger. As he works to mitigate the damage his invention has caused to the timeline, he is not only fighting a battle to save his loved ones, but also one against his degrading sanity.`,
      rate: 9.07,
      Genres: ["Drama", "Sci-Fi", "Suspense"],
      type: "Movie",
      Studios: "White Fox",
      trailerSrc: `https://www.youtube.com/embed/LwcTi86cFeg`,
    },
    {
      id: 8,
      animeName: "Vinland Saga Movie",
      Characters: ["Thorfinn", "Askeladd"],
      imageSrc: "https://cdn.myanimelist.net/images/anime/1500/103005l.jpg",
      description: `Young Thorfinn grew up listening to the stories of old sailors that had traveled the ocean and reached the place of legend, Vinland. It's said to be warm and fertile, a place where there would be no need for fighting—not at all like the frozen village in Iceland where he was born, and certainly not like his current life as a mercenary. War is his home now. Though his father once told him, "You have no enemies, nobody does. There is nobody who it's okay to hurt," as he grew, Thorfinn knew that nothing was further from the truth.

    The war between England and the Danes grows worse with each passing year. Death has become commonplace, and the viking mercenaries are loving every moment of it. Allying with either side will cause a massive swing in the balance of power, and the vikings are happy to make names for themselves and take any spoils they earn along the way. Among the chaos, Thorfinn must take his revenge and kill Askeladd, the man who murdered his father. The only paradise for the vikings, it seems, is the era of war and death that rages on.`,
      rate: 8.75,
      Genres: ["Action", "Adventure", "Drama"],
      type: "Movie",
      Studios: "Wit Studio",
      trailerSrc: "https://www.youtube.com/embed/watch?v=LwcTi86cFeg",
    },
    {
      id: 9,
      animeName: "Shigatsu wa Kimi no Uso Movie",
      Characters: ["Miyazono, Kaori", "Arima, Kousei"],
      imageSrc: "https://cdn.myanimelist.net/images/anime/3/67177l.jpg",
      description: `Kousei Arima is a child prodigy known as the "Human Metronome" for playing the piano with precision and perfection. Guided by a strict mother and rigorous training, Kousei dominates every competition he enters, earning the admiration of his musical peers and praise from audiences. When his mother suddenly passes away, the subsequent trauma makes him unable to hear the sound of a piano, and he never takes the stage thereafter.

    Nowadays, Kousei lives a quiet and unassuming life as a junior high school student alongside his friends Tsubaki Sawabe and Ryouta Watari. While struggling to get over his mother's death, he continues to cling to music. His monochrome life turns upside down the day he encounters the eccentric violinist Kaori Miyazono, who thrusts him back into the spotlight as her accompanist. Through a little lie, these two young musicians grow closer together as Kaori tries to fill Kousei's world with color.
    `,
      rate: 8.65,
      Genres: ["Drama", "Romance", ""],
      type: "Movie",
      Studios: "A-1 Pictures",
      trailerSrc: "https://www.youtube.com/embed/watch?v=LwcTi86cFeg",
    },
    {
      id: 10,
      animeName: "Violet Evergarden Movie",
      Characters: ["Evergarden, Violet", "Bougainvillea, Gilbert"],
      imageSrc:
        "https://cdn.myanimelist.net/images/anime/1795/95088l.jpg?_gl=1*81trfa*_ga*MjU0NDY1OTIzLjE2NzkzMDQ2NzY.*_ga_26FEP9527K*MTcwMDY3NDIxNi4xMy4xLjE3MDA2NzU1MzQuNjAuMC4w",
      description: `The Great War finally came to an end after four long years of conflict; fractured in two, the continent of Telesis slowly began to flourish once again. Caught up in the bloodshed was Violet Evergarden, a young girl raised for the sole purpose of decimating enemy lines. Hospitalized and maimed in a bloody skirmish during the War's final leg, she was left with only words from the person she held dearest, but with no understanding of their meaning.

    Recovering from her wounds, Violet starts a new life working at CH Postal Services after a falling out with her new intended guardian family. There, she witnesses by pure chance the work of an "Auto Memory Doll," amanuenses that transcribe people's thoughts and feelings into words on paper. Moved by the notion, Violet begins work as an Auto Memory Doll, a trade that will take her on an adventure, one that will reshape the lives of her clients and hopefully lead to self-discovery.
    `,
      rate: 8.67,
      Genres: ["Drama", "Fantasy"],
      type: "Movie",
      Studios: "Kyoto Animation",
      trailerSrc: "https://www.youtube.com/embed/watch?v=LwcTi86cFeg",
    },
    {
      id: 11,
      animeName: "Guilty Crown Movie",
      Characters: ["Yuzuriha, Inori", "Ouma, Shuu"],
      imageSrc: "https://cdn.myanimelist.net/images/anime/1566/133912l.jpg",
      description: `On December 24, 2029—the day colloquially known as the "Lost Christmas"—the Apocalypse Virus spread across Japan, bringing death to its citizens and plunging the country into utter chaos. In an effort to establish order, the United Nations sends the GHQ to assist with the crisis by containing the outbreak while removing all political autonomy in the process. A decade later, the country still lives under their control, unable to break free from their draconian rule.

    Frustrated with the state of the nation, a resistance group named the Funeral Parlor aims to liberate Japan from the GHQ. Led by the charismatic Gai Tsutsugami, the group plots to steal a vial containing the "Void Genome" to further their goals. The vial falls into the hands of internet vocalist Inori Yuzuriha, who ends up being hunted by the GHQ's Anti-Bodies forces. Having nowhere to go, she seeks refuge in a warehouse where she meets Shuu Ouma—a socially awkward high school student who is a huge fan of her music.
    
    Shuu gets dragged into the conflict the moment he rescues Inori, and the Void Genome shatters in his hand, granting him the "Power of the Kings." While learning how to control his grand new ability, Shuu must now fight to liberate Japan from its cruel oppressors.
    `,
      rate: 7.41,
      Genres: ["Action", "Drama", "Sci-Fi"],
      type: "Movie",
      Studios: "Production I.G",
      trailerSrc: "https://www.youtube.com/embed/watch?v=LwcTi86cFeg",
    },
    {
      id: 12,
      animeName: "Fate/Zero Movie",
      Characters: ["Saber", "Emiya, Kiritsugu"],
      imageSrc: "https://cdn.myanimelist.net/images/anime/1345/98624l.jpg",
      description: `With the promise of granting any wish, the omnipotent Holy Grail triggered three wars in the past, each too cruel and fierce to leave a victor. In spite of that, the wealthy Einzbern family is confident that the Fourth Holy Grail War will be different; namely, with a vessel of the Holy Grail now in their grasp. Solely for this reason, the much hated "Magus Killer" Kiritsugu Emiya is hired by the Einzberns, with marriage to their only daughter Irisviel as binding contract.

    Kiritsugu now stands at the center of a cutthroat game of survival, facing off against six other participants, each armed with an ancient familiar, and fueled by unique desires and ideals. Accompanied by his own familiar, Saber, the notorious mercenary soon finds his greatest opponent in Kirei Kotomine, a priest who seeks salvation from the emptiness within himself in pursuit of Kiritsugu.
    
    Based on the light novel written by Gen Urobuchi, Fate/Zero depicts the events of the Fourth Holy Grail War—10 years prior to Fate/stay night. Witness a battle royale in which no one is guaranteed to survive.
    `,
      rate: 8.28,
      Genres: ["Action", "Fantasy", "Supernatural"],
      type: "Movie",
      Studios: "ufotable",
      trailerSrc: "https://www.youtube.com/embed/watch?v=LwcTi86cFeg",
    },
  ];

  //! Main Features [Version 1]
  //(DONE) User should be able to view multiple movie posters.
  //(DONE) Each poster should be provided with an Image, Description, Rate, and Title.
  //(DONE) User should be able to view each poster.
  //(DONE) User should be able to add the movie to the favorite section.
  //(DONE) Page Show Item Details (Title, Description, Due Date/Time, Status, Likes Count, Price, Rate, Amount, etc)
  //(DONE) User should be able to view the favorite section.
  //(Done) Movies should be categorized.

  //(DONE) Local Storage Will Keep Favorite List
  //(DONE) Search Functionality (Title)
  //(DONE) Filter by Categories (Type, Status, Price, Rate, etc)
  //(DONE) Add/t Add/RemoveCreate New Item (add to cart || add to favorite)
  //(DONE) Edit/Update an Item ( Edit cart ||  Edit favorite)
  //(DONE) Remove/Delete an Item (Remove from cart || Remove from favorite)"

  //! Extra Features [Version 2]
  //(DONE) Login & Register functionality
  //(DONE) Fetching data from API
  //(DONE) Use CSS custom properties
  //(DONE) Change website color theme [ Dark, Light ]
  // - Fully responsive design for both mobile and desktop using CSS media queries
  // - Deploy the website using Netlify
  //(skipped) Admin Dashboard
  //(skipped) Class based [ OOP ]
  //(DONE) Link to Trailer

  //! my extra ideas and bugs.
  // anime-div separate each elem and add filter to it.
  // change the pointer to finger if there is an event listener
  // move the filter section to main page under search bar.
  // add remove from fav button to user page ul li
  // remove old sign-up log-in errors (create new div for errors) //! remove old errors
  // add the user name, AVATAR, and any other info to the user page.
  // filter by id ascending or descending
  // gave every new user his own fav list.

  //* /////////////////////// localStorage //////////////////////

  const favAnimesArray =
    JSON.parse(localStorage.getItem("favAnimesArray")) || [];
  const allUsers = JSON.parse(localStorage.getItem("allUsersArray")) || [
    { username: "admin", password: "admin" },
    { username: "ss", password: "ss" },
  ];
  let successfulLogIn = !!localStorage.getItem("successfulLogIn") || false;

  // console.log(typeof successfulLogIn);

  // console.log(allUsers);
  //* ////////////////// Fetching data from API ///////////////

  //   let animesArray;

  // if (animesFromApi === "error") { //! skipped for now to switch back to anime test array if API failed.

  // }
  //* ///////////////////////////////////////////////////////////

  // console.log(favAnimesArray);
  const body = $("body");
  const container = $("#container");
  const root = $(":root");

  const header = $("#header");
  const searchInput = $("#search-input");
  // const filterButton = $("#filter-button");

  const logInSignUpPage = $("#log-in-sign-up-page");
  const signUpDiv = $("#sign-up-div");
  const signUpUserName = $("#sign-up-user-name");
  const signUpPassword = $("#sign-up-password");
  const signUpPasswordAgain = $("#sign-up-password-again");
  const signUpButton = $("#sign-up-button");
  const logInDiv = $("#log-in-div");
  const logInUserName = $("#log-in-user-name");
  const logInPassword = $("#log-in-password");
  const logInButton = $("#log-in-button");
  const logInRules = $("#log-in-rules");
  const logOutButton = $("#log-out-button");
  const mainPage = $("#main-page");

  const userPage = $("#user-page");
  const userDiv = $("#user-div");
  const userImage = $("#user-image");
  const userFavDiv = $("#user-fav-div");
  const userFavUl = $("#user-fav-ul");

  const animePage = $("#anime-page");
  // const animePageImage = $("#anime-page-image");
  // const animePageDetails = $("#anime-page-details");
  // const animePageDescription = $("#anime-page-description");
  // const animePageTrailer = $("#anime-page-trailer");

  const filterPage = $("#filter-page");
  const filterDivAZ = $("#filter-div-a-z");
  const filterButtonAZ = $("#filter-button-a-z");
  const filterDivStudio = $("#filter-div-studio");
  const filterSelectStudio = $("#filter-select-studio");
  // const filterButtonStudio = $("#filter-button-studio");
  const filterDivMovie = $("#filter-div-movie");
  const filterButtonMovie = $("#filter-button-movie");
  const filterDivRatingRange = $("#filter-div-rating-range");
  const filterMinRatingRange = $("#filter-min-rating-range");
  const filterMaxRatingRange = $("#filter-max-rating-range");
  const filterButtonApplyRatingRange = $("#filter-button-apply-rating-range");
  const filterDivTopFav = $("#filter-div-top-fav");
  const filterButtonTopFav = $("#filter-button-top-fav");
  const filterDivTV = $("#filter-div-tv");
  const filterButtonTV = $("#filter-button-tv");

  const settingPopUp = $("#setting-pop-up");
  const darkButton = $("#dark-button");
  const lightButton = $("#light-button");
  const theme0 = $("#theme-0");
  const theme1 = $("#theme-1");
  const theme2 = $("#theme-2");

  const footer = $("#footer");
  // console.log(header[0].innerHTML);

  const home = $("#home");
  const homeButton = $("#home-button");

  const user = $("#user");
  const userButton = $("#user-button");

  // const topRated = $("#top-rated");
  // const topRatedButton = $("#top-rated-button");
  const filter = $("#filter");
  const filterButton = $("#filter-button");

  const setting = $("#setting");
  const settingButton = $("#setting-button");

  //* ////////////////////// HIDE / SHOW  //////////////////////////////

  // header.css("display", "grid");
  logInSignUpPage.hide();
  mainPage.css("display", "flex");
  // userPage.css("display","none");
  // animePage.css("display","none");
  // filterPage.css("display","none");
  userPage.hide();
  animePage.hide();
  filterPage.hide();
  // topRated.hide();
  settingPopUp.hide();
  lightButton.hide();

  //* //////// Add/remove Anime To User Fav {from home page} ////////////

  const removeFromFav = function () {
    $(`li.added-to-fav-${$(this).parent()[0].id}`).remove();
    // console.log(favAnimesArray);
    // favAnimesArray.splice()
    // const removedAnime = animesFromApi[$(this).parent()[0].id - 1];
    let removedAnime = animesFromApi.filter(
      (elem, i) => elem.id * 1 === $(this).parent()[0].id * 1
    );
    removedAnime = removedAnime[0];

    // console.log(removedAnime);

    // console.log($(this).parent()[0].id);

    let indexOfRemovedAnime = favAnimesArray
      .map(function (e) {
        return e.id;
      })
      .indexOf(removedAnime.id);

    // console.log(typeof favAnimesArray);
    favAnimesArray.splice(indexOfRemovedAnime, 1);

    const favAnimeArrayToString = JSON.stringify(favAnimesArray);
    localStorage.setItem("favAnimesArray", favAnimeArrayToString);

    $(this).html("FAV");
    $(this).off();
    $(this).click(addToFav);
    $(this).click(returnToHome);
  };

  const addToFav = function () {
    // console.log($(this).parent()[0].id);
    // console.log(animes[($(this).parent()[0].id-1)].animeName);

    console.log($(this).parent()[0].id);

    // const addedAnime = animesFromApi[$(this).parent()[0].id - 1];
    // const addedAnime = animesFromApi.some((ele, i) => {
    //   if (ele.id * 1 === $(this).parent()[0].id * 1) {
    //     return animesFromApi[i];
    //   }
    // });
    let addedAnime = animesFromApi.filter(
      (elem, i) => elem.id * 1 === $(this).parent()[0].id * 1
    );
    addedAnime = addedAnime[0];

    // console.log(addedAnime);

    const newAddedToFav = $(`<li>${addedAnime.attributes.titles.en}</li>`);
    newAddedToFav.addClass(`added-to-fav-${addedAnime.id}`);
    userFavUl.append(newAddedToFav);

    favAnimesArray.push(addedAnime);
    const favAnimeArrayToString = JSON.stringify(favAnimesArray);
    localStorage.setItem("favAnimesArray", favAnimeArrayToString);

    $(this).html("FAVed");
    $(this).off();
    $(this).click(removeFromFav);
    $(this).click(returnToHome);
  };

  const returnToHome = function () {
    setTimeout(() => {
      // header.css("display", "grid");
      logInSignUpPage.hide();
      mainPage.css("display", "flex");
      userPage.hide();
      animePage.hide();
      filterPage.hide();
    }, 0);
  };

  //* //////////////// go to anime page /////////////////////

  const goToAnimePage = function () {
    // header.hide();
    logInSignUpPage.hide();
    mainPage.hide();
    userPage.hide();
    animePage.show();
    filterPage.hide();
    animePage.html("");

    //* ///////////

    const animePageImageDiv = $(`<div id="anime-page-image-div"></div>`);
    const animePageDetailsDiv = $(`<div id="anime-page-details-div"></div>`);
    const animePageDescriptionDiv = $(
      `<div id="anime-page-description-div"></div>`
    );
    const animePageTrailerDiv = $(`<div id="anime-page-trailer-div"></div>`);

    animePage.append(
      animePageImageDiv,
      animePageDetailsDiv,
      animePageDescriptionDiv,
      animePageTrailerDiv
    );

    // console.log(animes[$(this)[0].id - 1]);
    // const animeInfo = animesFromApi[$(this)[0].id - 1];
    // console.log($(this)[0]);
    let animeInfo = animesFromApi.filter(
      (elem, i) => elem.id * 1 === $(this)[0].id * 1
    );

    animeInfo = animeInfo[0];

    // console.log(animeInfo);

    //* ///////////

    const animeImage = $(
      `<img src="${animeInfo.attributes.posterImage.small}" alt="${animeInfo.attributes.titles.en}"/>`
    );
    animeImage.addClass("anime-page-img");

    const animeBg = $(
      `<img src="${animeInfo.attributes.posterImage.small}" alt="${animeInfo.attributes.titles.en}"/>`
    );
    animeBg.addClass("anime-page-bg");

    const animeName = $(`<p>${animeInfo.attributes.titles.en}</p>`);
    animeName.addClass("anime-page-name");

    // const AnimeGenresArray = animeInfo.Genres.join(" ");
    // const animeGenre = $(`<p>${AnimeGenresArray}</p>`);
    // animeGenre.addClass("anime-page-genre");

    // const animeStudio = $(`<p>${animeInfo.Studios}</p>`);
    // animeStudio.addClass("anime-page-studio");

    const animeType = $(`<p>${animeInfo.attributes.showType}</p>`);
    animeType.addClass("anime-page-type");

    const animeFav = $(`<p>FAV</p>`);
    animeFav.addClass("anime-page-fav");
    animeFav.click(addToFav);
    animeFav.click(returnToHome); //! click on both FAV and animeDiv at the same time

    const animeRate = $(
      `<p>${Math.floor(animeInfo.attributes.averageRating * 10) / 100}</p>`
    );
    animeRate.addClass("anime-page-rate");

    const animeDescription = $(`<p>${animeInfo.attributes.synopsis}</p>`);
    animeDescription.addClass("anime-page-description");

    // const animeTrailer = $(`<iframe src=${animeInfo.trailerSrc}></iframe>`);
    // animeTrailer.addClass("anime-trailer");

    //* ///////////

    animePageImageDiv.append(animeImage);

    animePageDetailsDiv.append(
      animeFav,
      animeName,
      animeRate,
      // animeGenre,
      // animeStudio,
      animeType
    );

    animePageDescriptionDiv.append(animeDescription);
    // animePageTrailerDiv.append(animeTrailer);
  };

  //* ///////////////////////////////////////////////////////
  //* ///////////////// Render main page ////////////////////
  //* ///////////////////////////////////////////////////////

  const renderAnimesList = (arrayOfAnimes) => {
    mainPage.html("");

    arrayOfAnimes.forEach((elem, i) => {
      const animeDiv = $(`<div  id="${elem.id}"></div>`);
      animeDiv.addClass("anime-div");

      const animeImage = $(
        `<img src="${elem.attributes.posterImage.small}" alt="${elem.attributes.titles.en}"/>`
      );
      animeImage.addClass("anime-img");

      const animeBg = $(
        `<img src="${elem.attributes.posterImage.small}" alt="${elem.attributes.titles.en}"/>`
      );
      animeBg.addClass("anime-bg");

      const animeName = $(`<p>${elem.attributes.titles.en}</p>`);
      animeName.addClass("anime-name");

      // const AnimeGenresArray = elem.Genres.join(" ");
      // const animeGenre = $(`<p>${AnimeGenresArray}</p>`);
      // animeGenre.addClass("anime-genre");

      // const animeStudio = $(`<p>${elem.Studios}</p>`);
      // animeStudio.addClass("anime-studio");

      const animeType = $(`<p>${elem.attributes.showType}</p>`);
      animeType.addClass("anime-type");

      const animeFav = $(`<p>FAV</p>`);
      animeFav.addClass("anime-fav");
      animeFav.click(addToFav);
      animeFav.click(returnToHome); //! click on both FAV and animeDiv at the same time

      //* //// check if the anime is in fav list ////

      let indexOfFavedAnimes = favAnimesArray
        .map(function (e) {
          return e.id;
        })
        .indexOf(elem.id);
      // console.log(indexOfFavedAnimes);
      if (indexOfFavedAnimes >= 0) {
        // console.log("sss", indexOfFavedAnimes);
        // console.log(animeFav[0].innerText);
        // const addedAnime = animesFromApi[elem.id - 1];
        // const newAddedToFav = $(`<li>${addedAnime.animeName}</li>`);
        // console.log(elem);
        // let addedAnime = animesFromApi[indexOfFavedAnimes]
        // console.log(addedAnime); //! elem === addedAnime

        const newAddedToFav = $(`<li>${elem.attributes.titles.en}</li>`);

        newAddedToFav.addClass(`added-to-fav-${elem.id}`);
        userFavUl.append(newAddedToFav);

        animeFav.text("FAVED");
        animeFav.off();
        animeFav.click(removeFromFav);
        animeFav.click(returnToHome);
        // $("p.anime-fav").trigger("click") //! Trigger now working
        // animeFav.trigger("click")
        // const checkIfInFav = animes[$(this).parent()[0].id - 1];
        // console.log(favAnimesArray);

        // console.log(indexOfFavedAnimes);
      }

      //* ////

      const animeRate = $(
        `<p>${Math.floor(elem.attributes.averageRating * 10) / 100}</p>`
      );
      animeRate.addClass("anime-rate");

      animeDiv.append(
        animeBg,
        animeImage,
        animeName,
        // animeGenre,
        // animeStudio,
        animeType,
        animeFav,
        animeRate
      );

      animeDiv.click(goToAnimePage);

      mainPage.append(animeDiv);
    });
  };

  renderAnimesList(animesFromApi);

  //* ///////////////////////////////////////////////////////
  //* ///////////////////////////////////////////////////////
  //* ///////////////////////////////////////////////////////

  //* ////////////////// Events listeners ///////////////////

  searchInput.on("keyup", function () {
    // console.log($(this).val());

    let searchVal = $(this).val().toLowerCase();

    $(".anime-div").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(searchVal) > -1);
    });
  });

  homeButton.click(function () {
    logInSignUpPage.hide();
    mainPage.css("display", "flex");
    userPage.hide();
    animePage.hide();
    filterPage.hide();
    $(".anime-div").filter(function () {
      $(this).toggle(true);
    });
    searchInput.val("");
  });

  //* ///////////////////////////////////////////////////////

  userButton.click(function () {
    if (successfulLogIn) {
      //! change it with isValidLogIn function
      logInSignUpPage.hide();
      mainPage.hide();
      userPage.css("display", "grid");
      animePage.hide();
      filterPage.hide();
    } else {
      logInSignUpPage.css("display", "grid");
      mainPage.hide();
      userPage.hide();
      animePage.hide();
      filterPage.hide();
    }
  });

  //* ///////////////////////////////////////////////////////

  filterButton.click(function () {
    logInSignUpPage.hide();
    mainPage.hide();
    userPage.hide();
    animePage.hide();
    filterPage.show();
  });

  //* ///////////////////////////////////////////////////////

  filterButtonAZ.click(function () {
    //! will sort the original anime array ascending only.

    homeButton.trigger("click");

    // console.log($(".anime-div"));
    // console.log(animes);
    animesFromApi.sort((a, b) => {
      // console.log("A", a.animeName);
      // console.log("B", b.animeName);
      let nameA;
      a.attributes.titles.en === undefined
        ? (nameA = "undefined")
        : (nameA = a.attributes.titles.en.toLowerCase());

        let nameB;
        b.attributes.titles.en === undefined
          ? (nameB = "undefined")
          : (nameB = b.attributes.titles.en.toLowerCase());
      // console.log(nameA > nameB);
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    renderAnimesList(animesFromApi);
    // console.log(animes);
  });

  studiosArray = [];

  animesFromApi.forEach((elem, i) => {
    // console.log(elem.Studios);
    // console.log(studiosArray.includes(elem.Studios));
    if (!studiosArray.includes(elem.Studios)) studiosArray.push(elem.Studios);
  });

  // console.log(studiosArray);

  studiosArray.forEach((elem, i) => {
    const addStudioToSelectList = $(`<option value=""></option>`);
    addStudioToSelectList.text(`${elem}`);
    addStudioToSelectList.val(`${i}`);
    filterSelectStudio.append(addStudioToSelectList);
  });

  //* ///////////////////////////////////////////////////////

  filterSelectStudio.change(function () {
    homeButton.trigger("click");
    searchInput.val(studiosArray[filterSelectStudio.val()]);
    searchInput.trigger("keyup");
  });

  //* ///////////////////////////////////////////////////////

  filterButtonMovie.click(function () {
    homeButton.trigger("click");
    searchInput.val("Movie");
    searchInput.trigger("keyup");
  });

  let MinRatingRange = filterMinRatingRange.val() / 10;
  let MaxRatingRange = filterMaxRatingRange.val() / 10;

  filterMinRatingRange.change(function () {
    // console.log(filterMinRatingRange.val()/10);
    MinRatingRange = filterMinRatingRange.val() / 10;
  });
  // console.log(filterMaxRatingRange.val());
  filterMaxRatingRange.change(function () {
    // console.log(filterMaxRatingRange.val()/10);
    MaxRatingRange = filterMaxRatingRange.val() / 10;
  });

  filterButtonApplyRatingRange.click(function () {
    homeButton.trigger("click");

    if (MinRatingRange > MaxRatingRange) {
      let flipMaxMin = MaxRatingRange;
      MaxRatingRange = MinRatingRange;
      MinRatingRange = flipMaxMin;
    }
    console.log(`Rating range : ( ${MinRatingRange} - ${MaxRatingRange} ) `);

    // const ratingRange =

    // if(MinRatingRange < )

    //   let toArray = $(`.anime-rate`).text()
    // console.log(toArray);

    $(".anime-div").filter((elem, index) => {
      // console.log(Number($(`#${i+1} .anime-rate`)[0].innerText));

      // console.log(elem,index);

      const rateValue = Number($(`#${index.id} .anime-rate`)[0].innerText);

      console.log('rateValue', rateValue)
      // console.log($(this));
      $(`#${index.id}.anime-div`).toggle(
        MinRatingRange <= rateValue && rateValue <= MaxRatingRange
      );
    });

    // animes.forEach((elem,i)=> {
    //   console.log(elem.rate);
    // })
  });

  //* ///////////////////////////////////////////////////////

  filterButtonTopFav.click(function () {
    homeButton.trigger("click");

    $(".anime-div").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf("faved") > -1); //! must edit the string "faved" after changing the icon.
    });
  });

  //* ///////////////////////////////////////////////////////

  filterButtonTV.click(function () {
    homeButton.trigger("click");
    searchInput.val("TV");
    searchInput.trigger("keyup");
  });

  settingButton.click(function () {
    settingPopUp.toggle();
  });

  //! ///////////////////////////////////////////////////////
  //! ///////////////////Log-in Sign-up////////////////////////

  // const logInSignUpPage = $("#log-in-sign-up-page");
  // const signUpDiv = $("#sign-up-div");
  // const signUpUserName = $("#sign-up-user-name");
  // const signUpPassword = $("#sign-up-password");
  // const signUpPasswordAgain = $("#sign-up-password-again");
  // const signUpButton = $("#sign-up-button");
  // const logInDiv = $("#log-in-div");
  // const logInName = $("#log-in-user-name");
  // const logInPassword = $("#log-in-password");
  // const logInButton = $("#log-in-button");
  // const logInRules = $("#log-in-rules");

  let signUpInformation = { username: "", password: "" };
  let logInInformation = { username: "", password: "" };

  let signUpUserNameNew = "";
  let signUpPasswordNew = "";
  let signUpPasswordAgainNew = "";
  let logInUserNameNew = "";
  let logInPasswordNew = "";

  signUpUserName.change(function () {
    signUpUserNameNew = $(this).val().toLowerCase();
  });
  signUpPassword.change(function () {
    signUpPasswordNew = $(this).val();
  });
  signUpPasswordAgain.change(function () {
    signUpPasswordAgainNew = $(this).val();
  });
  logInUserName.change(function () {
    logInUserNameNew = $(this).val().toLowerCase();
  });
  logInPassword.change(function () {
    logInPasswordNew = $(this).val();
  });

  const isValidSignUp = (infoObject) => {
    if (infoObject.username.length < 6) {
      logInRules.remove($("div .usernameLength")); //! remove old errors
      $("p").removeClass("usernameLength"); //! remove old errors

      const usernameLength = $(`<p>User must be >= 6</p>`);
      usernameLength.addClass("username-length");
      return logInRules.append(usernameLength);
    }

    if (infoObject.password.length < 8) {
      const passwordLength = $(`<p>Password must be > 8</p>`);
      passwordLength.addClass("password-length");
      return logInRules.append(passwordLength);
    }

    if (
      allUsers.some(
        (ele) =>
          ele.username.toLowerCase() === infoObject.username.toLowerCase()
      )
    ) {
      const userNameTaken = $(`<p>User name already taken</p>`);
      userNameTaken.addClass("user-name-taken");
      return logInRules.append(userNameTaken);
    }

    if (signUpPasswordNew !== signUpPasswordAgainNew) {
      const passwordNotMatch = $(
        `<p>the re-entered password don't match the new password</p>`
      );
      passwordNotMatch.addClass("password-not-match");
      return logInRules.append(passwordNotMatch);
    }

    const registerSuccessful = $(
      `<p>Register Successful for user : ${infoObject.username.toLowerCase()}</p>`
    );
    registerSuccessful.addClass("register-successful");
    logInRules.append(registerSuccessful);
    allUsers.push(infoObject);

    const allUsersArrayToString = JSON.stringify(allUsers);
    localStorage.setItem("allUsersArray", allUsersArrayToString);
  };

  const isValidLogIn = (infoObject) => {
    if (
      !allUsers.some(
        (ele) =>
          ele.username.toLowerCase() === infoObject.username.toLowerCase()
      )
    ) {
      const userNameNotFound = $(`<p>User name not found in our database</p>`);
      userNameNotFound.addClass("user-name-not-found");
      return logInRules.append(userNameNotFound);
    }

    let indexOfLogInName = allUsers
      .map(function (e) {
        return e.username;
      })
      .indexOf(infoObject.username);

    if (infoObject.password !== allUsers[indexOfLogInName].password) {
      const passwordWrong = $(`<p>Wrong password</p>`);
      passwordWrong.addClass("password-wrong");
      return logInRules.append(passwordWrong);
    }

    const logInSuccessful = $(
      `<p>log-in Successful for user : ${infoObject.username.toLowerCase()}</p>`
    );
    logInSuccessful.addClass("log-in-successful");
    logInRules.append(logInSuccessful);

    console.log("log-in-successful");
    localStorage.setItem("successfulLogIn", true);
    successfulLogIn = true;

    console.log(logInUserName);

    logInUserName.val("");
    logInPassword.val("");
    // userButton.trigger("click")
    //! edit the userButton event click
    logInSignUpPage.hide();
    mainPage.hide();
    userPage.css("display", "grid");
    animePage.hide();
    filterPage.hide();
  };

  signUpButton.click(function () {
    signUpInformation = {
      username: signUpUserNameNew,
      password: signUpPasswordNew,
    };
    isValidSignUp(signUpInformation);
    console.log(allUsers);
  });

  logInButton.click(function () {
    logInInformation = {
      username: logInUserNameNew,
      password: logInPasswordNew,
    };
    isValidLogIn(logInInformation);
  });

  logOutButton.click(function () {
    localStorage.setItem("successfulLogIn", "");
    successfulLogIn = false;
    //! edit the userButton event click
    logInSignUpPage.css("display", "grid");
    mainPage.hide();
    userPage.hide();
    animePage.hide();
    filterPage.hide();
  });

  //* ///////////////////////////////////////////////////////

  darkButton.click(function () {
    //! edit with it ( style.css / :root)
    root.css({
      "--color-1": "var(--color-1-b)",
      "--color-2": "var(--color-2-b)",
      "--color-3": "var(--color-3-b)",
      "--color-4": "var(--color-4-b)",
      "--color-5": "var(--color-5-b)",
      "--color-warning": "var(--color-warning-b)",
    });
    darkButton.hide();
    lightButton.show();
  });

  lightButton.click(function () {
    //! edit with it ( style.css / :root)
    root.css({
      "--color-1": "var(--color-1-a)",
      "--color-2": "var(--color-2-a)",
      "--color-3": "var(--color-3-a)",
      "--color-4": "var(--color-4-a)",
      "--color-5": "var(--color-5-a)",
      "--color-warning": "var(--color-warning-a)",
    });
    darkButton.show();
    lightButton.hide();
  });

  theme0.click(function () {
    //! edit with it ( style.css / :root)
    root.css({
      "--color-1-a": "rgb(244, 238, 255)",
      "--color-2-a": "rgb(220, 214, 247)",
      "--color-3-a": "rgb(166, 177, 225)",
      "--color-4-a": "rgb(66, 72, 116)",
      "--color-5-a": "rgb(37, 41, 66)",
      "--color-warning-a": "red",
    });
  });

  theme1.click(function () {
    //! edit with it ( style.css / :root)
    root.css({
      "--color-1-a": "rgb(253, 247, 228)",
      "--color-2-a": "rgb(250, 238, 209)",
      "--color-3-a": "rgb(222, 208, 182)",
      "--color-4-a": "rgb(187, 171, 140)",
      "--color-5-a": "rgb(104, 96, 81)",
      "--color-warning-a": "red",
    });
  });

  theme2.click(function () {
    //! edit with it ( style.css / :root)
    root.css({
      "--color-1-a": "rgb(245, 245, 245)",
      "--color-2-a": "rgb(8, 217, 214)",
      "--color-3-a": "rgb(190, 190, 190)",
      "--color-4-a": "rgb(255, 46, 99)",
      "--color-5-a": "rgb(37, 42, 52)",
      "--color-warning-a": "red",
    });
  });
}; //! dataFromApi
