document.addEventListener("DOMContentLoaded", () => {
    const detailsElements = document.querySelectorAll('.details-element');

    detailsElements.forEach(function (detailsElement) {
        const summaryElement = detailsElement.querySelector('summary');
        detailsElement.addEventListener('toggle', function () {
            if (detailsElement.open) {
                summaryElement.textContent = summaryElement.textContent.replace('Ver', 'Ocultar');
            } else {
                summaryElement.textContent = summaryElement.textContent.replace('Ocultar', 'Ver');
            }
        });
    });
});