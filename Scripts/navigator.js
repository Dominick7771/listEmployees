class Navigator {
    constructor(selectors, activeIndex) {
        this.previousActiveIndex = -1;
        this.controls = selectors.map(this.#createControl);
        this.#addHandlers.call(this);
        this.#showActiveIndex.call(this, activeIndex);
    }

    #createControl(selector) {
        let control = {};
        control.$navItem = $(selector);
        control.$ariaItem = $('#' + control.$navItem.attr('aria-controls'));
        return control;
    }

    #addHandlers() {
        this.controls.forEach(function (control, index) {
            control.$navItem.on('click', function (event) {
                event.preventDefault();
                this.#showActiveIndex.call(this, index);
            }.bind(this));
        }.bind(this));
    }

    #showActiveIndex(activeIndex) {
        if (this.previousActiveIndex === activeIndex)
            return;
        if (this.previousActiveIndex >= 0) {
            this.#hideControl(this.controls[this.previousActiveIndex]);
        }
        this.#showControl(this.controls[activeIndex])
        this.previousActiveIndex = activeIndex;
    }

    #hideControl(control) {
        control.$navItem.removeClass('active');
        control.$ariaItem.attr('hidden', true);
    }

    #showControl(control) {
        control.$navItem.addClass('active');
        control.$ariaItem.attr('hidden', false);
    }
}