class ContainerView extends View {
    render = (htmlId, htmlString) => {
        View.prototype.render.call(this, htmlId, htmlString)
    }
}