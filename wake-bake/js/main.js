(function () {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {
        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        // console.log(document.documentElement.clientWidth) - проверка ширины окна (браузера)
        if (!burgerIcon && !burgerNavLink) return

        if (document.documentElement.clientWidth > 900) return
        // т.е. если ширина экрана больше 900, то код перестает работать
        
        // if (burgerIcon) {
        //     e.preventDefault()
        // } отменяет дефолтное поведение, т.е иконка перестает быть ссылкой
        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }
})()