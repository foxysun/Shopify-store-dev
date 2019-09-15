$(document).ready(function() {	 
var User_Id = $("#instafeed").data("user_id");
var Access_Token = $("#instafeed").data("access_token");
var limit = $("#instafeed").data("limit");


var userFeed = new Instafeed({
  get: 'user',
  userId: User_Id,
  accessToken: Access_Token,
  limit: limit,
  resolution: 'low_resolution',
     template: '<div class="insta_list"><a href="{{link}}" target="_blank" class="insta_item"><div class="insta_img"><span class="overlay"></span><img src="{{image}}" /></div><div class="intsta_overlay"><span class="ion-social-instagram-outline"></span></div></a></div>'
  });

  userFeed.run();
});  
