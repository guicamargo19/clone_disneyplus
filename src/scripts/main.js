document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector(".hero");
    const heroHeight = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const positionWindow = window.scrollY;

        if (positionWindow < heroHeight) {
            hideHeaderElements();
        } else {
            showHeaderElements();
        }
    })

    // Programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(button) {
            const target = button.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${target}]`)
            hideAll();
            aba.classList.add("shows__list--is-active");
            removeActiveButton();
            button.target.classList.add('shows__tabs__button--is-active');
        })
    }

    // Section FAQ, Accordion
    for (let i = 0; i<questions.length; i++) {
        questions[i].addEventListener('click', openOrCloseAnswer);
    }
});

function showHeaderElements() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function hideHeaderElements() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function openOrCloseAnswer(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function removeActiveButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
};

function hideAll() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
};