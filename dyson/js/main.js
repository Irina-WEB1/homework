(function () {

    // БУРГЕР-МЕНЮ
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active'); // Анимируем иконку
        nav.classList.toggle('open');      // Показываем меню
    });


    // СЛАЙДЕР

    const swiper = new Swiper('.choice', {

        spaceBetween: 20,
        slidesPerView: 'auto',
        freeMode: true,


        breakpoints: {

            700: {
                slidesPerView: 3,
                spaceBetween: 8,
            },

            1000: {
                slidesPerView: 'auto',
                spaceBetween: 20,
            }

        },
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
        slidesPerView: 2,
        grid: {
            rows: 2,
        },
        spaceBetween: 10,


        breakpoints: {
            700: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        },


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


    // КНОПКА ДОБАВИТЬ В КОРЗИНУ

    const headerCounter = document.getElementById('cartCounter');
    let totalInCart = 0;

    // 1. ЛОГИКА КНОПКИ "В КОРЗИНУ"
    const buyButtons = document.querySelectorAll('.basket-button');

    buyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const productCard = btn.closest('.bottom-card');
            const input = productCard.querySelector('.counter__inp input');

            const amountToAdd = Number(input.value) || 1;
            totalInCart += amountToAdd;

            headerCounter.textContent = totalInCart;
            headerCounter.classList.add('active');

            // Обратная связь кнопки
            const originalText = btn.textContent;
            btn.textContent = 'Добавлено!';
            btn.classList.add('success'); // Можно добавить стили для зеленого цвета

            setTimeout(() => {
                btn.textContent = originalText;
                btn.classList.remove('success');
            }, 1000);

            headerCounter.style.transform = 'scale(1.3)';
            setTimeout(() => headerCounter.style.transform = 'scale(1)', 200);
        });
    });

    // 2. ЛОГИКА ВЫБОРА КОЛИЧЕСТВА (ДЕЛЕГИРОВАНИЕ)
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.counter__button');
        if (!btn) return;

        e.preventDefault();
        const container = btn.closest('.counter');
        const input = container.querySelector('input');
        const btnMinus = container.querySelector('.counter__button-minus');

        let value = Number(input.value) || 1;
        const maxLimit = 99;

        // ПЛЮС
        if (btn.classList.contains('counter__button-plus')) {
            if (value < maxLimit) value++;
        }
        // МИНУС
        else if (btn.classList.contains('counter__button-minus')) {
            if (value > 1) value--;
        }

        input.value = value;

        // ОБНОВЛЯЕМ СОСТОЯНИЕ МИНУСА (СЕРЫЙ ЦВЕТ)
        if (value <= 1) {
            btnMinus.classList.add('is-disabled');
        } else {
            btnMinus.classList.remove('is-disabled');
        }
    });

    // Инициализация при загрузке: проверяем все минусы, чтобы они сразу были серыми при value=1
    document.querySelectorAll('.counter__button-minus').forEach(btn => {
        const input = btn.closest('.counter').querySelector('input');
        if (Number(input.value) <= 1) btn.classList.add('is-disabled');
    });



    // ОТЗЫВЫ

    // Рейтинг 
    // Находим все контейнеры рейтингов на странице
    const ratingGroups = document.querySelectorAll('.rating');

    ratingGroups.forEach(group => {
        const stars = group.querySelectorAll('.star');

        stars.forEach((star, index) => {
            // Клик по звезде внутри конкретной группы
            star.addEventListener('click', () => {
                // Убираем активный класс у всех звезд ЭТОЙ группы и ставим нужным
                stars.forEach((s, i) => {
                    s.classList.toggle('active', i <= index);
                });

                // Получаем значение (например, для отправки в базу)
                const ratingValue = star.getAttribute('data-value');
                console.log(`Рейтинг в блоке ${group.id || 'без ID'}: ${ratingValue}`);
            });

            // Подсветка при наведении (только внутри этой группы)
            star.addEventListener('mouseenter', () => {
                stars.forEach((s, i) => {
                    s.classList.toggle('hover', i <= index);
                });
            });
        });

        // Очистка ховера при уходе мыши из конкретного контейнера
        group.addEventListener('mouseleave', () => {
            stars.forEach(s => s.classList.remove('hover'));
        });
    });






    // Галерея 1
    document.getElementById('view-all').addEventListener('click', function (e) {
        e.preventDefault(); // Отменяем переход по ссылке
        const gallery = document.getElementById('photo-gallery');

        // Массив новых изображений (в реальности может приходить из API)
        const extraPhotos = [
            'img/icons/feedback.png',
            'img/icons/feedback.png',
            'img/icons/feedback.png',
            'img/icons/feedback.png'
        ];

        // Генерируем HTML и вставляем его в конец галереи
        const html = extraPhotos.map(url => `
        <a class="feedback__slide feedback__slide--hidden">
            <img src="${url}" alt="новое фото" loading="lazy">
        </div>
    `).join('');

        gallery.insertAdjacentHTML('beforeend', html);

        // Убираем ссылку, так как все фото показаны
        this.classList.add('is-hidden');

        // Скрываем родительский контейнер кнопки, чтобы не занимал место
        setTimeout(() => this.parentElement.remove(), 300);
    });



    // Галерея 2

    document.getElementById('vw-all').addEventListener('click', function (e) {
        e.preventDefault(); // Отменяем переход по ссылке


        const gallery = document.getElementById('pht-gallery');

        // Массив новых изображений (в реальности может приходить из API)
        const extraPhotos = [
            'img/icons/feedback.png',
            'img/icons/feedback.png',
            'img/icons/feedback.png',
            'img/icons/feedback.png'
        ];

        // Генерируем HTML и вставляем его в конец галереи
        const html = extraPhotos.map(url => `
        <a class="feedback__slide feedback__slide--hidden">
            <img src="${url}" alt="новое фото" loading="lazy">
        </div>
    `).join('');

        gallery.insertAdjacentHTML('beforeend', html);

        // Убираем ссылку, так как все фото показаны
        this.classList.add('is-hidden');

        // Скрываем родительский контейнер кнопки, чтобы не занимал место
        setTimeout(() => this.parentElement.remove(), 300);
    });




    // КНОПКА ПОКАЗАТЬ ЕЩЕ
    const btn = document.getElementById('showMoreBtn');
    const list = document.getElementById('myList');
    const initialContent = btn.innerHTML;

    btn.addEventListener('click', function () {

        const isOpen = list.classList.toggle('is-open');

        // Меняем текст кнопки для удобства
        if (isOpen) {
            btn.textContent = 'Скрыть';
        } else {
            btn.innerHTML = initialContent;
        }
    });






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

    // НОВОСТИ (кнопка)

    const bn = document.getElementById('showBtn');
    const lis = document.getElementById('newsList');
    const initialCont = bn.innerHTML;

    bn.addEventListener('click', function () {

        lis.classList.toggle('is-open');

        // Меняем текст кнопки для удобства
        if (lis.classList.contains('is-open')) {
            bn.textContent = 'Скрыть';
        } else {
            bn.innerHTML = initialCont;
        }
    });

})()
