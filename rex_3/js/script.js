var rexApp = angular.module('rexApp', ['ngRoute','ngSanitize']);
rexApp.controller('TextController', function($scope,  $interval, $location) {
	
	
	$scope.calvary_items = [
	{text_content: "Have you ever seen anyone in this world with infinite, unconditional, immeasurable love for you ?", timing: 100},
	{text_content: "I paid the penalty for your sins in this cross.", timing: 100},
	{text_content: "I gave my life to save u.", timing: 100},
	{text_content: "You are precious in my sight.", timing: 100},
	{text_content: "Behold I stand at the door steps of your heart knocking....", timing: 100},
	{text_content: "Won't u open the door for me?", timing: 100},
	{text_content: "Are you tired, hurt, disappointed and rejected?", timing: 100},
	{text_content: "I am waiting for you with outstretched arms.", timing: 100},
	{text_content: "Would you take a step towards the Calvary?", timing: 100},
	{text_content: "Do you want to experience my love ?", timing: 100}
	];
	console.log();
	$scope.hell_items = [
	{text_content: "Do you want your skin to be burnt at 3000 deg cen and still not die ?", timing: 100},
	{text_content: "Then commit sin as you want and have your seat booked at "  , timing: 100},
	{text_content: "THE HELL ", timing: 100},
	{text_content: "Come for Demo and feel the heat.", timing: 100}	
	];
	$scope.heaven_items = [
	{text_content: "A well designed Paradise for you, with absolutely ", timing: 100},
	{text_content: "NO TROUBLES !", timing: 100},
	{text_content: "NO TEARS !", timing: 100},
	{text_content: "NO FEARS !", timing: 100},
	{text_content: "And you will be in the safe hands of the Lord , your creator Jesus Christ forever and ever.", timing: 100},
	{text_content: "Enjoy a sample for the glory of HEAVEN with us .", timing: 100},
	
	];
	$scope.three_d_items = [
	{text_content: "You may have heard about Eye donation. ", timing: 100},
	{text_content: "But we donate 3rd eye to make you thrilled. "  , timing: 100},
	{text_content: "Come and enjoy our 3-D Show, the most exciting event for the day. ", timing: 100}
	];
	$scope.new_jerusalem_items = [
	{text_content: "Guys !! Do you want to see the Hi-fi city which the world has ever seen ? ", timing: 100},
	{text_content: "You really want to see the best architecture which no architect in this world can ever build ? "  , timing: 100},
	{text_content: "Have a new and exciting experience in the 'New Jerusalem' ", timing: 100}
	];
	$scope.revelation_items = [
	{text_content: "You can know about the past from your memory. ", timing: 100},
	{text_content: "You can know about the present from news channels. "  , timing: 100},
	{text_content: "But here is the room, where we can see the Present, Past and Future of the world ", timing: 100},
	{text_content: "Its the real Vantage Point ! ", timing: 100},
	{text_content: "Just come and get revealed !!!! ", timing: 100}

	];
	$scope.archaelogy_items = [
	{text_content: "Do you believe Bible is an authenticated source for Word of God ? ", timing: 100},
	{text_content: "Are you ready to travel through historical evidences in The Bible ? "  , timing: 100},
	{text_content: "Get into Archaelogical Room. ", timing: 100}
	];

	$scope.event_items = [
	{text_content: "We have a lot in store for you ", timing: 100},
	{text_content: "Dont MISS REX ", timing: 100}
	];
	$scope.items_init = function(){
		if($location.absUrl().search("calvary")!=-1)
			return $scope.calvary_items;
		else if($location.absUrl().search("hell")!=-1)
			return $scope.hell_items;
		else if($location.absUrl().search("heaven")!=-1)
			return $scope.heaven_items;
		else if($location.absUrl().search("3droom")!=-1)
			return $scope.three_d_items;
		else if($location.absUrl().search("archaelogy")!=-1)
			return $scope.archaelogy_items;
		else if($location.absUrl().search("newjerusalem")!=-1)
			return $scope.new_jerusalem_items;
		else if($location.absUrl().search("revelation")!=-1)
			return $scope.revelation_items;
		else if($location.absUrl().search("events")!=-1)
			return $scope.event_items;
	}
	$scope.items = $scope.items_init();

	$scope.index_v = 0;
	$scope.item_index = 0;
	$scope.item = $scope.items[$scope.item_index].text_content;
	$scope.message = '';
	$scope.len_v = $scope.item.length;
	$scope.timing_interval = $scope.items[$scope.item_index].timing;
	
	$scope.text_interval_function =  function(){
		$scope.message = $scope.item.slice(0, $scope.index_v)
		$scope.index_v++;
		if($scope.index_v == $scope.len_v){ 
			$scope.item_index++;
			if($scope.item_index == $scope.items.length){
					$scope.timing_interval = 0;
			}
			else{
				$scope.timing_interval = $scope.items[$scope.item_index].timing;
				$scope.item = $scope.items[$scope.item_index].text_content;
				$scope.len_v = $scope.item.length;
				$scope.index_v = 0; 
				$interval(function(){
					$interval($scope.text_interval_function, $scope.timing_interval, $scope.len_v);
				}, 1000, 1)
			}
		}
	}

	$interval($scope.text_interval_function, $scope.timing_interval, $scope.len_v);

});
rexApp.controller("copyrightController", function($scope){
	$scope.copyright = "&copy; Heavenly Ladder Ministries"
});
rexApp.controller("sidebarController", function($scope){
	$scope.mess = "TEST";
	$scope.items = [{content: "<div class='iconmelon'><svg viewBox='0 0 32 32'><use xlink:href='#angel'></use></svg></div><span>Heaven</span>"}];
});

	rexApp.controller('headerController', function ($scope, $timeout) {
		var seconds,minutes,days,hours;
		function calculate(){
			//console.log("calculate fn");
	    	var d1 = new Date();
			var d2 = new Date('2015-01-01');
			var difference_ms = d2 - d1;
			difference_ms = difference_ms/1000;
			seconds = Math.floor(difference_ms % 60);
			difference_ms = difference_ms/60; 
			minutes = Math.floor(difference_ms % 60);
			difference_ms = difference_ms/60; 
			hours = Math.floor(difference_ms % 24);  
			days = Math.floor(difference_ms/24);
		}


		$scope.cal = function(){
			calculate();
			//console.log("Cal fn");
			$scope.time_rem_days = complete_tag(days<10 ? '0'+days : days.toString());
			$scope.time_rem_hours = complete_tag(hours<10 ? '0'+hours : hours.toString());
			$scope.time_rem_minutes = complete_tag(minutes<10 ? '0'+minutes : minutes.toString());
			$scope.time_rem_seconds = complete_tag(seconds<10 ? '0'+seconds : seconds.toString());
			x = $timeout(function() {
					$scope.$apply(function() {
						$scope.cal();});
					}, 1000);
		}
		var x = $timeout(function() {
			$scope.$apply(function() {
				$scope.cal();});
			}, 1000);
		function complete_tag(string_time)
		{
			var tag_c = "";
			for(var i=0;i<string_time.length;i++)
			{
				tag_c+= stringify_number(string_time[i]);
			}
			return tag_c;
		}	
		function stringify_number(character_number)
		{
			return "<div class='numbers "+humanize_numbers(character_number)+ " '>"+character_number+"</div>"
		}

		function humanize_numbers(character_number)
		{
			switch(character_number)
			{

				case '0':
			        return "zero";
			    case '1':
					return "one";
			    case '2':
			    	return "two";
			    case '3':
			        return "three";
			    case '4':
					return "four";
			    case '5':
			        return "five";
			    case '6':
			        return "six";
			    case '7':
			    	return "seven";
			    case '8':
			    	return "eight";
			    case '9':
			    	return "nine";
			}
		}
	});

$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 500,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay: 4000
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
  
 
});