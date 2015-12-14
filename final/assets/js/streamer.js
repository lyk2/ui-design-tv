function genMovieModal(title, img) {

    var html = ""

    html += "<div class='container' style='width:100%'>"
    html += "<div class='row'>" +
        "<div class='col-xs-3'> " +
        '<img id="art" class="art" src="assets/img/movies/' + img + '" style="width: 90%;margin-top:22px">' +
        '<span class="glyphicon glyphicon-play-circle boxart" style=" margin-left: -55%; font-size: 60px; "></span>' +
        "</div>" +
        "<div class='col-xs-9'> " +
        "<h2>" + title + "</h2> " +
        '<span class="glyphicon glyphicon-remove meraj" style=" float: right; display: block; top: -70px; font-size: 20px; "></span>' +
        '<p style=" margin-top: -5px; color: #969696;margin-bottom: 20px;"><span class="glyphicon glyphicon-calendar" style=" margin-right: 5px;"></span><span style=" margin-right: 40px; ">2011</span><span class="glyphicon glyphicon-time"></span><span style=" margin-right: 40px; "> 1:47</span> <span class="glyphicon glyphicon-check"></span> <span style=" margin-right: 40px; "> PG-13</span> <span> Rating</span> <span style=" color: yellow; "> <span class="glyphicon glyphicon-star"></span> <span class="glyphicon glyphicon-star"></span> <span class="glyphicon glyphicon-star"></span><span style="margin-left:5px" class="glyphicon glyphicon-star"></span> <span class="glyphicon glyphicon-star-empty"></span></span></p>' +
        '<p> Director: Lorem Ipsum </p><p> Starring: Dolor Sit, Amet Consecteur, Adipiscing Elit </p>' +
        "<blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p></blockquote>" +
        '<div style=" float: right; "> <button class="btn btn-primary" style=" margin: 5px;" id="playnow">Play Now</button> </div>' +
        "</div>" +
        "</div>"
    html += "</div>"

    return html;
}

function genTvModal(title, img) {

    var html = ""

    html += "<div class='container' style='width:100%'>"
    html += "<div class='row'>" +
        "<div class='col-xs-2'> " +
        '<img id="art" class="art" src="assets/img/tv-shows/' + img + '" style="width: 90%;margin-top:22px">' +
        '<span class="glyphicon glyphicon-play-circle boxart" style=" margin-left: -58%; font-size: 50px; "></span>' +
        "</div>" +
        "<div class='col-xs-10'> " +
        "<h2>" + title + "</h2> " +
        '<span class="glyphicon glyphicon-remove meraj" style=" float: right; display: block; top: -70px; font-size: 20px; "></span>' +
        '<p style=" margin-top: -5px; color: #969696;margin-bottom: 20px;"><span class="glyphicon glyphicon-calendar" style=" margin-right: 5px;"></span><span style=" margin-right: 40px; ">2011</span><span class="glyphicon glyphicon-time"></span><span style=" margin-right: 40px; "> 1:47</span> <span class="glyphicon glyphicon-check"></span> <span style=" margin-right: 40px; "> PG-13</span> <span> Rating</span> <span style=" color: yellow; "> <span class="glyphicon glyphicon-star"></span> <span class="glyphicon glyphicon-star"></span> <span class="glyphicon glyphicon-star"></span><span style="margin-left:5px" class="glyphicon glyphicon-star"></span> <span class="glyphicon glyphicon-star-empty"></span></span></p>' +
        '<p> Director: Lorem Ipsum </p><p> Starring: Dolor Sit, Amet Consecteur, Adipiscing Elit </p>' +
        "<blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></blockquote>" +
        "</div>" +
        "</div>" +
        '<div class="row">' +
        '<div id="season" class="col-xs-3"><div class="list-group"> <a href="#" class="list-group-item" style=" font-size: larger; color:white">Seasons</a><a href="#" class="list-group-item active">Season One</a> <a href="#" class="list-group-item" style=" ">Season Two</a> <a href="#" class="list-group-item">Season Two</a></div></div>' +
        '<div id="show" class="col-xs-3"><div class="list-group"> <a href="#" class="list-group-item" style=" font-size: large; color:white">Episodes</a><a href="#" class="list-group-item active" style=" ">1 <span class="glyphicon glyphicon-eye-open" style=" margin-left: 10px; margin-right: 30px; color: grey; "></span> Pilot</a> <a href="#" class="list-group-item">2 <span class="glyphicon glyphicon-eye-open" style=" margin-left: 10px; margin-right: 30px; color: grey; "></span> Airplane</a> <a href="#" class="list-group-item">3 <span class="glyphicon glyphicon-eye-open" style=" margin-left: 10px; margin-right: 30px; "></span> Woodpeckers</a> <a href="#" class="list-group-item">4 <span class="glyphicon glyphicon-eye-open" style=" margin-left: 10px; margin-right: 30px; "></span> Popcorn</a><a href="#" class="list-group-item">5 <span class="glyphicon glyphicon-eye-open" style=" margin-left: 10px; margin-right: 30px; "></span> Chen</a></div></div>' +
        '<div id="desc" class="col-xs-6"> <div class="list-group" style=" "> <a class="list-group-item" style="height: 256px;"> <h4 class="list-group-item-heading">Pilot <span class="glyphicon glyphicon-heart" style=" color: red; margin-left: 15px; "></span></h4><p style=" margin: 15px 0 15px 0; color: grey; ">Released: May 13, 2014</p> <p style="color:white" class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p><div style=" float: right; "> <button class="btn btn-primary" style="margin: 21px;" id="playnow">Play Now</button> </div> </a> </div></div>' +
        '</div>' +
        "</div>"

    return html;
}

function playWindow() {

    var target = $("#player");

    $("#closeplayer").click(function () {
        if (screenfull.enabled) {
            screenfull.exit();
            target.hide();
        }
    })

    $('#button').click(function () {
        if (screenfull.enabled) {

            target.show();
            screenfull.request(target[0]);
        }
    });

}


//dialog creation
function dialogAlert(title, html, action) {
    $(document.body).append('<div id="alertDialog">' + html + '</div>');
    $('#alertDialog').dialog({
        dialogClass: "no-close",
        title: title,
        modal: true,
        draggable: false,
        resizable: false,
        closeOnEscape: true,
        width: $(window).width() * (0.9),
        create: function () {
            $(".ui-dialog-buttonset button").attr('class', 'btn btn-default');
        },
        open: function (event, ui) {
            $(this).focus();

            $(".ui-dialog-titlebar").hide();


            $("#art").hover(function () {
                $(".boxart").show();
            }, function () {
                $(".boxart").hide();
            });

            $('.ui-widget-overlay').bind('click', function () {
                $('#alertDialog').dialog('close');
                $('#alertDialog').dialog("destroy");
                $("#alertDialog").remove();
            });

            $(".meraj").click(function () {
                $("#alertDialog").dialog("close");
                $("#alertDialog").dialog("destroy");
                $("#alertDialog").remove();
            });

            var target = $("#player");

            $("#playnow").click(function () {

                if (screenfull.enabled) {
                    target.show();
                    screenfull.request(target[0]);
                }

                $("#alertDialog").dialog("close");
                $("#alertDialog").dialog("destroy");
                $("#alertDialog").remove();
            });

        }
    });
};


function genMovielibrary() {

    var list = JSON.parse(localStorage.getItem('movielist'));

    localStorage.setItem('activelisting', localStorage.getItem('movielist'))

    return genMovieListHtml(list);

};

function genTvlibrary() {

    var list = JSON.parse(localStorage.getItem('tvlist'));

    localStorage.setItem('activelisting', localStorage.getItem('tvlist'))

    return genTvListHtml(list);

};

function genMovieListHtml(list) {

    var html = ""
    var co = 0;

    for (var i = 0; i < list.length; i++) {

        var item = list[i]

        if (co == 0)
            html += '<div class="row">';

        html += genMovieTitle(item.title, item.img, item.year);

        if (co == 5) {
            html += '</div>';
            co = -1
        }

        co++
    }

    if (co != -1)
        html += '</div>';

    return html;


};

function genTvListHtml(list) {

    var html = ""
    var co = 0;

    for (var i = 0; i < list.length; i++) {

        var item = list[i]

        if (co == 0)
            html += '<div class="row">';

        html += genTvTitle(item.title, item.img, item.year);

        if (co == 5) {
            html += '</div>';
            co = -1
        }

        co++
    }

    if (co != -1)
        html += '</div>';

    return html;


};

function genMovieTitle(title, img, year) {

    var html = '<div class="col-md-2"> <img class="img-responsive geneva" style="width: 150px; height: 220px; " src="assets/img/movies/' + img + '.jpg" onclick="showModal(\'' + title + '\', \'' + img + '.jpg\')"> <p>' + title + '<br>' + year + '</p> </div>'
    return html
}

function genTvTitle(title, img, year) {

    var html = '<div class="col-md-2"> <img class="img-responsive geneva" style="width: 150px; height: 220px; " src="assets/img/tv-shows/' + img + '.jpg" onclick="showModal(\'' + title + '\', \'' + img + '.jpg\')"> <p>' + title + '<br>' + year + '</p> </div>'
    return html
}

function genreMovieSelect(genre) {

    var list = JSON.parse(localStorage.getItem('movielist'));

    var newlist = []

    for (var i = 0; i < list.length; i++) {
        var item = list[i];

        if (item.genre.toLowerCase() == genre.toLowerCase())
            newlist.push(item);
    }


    localStorage.setItem('activelisting', JSON.stringify(newlist));

    if (genre == "All")
        return list;

    return newlist;


}

function moviesearch(input) {

    var list = JSON.parse(localStorage.getItem('movielist'));
    var newlist = []

    for (var i = 0; i < list.length; i++) {
        var item = list[i];

        var a = item.title.toLowerCase()
        var b = input.toLowerCase()

        if (a.indexOf(b) >= 0)
            newlist.push(item);
    }

    localStorage.setItem('activelisting', JSON.stringify(newlist));

    return newlist;


}


function tvsearch(input) {

    var list = JSON.parse(localStorage.getItem('tvlist'));
    var newlist = []

    for (var i = 0; i < list.length; i++) {
        var item = list[i];

        var a = item.title.toLowerCase()
        var b = input.toLowerCase()

        if (a.indexOf(b) >= 0)
            newlist.push(item);
    }

    localStorage.setItem('activelisting', JSON.stringify(newlist));

    return newlist;


}

function genreTvSelect(genre) {

    var list = JSON.parse(localStorage.getItem('tvlist'));

    var newlist = []

    for (var i = 0; i < list.length; i++) {
        var item = list[i];

        if (item.genre.toLowerCase() == genre.toLowerCase())
            newlist.push(item);
    }


    localStorage.setItem('activelisting', JSON.stringify(newlist));

    if (genre == "All")
        return list;

    return newlist;
}

function sortyear() {

    var list = JSON.parse(localStorage.getItem('activelisting'));
    list.sort(compareyear);
    return list;
};


function sorttitle() {

    var list = JSON.parse(localStorage.getItem('activelisting'));
    list.sort(compareyear);
    return list;
};

function compareyear(a, b) {
    if (a.year < b.year)
        return -1;
    if (a.year > b.year)
        return 1;
    return 0;
}

function comparetitle(a, b) {
    if (a.title < b.title)
        return -1;
    if (a.title > b.title)
        return 1;
    return 0;
}