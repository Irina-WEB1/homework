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
    
    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__img-button')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }
function closeModal(e) {
    e.preventDefault()

    const target = e.target

    if(target.closest('.modal__cancel') || target.classList.contains('modal')) {
        document.body.classList.remove('body--opened-modal')
    }
}


})()