$(document).ready(function () {
    // $("#tweetsTb").DataTable();

    var message = getUrlParameter('message');
    if (message) {
        $("#alert").append(message);
        $("#alert").show();
    }

    $(".linkeable").each(function () {
        var words = $(this).text().split(' ');
        for (i in words) {
            if (words[i].indexOf('http://') == 0 || words[i].indexOf('https://') == 0) {
                words[i] = '<a target="_blank" href="' + words[i] + '">' + words[i] + '</a>';
            }

            if (words[i].indexOf('@') == 0) {
                words[i] = '<a target="_blank" href="https://twitter.com/' + words[i] + '">' + words[i] + '</a>';
            }
        }
        $(this).html(words.join(' '));
    });
    var last = $("#tweetsTb").data("last");
    //renderPagination(last);
    //pageAction();

    deleteTweet();
});

function deleteTweet() {
    $(".delete").click(function () {
        if (confirm("Are you sure of delete this tweet?")) {
            var button = $(this);
            var username = getUrlParameter('username');
            if (!username) {
                alert("Username is required");
            }
            location.href = "/delete?username=" + username + "&id=" + button[0].id;
        }
    });
}

function renderPagination(nextId) {

    var prev = sessionStorage.getItem('prev');
    var nav = $('<nav aria-label="Page navigation example">');
    var ul = $('<ul class="pagination justify-content-center">');
    if (prev != null) {
        var li = $('<li class="page-item ">');
        li.append('<a class="page-link" data-prev=' + prev + ' href="#">Prev</a>');
        ul.append(li);
    } else {
        var li = $('<li class="page-item disabled">');
        li.append('<a class="page-link" aria-disabled="true" href="#">Prev</a>');
        ul.append(li);
    }
    li = $('<li class="page-item">');
    li.append('<a class="page-link" data-next=' + nextId + ' href="#">Next</a>');
    ul.append(li);
    nav.append(ul);
    $(".container").append(nav);
}

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
}

function pageAction() {
    $(".page-link").click(function () {
        var username = getUrlParameter('username');
        if (!username) {
            alert("Username is required");
        }
        var link = $(this);
        var next = link.data("next");
        var first = $("#tweetsTb").data("first");
        if (next != null) {
            location.href = "/?username=" + username + "&minId=" + next;
            sessionStorage.setItem('prev', first);
        }

        var prev = link.data("prev");
        if (prev != null) {
            location.href = "/?username=" + username + "&minId=" + prev;
        }
    });
}