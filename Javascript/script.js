const userSearch = document.querySelector('input');
const button = document.querySelector('button');

const search = () => {
    const username = userSearch.value;
    return username;
}

const getDataFromAPI = async () => {
    const data = await fetch ("https://api.github.com/repositories");
    const response = await data.json();
    //console.log(response);
    return response;
}


const getUserIndex = async () => {
    const data = await getDataFromAPI();
    const username = search();
    const userIndex = data.findIndex((p)=>p.owner.login === username);
    //if (!userIndex) return false;
    return userIndex;
}

// Prueba cambiando de API****************************
const getDataFromAPIU = async () => {
    const user = 'octocat'
    const data = await fetch (`https://api.github.com/users/${user}`);
    const response = await data.json();
    console.log(response);
    return response;
}

getDataFromAPIU()

//********************************** */

const searchedUser = async () => {
    const data = await getDataFromAPI ();
    const userIndex = await getUserIndex();
    //if (userIndex === false) return
    const user = data[userIndex];
    return user;
}

const replaceAvatar = async () => {
    const user = await searchedUser();
    const avatar = user.owner.avatar_url;

    const userImage = document.querySelector('.data__image');
    userImage.src = avatar;
    return
}

const replaceUsername = async () => {
    const user = await searchedUser();
    const username = user.owner.login;

    const userTitle = document.querySelector('.data__title');
    userTitle.textContent = username;
    return
}

const replaceLink = async () => {
    const user = await searchedUser();
    const username = user.owner.login;
    const userURL = user.owner.html_url;

    const userLinkHTML = document.querySelector('.data__link--span');
    userLinkHTML.textContent = username;

    const userLink = document.querySelector('.data__link')
    userLink.href = userURL;
    return
}

const replaceDescription = async () => {
    const user = await searchedUser();
    const userDescription = user.description;

    const userDesc = document.querySelector('.data__description');
    userDesc.textContent = userDescription;
    return
}

const replaceRepos = async () => {
    const user = await searchedUser();
    const userReposUrl = user.owner.repos_url;
    const userRepos = await fetch(userReposUrl);
    const userReposJSON = await userRepos.json();
    
    const userReposNumber = document.querySelector('.data__repos');
    userReposNumber.textContent = userReposJSON.length;
    return
}

const replaceFollowers = async () => {
    const user = await searchedUser();
    const userFollowersUrl = user.owner.followers_url;
    const userFollowers = await fetch(userFollowersUrl);
    const userFollowersJSON = await userFollowers.json();
    
    const userFollowersNumber = document.querySelector('.data__followers');
    userFollowersNumber.textContent = userFollowersJSON.length;
    //console.log(userFollowersJSON)
    return
}

const replaceId = async () => {
    const user = await searchedUser();
    const userId = user.owner.id;
    
    const userIdNumber = document.querySelector('.data__id');
    userIdNumber.textContent = userId;
    //console.log(userIdUrl, userId)
    return
}




const click = ()=> {
    searchedUser();
    if (getUserIndex () === false) return
    replaceAvatar()
    replaceUsername();
    replaceLink();
    replaceDescription();
    replaceRepos();
    replaceFollowers();
    replaceId();
}

button.addEventListener('click', search)
button.addEventListener('click', click)

//searchedUser()
