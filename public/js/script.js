$(document).ready(function () {
    var form = $("#shorten-form");
    var urlBox = $("#urlBox")
    var link = $("#link");
    var shrBox = $("#shortened");

    function displayShortenedUrl(response) {
        console.log(response);
        link.text(response.shortUrl);
        link.attr("href", response.shortUrl);
        shrBox.css('opacity', '1');
        urlBox.val('');
    }

    function alertError(error) {
        alert('An error has occurred, please try again.');
    }

    form.submit(function (event) {
        event.preventDefault();

        $.post('/new', {url: urlBox.val()})
            .done(displayShortenedUrl)
            .fail(alertError)
    });
});
