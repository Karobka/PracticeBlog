"use strict";
var userName = $("#user-name").val();

$(document).ready(function() {
    var createId = (function() {
        var postId = 0;
        return function() {
            postId++;
            return postId;
        };
    }());

    
    $("#btn-log-in").click(function() {
        userName = $("#user-name").val();
        $("#btn-start-login").css("display", "none");
        $("#btn-create-post").css("display", "block");
        $("#about-name").append(userName);
    });
    
    var postsarray = [
        {
            postId: "5",
            postTitle: "Post Number 1",
            postDate: "June 1, 2016",
            postText: "Blah blah blah" 
        },
        {
            postId: "6",
            postTitle: "Post Number 2",
            postDate: "May 2, 2016",
            postText: "More more more"
        },
        {
            postId: "7",
            postTitle: "Post Number 3",
            postDate: "April 3, 2016",
            postText: "Another Another Another"
        }
    ];

    function NewPost(postId, postTitle, postDate, postAuthor, postText) {
        this.postId = postId,
        this.postTitle = postTitle,
        this.postDate = postDate,
        this.postAuthor = userName,
        this.postText = postText
    };

   NewPost.prototype.createPost = function() {
       $(".blog-post").append(
                "<h2 class='blog-post-title' value:'" + this.postId + "'>" + this.postTitle + "</h2>"  +
                "<p class='blog-post-meta'>" + this.postDate + " Posted by: " + userName + "</p>" + "<hr>" +
                "<p>" + this.postText + "</p>"
            );
            /** add new post title to post listing  and include post ID*/
            $("#post-list").after("<a href='#' class='list-group-item' value:'" + this.postId + "'>" + this.postTitle + "</a>");
        };
    
    /** bootstrap modal interface to create new post */
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
            var newerPost = new NewPost(createId(), $("#post-title").val(), Date(), userName, $("#post-text").val() )
            newerPost.createPost();
            postsarray.push(newerPost);
            console.log(postsarray); 
        }
    });

    /**update body with matching postID content for clicked post   */
    $(".list-group-item").click(function() {        
        /** var newnumber = postsarray.find(postId);
        /** console.log(newnumber); */
        for (var prop in postsarray){
            console.log(postId[prop]);
        }
        for (var i=0; i < postsarray.length; i++) {
            console.log(postsarray[{postId:['prop']}]);
        }

        
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
