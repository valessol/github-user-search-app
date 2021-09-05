const userSearch = document.querySelector('input');
const button = document.querySelector('button');

const search = () => {
    const username = userSearch.value;
    return username;
}

const getDataFromAPI = async () => {
    const user = search();
    //const user = 'octocat';
    const data = await fetch (`https://api.github.com/users/${user}`);
    const response = await data.json();
    //console.log(response)
    return response;
}

const replaceAvatar = async () => {
    const userInfo = await getDataFromAPI();
    const avatar = userInfo.avatar_url;

    const userImage = document.querySelector('.data__image');
    userImage.src = avatar;
    return
}

const replaceUsername = async () => {
    const userInfo = await getDataFromAPI();
    const username = userInfo.login;

    const userTitle = document.querySelector('.data__title');
    userTitle.textContent = username;
    return
}

const replaceLink = async () => {
    const userInfo = await getDataFromAPI();
    const username = userInfo.login;
    const userURL = userInfo.html_url;

    const userLinkHTML = document.querySelector('.data__link--span');
    userLinkHTML.textContent = username;

    const userLink = document.querySelector('.data__link')
    userLink.href = userURL;
    return
}

const replaceDate = async () => {
    const userInfo = await getDataFromAPI();
    const date = userInfo.created_at;
    const newDate = new Date (date)
    
    const userJoin = document.querySelector('.data__date--span');
    userJoin.textContent = newDate.toDateString();
    return
}

const replaceDescription = async () => {
    const user = await getDataFromAPI();
    const userDescription = user.bio;

    const userDesc = document.querySelector('.data__description');
    userDesc.textContent = userDescription;
    return
}

const replaceRepos = async () => {
    const user = await getDataFromAPI();
    const userRepos = user.public_repos;
    
    const userReposNumber = document.querySelector('.data__repos');
    userReposNumber.textContent = userRepos;
    return
}

const replaceFollowers = async () => {
    const user = await getDataFromAPI();
    const userFollowers = user.followers;
    
    const userFollowersNumber = document.querySelector('.data__followers');
    userFollowersNumber.textContent = userFollowers;
    return
}

const replaceFollowing = async () => {
    const user = await getDataFromAPI();
    const userFollowing = user.following;
    
    const userFollowingNumber = document.querySelector('.data__following');
    userFollowingNumber.textContent = userFollowing;
    return
}

const replaceLocation = async () => {
    const user = await getDataFromAPI();
    const userLocation = user.location;
    const userLoc = document.querySelector('.data__location-text');
    const location = document.querySelector('.data__location');

    if (userLocation === null) {
        location.classList.add('data--disabled');
        userLoc.textContent = 'Not Available';
        return;
    }

    userLoc.textContent = userLocation;
    location.classList.remove('data--disabled');
    return
}
const replaceBlog = async () => {
    const user = await getDataFromAPI();
    const userBlog = user.blog;
    const userB = document.querySelector('.data__blog-url');
    const blogUrl = document.querySelector('.data__url');

    if (userBlog === null || userBlog === "") {
        blogUrl.classList.add('data--disabled');
        userB.textContent = 'Not Available';
        return;
    }

    userB.textContent = userBlog;
    blogUrl.classList.remove('data--disabled');
    return
}
const replaceTwitter = async () => {
    const user = await getDataFromAPI();
    const userTwitter = user.twitter_username;
    const userTwit = document.querySelector('.data__twitter-user');
    const dataTwitter = document.querySelector('.data__twitter');

    if (userTwitter === null) {    
        dataTwitter.classList.add('data--disabled');
        userTwit.textContent = 'Not Available';
        return;
    }

    dataTwitter.classList.remove('data--disabled');
    userTwit.textContent = `@${userTwitter}`;
    return
}
const replaceCompany = async () => {
    const user = await getDataFromAPI();
    const userCompany = user.company;
    const userComp = document.querySelector('.data__company-name');
    const company = document.querySelector('.data__company');

    if (userCompany === null) {
        company.classList.add('data--disabled');
        userComp.textContent = 'Not Available';
        return;
    }
    userComp.textContent = userCompany;
    company.classList.remove('data--disabled');
    return
}

const click = ()=> {
    search();
    getDataFromAPI();
    replaceAvatar()
    replaceUsername();
    replaceLink();
    replaceDate();
    replaceDescription();
    replaceRepos();
    replaceFollowers();
    replaceFollowing();
    replaceLocation();
    replaceBlog();
    replaceTwitter();
    replaceCompany();
    console.log(getDataFromAPI().then(response =>(console.log(response))))
}

// userSearch.addEventListener('keyup', event => {
//     if (event.keyCode === 10) click()
//     return
// })
button.addEventListener('click', click)

// const enter = (event) =>{
//     if (event.keyCode === 13 || event.wich === 13){
//         click()
//         console.log('dentro del if', event)
//         return
//     }
//     //console.log(event)
//     return
// }

// userSearch.addEventListener('keyup', enter)
