window.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('my-form')
    var status = document.getElementById('my-form-status')

    // Success and Error functions for after the form is submitted
    function success() {
        form.reset()
        status.classList.add(
            'alert',
            'alert-success',
            'alert-dismissible',
            'fade',
            'show',
            'px-2'
        )
        status.innerHTML =
            '<div class="row"><div class="col-8"><div class="d-flex flex-row justify-content-center"><i class="fa fa-check-circle mx-2"></i><h6 class="mt-3">Thank you! Your message has been successfully sent.</h6></div></div><div class="col-4 p-0"><button type="button" class="close align-items-end" data-dismiss="alert">&times;</button></div></div>'
    }

    function error() {
        status.classList.add(
            'alert',
            'alert-danger',
            'alert-dismissible',
            'fade',
            'show',
            'error',
            'px-2'
        )
        status.innerHTML =
            '<div class="row"><div class="col-8"><div class="d-flex flex-row justify-content-center"><i class="fa fa-times-circle mx-2"></i><h6 class="mt-3">Oops! There was a problem. Please Try Again Later.</h6></div></div><div class="col-4 p-0"><button type="button" class="close align-items-end" data-dismiss="alert">&times;</button></div></div>'
    }

    // handle the form submission event
    form.addEventListener('submit', function (ev) {
        ev.preventDefault()
        var data = new FormData(form)
        ajax(form.method, form.action, data, success, error)
    })
})

// helper function for sending an AJAX request
function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType)
        } else {
            error(xhr.status, xhr.response, xhr.responseType)
        }
    }
    xhr.send(data)
}
