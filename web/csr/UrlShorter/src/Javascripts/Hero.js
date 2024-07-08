function copyToClipboard(){
    debugger;
    var copyText = document.getElementById('ShortedUrl');
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.error('Oops, unable to copy', err);
    }
}