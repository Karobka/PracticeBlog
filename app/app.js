$(document).ready(function() {
    var postsarray = [
        {
            postTitle: "Post Number 1",
            postDate: "June 1, 2016",
            postText: "Blah blah blah" 
        },
        {
            postTitle: "Post Number 2",
            postDate: "May 2, 2016",
            postText: "More more more"
        },
        {
            postTitle: "Post Number 3",
            postDate: "April 3, 2016",
            postText: "Another Another Another"
        }
    ];
    

    $("#createpostmodal").on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New post')
  modal.find('.modal-body input').val(recipient)
});



    /**Append or replace ".blog-post" (a child of ".blog-main") with content from clicked link */
    $(".list-group-item").click(function() {
        $(".blog-post").children().remove();
        $(".blog-post").append(
            "<h2 class='blog-post-title'>" + postsarray[0].postTitle + "</h2>",
            "<p class='blog-post-meta'>" + postsarray[0].postDate + "</p>",
            "<p>" + postsarray[0].postText + "</p>"
        )

    });



/**Adding a post object */
    function addPost(title, postDate, postText){
        postsarray.push({
            title: title,
            postDate: postDate,
            postText: postText
        });
    }



});



/** 
 * On clicking on a link to a different post
 *  find that matching post in the array
 *    append that post to the page
 * 
 * 
 * Stretch goal is to have a form at the bottom
 * where user can input text and create a basic post.
*/