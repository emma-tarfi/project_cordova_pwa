$('#btn-top-0').on('click', function(e){
    e.preventDefault();
    getDataExemple();
    $('#form-item .col-12').css('display', 'none');
    $('#subject-footer').css('display', 'none');
});

//Get items for top exemple
function getDataExemple() {
    $('#modal-list-top #list').html("");

    $.ajax({
        url: 'api/tops.json',
        dataType: 'json',
        success: function(data) {
            let title = "";
            let cpt = 0;
           $.each(data, function(index, item) {
               title = item.subject;
               cpt = cpt + 1;

                $('#modal-list-top .modal-body #list').append(`
                <div class="col-12 col-md-4">
                    <div onclick="openInAppBrowser('` + item.link + `')">
                        <div class="card">
                        <img src="` + item.file + `" class="card-img-top" />
                        <div class="card-body">
                            <h6 class="card-title">` + cpt  + `. ` + item.title + `</h6>
                            <p class="card-text">
                            ` + item.description + `
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

//Get all items for a top
function getDataTopsItem(subject) {
    $('#form-item .col-12').css('display', 'block');
    $('#subject-footer').css('display', 'block');

    $('#modal-list-top #list').html("");

    var data = localStorage.getItem("tops_item");
    var jsonArray = JSON.parse(data)
    let cpt = 0;

    if(jsonArray != null){
        $.each(jsonArray, function(index, item) {
            if(item.subject == subject){
                cpt = cpt + 1;
                $('#modal-list-top .modal-body #list').append(`
                <div class="col-12 col-md-4">
                    <div onclick="openInAppBrowser('` + item.link + `')">
                        <div class="card">
                        <img src="` + item.file + `" class="card-img-top" />
                        <div class="card-body">
                            <h6 class="card-title">` + cpt + `. ` + item.title + `</h6>
                            <p class="card-text">
                            ` + item.description + `
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
                `);
            }
        });
    }

    $('#modal-list-topLabel').html("My top " + subject);

    $('#form-item #subject').val(subject);
}

//Get all tops in main page
function getTopsSubject() {
    var data = localStorage.getItem("tops_subject");
    var jsonArray = JSON.parse(data);

    $('#tops-subject').html("");

    $.each(jsonArray, function(index, item) {
        $('#tops-subject').append(`
        <div class="row">
            <button type="button" id="btn-top-subject` + index + `" class="btn btn-secondary btn-subject" data-bs-toggle="modal" data-bs-target="#modal-list-top" onclick="getDataTopsItem(` + `'` + item + `'` + `)">
                My top ` + item + `
            </button>
        </div>
        `);
    });
}

//Create the top
function onclickCreateTop() {
    var array = [];
    var top = $('#top-subject').val();

    var data = JSON.parse(localStorage.getItem('tops_subject'));
    if(top){
        $('#top-subject').removeClass('is-invalid');
        $('#top-subject').addClass('is-valid');

        if(data){
            data.forEach(element => {
                array.push(element);
            });    
        }

        array.push(top);

        localStorage.setItem("tops_subject", JSON.stringify(array));

        getTopsSubject();

        $('#top-subject').val(null);
        $('#modal-form-top-subject').modal('hide');
    } else {
        $('#top-subject').removeClass('is-valid');
        $('#top-subject').addClass('is-invalid');
    }
};

//Update a top
function onClickUpdateTop() {
    var array = [];
    var subject = $('.needs-validation #subject').val();

    var data = JSON.parse(localStorage.getItem('tops_item'));

    if(data){
        data.forEach(item => {
            array.push(item);
        });    
    }

    var input = document.getElementById("file");

    var objects = {
        title: $('.needs-validation #title').val(), 
        subject: subject, 
        description: $('.needs-validation #description').val(), 
        link: $('.needs-validation #link').val(), 
        file: input.src, 
    }

    array.push(objects);

    localStorage.setItem("tops_item", JSON.stringify(array));

    $('.needs-validation :input').val(null);
    $('.needs-validation #file').attr("src", null);
    $('.needs-validation #subject').val(subject);
    getDataTopsItem($('.needs-validation #subject').val());
};

//Delete the top
function onclickDeleteTop() {
    var arrayTopsItem = [];
    var arrayTopsSubject = [];

    var subject = $('.needs-validation #subject').val();

    var dataTopsItem = JSON.parse(localStorage.getItem('tops_item'));
    var dataTopsSubject = JSON.parse(localStorage.getItem('tops_subject'));

    if(dataTopsItem){
        dataTopsItem.forEach(element => {
            if(element.subject != subject){
                arrayTopsItem.push(element);
            }
        });
    }

    dataTopsSubject.forEach(element => {
        if(element != subject){
            arrayTopsSubject.push(element);
        }
    });

    localStorage.removeItem('tops_item');
    localStorage.removeItem('tops_subject');

    localStorage.setItem("tops_item", JSON.stringify(arrayTopsItem));
    localStorage.setItem("tops_subject", JSON.stringify(arrayTopsSubject));

    getTopsSubject();

    $('#modal-list-top').modal('hide');
};

//Read file
function readURL(input) 
{
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById('file').src =  e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}