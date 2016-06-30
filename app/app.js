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

   NewPost.prototype.createPost = function() {
       $(".blog-post").append(
                "<h2 class='blog-post-title' value:'" + this.postId + "'>" + this.postTitle + "</h2>"  +
                "<p class='blog-post-meta'>" + this.postDate + "</p>" + "<hr>" +
                "<p>" + this.postText + "</p>"
            );
            /** add new post title to post listing  and include post ID*/
            $("#post-list").after("<a href='#' class='list-group-item' value:'" + this.postId + "'>" + this.postTitle + "</a>");
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
            var newerPost = new NewPost(createId(), $("#post-title").val(), Date(), $("#post-title").val(), $("#post-text").val() )
            newerPost.createPost();
            postsarray.push(newerPost);
            console.log(postsarray); 
        }
    });

    /**update body with clicked on post  Append or replace ".blog-post" (a child of ".blog-main") with content from clicked link */
    $(".list-group-item").click(function(postId) {        
        var newnumber = postsarray.find(postId);
        console.log(newnumber);
        
        $(".blog-post").children().remove();
        $(".blog-post").append(
            "<h2 class='blog-post-title'>" + postsarray[0].postTitle + "</h2>",
            "<p class='blog-post-meta'>" + postsarray[0].postDate + "</p>",
            "<p>" + postsarray[0].postText + "</p>"
        )
    });



});

/**Assign the object's postId value to the link
 * When the link is clicked on it finds the postId value in the objects that matches
 * Display matching object/post
 */
