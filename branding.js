class Brand extends HTMLElement {
    connectedCallback() {

        if (!this.hasAttribute('profiles')) {
            this.setAttribute('profiles', "filiptronicek");
        }
        const ppl = this.getAttribute('profiles').split(",");
        let pplStr;
        pplStr = ppl.join(", ").replace(",", " &");
        this.innerHTML = `
        <footer>
            <hr />
            Made with ❤️ and code by ${pplStr}
        </footer>
    `;
    }
}

customElements.define("site-branding", Brand);