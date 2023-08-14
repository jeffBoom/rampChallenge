document.addEventListener("DOMContentLoaded", () => {
    const bodyElement = document.body;
    const getElements = bodyElement.querySelectorAll('ul > li > div > span.ramp.value');
    const values = [];
    for (const matchedElement of getElements) {
        values.push(matchedElement.getAttribute('value'));
    }
    const url = values.join('');
    console.log('url', url);
})