let input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("myBtn").click();
    }
});


$('.todolist, .donelist').on('click','.deletebutton',function(){
	$(this).parent().parent().remove();
})

$('.todolist, .donelist').on('click','.editbutton',function(){
	$(this).parent().find('.savebutton').css("display","inline");
	$(this).parent().find('.editbutton').css("display","none");
	$(this).parent().parent().find('.todoitem').hide();
	$(this).parent().parent().find('#edit').show().val($(this).parent().parent().find('.todoitem').text());

})

$('.todolist, .donelist').on('click','.savebutton',function(){
	$(this).parent().find('.savebutton').css("display","none");
	$(this).parent().find('.editbutton').css("display","inline");
	$(this).parent().parent().find('.todoitem').text($(this).parent().parent().find('#edit').val());
	$(this).parent().parent().find('.todoitem').show();
	$(this).parent().parent().find('#edit').hide();
})


$('.todolist').on('change','.mycheckbox',function(){
	
	let parent = $(this).parent();
	$('.donelist').append(parent);
	$(this).parent().find('.todoitem').css("text-decoration","line-through");
	
})

$('.donelist').on('change','.mycheckbox',function(){
	let parent = $(this).parent();
	$('.todolist').append(parent);
	$(this).parent().find('.todoitem').css("text-decoration","none");
	
})

$('.addbutton').on('click',function(){
	let todo = $('input').val();
	if(todo!="" && todo != " "){
		$('input').val(" ");
	let str = '<li>'+ '<input type="checkbox" class = "mycheckbox">' +'<span class="todoitem">' + todo +'</span>'+ ' <input type="text" id="edit" style="display:none" /> '  + '<span class="buttonspan">  <span class="editbutton">EDIT</span> ' + '  <span style="display:none;" class="savebutton">SAVE</span>' + "  " +'<span class="deletebutton">DELETE</span></span><hr style="opacity:0.5">'
	$('.todolist').append(str);
	}
	

})
