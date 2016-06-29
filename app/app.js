"use strict";

$(document).ready(function() {
    var createId = (function() {
        var postId = 0;
        return function() {
            postId++;
            return postId;
        };
    }());
    
    var postsarray = [];

    function NewPost(postId, postTitle, postDate, postAuthor, postText) {
        this.postId = postId,
        this.postTitle = postTitle,
        this.postDate = postDate,
        this.postAuthor = postAuthor,
        this.postText = postText
    };

   NewPost.prototype.create = function() {
       $(".blog-post").append(
                "<h2 class='blog-post-title'>" + this.postTitle + "</h2>" +
                "<p class='blog-post-meta'>" + this.postDate + "</p>" +
                "<p>" + this.postText + "</p>"
            );
            this.postId++;
   };
    


    /** bootstrap interface to create new post */
    $("#createpostmodal").on('show.bs.modal');


    /** clear modal form inputs when hidden */
    $(".modal").on('hidden.bs.modal', function() { 
        $("#post-text, #post-title").val("");
    });

    /** copy input values to new object in array */
    $("#newpostbtn").click(function() {
        if ($("#post-text").val() == "" || $("#post-title").val() == ""){
            alert("Can't submit a blank post");
        }else {
            $(".blog-post").children().remove();
            var newerPost = new NewPost(createId, $("#post-title").val(), Date(), $("#post-title").val(), $("#post-text").val() )
            newerPost.create();
            postsarray.push(newerPost);
            console.log(postsarray);
            /** add new post title to post listing */
            $("#post-list").after("<a href='#' class='list-group-item'>" + $("#post-title").val() + "</a>");
            /** update body with latest post ???is there a way to do this and clicking on an old post in the list???*/
            
            
        }
    });

    /**update body with clicked on post  Append or replace ".blog-post" (a child of ".blog-main") with content from clicked link */
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