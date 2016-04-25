$(function(){
    $('#grade').click(saveGrades);
    $('tbody').on('click', '.delete', deleteGrade);
});
function saveGrades(e){
    e.preventDefault();
    var name = $("#name").val();
    var score = $("#score").val();
    var total = $("#total").val();
    var grade = calculateGrade(score, total);
    $.post('/grade', {
        name:name,
        score:score,
        total:total,
        mygrade:grade
    })
    .done(function(data){
        console.log(data);
    })
    .fail(function(error){
        console.log(error);
    })
}

function deleteGrade(e){
    var id =  e.target.id;
    $.ajax({
        url: `/grade/${id}`,
        type: 'DELETE',
        success: function(response) {
            $(e.target).closest('tr').remove();
            $('button.delete').attr('id', '')

        }
    });
}




function calculateGrade( score, total){
    var grade = score/total;
    var result = ''
    if(grade >= 0.9 ){
        result = "A";
        return result;
    }
    else if (grade >= 0.8) {
        result = "B";
        return result;
    }
    else if (grade >= 0.7) {
        result = "C";
        return result;
    }
    else if (grade >= 0.6) {
        result = "D";
        return result;
    }
    else {
        result = "F";
        return result;
    }
}
