// Shorthand for $( document ).ready()
$(function () {
  //* /////////////////////// data from API ////////////////////
  const apiDiv = $(".api-div");
  const apiFirst = $(".api-first");
  const apiBack = $(".api-back");
  const apiNext = $(".api-next");
  const apiLast = $(".api-last");

  let apiPageCounter = parseInt(localStorage.getItem("apiPageCounter")) || 0;
  let apiSearchWord = localStorage.getItem("apiSearchWord") || "";

  $.ajax({
    url: `https://kitsu.io/api/edge/anime?page[limit]=18&page[offset]=${apiPageCounter}&filter[text]=${apiSearchWord}`,
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
    //(DONE) Fully responsive design for both mobile and desktop using CSS media queries
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

    const mainPageDiv = $("#main-page-div");

    const header = $("#header");
    const searchInput = $("#search-input");
    // const filterButton = $("#filter-button");
    const filterPopUpButton = $("#filter-pop-up-button");
    const filterPopUpDiv = $("#filter-pop-up-div");

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
    const logInSignUpErrors = $("#log-in-sign-up-errors");

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

    //* /////////////// HIDE / SHOW  ///////////////////////

    // header.css("display", "grid");
    mainPageDiv.show();
    filterPopUpDiv.hide();
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

    //* //////// Add/remove Anime To User Fav {from home page} //////////

    const removeFromFavFromList = function () {
      // console.log($(this));
      // console.log(this);
      // console.log('$(this)[0].className', $(this)[0].className)
      let removedAnime = animesFromApi.filter(
        (elem, i) => `added-to-fav-${elem.id}` === $(this)[0].className
      );
      // console.log("removedAnime", removedAnime);
      removedAnime = removedAnime[0];

      let indexOfRemovedAnime = favAnimesArray
        .map(function (e) {
          return e.id;
        })
        .indexOf(removedAnime.id);
      // console.log("indexOfRemovedAnime", indexOfRemovedAnime);
      favAnimesArray.splice(indexOfRemovedAnime, 1);

      const favAnimeArrayToString = JSON.stringify(favAnimesArray);
      localStorage.setItem("favAnimesArray", favAnimeArrayToString);

      // console.log('$(`#${indexOfRemovedAnime}`)', $(`#${indexOfRemovedAnime} .anime-div`))

      //       $(`#${indexOfRemovedAnime} .anime-fav`)
      //         .html(`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
      //       <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
      //     </svg>`);

      console.log(favAnimesArray);
      $(this).remove();
    };

    const removeFromFav = function () {
      console.log(this);
      $(`ul div.added-to-fav-${$(this).parent()[0].id}`).remove();
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

      $(this)
        .html(`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
    </svg>`);
      $(this).off();
      $(this).click(addToFav);
      $(this).click(returnToHome);
    };

    const addToFav = function () {
      // console.log($(this).parent()[0].id);
      // console.log(animes[($(this).parent()[0].id-1)].animeName);

      // console.log($(this).parent()[0].id);

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

      const newAddedToFav = $(
        `<div><li>${addedAnime.attributes.canonicalTitle}</li><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-heart-half" viewBox="0 0 16 16">
        <path d="M8 2.748v11.047c3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
      </svg></div>`
      );
      newAddedToFav.addClass(`added-to-fav-${addedAnime.id}`);
      newAddedToFav.click(removeFromFavFromList);
      // newAddedToFav.click(returnToHome)
      userFavUl.append(newAddedToFav);

      favAnimesArray.push(addedAnime);
      const favAnimeArrayToString = JSON.stringify(favAnimesArray);
      localStorage.setItem("favAnimesArray", favAnimeArrayToString);

      $(this)
        .html(`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
    </svg>`);
      $(this).off();
      $(this).click(removeFromFav);
      $(this).click(returnToHome);
    };

    const returnToHome = function () {
      setTimeout(() => {
        // header.css("display", "grid");
        mainPageDiv.show();
        filterPopUpDiv.hide();
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
      mainPageDiv.hide();
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
        `<img src="${animeInfo.attributes.posterImage.small}" alt="${animeInfo.attributes.canonicalTitle}"/>`
      );
      animeImage.addClass("anime-page-img");

      const animeBg = $(
        `<img src="${animeInfo.attributes.posterImage.small}" alt="${animeInfo.attributes.canonicalTitle}"/>`
      );
      animeBg.addClass("anime-page-bg");

      const animeName = $(`<p>${animeInfo.attributes.canonicalTitle}</p>`);
      animeName.addClass("anime-page-name");

      // const AnimeGenresArray = animeInfo.Genres.join(" ");
      // const animeGenre = $(`<p>${AnimeGenresArray}</p>`);
      // animeGenre.addClass("anime-page-genre");

      // const animeStudio = $(`<p>${animeInfo.Studios}</p>`);
      // animeStudio.addClass("anime-page-studio");

      const animeType = $(`<p>${animeInfo.attributes.showType}</p>`);
      animeType.addClass("anime-page-type");

      //   const animeFav =
      //     $(`<p><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
      //   <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
      // </svg></p>`);
      //   animeFav.addClass("anime-page-fav");
      //   animeFav.click(addToFav);
      //   animeFav.click(returnToHome); //! click on both FAV and animeDiv at the same time

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
        // animeFav,
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
          `<img src="${elem.attributes.posterImage.small}" alt="${elem.attributes.canonicalTitle}"/>`
        );
        animeImage.addClass("anime-img");

        const animeBg = $(
          `<img src="${elem.attributes.posterImage.small}" alt="${elem.attributes.canonicalTitle}"/>`
        );
        animeBg.addClass("anime-bg");

        const animeName = $(`<p>${elem.attributes.canonicalTitle}</p>`);
        animeName.addClass("anime-name");
        // animeName.css({
        //   "overflow": "hidden",
        // });
        // const AnimeGenresArray = elem.Genres.join(" ");
        // const animeGenre = $(`<p>${AnimeGenresArray}</p>`);
        // animeGenre.addClass("anime-genre");

        // const animeStudio = $(`<p>${elem.Studios}</p>`);
        // animeStudio.addClass("anime-studio");

        const animeType = $(`<p>${elem.attributes.showType}</p>`);
        animeType.addClass("anime-type");

        const animeFav =
          $(`<p><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
      </svg></p>`);
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

          const newAddedToFav = $(`<li>${elem.attributes.canonicalTitle}</li>`);

          newAddedToFav.addClass(`added-to-fav-${elem.id}`);
          userFavUl.append(newAddedToFav);

          animeFav.html(`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
        </svg>`);
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

    searchInput.on(/* "keyup" */ "change", function () {
      // console.log($(this).val());

      let searchVal = $(this).val().toLowerCase();

      localStorage.setItem("apiSearchWord", searchVal);
      location.reload();
      // $(".anime-div").filter(function () {
      //   $(this).toggle($(this).text().toLowerCase().indexOf(searchVal) > -1);
      // });
    });

    homeButton.click(function () {
      mainPageDiv.show();
      filterPopUpDiv.hide();
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
        mainPageDiv.hide();
        logInSignUpPage.hide();
        mainPage.hide();
        userPage.css("display", "grid");
        animePage.hide();
        filterPage.hide();
      } else {
        mainPageDiv.hide();
        // logInSignUpPage.css("display", "grid");
        logInSignUpPage.css("display", "flex");
        mainPage.hide();
        userPage.hide();
        animePage.hide();
        filterPage.hide();
      }
    });

    //* ///////////////////////////////////////////////////////

    filterButton.click(function () {
      mainPageDiv.hide();
      logInSignUpPage.hide();
      mainPage.hide();
      userPage.hide();
      animePage.hide();
      filterPage.show();
    });


    filterPopUpButton.click(function(){
      mainPageDiv.show();
      filterPopUpDiv.css("display", "flex");
      logInSignUpPage.hide();
      mainPage.css("display", "flex");
      userPage.hide();
      animePage.hide();
      filterPage.show();
    })
    //* /////////////////////// Filters ////////////////////////



    filterButtonAZ.click(function () {
      //! will sort the original anime array ascending only.

      homeButton.trigger("click");

      // console.log($(".anime-div"));
      // console.log(animes);
      animesFromApi.sort((a, b) => {
        // console.log("A", a.animeName);
        // console.log("B", b.animeName);
        let nameA;
        a.attributes.canonicalTitle === undefined
          ? (nameA = "undefined")
          : (nameA = a.attributes.canonicalTitle.toLowerCase());

        let nameB;
        b.attributes.canonicalTitle === undefined
          ? (nameB = "undefined")
          : (nameB = b.attributes.canonicalTitle.toLowerCase());
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

        console.log("rateValue", rateValue);
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
      logInSignUpErrors.html(""); //! remove old errors
      const errorsList = $(`<ul>## Errors:</ul>`);
      let errorsCounter = 0;

      if (infoObject.username.length < 6) {
        const usernameLength = $(`<li>User must be >= 6</li>`);
        usernameLength.addClass("username-length");
        errorsList.append(usernameLength);
        errorsCounter++;
      }

      if (infoObject.password.length < 8) {
        const passwordLength = $(`<li>Password must be > 8</li>`);
        passwordLength.addClass("password-length");
        errorsList.append(passwordLength);
        errorsCounter++;
      }

      if (
        allUsers.some(
          (ele) =>
            ele.username.toLowerCase() === infoObject.username.toLowerCase()
        )
      ) {
        const userNameTaken = $(`<li>User name already taken</li>`);
        userNameTaken.addClass("user-name-taken");
        errorsList.append(userNameTaken);
        errorsCounter++;
      }

      if (signUpPasswordNew !== signUpPasswordAgainNew) {
        const passwordNotMatch = $(
          `<li>the re-entered password don't match the new password</li>`
        );
        passwordNotMatch.addClass("password-not-match");
        errorsList.append(passwordNotMatch);
        errorsCounter++;
      }

      if (errorsCounter === 0) {
        logInSignUpErrors.html(""); //! remove old errors
        const registerSuccessful = $(
          `<p>Register Successful for user : ${infoObject.username.toLowerCase()}</p>`
        );
        registerSuccessful.addClass("register-successful");
        logInSignUpErrors.append(registerSuccessful);
        allUsers.push(infoObject);

        const allUsersArrayToString = JSON.stringify(allUsers);
        localStorage.setItem("allUsersArray", allUsersArrayToString);
      } else {
        logInSignUpErrors.append(errorsList);
      }
    };

    const isValidLogIn = (infoObject) => {
      logInSignUpErrors.html(""); //! remove old errors
      const errorsList = $(`<ul>## Errors:</ul>`);
      let errorsCounter = 0;

      const isUserNameInAllUsers = allUsers.some(
        (ele) =>
          ele.username.toLowerCase() === infoObject.username.toLowerCase()
      );
      if (!isUserNameInAllUsers) {
        const userNameNotFound = $(
          `<li>User name not found in our database</li>`
        );
        userNameNotFound.addClass("user-name-not-found");
        errorsList.append(userNameNotFound);
        errorsCounter++;
      }
      if (isUserNameInAllUsers) {
        let indexOfLogInName = allUsers
          .map(function (e) {
            return e.username;
          })
          .indexOf(infoObject.username);

        if (infoObject.password !== allUsers[indexOfLogInName].password) {
          const passwordWrong = $(`<li>Wrong password</li>`);
          passwordWrong.addClass("password-wrong");
          errorsList.append(passwordWrong);
          errorsCounter++;
        }
      }

      if (errorsCounter === 0) {
        logInSignUpErrors.html("");
        const logInSuccessful = $(
          `<p>log-in Successful for user : ${infoObject.username.toLowerCase()}</p>`
        );
        logInSuccessful.addClass("log-in-successful");
        logInSignUpErrors.append(logInSuccessful);

        console.log("log-in-successful");
        localStorage.setItem("successfulLogIn", true);
        successfulLogIn = true;

        // console.log(logInUserName);

        logInUserName.val("");
        logInPassword.val("");
        // userButton.trigger("click")
        //! edit the userButton event click
        mainPageDiv.hide();
        logInSignUpPage.hide();
        mainPage.hide();
        userPage.css("display", "grid");
        animePage.hide();
        filterPage.hide();
      } else {
        logInSignUpErrors.append(errorsList);
      }
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
      logInSignUpErrors.html(`<p>## Errors:</p>`);
      localStorage.setItem("successfulLogIn", "");
      successfulLogIn = false;
      //! edit the userButton event click
      mainPageDiv.hide();
      // logInSignUpPage.css("display", "grid");
      logInSignUpPage.css("display", "flex");
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

    apiFirst.click(function () {
      apiPageCounter = 0;
      localStorage.setItem("apiPageCounter", apiPageCounter);
      // homeButton.trigger("click");
      renderAnimesList(animesFromApi);
      location.reload();
    });

    apiBack.click(function () {
      apiPageCounter >= 18 ? (apiPageCounter -= 18) : (apiPageCounter = 0);
      localStorage.setItem("apiPageCounter", apiPageCounter);
      // homeButton.trigger("click");
      renderAnimesList(animesFromApi);
      location.reload();
    });

    apiNext.click(function () {
      apiPageCounter <= 11982
        ? (apiPageCounter += 18)
        : (apiPageCounter = 12000);
      localStorage.setItem("apiPageCounter", apiPageCounter);
      // homeButton.trigger("click");
      renderAnimesList(animesFromApi);
      location.reload();
    });

    apiLast.click(function () {
      apiPageCounter = 12000;
      localStorage.setItem("apiPageCounter", apiPageCounter);
      // homeButton.trigger("click");
      renderAnimesList(animesFromApi);
      location.reload();
    });
  }; //! dataFromApi
}); //!$( document ).ready()
