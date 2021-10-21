$(function() {
  

    const games = [
      {
        title: "007",
        link: "James Bond", 
        author: "Games Bond",
        image:"https://avatars.githubusercontent.com/u/22795694?v=4",
        github: "https://github.com/barrycumbie"
      },
      {
        title: "Name Game",
        link: "https://zanemoon13.github.io/lab-echo/index.html", 
        author: "Zane Mooney",
        image:  "https://avatars.githubusercontent.com/u/89221221?v=4",
        github: "https://github.com/zanemoon13"
      },
      {
        title: "Macey's Game",
        link: "https://maceyraejones.github.io/cautious-couscous/",
        author: "Macey Jones",
        image: "https://avatars.githubusercontent.com/u/89227313?v=4",
        github: "https://github.com/maceyraejones"
      },
      {
        title: "EchoGame",
        link: "https://brandoncoplen.github.io/EchoLab1/",
        author: "Brandon Coplen",
        image: "https://avatars.githubusercontent.com/u/89221350?v=4",
        github: "https://github.com/brandoncoplen"
      },
      {
        title: "NameGame",
        link: "https://nkerstiens.github.io/Echo-Lab-376/",
        author: "Noah Kerstiens",
        image: "https://avatars.githubusercontent.com/u/44041365?v=4",
        github: "https://github.com/nkerstiens"
      },
      {
        title: "game4happiness",
        link: "https://vanpham2000.github.io/game4happiness/",
        author: "Van Pham",
        image: "https://avatars.githubusercontent.com/u/86323153?v=4",
        github: "https://github.com/vanpham2000"
      },
      {
        title: "namePage",
        link: "https://2fortdev.github.io/Echo-lab/",
        author: "Sam Aaron",
        image: "https://avatars.githubusercontent.com/u/89477693?v=4",
        github: "https://github.com/2fortdev"
      }
    ];
    // iterate over the JSON array
    $.each(games, function (index, item) {
      console.log("Game Title: " + item.title);
      console.log("Game URL: " + item.link);
      console.log("Game Author: " + item.author);
    
      // create a brand new HTML element JUST with code
    
       var el = `
       <li><a href="${item.github}" target="_blank">${item.author}</a></li>
       `
    
     
    
     console.log(el); 
    
    
    $('#first-li').append(el);
    
    $('.nav-dropdown').append($(`<li><a href="#!"> ${item.author} </a></li>`));
    
    });
    
    
    });
    