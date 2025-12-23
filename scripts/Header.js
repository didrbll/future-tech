class Header {
    //Хранит свойства с селекторами по дата-атрибутам.Нужен, чтобы не обращаться в дальнейшем к строкам напрямую
    //Обращаясь не к строкам, а к свойствам объекта, внутри которых хранятся строки, мы уменьшаем риск ошибок в коде
    selectors = {
        root: '[data-js-header]',
        overlay: '[data-js-header-overlay]',
        burgerButton: '[data-js-header-burger-button]',
    }

    //css-классы состояний, которые будут динамически добавляться и удаляться с dom-элементов
    stateClasses = {
        isActive: 'is-active',
        isLock: 'is-lock',
    }

    //конструктор автоматически выполняет свой код при инициализации класса
    constructor() {
        this.rootElement = document.querySelector(this.selectors.root);
        this.overlayElement = this.rootElement.querySelector(this.selectors.overlay);
        this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton);
        this.bindEvents()
    }

    onBurgerButtonClick = () => {
        this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
        this.overlayElement.classList.toggle(this.stateClasses.isActive);
        document.documentElement.classList.toggle(this.stateClasses.isLock); //для корневого элемента html
    }

    //Совершаем привязки различных событий к dom-элементам
    bindEvents() {
        this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
    }
}

export default Header