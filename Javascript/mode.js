const changeMode = document.querySelector('.header__mode');

const lightMode = () => {
    const body = document.querySelector('body');
    body.classList.toggle('light-body');

    const search = document.querySelector('.header__search');
    search.classList.toggle('light-color');
    search.classList.toggle('shadow');

    const searchText = document.querySelector('.header__search-select');
    searchText.classList.toggle('light-color');

    const data = document.querySelector('.data');
    data.classList.toggle('light-color');
    data.classList.toggle('shadow');

    const dataNumbers = document.querySelector('.data__numbers');
    dataNumbers.classList.toggle('light-body');

    const mode = document.querySelector('.header__mode-icon');
    mode.classList.toggle('light-mode')

    const icon = document.querySelector('.header--icon');
    icon.classList.toggle('fa-adjust');
    icon.classList.toggle('fa-star');

    return;
}


changeMode.addEventListener('click', lightMode);