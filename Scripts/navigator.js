class Navigator {
    constructor(selectors, activeItem) {
        this.previousActiveIndex = -1
        this.controls = selectors.map(this.#createControl)
        this.#addHandler.call(this)
        this.#showActiveIndex.call(this, activeItem)
    }

        #createControl(selector)
        {
            let control = {}
            control.$navItem = $(selector)
            control.$areaItem = $('#' + control.$navItem.attr('aria-controls'))
            return control
        }

        #addHandler()
        {
            this.controls.forEach(function (control, index)
            {
                control.$navItem.on('click', function (event)
                {
                    event.preventDefault()
                    this.#showActiveIndex.call(this, index)
                }.bind(this))
            }.bind(this))
        }

        #showActiveIndex(activeIndex)
        {
            if(activeIndex===this.previousActiveIndex)
                return

            if(this.previousActiveIndex>=0)
            {
                this.#hideControl(this.controls[this.previousActiveIndex])
            }

            this.#showControl(this.controls[activeIndex])

            this.previousActiveIndex = activeIndex
        }

        #hideControl(control)
        {
            control.$navItem.removeClass('active')
            control.$areaItem.attr('hidden', true)
        }

        #showControl(control)
        {
            control.$navItem.addClass('active')
            control.$areaItem.attr('hidden', false)
        }
    }
