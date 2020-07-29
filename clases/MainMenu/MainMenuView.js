class MainMenuView extends View {
  consultaButton = null
  administrarButton = null

  render = (htmlId, htmlString) => {
    View.prototype.render.call(this, htmlId, htmlString)

    this.consultaButton = document.getElementById('consultaButton')
    this.administrarButton = document.getElementById('administrarButton')
  }
}