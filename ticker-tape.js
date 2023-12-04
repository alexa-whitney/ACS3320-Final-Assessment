class TickerTape extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });

        // container for the ticker text
        const tickerContainer = document.createElement('div');
        tickerContainer.style.whiteSpace = 'nowrap';
        tickerContainer.style.overflow = 'hidden';
        tickerContainer.style.display = 'block';

        // element to hold and animate the text
        const tickerText = document.createElement('div');
        tickerText.style.display = 'inline-block';
        tickerText.style.color = '#f20f80';
        tickerText.style.fontFamily = 'Barbie, cursive';
        tickerText.style.fontSize = '30px';
        tickerText.innerHTML = this.innerHTML;
        tickerText.style.animation = 'ticker 10s linear infinite';

        // add ticker text to the container
        tickerContainer.appendChild(tickerText);
        this._shadowRoot.appendChild(tickerContainer);

        // @keyframes for the ticker animation in a <style> element
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ticker {
                0% { transform: translateX(100%); }
                100% { transform: translateX(-100%); }
            }
        `;
        this._shadowRoot.appendChild(style);
    }
}

customElements.define('ticker-tape', TickerTape);
