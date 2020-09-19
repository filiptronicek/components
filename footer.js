function replaceLastOccurrenceInString(input, find, replaceWith) {
    if (!input || !find || !replaceWith || !input.length || !find.length || !replaceWith.length) {
        // returns input on invalid arguments
        return input;
    }

    const lastIndex = input.lastIndexOf(find);
    if (lastIndex < 0) {
        return input;
    }

    return input.substr(0, lastIndex) + replaceWith + input.substr(lastIndex + find.length);
}

class Footer extends HTMLElement {
  connectedCallback() {
      let sponsStr = "";
    const url = `https://sponsors.trnck.dev/filiptronicek/sponsors`;
    fetch(url)
      .then((responce) => responce.json())
      .then((res) => {
        const respData = res.sponsors;
        const sponsors = [];
        for(const sponsor of respData) {
            sponsors.push(sponsor.handle);
        }
        if (!this.hasAttribute("profiles")) {
            this.setAttribute("profiles", "filiptronicek");
          }
          const ppl = this.getAttribute("profiles").split(",");
          let pplStr;
          pplStr = ppl.join(", ").replace(",", " &");
          let spoStr;
          spoStr = sponsors.join(", ");
          spoStr = replaceLastOccurrenceInString(spoStr, ",", " &");
          this.innerHTML = `
              <footer>
                  <hr />
                  Made with ❤️ and code by ${pplStr} and supported by ${spoStr}
              </footer>
          `;
      });


  }
}

customElements.define("site-footer", Footer);
