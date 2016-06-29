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
    


    /** bootstrap interface to create new post */
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
            /** add new post title to post listing */
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



});

/** When a post is created,  we pass it to the object constructor and 
 * it needs to use its title for its object name 
 * then we add it to an array
 * */