document.addEventListener('click', function (event) {
    if (event.target.classList.contains('photon-color')) {
        event.target.select();
        event.target.setSelectionRange(0, 99999);
        document.execCommand('copy');
        document.getElementById('message').innerHTML = 'copied ' + event.target.outerHTML + ' to clipboard 😸';
    }
})
