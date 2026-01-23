(function () {


    // СЛАЙДЕР

    const swiper = new Swiper('.choice', {

        spaceBetween: 20,
        slidesPerView: 'auto',
        freeMode: true,

    });


    // ВЫПАДАЮЩИЙ СПИСОК

    /* Функция для переключения (открытия/закрытия) меню */
    function toggleDropdown(event) {
        // Останавливаем всплытие события, чтобы оно не вызвало обработчик закрытия окна сразу
        event.stopPropagation();

        // Находим контейнер с меню
        const dropdownContent = event.target.nextElementSibling;

        // Переключаем класс 'show'. Если его нет - добавляем, если есть - удаляем
        dropdownContent.classList.toggle('show');

        // Обновляем ARIA-атрибут для доступности
        const isExpanded = event.target.getAttribute('aria-expanded') === 'true' || false;
        event.target.setAttribute('aria-expanded', !isExpanded);
    }

    // Добавляем обработчик клика к кнопке
    // Используем querySelector для выбора конкретной кнопки и добавляем слушатель событий
    document.querySelector('.dropbtn').addEventListener('click', toggleDropdown);


    /* Функция для закрытия меню, если пользователь кликнул ВНЕ его */
    window.onclick = function (event) {
        // Проверяем, что клик был не по самой кнопке открытия
        if (!event.target.matches('.dropbtn')) {
            // Находим все открытые меню
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                // Если меню открыто (имеет класс show), то закрываем его
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                    // Также обновляем ARIA-атрибут кнопки, управляющей этим меню
                    const button = openDropdown.previousElementSibling;
                    button.setAttribute('aria-expanded', 'false');
                }
            }
        }
    };

    // СЛАЙДЕР-КАРТОЧКИ ТОВАРОВ

    // 1. Инициализация слайдера
    const mySwiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        grid: {
            rows: 2,
        },
        spaceBetween: 20,

        navigation: {
            nextEl: ".mySwiper-next",
            prevEl: ".mySwiper-prev",
        },

        pagination: {
            el: '.mySwiper-pagination',
            type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                    ' из ' +
                    '<span class="' + totalClass + '"></span>';
            }
        },
    });



    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.counter__button');
        if (!btn) return;

        e.preventDefault();
        const container = btn.closest('.counter');
        const input = container.querySelector('input');
        const btnMinus = container.querySelector('.counter__button-minus');

        // Используем Number() и защиту от пустых строк
        let value = Number(input.value) || 0;
        const maxLimit = 99;

        if (btn.classList.contains('counter__button-plus')) {
            if (value < maxLimit) value++;
        } else {
            if (value > 0) value--;
        }

        input.value = value;

        if (btnMinus) {
            btnMinus.disabled = (value <= 1);
        }


    });

    // ОТЗЫВЫ

    // const tabControls = document.querySelector('.tab-link')
    // tabControls.addEventListener('click', toggleTab)


    // const tabControl = e.target.closest('.tab-link')

    // if (!tabControl) return
    // e.preventDefault()
    // if (tabControl.classList.contains('tab-link--active')) return

    // const tabContentID = tabControl.getAttribute('href')
    // const tabContent = document.querySelector(tabContentID)
    // const activeControl = document.querySelector('.tab-link--active')
    // const activeContent = document.querySelector('.back-slide--show')

    // if (activeControl) {
    //     activeControl.classList.remove('tab-link--active')
    // }
    // if (activeContent) {
    //     activeContent.classList.remove('back-slide--show')
    // }


    // tabControl.classList.add('tab-link--active')
    // tabContent.classList.add('back-slide--show')









    //  Аккордеон

    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

    // document.querySelector('.accordion-list__item--opened .accordion-list__content').style.maxHeight = document.querySelector('.accordion-list__item--opened .accordion-list__content').scrollHeight + 'px';
    // эту строчку мы используем, если нам нужно, чтобы вкладка уже была открыта
    el.addEventListener('click', (e) => {

        const accordionList = e.currentTarget
        const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
        const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

        const accordionControl = e.target.closest('.accordion-list__link');
        if (!accordionControl) return
        e.preventDefault()
        const accordionItem = accordionControl.parentElement;
        const accordionContent = accordionControl.nextElementSibling;

        if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
            accordionOpenedItem.classList.remove('accordion-list__item--opened');
            accordionOpenedContent.style.maxHeight = null;
        }
        accordionItem.classList.toggle('accordion-list__item--opened');

        if (accordionItem.classList.contains('accordion-list__item--opened')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = null;
        }

        const clIcon = document.querySelector('.accordion-list__icon');
        btnIcon.addEventListener('click', () => {
            btnIcon.classList.toggle('active');
        });

    });

});

}) ()
