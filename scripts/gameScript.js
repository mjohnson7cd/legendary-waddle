$(function() {
  

const games = [
  {
    title: "007",
    link: "James Bond", 
    author: "Games Bond",
    image:"https://avatars.githubusercontent.com/u/22795694?v=4"
  },
  {
    title: "Name Game",
    link: "https://zanemoon13.github.io/lab-echo/index.html", 
    author: "Zane Mooney",
    image:  "https://avatars.githubusercontent.com/u/89221221?v=4"
  },
  {
    title: "Macey's Game",
    link: "https://maceyraejones.github.io/cautious-couscous/",
    author: "Macey Jones",
    image: "https://avatars.githubusercontent.com/u/89227313?v=4"
    },
    {
  title: "EchoGame",
  link: "https://brandoncoplen.github.io/EchoLab1/",
  author: "Brandon Coplen",
  image: "https://avatars.githubusercontent.com/u/89221350?v=4"
  },
{
  title: "NameGame",
  link: "https://nkerstiens.github.io/Echo-Lab-376/",
  author: "Noah Kerstiens",
  image: "https://avatars.githubusercontent.com/u/44041365?v=4"
  },
  {
    title: "game4happiness",
    link: "https://vanpham2000.github.io/game4happiness/",
    author: "Van Pham",
    image: "https://avatars.githubusercontent.com/u/86323153?v=4"
    },
    {
      title: "namePage",
      link: "https://2fortdev.github.io/Echo-lab/",
      author: "Sam Aaron",
      image: "https://avatars.githubusercontent.com/u/89477693?v=4"
      },
      {
        title: "wowgame",
        link: "https://nashj99.github.io/echo/",
        author:"Justin Nash",
        image: "https://avatars.githubusercontent.com/u/89221371?v=4"
      },
      {
        title: "Name Fun",
        link: "https://mjohnson7cd.github.io/labEcho/",
        author: "Mark Johnson",
        image: "https://avatars.githubusercontent.com/u/61306576?v=4"
      },
      {
        title: "Name Game",
        link: "https://cj89112.github.io/echo-376/",
        author: "Courtney Pride",
        image: "https://avatars.githubusercontent.com/u/66399339?v=4"
      },
      {
        title: "Game of Names",
        link: "https://jakemiles14.github.io/miles-lab-echo/",
        author: "Jake Miles",
        image: "https://avatars.githubusercontent.com/u/89221232?v=4"
      },
      {
        title: "Game of Names",
        link: "https://katrinayates.github.io/gameSwitcher/",
        author: "Katrina Yates",
        image: "https://avatars.githubusercontent.com/u/55498867?v=4"
        },
      {
        title: "Crazy Name Game",
        link: "https://kiikz.github.io/EchoGames/",
        author: "Austin Reach",
        image: "https://avatars.githubusercontent.com/u/89221359?v=4"
      },
      {
        title: "namer gamer",
        link: "https://nikkisteww.github.io/delta-half/",
        author: "Nikki Stewart",
        image:"https://avatars.githubusercontent.com/u/89221253?v=4"
        },
        {
          title: "SUPER FUN GAMER GAMES",
          link: "https://kanashiima.github.io/fluffy-waddle/",
          author: "John Barnes",
          image: "https://avatars.githubusercontent.com/u/89482908?v=4"

        },

];
// iterate over the JSON array
$.each(games, function (index, item) {
  console.log("Game Title: " + item.title);
  console.log("Game URL: " + item.link);
  console.log("Game Author: " + item.author);

  // create a brand new HTML element JUST with code

   var el = `<div style="width: 25%;">
   <div class="card">
       <img class="card-img-top" src="${ item.image }" alt="github profile image">
       <div class="card-body text-center">
           <p class="card-text">
               Created by: ${ item.author }
           </p>
           <a href="${ item.link }" target = "_blank" class="btn btn-outline-primary btn-sm">
               GAME LINK
           </a>
           <button class='btn btn-outline-info cardClose2'>${ item.title }</button>
       </div>
   </div>
 </div>`
// var el = `<div class='card text-center mx-auto bg-dark blue' style="width: 200px"> \
//   <button class='cardOpen2 btn btn-outline-info'> ${ item.title } </button> \
//    <div class='cardHide'> \
//        <br> \
//        <a href="${ item.link }" target="_blank" class="link-info" >GAME LINK</a> \
//        <p class="text-white">Create by: ${ item.author } </p> \
//        <br> \
//        <button class='btn btn-outline-info cardClose2'>Close</button> \
//    </div>
//  </div>`; 

 console.log(el); 


$('#firstCard').append(el);

$('.nav-dropdown').append($(`<li><a href="#!"> ${item.author} </a></li>`));

});


});
