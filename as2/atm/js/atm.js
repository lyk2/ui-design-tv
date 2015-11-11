//dialog creation
function dialogAlert(title, html, action) {
    $(document.body).append('<div id="alertDialog">'+html+'</div>');
    $('#alertDialog').dialog({
        dialogClass: "no-close",
        title: title,
        modal: true,
        width: 400,
        draggable:false,
        resizable: false,
        buttons: [{
            text: "OK",
            click : function() {
                $(this).dialog("close");
                $(this).dialog("destroy");
                $("#alertDialog").remove();

                if (action)
                    action();
            }
        }],
        create:function () {
            $(".ui-dialog-buttonset button").attr('class', 'btn btn-default');
        }
    });
};

function addTransactionLog(account, oldbalance, type, amount, credit) {

    var log = localStorage.getItem(account+"-log");

    if(!log)
        log = [];
    else
        log = JSON.parse(log);

    var logitem = {
        type:type,
        credit:"",
        debit:"",
        balance:oldbalance,
        newbalance:localStorage.getItem(account+"-balance")
    };

    var dateObj = new Date();
    var date = dateObj.getMonth() + "/" + dateObj.getDay() + "/" + dateObj.getFullYear();
    var time = dateObj.getHours() + ":" + (((dateObj.getMinutes()+"").length == 2 ) ? dateObj.getMinutes() : "0" + dateObj.getMinutes());
    
    logitem.date = date;
    logitem.time = time;

    if (credit){
        logitem.credit= "" + amount;
    } else {
        logitem.debit= "" + amount;
    }

    log.unshift(logitem);
    
    localStorage.setItem(account+"-log", JSON.stringify(log));
}




$("#help").click(function() {
    dialogAlert("Alert", "Teller will be here shortly, please stand by");
});

setInterval(function() {
    showtime();
}, 6000);

showtime();

function showtime() {
    var d = new Date();
    time = "am"
    var hours,time;
    if (d.getHours()>=12) {
        hours = d.getHours()-12
        time = "pm"
    } else
        hours = d.getHours();

    var minutes = ((d.getMinutes()+"").length == 2 ) ? d.getMinutes() : "0" + d.getMinutes();

    if (hours==0)
        hours=12;
    $("#livetime").text("Current Time:  " + hours + ":" + minutes + time);
}
