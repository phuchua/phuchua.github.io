$(document).ready(function () {    
    $('[required="required"]').prev('label').append('<span>*</span>').children('span').addClass('required');
    $('tbody tr:even').addClass('even');

    $('#btnAddTask').click(btnAddClicked);

    $('tbody tr').click(function (evt) {

        $(evt.target).closest('td').siblings().addBack().toggleClass('rowHighlight');
    });

    function btnAddClicked(evt) {
        evt.preventDefault();
        $('#taskCreation').removeClass('not');
        console.log($(evt.target).html());
    }

    $('#tblTasks tbody').on('click', '.deleteRow', function (evt) {
        evt.preventDefault();
        $(evt.target).parents('tr').remove();
    });
});

(function ($) {
    $.fn.extend({
        toObject: function () {
            var result = {}
            $.each(this.serializeArray(), function (i, v) {
                result[v.name] = v.value;
            });
            return result;
        },
        fromObject: function (obj) {
            $.each(this.find(':input'), function (i, v) {
                var name = $(v).attr('name');
                if (obj[name]) {
                    $(v).val(obj[name]);
                } else {
                    $(v).val('');
                }
            });
        }
    });
})(jQuery);