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
    


    /** interface to create new post */
    $("#createpostmodal").on('show.bs.modal');


    /** clear modal form inputs when hidden */
    $(".modal").on('hidden.bs.modal', function() { 
        $("#post-text, #post-title").val("");
    });

    /** copy input values to new object in array */
    $("#newpostbtn").click(function() {
        var newPostTitle = $("#post-title").val();
        var newPostText = $("#post-text").val();
        if (newPostText == "" || newPostTitle == ""){
            alert("Can't submit blank post");
        }else {
            postsarray.push({postTitle: newPostTitle, postDate:NaN/** change this */, postText:newPostText});
            console.log(postsarray);
            $("#post-list").after("<a href='#' class='list-group-item'>" + newPostTitle + "</a>");
        }
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