function genMovieModal (title, img) {

    var html = ""

    html += "<div class='container' style='width:100%'>"
    html +=     "<div class='row'>" +
                    "<div class='col-xs-3'> " +
                        '<img id="art" class="art" src="assets/img/movie/'+img+'" style="width: 90%;margin-top:22px">' +
                        '<span class="glyphicon glyphicon-play-circle boxart" style=" margin-left: -55%; font-size: 60px; "></span>' + 
                    "</div>" + 
                    "<div class='col-xs-9'> " +
                        "<h2>"+title+"</h2> " +
                        '<span class="glyphicon glyphicon-remove meraj" style=" float: right; display: block; top: -70px; font-size: 20px; "></span>'+
                        '<p style=" margin-top: -5px; color: #969696;margin-bottom: 20px;"><span class="glyphicon glyphicon-calendar" style=" margin-right: 5px;"></span><span style=" margin-right: 40px; ">2011</span><span class="glyphicon glyphicon-time"></span><span style=" margin-right: 40px; "> 1:47</span> <span class="glyphicon glyphicon-check"></span> <span style=" margin-right: 40px; "> PG-13</span> <span> Rating</span> <span style=" color: yellow; "> <span class="glyphicon glyphicon-star"></span> <span class="glyphicon glyphicon-star"></span> <span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span> <span class="glyphicon glyphicon-star-empty"></span></span></p>' + 
                        '<p> Director: Lorem Ipsum </p><p> Starring: Dolor Sit, Amet Consecteur, Adipiscing Elit </p>' + 
                        "<blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p></blockquote>" + 
                        '<div style=" float: right; "> <button class="btn btn-primary" style=" margin: 5px;" id="playnow">Play Now</button> </div>' + 
                    "</div>" + 
                "</div>"
    html += "</div>"

    return html;
}

function playWindow() {

    var target = $("#player");

    $("#closeplayer").click(function(){
        if(screenfull.enabled){
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
        open: function(event, ui) {
            $(this).focus();

            $(".ui-dialog-titlebar").hide();


            $("#art").hover(function() {
                $(".boxart").show();
            }, function() {
                $(".boxart").hide();
            });

            $('.ui-widget-overlay').bind('click',function(){
                $('#alertDialog').dialog('close');
                $('#alertDialog').dialog("destroy");
                $("#alertDialog").remove();
            });

            $(".meraj").click(function(){
                $("#alertDialog").dialog("close");
                $("#alertDialog").dialog("destroy");
                $("#alertDialog").remove();
            });

            var target = $("#player");
            
            $("#playnow").click(function(){

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