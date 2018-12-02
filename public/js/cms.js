$(document).ready(function() {
  // Gets an optional query string from our url (i.e. ?post_id=23)
  var url = window.location.search;
  var postId;
  // Sets a flag for whether or not we're updating a post to be false initially
  var updating = false;

  //If we have this section in our url, we pull out the post id from the url
  //In localhost:8080/cms?post_id=1, postId is 1
  if (url.indexOf("?post_id=") !== -1) {
    postId = url.split("=")[1];
    getPostData(postId);
  }

  // Getting jQuery references to the post body, title, form, and category select
  var bodyInput = $("#body");
  var cmsForm = $("#cms");
  var postCategorySelect = $("#category");
  // Adding an event listener for when the form is submitted
  $(cmsForm).on("submit", function handleFormSubmit() {
    event.preventDefault();
    var ijk;
    var titleInput;
    for (ijk = 1; ijk < 23; ijk++) {
      if ($("#res" + ijk).html() !== '') {
        titleInput += $("#res" + ijk).html() + "<br>";
        titleInput = titleInput.replace("undefined", "");
      }
    }
    // Wont submit the post if we are missing a body or a title
    // if (titleInput.val().trim() || bodyInput.val().trim()) {
    //   return;
    // }
    // Constructing a newPost object to hand to the database
    var newPost = {
      title: titleInput,
      body: bodyInput.val(),
      category: postCategorySelect.val()
    };

    console.log(newPost);

    // If we're updating a post run updatePost to update a post
    // Otherwise run submitPost to create a whole new post
    if (updating) {
      newPost.id = postId;
      updatePost(newPost);
    } else {
      submitPost(newPost);
    }
  });

  // Submits a new post and brings user to blog page upon completion
  function submitPost(Post) {
    $.post("/api/posts/", Post, function() {
      window.location.href = "/thankyou";
    });
  }

  // Gets post data for a post if we're editing
  function getPostData(id) {
    $.get("/api/posts/" + id, function(data) {
      if (data) {
        // If this post exists, prefill our cms forms with its data
        titleInput.val(data.title);
        bodyInput.val(data.body);
        postCategorySelect.val(data.category);
        // If we have a post with this id, set a flag for us to know to update the post
        // when we hit submit
        updating = true;
      }
    });
  }

  // Update a given post, bring user to the blog page when done
  function updatePost(post) {
    $.ajax({
        method: "PUT",
        url: "/api/posts",
        data: post
      })
      .then(function() {
        window.location.href = "/blog";
      });
  }





  $('#s_1').on('change', function() {
    var value = $(this).val();
    $('#res1').html("TUNA " + value);
  });

  $('#s_2').on('change', function() {
    var value = $(this).val();
    $('#res2').html("TUNA BELLY " + value);
  });

  $('#s_3').on('change', function() {
    var value = $(this).val();
    $('#res3').html("YELLOWTAIL " + value);
  });

  $('#s_4').on('change', function() {
    var value = $(this).val();
    $('#res4').html("SALMON " + value);
  });


  $('#s_5').on('change', function() {
    var value = $(this).val();
    $('#res5').html("OCTOPUS " + value);
  });

  $('#s_6').on('change', function() {
    var value = $(this).val();
    $('#res6').html("FRESH WATER EEL " + value);
  });


  $('#s_7').on('change', function() {
    var value = $(this).val();
    $('#res7').html("SALT WATER EEL " + value);
  });



  $('#s_8').on('change', function() {
    var value = $(this).val();
    $('#res8').html("SEA URCHIN " + value);
  });



  $('#s_9').on('change', function() {
    var value = $(this).val();
    $('#res9').html("SHRIMP " + value);
  });


  $('#s_10').on('change', function() {
    var value = $(this).val();
    $('#res10').html("SWEET SHRIMP " + value);
  });


  $('#s_11').on('change', function() {
    var value = $(this).val();
    $('#res11').html("SMOKED SALMON " + value);
  });


  $('#s_12').on('change', function() {
    var value = $(this).val();
    $('#res12').html("VEGI VEGI " + value);
  });


  $('#s_13').on('change', function() {
    var value = $(this).val();
    $('#res13').html("RAINBOW " + value);
  });



  $('#s_14').on('change', function() {
    var value = $(this).val();
    $('#res14').html("CATERPILLAR " + value);
  });


  $('#s_15').on('change', function() {
    var value = $(this).val();
    $('#res15').html("SOFT SHELL CRAB " + value);
  });


  $('#s_16').on('change', function() {
    var value = $(this).val();
    $('#res16').html("FUTOMAKI " + value);
  });

  $('#s_17').on('change', function() {
    var value = $(this).val();
    $('#res17').html("DOUBLE DRAGON " + value);
  });


  $('#s_18').on('change', function() {
    var value = $(this).val();
    $('#res18').html("SAKE KANI " + value);
  });

  $('#s_19').on('change', function() {
    var value = $(this).val();
    $('#res19').html("BIG EYE DIVER " + value);
  });

  $('#s_20').on('change', function() {
    var value = $(this).val();
    $('#res20').html("TEMPURA CRUNCHY " + value);
  });



  $('#s_21').on('change', function() {
    var value = $(this).val();
    $('#res21').html("AHI TUNA TATAKI " + value);
  });

  $('#s_22').on('change', function() {
    var value = $(this).val();
    $('#res22').html("POKI POKI " + value);
  });





  // modal js
  $('#myModal').on('shown.bs.modal', function() {
    $('#myInput').trigger('focus')
  })








  // apply change to all id's that start with s








  var boxHide = $(".sticky");

  function hideList() {
    boxHide.hide();
  }




  hideList();

  $("[id^='s']").on('change', function() {
    boxHide.fadeIn("slow");

  })






  $("button").on('click', function() {
    $("#title").replaceWith($("data"));

  })







});