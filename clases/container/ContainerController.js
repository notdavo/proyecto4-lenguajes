class ContainerController extends Controller {
    constructor(model, view) {
        super(model, view)
    }

    render = (htmlId, args) => {
        Controller.prototype.render.call(this, htmlId, args)
    }
    
    changeContent = (newContentController) => {
        this._model.setContentController(newContentController)
        const args = { id: this._model.getId() }
        this.render('main', args)

        const childController = this._model.getContentController()

        childController.render('content', {})
    }
}