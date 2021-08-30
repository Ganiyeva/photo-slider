let card = document.getElementsByTagName('div');

for (let i = 0; i < card.length; i++) {
    setTimeout(() => {
        card[i].style.opacity = '1';
    }, (i + 1) * 1500);
};