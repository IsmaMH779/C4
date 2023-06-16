let display = true;
const clicked = () => {
    div = document.getElementById('div');
    display ? (div.classList = 'hide', display = false) : (div.classList = '', display = true);
}