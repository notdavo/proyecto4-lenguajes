class ContainerView extends View {
    _getInitialHTML = (htmlTagId) => {
        return `<div id=${htmlTagId}></div>`
    }

    render = (htmlTagId) => {
        const htmlString = this._getInitialHTML(htmlTagId)

        View.prototype.render.call(this, htmlString, htmlTagId)
    }
}