'use strict'
const modeContainer = document.querySelector('.mode_container')
const modeBtn = document.querySelector(".light_contaner");
const modeName = document.getElementById("modename");
const moonIcon = document.getElementById("moonIcon");
const sunIcon = document.getElementById("sunIcon");
const body = document.getElementsByTagName('body');
const lightContainer = document.querySelector('.light_contaner');
const DarkContainer = document.querySelector('.dark_container');
const header = document.querySelector('.header');
const sectionTwo = document.querySelector('.section_two');
const sectionThree = document.querySelector('.section_three');
const searchBar = document.querySelector('.searchbar');
const userFullname = document.querySelector('.user_fullname');
const bio = document.querySelector('.bio');
const date = document.querySelector('.date');
const followersAndRepoContainer = document.querySelector('.followers_and_repo_container');
const tabelHead = document.querySelectorAll('.tabelhead');
const tabelData = document.querySelectorAll('.tabledata');
const locationIcon = document.querySelector('.location_icon');
const twitterIcon = document.querySelector('.twitter_icon');
const blogIcon = document.querySelectorAll('.blog_icon');
const gitIcon = document.querySelector('.git_icon');
const loocation = document.querySelector('.location');
const twitterLink = document.querySelector('.twitterlink');
const blog = document.querySelector('.blog');
const git = document.querySelector('.git');



// HOVER EFFECT FOR LIGHT AND DARK MODE BUTTON //

modeBtn.addEventListener('mouseover', function () {
    modeName.style.color = "#7094c1";
    moonIcon.style.fill = "#7094c1";
    sunIcon.style.fill = "#7094c1";

})
modeBtn.addEventListener('mouseout', function () {
    modeName.style.color = "white";
    moonIcon.style.fill = "white";
    sunIcon.style.fill = "white";

})


// BUTTON FOR LIGHT MODE //



function lightMode() {
    document.body.classList.toggle('bodylight');
    lightContainer.classList.toggle('lightmodeNameDeactive');
    DarkContainer.classList.toggle('darkmodeNameActive');
    header.classList.toggle('headerlight');
    sectionTwo.classList.toggle('whitecolor');
    sectionThree.classList.toggle('whitecolor');
    searchBar.classList.toggle('barcolor');
    searchBar.classList.toggle('placeholdercolor');
    userFullname.classList.toggle('headerlight');
    bio.classList.toggle('grayishcolor');
    date.classList.toggle('grayishcolor');
    followersAndRepoContainer.classList.toggle('bodylight');
    locationIcon.classList.toggle('iconColor');
    twitterIcon.classList.toggle('iconColor');
    loocation.classList.toggle('grayishcolor');
    twitterLink.classList.toggle('textcolor');
    gitIcon.classList.toggle('iconColor');
    blog.classList.toggle('textcolor');
    git.classList.toggle('textcolor');

    tabelHead.forEach(function (item) {
        item.classList.toggle('grayishcolor')
    })

    tabelData.forEach(function (item) {
        item.classList.toggle('headerlight')
    })
    blogIcon.forEach(function (item) {
        item.classList.toggle('iconColor')
    })
}



modeContainer.addEventListener('click', lightMode)