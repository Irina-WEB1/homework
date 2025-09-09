// const btn = document.querySelector('.btn-open')
// btn.addEventListener('click', event => {
//     const target = event.target 
//     if ( target && target.classList.contains('btn-open')) {
//      console.log(target.modal__window)   
//     }


// })

const btn = document.querySelector('.btn-open')
const modal = document.querySelector('.modal')


const openModal = () => {
modal.classList.add('modal--open')
}
const closeModal = () => {
    modal.classList.remove('modal--open')
}


btn.addEventListener('click', openModal)
// modal.addEventListener('click', () => {
//     modal.classList.remove('modal--open')
// } )

modal.addEventListener('click', event => {
    const target = event.target
    if (target && target.classList.contains('modal') || target.classList.contains('modal__close-btn')) {
        closeModal()
    }
})

document.addEventListener('keydown', event => {
    // console.log(event.code)
    if (event.code === 'Escape' && modal.classList.contains('modal--open')) {
        // modal.classList.remove('modal--open')
        closeModal()
    }
})

