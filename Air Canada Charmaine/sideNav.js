// select elements
// general
const navBar = document.getElementsByClassName("nav-bar");
const nav = document.querySelector(".nav-side");
const title = document.getElementsByClassName("title");
const heading = document.getElementsByClassName("heading");
const planeBtn = document.getElementsByClassName("plane-btn");
const links = document.getElementsByClassName("links");
const body = document.getElementById("body");
const page = document.getElementById("home-page");
const homeImg = document.getElementById("home-image");
const paragraphs = document.getElementsByClassName("paragraph")
const skydiveImg = document.getElementById("skydive-img");
const list = document.getElementsByClassName("list");
const sectionHead = document.getElementsByClassName("section-head");
const officeImg = document.getElementById("office-img");
const imgCaption = document.getElementById("img-caption");
// like count
const like = document.getElementById("btn-1");
const dislike = document.getElementById("btn-2");
const reset = document.getElementById("reset");
const likeCount = document.getElementById("like-count");
// color scheme change
const colorChange = document.getElementById("color-change");
const theme = document.getElementById("color-track");
// other button
const other = document.getElementById("other-btn");
const planeAnim = document.getElementById("plane-load");
const globe = document.getElementById("globe");
// side nav toggle
const planeToggle = document.getElementsByClassName("plane-btn");
// reviews
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const reviewText = document.getElementById("review-text");
const star = document.getElementsByClassName("star");
const profileName = document.getElementById("name");
const profilePic = document.getElementById("profile-picture");
const jobTitle = document.getElementById("job-title");
const noStars = document.getElementById("no-stars");
const random = document.getElementById("random-review");


// like buttons

// like count
let count = 0;

// add to count if like is pressed
like.addEventListener("click", function(){
    count += 2;
    likeCount.textContent = `Likes: ${count}`;
    nav.style.top = "90px";
    if (count > 0) {
        likeCount.style.color = "white";
    } else if (count < 0) {
        likeCount.style.color = "red";
    } else {
        likeCount.style.color = "black";
    }
})

// subtract to count if dislike is pressed
dislike.addEventListener("click", function(){
    count -= 1;
    likeCount.textContent = `Likes: ${count}`;
    nav.style.top = "90px";
    if (count > 0) {
        likeCount.style.color = "white";
    } else if (count < 0) {
        likeCount.style.color = "red";
    } else {
        likeCount.style.color = "black";
    }
});

reset.addEventListener("click", function(){
    count = 0;
    likeCount.textContent = `Likes: ${count}`;
    likeCount.style.color = "black";
    nav.style.top = "90px";
});


// color scheme button

// assign colors
let r = 0;
let g = 0;
let b = 0;

let r1 = 0;
let g1 = 0;
let b1 = 0;

// change theme if button is pressed
colorChange.addEventListener("click", function(){
    r = Math.floor( Math.random() * 256 );
    g = Math.floor( Math.random() * 256 );
    b = Math.floor( Math.random() * 256 );

    r1 = Math.floor( Math.random() * 256 );
    g1 = Math.floor( Math.random() * 256 );
    b1 = Math.floor( Math.random() * 256 );
    
    nav.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    navBar[0].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    title[0].style.color = `rgb(${r1}, ${g1}, ${b1})`;
    planeBtn[0].style.backgroundColor = `rgb(${r1}, ${g1}, ${b1})`;
    planeBtn[0].style.color = "white";
    theme.innerHTML = `Current theme: rgb(${r}, ${g}, ${b})`;

    if (r < 200 && g < 210 && b < 250) {
        likeCount.style.color = "white";
        theme.style.color = "white";
        links[0].style.color = "white";
        links[1].style.color = "white";
        links[2].style.color = "white";
    } else {
        likeCount.style.color = "black";
        theme.style.color = "black";
        links[0].style.color = "black";
        links[1].style.color = "black";
        links[2].style.color = "black";
    }
});


// other button

// destinations
let destinations = ["https://www.seti.org/sites/default/files/styles/original/public/2020-10/earth-view-from-moon-perspective-footprints-1400px.jpg?itok=hAH2R4i3", "https://static.onecms.io/wp-content/uploads/sites/28/2016/11/giza-pyramid-EGYPTSECRETS1016.jpg", "https://media.npr.org/assets/img/2020/07/29/gettyimages-1211027397_wide-099ca37a8cd59929338145237b0fa0489fec9c06.jpg?s=1400", "https://1.bp.blogspot.com/-hZYLy3aS14E/X35PkTB-YLI/AAAAAAABNcI/0x6_E3Kkua0ydlgjbcTY8Gyc_3jG1xdyQCNcBGAsYHQ/s2048/Chicken%2BWorld.jpg", "https://cdn.britannica.com/79/102279-050-EF61787B/Lake-Louise-Columbia-Glacier-Alberta-Canada-Banff.jpg", "https://64.media.tumblr.com/6ddca3613c9cf819dc8a1d902057ed14/tumblr_ozu457Ji9C1u3akyno3_1280.jpg", "https://travel.home.sndimg.com/content/dam/images/travel/fullset/2012/08/26/0e/brazil-wildlife_ss_001.rend.hgtvcom.966.725.suffix/1491581142315.jpeg", "https://i.natgeofe.com/n/f44ddc1e-2922-483b-bb1b-d9bad6d2381f/03coralbleaching_4x3.jpg", "https://windows10spotlight.com/wp-content/uploads/2021/10/c2322c67cb3c52139395e88ed9276951.jpg", "https://i.ytimg.com/vi/LHMwDelqJEk/maxresdefault.jpg"];

// destination names
let names = ["The Moon", "The Great Pyramids of Giza", "Stonehenge", "Chicken World", "Lake Louise", "Shellendorf Institute", "The Amazon Rainforest", "The Great Barrier Reef", "Downtown Vancouver", "CY"];

let destNum = Math.floor( Math.random() * destinations.length );

other.addEventListener("click", function(){
    // remove home-image
    homeImg.style.opacity = 0;
    homeImg.style.boxShadow = "none";
    
    // transition setup
    body.style.backgroundImage = "url(https://www.adorama.com/alc/wp-content/uploads/2017/11/shutterstock_114802408.jpg)";
    body.style.backgroundSize = "cover";
    planeAnim.style.opacity = "1";
    title[0].style.opacity = "0";
    heading[0].innerHTML = "";
    nav.classList.toggle("nav-toggle");
    paragraphs[0].style.opacity = "0";
    paragraphs[1].style.opacity = "0";
    paragraphs[2].style.opacity = "0";
    skydiveImg.style.opacity = "0";
    list[0].style.opacity = "0";
    sectionHead[0].style.opacity = "0";
    sectionHead[1].style.opacity = "0";
    officeImg.style.opacity = "0";
    imgCaption.style.opacity = "0";

    // plane animation
    let value = null;
    let posX = 0;
    let posY = 0;
    clearInterval(value);
    value = setInterval(anim, 5);
    function anim() {
        if (posX === 1935) {
            clearInterval(value);
            body.style.backgroundImage = "none";
        } else {
            posX += 5;
            posY += 2;

            planeAnim.style.left = `${posX}px`;
            planeAnim.style.bottom = `${posY}px`;
        }
    }

    // loading animation
    setTimeout(load, 2200);
    function load() {
        globe.style.transform = `rotate(0deg)`;
        globe.style.opacity = "1";
        let loadVal = null;
        let rotate = 0;
        clearInterval(loadVal);
        loadVal = setInterval(rotateGlobe, 6);
        function rotateGlobe() {
            if (rotate === 860) {
                clearInterval(loadVal)
                globe.style.opacity = "0";
            } else {
                setTimeout(spin, 300);
                function spin() {
                    rotate += 4;
                    globe.style.transform = `rotate(${rotate}deg)`;
                }
            }
        }
    }

    // load destination
    setTimeout(displayDest, 3900);
    function displayDest() {
        body.style.backgroundImage = `url(${destinations[destNum]})`;
        title[0].style.opacity = "1";
        title[0].textContent = `You have now arrived at: ${names[destNum]}`;
        destNum = Math.floor( Math.random() * destinations.length );
        document.documentElement.scrollTop = 0;
    }
});


// toggle side nav
planeToggle[0].addEventListener("click", function(){
    nav.classList.toggle("nav-toggle");
})


// reviews
let reviewNum = 0;

let reviews = [
    {
        profileName: "Benedict",
        profilePic: "https://play.nintendo.com/images/1x1_ACNLParty_Answers_v01-Benedict.6ef5f3152e16d0ba.jpg",
        reviewText: "Very good workplace. I like the free food. The planes are very bug infested, but don't worry, I like bugs. Overall 5 stars.",
        stars: "5",
        job: "Professional Chicken"
    },

    {
        profileName: "Sheldon",
        profilePic: "https://play.nintendo.com/images/profile-splatoon-sheldon.7bf2a8f2.aead314d58b63e27.jpg",
        reviewText: "Eh, the place's alright. But there are these weird gates that beep everytime I try to haul my iron pipes through. I think someone needs to call a technician, the thing must be broken. Also some weird men in funny costumes keep tackling me. Maybe they should try switching management? 3 stars.",
        stars: "3",
        job: "Demolitionist"
    },
    
    {
        profileName: "Green Bean",
        profilePic: "https://pbs.twimg.com/media/E1uBB8RVUAUSDDC?format=jpg&name=large",
        reviewText: "Uhhh I don't even work here??",
        stars: "0",
        job: "I don't work here"
    },

    {
        profileName: "Apple",
        profilePic: "https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?b=1&k=20&m=185262648&s=170667a&w=0&h=2ouM2rkF5oBplBmZdqs3hSOdBzA4mcGNCoF2P0KUMTM=",
        reviewText: "With my employee pass I hitched a ride from Poland to Canada. Farthest I've ever been from the orchard. I miss my family, but it's pretty nice out here. Maybe I'll send a postcard. 5 stars.",
        stars: "5",
        job: "Flight Attendant"
    },

    {
        profileName: "Random Cat",
        profilePic: "https://d.line-scdn.net/lf/picimg/content/20201110/wedget_hatt_05.jpg",
        reviewText: "asparagus",
        stars: "5",
        job: "Mew"
    },

    {
        profileName: "Totally Not United Airlines",
        profilePic: "https://hancockinstitute.org/media/United-logo-2019-1.png",
        reviewText: "I hear this place doesn't pay as well as United Airlines. Honestly I would rather work there.",
        stars: "0",
        job: "United Airlines CEO"
    },

    {
        profileName: "Pepsi Man",
        profilePic: "https://m.media-amazon.com/images/M/MV5BZjIxM2U2NTMtYTdkMC00YTgwLWJiYjMtNDQ1N2UzOTBiYWJiXkEyXkFqcGdeQXVyMjQyMDQ5MTU@._V1_.jpg",
        reviewText: "This sounds like a job for Pepsi Man!",
        stars: "4",
        job: "Average Joe not a superhero in disguise"
    },

    {
        profileName: "Flappy Bird",
        profilePic: "https://upload.wikimedia.org/wikipedia/en/0/0a/Flappy_Bird_icon.png",
        reviewText: "I can fly but I work here 'cause I'm kinda broke right now. The place is just as bad as I expected it to be. Don't work here this place is really... I was forced to sign a confidentiality agreement. Just don't work here, ok?",
        stars: "2",
        job: "n/a"
    },

    {
        profileName: "Flappy Bird",
        profilePic: "https://upload.wikimedia.org/wikipedia/en/0/0a/Flappy_Bird_icon.png",
        reviewText: "Really, don't work here, they're gonna-",
        stars: "2",
        job: "n/a"
    },

    {
        profileName: "Flappy Bird",
        profilePic: "https://upload.wikimedia.org/wikipedia/en/0/0a/Flappy_Bird_icon.png",
        reviewText: "[Comment has been removed on behalf of Air Canada. Thank you for your time.]",
        stars: "2",
        job: "n/a"
    },

    {
        profileName: "Goldfish Cracker",
        profilePic: "https://pbs.twimg.com/media/D0Ca7OhWoAAzkiZ.jpg",
        reviewText: "The snack that smiles back! :D",
        stars: "3",
        job: "Tasty Snack!"
    },

    {
        profileName: "Barney",
        profilePic: "https://i.scdn.co/image/ab6761610000e5eb05534cdc751e86a9c4fef5c9",
        reviewText: "I may be smiling in my profile picture, but honestly I'm here because I was fired from my previous job. 4 stars because they accepted me immediately even without knowing the reason why I was fired.",
        stars: "4",
        job: "No longer unemployed"
    },

    {
        profileName: "Caillou",
        profilePic: "https://yt3.ggpht.com/ytc/AKedOLSZ5WKjdKbQd92TsTpNJqTXykZlDd5IVJ02rjQ-tg=s900-c-k-c0x00ffffff-no-rj",
        reviewText: "I'm literally just a kid who's 4 and they still hired me. Should I report this as child labour or should I be thankful?",
        stars: "5",
        job: "4 year old"
    }
];

next.addEventListener("click", function(){
    reviewNum++;
    if (reviewNum > reviews.length - 1) {
        reviewNum = 0;
    }
    profileName.innerHTML = reviews[reviewNum]["profileName"];
    profilePic.src = reviews[reviewNum]["profilePic"];
    reviewText.innerHTML = reviews[reviewNum]["reviewText"];
    jobTitle.innerHTML = "Job title: " + reviews[reviewNum]["job"];

    starCount();      
})

previous.addEventListener("click", function(){
    reviewNum--;
    if (reviewNum < 0) {
        reviewNum = reviews.length - 1;
    }
    profileName.innerHTML = reviews[reviewNum]["profileName"];
    profilePic.src = reviews[reviewNum]["profilePic"];
    reviewText.innerHTML = reviews[reviewNum]["reviewText"];
    jobTitle.innerHTML = "Job title: " + reviews[reviewNum]["job"];

    starCount();
})

random.addEventListener("click", function(){
    reviewNum = Math.floor( Math.random() * reviews.length );
    profileName.innerHTML = reviews[reviewNum]["profileName"];
    profilePic.src = reviews[reviewNum]["profilePic"];
    reviewText.innerHTML = reviews[reviewNum]["reviewText"];
    jobTitle.innerHTML = "Job title: " + reviews[reviewNum]["job"];

    starCount();
})

function starCount() {
    if (reviews[reviewNum]["stars"] == 0) {
        star[0].style.opacity = "0";
        star[1].style.opacity = "0";
        star[2].style.opacity = "0";
        star[3].style.opacity = "0";
        star[4].style.opacity = "0";
        noStars.style.opacity = "1";
    } else if (reviews[reviewNum]["stars"] == 1) {
        star[0].style.opacity = "1";
        star[1].style.opacity = "0";
        star[2].style.opacity = "0";
        star[3].style.opacity = "0";
        star[4].style.opacity = "0";
        noStars.style.opacity = "0";
    } else if (reviews[reviewNum]["stars"] == 2) {
        star[0].style.opacity = "1";
        star[1].style.opacity = "1";
        star[2].style.opacity = "0";
        star[3].style.opacity = "0";
        star[4].style.opacity = "0";
        noStars.style.opacity = "0";
    } else if (reviews[reviewNum]["stars"] == 3) {
        star[0].style.opacity = "1";
        star[1].style.opacity = "1";
        star[2].style.opacity = "1";
        star[3].style.opacity = "0";
        star[4].style.opacity = "0";
        noStars.style.opacity = "0";
    } else if (reviews[reviewNum]["stars"] == 4) {
        star[0].style.opacity = "1";
        star[1].style.opacity = "1";
        star[2].style.opacity = "1";
        star[3].style.opacity = "1";
        star[4].style.opacity = "0";
        noStars.style.opacity = "0";
    } else if (reviews[reviewNum]["stars"] == 5) {
        star[0].style.opacity = "1";
        star[1].style.opacity = "1";
        star[2].style.opacity = "1";
        star[3].style.opacity = "1";
        star[4].style.opacity = "1";
        noStars.style.opacity = "0";
    }
}


