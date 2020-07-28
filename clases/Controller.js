class Controller {
    constructor(model, view) {
        this._view = view
        this._model = model
    }

    get getId() {
        return this._model.getId()
    }
    
    render = (htmlId, args) => {
        try {
            this._view.render(htmlId, this._model.getHtml(args))
        } catch (e) {
            console.error('Error model don\' implement getHtml method')
        }
    }
}