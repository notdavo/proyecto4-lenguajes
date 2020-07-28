class ContainerController {
    constructor(containerModel, cointainerView) {
        super(containerModel, cointainerView)
    }

    changeContent = (newContentController) => {
        this._containerModel.setContentController(newContentController)

        const element = super._getElement(super._controller.getId())

        super._model.getContentController().renderHere(element)
    }
    
}