

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        slidesPerView: 3,
        spaceBetween: 13,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 13
            },
            // when window width is >= 480px
            620: {
              slidesPerView: 2,
              spaceBetween: 13
            },
            // when window width is >= 640px
            855: {
              slidesPerView: 3,
              spaceBetween: 13
            }
          }
    });

    // Валидация формы
    var selector = document.querySelector("input[type='tel']");
    var im = new Inputmask("+7 (999)-999-99-99");

    im.mask(selector);

    function hasInvalidInput(elements) {
        return elements.some((element) => !element.validity.valid);
    }


    let inputTel = document.getElementById('phone');
    let inputName = document.getElementById('inputName');
    let btnSubmit = document.querySelector('.form__btn');

    const inputs = document.querySelectorAll('.consultation__input');

    const setIsDisabled = () => {
        
        if (!(inputTel.value.includes('_')) && inputTel.value && !hasInvalidInput(Array.from(inputs))) {
            btnSubmit.disabled = false;
            btnSubmit.style.opacity = "1";
        } else {
            btnSubmit.disabled = true;
            btnSubmit.style.opacity = "0.4";
        }
    }

    inputs.forEach(input => input.addEventListener('input', () => setTimeout(() => setIsDisabled(), 5)))




const form = document.querySelector('.consultation__form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch('send.php', {
        method: 'POST',
        body: new FormData(form)
    }).then((res) => res.json()).then(result => {
        if(result.error === false) {
            return alert('Спасибо! Ваша заявка принята. Мы свяжемся с Вами в ближайшее время!')
        }
        alert('Ошибка! Попробуйте еще раз!')
    }).catch((err) => alert('Ошибка! Попробуйте еще раз!')).finally(() => {form.reset(), setIsDisabled()})
})


//Бургер меню
const btn = document.getElementById('menuBtn');
const menu = document.getElementById('menuContainer');

btn.addEventListener('click', showMenu);

function showMenu() {
    menu.classList.add('menu-show');
    var toggle = document.querySelector('.nav-toggle');
    this.classList.add('opened');
}

const closeBtn = document.getElementById('menuBtnClose');

closeBtn.addEventListener('click', closeMenu);
function closeMenu() {
    menu.classList.remove('menu-show');
    var toggle = document.querySelector('.nav-toggle');
    this.classList.remove('opened');
}



