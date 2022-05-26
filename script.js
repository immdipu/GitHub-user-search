"use strict";
const modeContainer = document.querySelector(".mode_container");
const modeBtn = document.querySelector(".light_contaner");
const modeName = document.getElementById("modename");
const modennameDark = document.getElementById("modennameDark");
const moonIcon = document.getElementById("moonIcon");
const sunIcon = document.getElementById("sunIcon");
const body = document.getElementsByTagName("body");
const lightContainer = document.querySelector(".light_contaner");
const DarkContainer = document.querySelector(".dark_container");
const header = document.querySelector(".header");
const sectionTwo = document.querySelector(".section_two");
const sectionThree = document.querySelector(".section_three");
const searchBar = document.querySelector(".searchbar");
const userFullname = document.querySelector(".user_fullname");
const bio = document.querySelector(".bio");
const date = document.querySelector(".date");
const followersAndRepoContainer = document.querySelector(
    ".followers_and_repo_container"
);
const tabelHead = document.querySelectorAll(".tabelhead");
const tabelData = document.querySelectorAll(".tabledata");
const locationIcon = document.querySelector(".location_icon");
const twitterIcon = document.querySelector(".twitter_icon");
const blogContainer = document.querySelector(".blog_container");
const blogIcon = document.querySelectorAll(".blog_icon");
const gitIcon = document.querySelector(".git_icon");
const loocation = document.querySelector(".location");
const locationContainer = document.querySelector(".location_container");
const twitterLink = document.querySelector(".twitterlink");
const twitterContanier = document.querySelector(".twitter_contanier");
const blog = document.querySelector(".blog");
const git = document.querySelector(".git");
const githubContainer = document.querySelector(".github_container");
const searchBtn = document.querySelector(".btn");
const profilePic = document.getElementById("profilepicture");
const userName = document.querySelector(".username");
const Error = document.querySelector(".error");
const profilePicLink = document.querySelector(".profilepiclink");
const repoData = document.getElementById("repodata");
const followersData = document.getElementById("followersdata");
const followingdata = document.getElementById("followingdata");
const lightM = document.querySelector(".lightm");

// HOVER EFFECT FOR LIGHT AND DARK MODE BUTTON //

modeContainer.addEventListener("mouseover", function () {
    modeName.style.color = "#7094c1";
    modennameDark.style.color = "black";
    moonIcon.style.fill = "black";
    sunIcon.style.fill = "#7094c1";
});
modeContainer.addEventListener("mouseout", function () {
    modeName.style.color = "white";
    moonIcon.style.fill = "hsl(217, 20%, 51%)";
    modennameDark.style.color = "hsl(217, 20%, 51%)";
    sunIcon.style.fill = "white";
});

// BUTTON FOR LIGHT MODE //

function lightMode() {
    lightM.classList.toggle("bodylight");
    lightContainer.classList.toggle("lightmodeNameDeactive");
    DarkContainer.classList.toggle("darkmodeNameActive");
    header.classList.toggle("headerlight");
    sectionTwo.classList.toggle("whitecolor");
    sectionThree.classList.toggle("whitecolor");
    searchBar.classList.toggle("barcolor");
    searchBar.classList.toggle("placeholdercolor");
    userFullname.classList.toggle("headerlight");
    bio.classList.toggle("grayishcolor");
    date.classList.toggle("grayishcolor");
    followersAndRepoContainer.classList.toggle("repoContainer");
    locationIcon.classList.toggle("iconColor");
    twitterIcon.classList.toggle("iconColor");
    loocation.classList.toggle("grayishcolor");
    twitterLink.classList.toggle("textcolor");
    gitIcon.classList.toggle("iconColor");
    blog.classList.toggle("textcolor");
    git.classList.toggle("textcolor");

    tabelHead.forEach(function (item) {
        item.classList.toggle("grayishcolor");
    });

    tabelData.forEach(function (item) {
        item.classList.toggle("headerlight");
    });
    blogIcon.forEach(function (item) {
        item.classList.toggle("iconColor");
    });
}

modeContainer.addEventListener("click", lightMode);

// DEFAULT DATA //

const mydata = async () => {
    const response = await fetch("https://api.github.com/users/immdipu");
    const data = await response.json();
    if (data.name === null) {
        userFullname.innerText = data.login;
    } else {
        userFullname.innerText = data.name;
    }

    if (data.bio === null) {
        bio.innerText = "This user has no bio.";
    } else {
        bio.innerText = data.bio;
    }

    if (data.location === null) {
        loocation.innerText = "No Location";
        locationContainer.style.opacity = "0.5";
    } else {
        loocation.innerText = data.location;
        locationContainer.style.opacity = "1";
    }

    if (data.twitter_username === null) {
        twitterLink.innerText = "Not Available";
        twitterContanier.style.opacity = "0.5";
        twitterLink.style.pointerEvents = "none";
    } else {
        twitterLink.innerText = data.twitter_username;
        twitterLink.style.pointerEvents = "all";
        twitterLink.href = `https://twitter.com/${data.twitter_username}`;
        twitterContanier.style.opacity = "1";
    }

    if (data.blog === "") {
        blogContainer.style.opacity = "0.5";
        blog.innerText = "No blog";
        blog.style.pointerEvents = "none";
    } else {
        blog.innerText = data.blog;
        blogContainer.style.opacity = "1";
        blog.style.pointerEvents = "all";
        blog.href = data.blog;
    }

    if (data.company === null) {
        git.innerText = "No Company";
        git.style.pointerEvents = "none";
        githubContainer.style.opacity = "0.5";
    } else {
        git.innerText = data.company;
        git.style.pointerEvents = "all";
        githubContainer.style.opacity = "1";
        git.href = data.company;
    }

    profilePic.src = data.avatar_url;
    profilePicLink.href = userName.href = data.html_url;
    userName.innerText = data.login;
    const formatteddate = data.created_at.slice(0, data.created_at.length - 10);
    date.innerText = `Joined ${dateformatter(formatteddate)}`;
    repoData.innerText = data.public_repos;
    followersData.innerText = data.followers;
    followingdata.innerText = data.following;
};

mydata();

// DATA FETCHED BY SEARCH//

const fetchData = async () => {
    let username = searchBar.value;
    const response = await fetch("https://api.github.com/users/" + username);
    const data = await response.json();

    // ERROR MESSAGE IF USERNAME NOT FOUND//

    if (data.message === "Not Found") {
        Error.innerText = "User Not Found";
        Error.classList.add("active");
    } else {
        //  CONDITION IF THE USER DOESNOT HAVE NAME //
        if (data.name === null) {
            userFullname.innerText = data.login;
        } else {
            userFullname.innerText = data.name;
        }

        // CONDITION IF USER DOESNOT HAVE BIO //

        if (data.bio === null) {
            bio.innerText = "This user has no bio.";
        } else {
            bio.innerText = data.bio;
        }

        // CONDITION IF USER DOSENOT HAVE LOCATION//

        if (data.location === null) {
            loocation.innerText = "No Location";
            locationContainer.style.opacity = "0.5";
        } else {
            loocation.innerText = data.location;
            locationContainer.style.opacity = "1";
        }

        //CONDITION IF USER DOESNOT HAVE TWITTER ACCOUNT//

        if (data.twitter_username === null) {
            twitterLink.innerText = "Not Available";
            twitterContanier.style.opacity = "0.5";
            twitterLink.style.pointerEvents = "none";
        } else {
            twitterLink.innerText = data.twitter_username;
            twitterLink.style.pointerEvents = "all";
            twitterLink.href = `https://twitter.com/${data.twitter_username}`;
            twitterContanier.style.opacity = "1";
        }

        // CONDITION IF USER DOESNOT HAVE BLOG LINK

        if (data.blog === "") {
            blogContainer.style.opacity = "0.5";
            blog.innerText = "No blog";
            blog.style.pointerEvents = "none";
        } else {
            blog.innerText = data.blog;
            blogContainer.style.opacity = "1";
            blog.style.pointerEvents = "all";
            blog.href = data.blog;
        }

        // CONDITION IF USER DOESNOT HAVE COMPANY LINK

        if (data.company === null) {
            git.innerText = "No Company";
            git.style.pointerEvents = "none";
            githubContainer.style.opacity = "0.5";
        } else {
            git.innerText = data.company;
            git.style.pointerEvents = "all";
            githubContainer.style.opacity = "1";
            git.href = data.company;
        }

        profilePic.src = data.avatar_url;
        profilePicLink.href = userName.href = data.html_url;
        userName.innerText = data.login;
        const formatteddate = data.created_at.slice(0, data.created_at.length - 10);
        date.innerText = `Joined ${dateformatter(formatteddate)}`;
        repoData.innerText = data.public_repos;
        followersData.innerText = data.followers;
        followingdata.innerText = data.following;
    }
};

// SEARCH INPUT EVENT LISTNER//
searchBar.addEventListener("click", function () {
    Error.classList.remove("active");
});

//  SEARCH BUTTON EVENT LISTNER//

searchBtn.addEventListener("click", function () {
    if (searchBar.value === "") {
        console.log("hello");
        Error.classList.add("active");
    } else {
        fetchData();
    }
});

// ENTER KEY EVENT LISTENER//

document.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
        fetchData();
    }
});

// FUNCTION TO FORMAT FETCHED DATE//

function dateformatter(inputdate) {
    const months = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
    ];
    const dates = inputdate;
    const monthttake = Number(dates.slice(5, 7));
    const newMonth = monthttake - 1;
    const newDate =
        dates.slice(8, 10) + " " + months[newMonth] + " " + dates.slice(0, 4);
    return newDate;
}
