$(document).ready(function(){
    $('.delete-article').on('click', function(e) {
        e.preventDefault();
        const id = $(this).attr("data-id");
        $.ajax({
            type: 'DELETE',
            url: '/articles/' + id,
            success: function(response) {
                alert('Deleting Article');
                window.location.href="/";
            },
            error: function(err) {
                console.log(err);
            }
        })
    });
});