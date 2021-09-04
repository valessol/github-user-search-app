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
    
    const userJoin = document.querySelector('.data__date');
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
    const userReposUrl = user.repos_url;
    const userRepos = await fetch(userReposUrl);
    const userReposJSON = await userRepos.json();
    
    const userReposNumber = document.querySelector('.data__repos');
    userReposNumber.textContent = userReposJSON.length;
    return
}

const replaceFollowers = async () => {
    const user = await getDataFromAPI();
    const userFollowersUrl = user.followers_url;
    const userFollowers = await fetch(userFollowersUrl);
    const userFollowersJSON = await userFollowers.json();
    
    const userFollowersNumber = document.querySelector('.data__followers');
    userFollowersNumber.textContent = userFollowersJSON.length;
    return
}

const replaceFollowing = async () => {
    const user = await getDataFromAPI();
    const username = user.login;
    const userFollowing = await fetch(`https://api.github.com/users/${username}/following`);
    const userFollowingJSON = await userFollowing.json();
    
    const userFollowingNumber = document.querySelector('.data__following');
    userFollowingNumber.textContent = userFollowingJSON.length;
    return
}

const replaceLocation = async () => {
    const user = await getDataFromAPI();
    const userLocation = user.location;
    const userLoc = document.querySelector('.data__location-text');

    if (userLocation === null) {
        const location = document.querySelector('.data__location');
        location.classList.add('data--disabled');
        userLoc.textContent = 'Not Available';
        return;
    }

    userLoc.textContent = userLocation;
    return
}
const replaceBlog = async () => {
    const user = await getDataFromAPI();
    const userBlog = user.blog;
    const userB = document.querySelector('.data__blog-url');

    if (userBlog === null) {
        const blogUrl = document.querySelector('.data__url');
        blogUrl.classList.add('data--disabled');
        userB.textContent = 'Not Available';
        return;
    }

    userB.textContent = userBlog;
    return
}
const replaceTwitter = async () => {
    const user = await getDataFromAPI();
    const userTwitter = user.twitter_username;
    const userTwit = document.querySelector('.data__twitter-user');
    const dataTwitter = document.querySelector('.data__twitter');

    if (userTwitter === null) {    
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

    if (userCompany === null) {
        const company = document.querySelector('.data__company');
        company.classList.add('data--disabled');
        userComp.textContent = 'Not Available';
        return;
    }
    userComp.textContent = userCompany;
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

button.addEventListener('click', search)
button.addEventListener('click', click)

