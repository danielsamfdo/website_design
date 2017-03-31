	var danApp = angular.module('danApp', ['ngSanitize']);
	danApp.controller('homeContentController', function ($scope) {
		$scope.items = [{url: 'images/heaven.jpg'}, {url: 'images/hell.jpg'}, {url: 'images/archaeology1.jpg'}, {url: 'images/martyrs.jpg'}, {url: 'images/bible1.jpg'}, {url: 'images/heaven.jpg'}, {url: 'images/hell.jpg'}];
		$scope.items_content = [{heading: 'Experience Heaven in 3-D', heading_span: 'Live it', meta_div_heading: "Let's knock on <span>heavens</span> doors", content: '<p>It has been suggested that beautiful and usable websites are created on a foundation of beautiful and usable typography. That makes it a pretty important element that you will want to look at very carefully.</p><p>Fortunately, CSS offers a variety of styling options that allow you a great deal of control over how your present your content to your viewers and users. This demo - which is entirely driven by CSS - is built to demonstrate the step by step development of attractive typography, moving from basic HTML to fully styled content. You can use the buttons at the top of the page to view the content in various stages of styling, from completely unstyled to the completed design. Please feel free to have a bit of fun by working through the various stages.</p>	', url:'1.jpg'},
								{heading: 'Experience Heaven in 3-D', heading_span: 'Live it', meta_div_heading: "Let's knock on <span>heavens</span> doors", content: 'Do you want to visit heaven ,The 3D Room is for you with many things for you to watch and stand in awe. The real heaven will be unfathomable to the human mind and the inspiration you will get and the desire to go into heaven will increase', url:'1.jpg'},
								{heading: 'Experience Heaven in 3-D', heading_span: 'Live it', meta_div_heading: "Let's knock on <span>heavens</span> doors", content: 'Do you want to visit heaven ,The 3D Room is for you with many things for you to watch and stand in awe. The real heaven will be unfathomable to the human mind and the inspiration you will get and the desire to go into heaven will increase', url:'1.jpg'},
								{heading: 'Experience Heaven in 3-D', heading_span: 'Live it', meta_div_heading: "Let's knock on <span>heavens</span> doors", content: 'Do you want to visit heaven ,The 3D Room is for you with many things for you to watch and stand in awe. The real heaven will be unfathomable to the human mind and the inspiration you will get and the desire to go into heaven will increase', url:'1.jpg'},
								{heading: 'Experience Heaven in 3-D', heading_span: 'Live it', meta_div_heading: "Let's knock on <span>heavens</span> doors", content: 'Do you want to visit heaven ,The 3D Room is for you with many things for you to watch and stand in awe. The real heaven will be unfathomable to the human mind and the inspiration you will get and the desire to go into heaven will increase', url:'1.jpg'},
								{heading: 'Experience Heaven in 3-D', heading_span: 'Live it', meta_div_heading: "Let's knock on <span>heavens</span> doors", content: 'Do you want to visit heaven ,The 3D Room is for you with many things for you to watch and stand in awe. The real heaven will be unfathomable to the human mind and the inspiration you will get and the desire to go into heaven will increase', url:'1.jpg'},
								{heading: 'Experience Heaven in 3-D', heading_span: 'Live it', meta_div_heading: "Let's knock on <span>heavens</span> doors", content: 'Do you want to visit heaven ,The 3D Room is for you with many things for you to watch and stand in awe. The real heaven will be unfathomable to the human mind and the inspiration you will get and the desire to go into heaven will increase', url:'1.jpg'}];

		$scope.show_class = 'show_1';
		$scope.exhibit_item_active = 1;
		$scope.msg = 'hiaaaaaaaa';
		$scope.left_url = 'images/left_Arrow.png';
		$scope.right_url = 'images/right_Arrow.png';
		$scope.prevside = function(){
			console.log($scope.show_class);
			$scope.exhibit_item_active = (($scope.exhibit_item_active-1)==0) ? 7 : $scope.exhibit_item_active-1;
			$scope.show_class ='show_' + ($scope.exhibit_item_active);
			console.log($scope.show_class);
			$scope.msg = $scope.exhibit_item_active;
		}
		$scope.nextside = function(){
			console.log($scope.show_class);
			$scope.exhibit_item_active = (($scope.exhibit_item_active+1)==8) ? 1 : $scope.exhibit_item_active+1;
			$scope.show_class ='show_' + ($scope.exhibit_item_active);
			$scope.msg = $scope.exhibit_item_active;
		}
	});
danApp.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
  };
});

danApp.controller('linksController', ['$scope', function($scope) {
  $scope.modalShown = false;
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };
  $scope.modalVideoShown = false;
  $scope.toggleVideoModal = function() {
    $scope.modalVideoShown = !$scope.modalVideoShown;
  };
}]);


	danApp.controller('timeController', function ($scope, $timeout) {
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
			});
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