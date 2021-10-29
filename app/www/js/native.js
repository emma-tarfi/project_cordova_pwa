const deviceReady = () => {};

function getData() {
    $.ajax({
        url: 'api/tops.json',
        dataType: 'json',
        success: function(data) {
            let title = "";
           $.each(data, function(index, item) {
               title = item.subject;
                $('#modal-list-top .modal-body #list').append(`
                <div class="col-12 col-md-4">
                    <div onclick="openInAppBrowser('` + item.link + `')">
                        <div class="card">
                        <img src="` + item.img + `" class="card-img-top" />
                        <div class="card-body">
                            <h6 class="card-title">` + index + `. ` + item.title.toLowerCase() + `</h6>
                            <p class="card-text">
                            ` + item.description.toLowerCase() + `
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
                `);
           });
 
           $('#modal-list-topLabel').html("My top " + title);
        },
    });
}

$('#btn-top-1').on('click', function(e){
    e.preventDefault();
    getData();
});

function onclickCreateTop() {
    debugger;
    var $inputs = $('#form-top-subject :input');

    var values = {};
    $inputs.each(function() {
        values[this.name] = $(this).val();
    });

    debugger;
};