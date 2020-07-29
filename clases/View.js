class View {
    render(htmlId, html) {
        const element = document.querySelector(`#${htmlId}`)
        
        element.innerHTML = html
    }
}
