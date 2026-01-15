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
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    const counters = document.querySelectorAll('[data-counter]');

    if (counters) {
        counters.forEach(counter => {
            counter.addEventListener('click', e => {
                const target = e.target;

                if (target.closest('.counter__button')) {
                    let value = parseInt(target.closest('.counter').querySelector('input').value);

                    if (target.classList.contains('counter__button-plus')) {
                        value++;
                    } else {
                        --value;
                    }

                    if (value <= 0) {
                        value = 0;
                    }

                    target.closest('.counter').querySelector('input').value = value;
                }
            })
        })
    };



    //  Аккордеон

    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        // document.querySelector('.accordion-list__item--opened .accordion-list__content').style.maxHeight = document.querySelector('.accordion-list__item--opened .accordion-list__content').scrollHeight + 'px';
        // эту строчку мы используем, если нам нужно, чтобы вкладка уже была открыта
        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control');
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

        });

    });
})()
