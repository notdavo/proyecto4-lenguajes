class ContainerModel extends Model{
    
    constructor(htmlId) {
        super(htmlId)
        this._contentController = null
    }

    get getId() {
        return super.getId()
    }

    get getContentController() {
        return this._contentController
    }

    set setContentController(newContentController) {
        this._contentController = newContentController
    }
}