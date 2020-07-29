class ContainerModel extends Model{
    
    constructor(htmlId) {
        super(htmlId)
        this._contentController = null
    }

    getHtml = (args) => {
        return `
            <div id=${args.id}>
                <div id='content'></div>
            </div>
        `
    }

    getId = () => {
        return Model.prototype.getId.call(this)
    }

    getContentController = () => {
        return this._contentController
    }

    setContentController = (newContentController) => {
        this._contentController = newContentController
    }
}