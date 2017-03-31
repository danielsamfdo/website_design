// script.js
//= require angular
//= require angular-resource
//= require angular-sanitize

	var rexApp = angular.module('rexApp', ['ngRoute','ngSanitize']);

	rexApp.controller('mainController', function($scope) {
		$scope.message = 'Everyone come and see how good I look!';
		
		$scope.safeApply = function(fn) {
		  var phase = this.$root.$$phase;
		  if(phase == '$apply' || phase == '$digest') {
		    if(fn && (typeof(fn) === 'function')) {
		      fn();
		    }
		  } else {
		    this.$apply(fn);
		  }
		};
	});

	rexApp.controller('sidepaneController', function ($scope) {
		$scope.items=[{url: 'images/dove.jpg'}, {url: 'images/fire.jpeg'}, {url: 'images/archaeology.jpg'}, {url: 'images/martyr.jpg'}, {url: 'images/bible.jpg'}, {url: 'images/dove.jpg'}, {url: 'images/hell.jpg'}];
		$scope.show_image = 'image_0';
		$scope.exhibit_item_active = 0;
		$scope.exhibit_items = [{message: 'The revelation of God revealed now'}, {message: 'Have a feel of heaven on Earth'}, {message: 'Fire and Anguish like never before'}, {message: 'Better than watching History TV'}, {message: 'Know about how people where persecuted for the Lord'}, {message: 'How much do you know about your bible'}],{message: 'Have a feel of heaven on Earth'}, {message: 'Fire and Anguish like never before'};
		$scope.change_box = function(ind){
			console.log($scope.show_image);
			$scope.show_image ='image_' + (ind+1);
			$scope.exhibit_item_active = ind+1;
		}

		$scope.setClass = function(){
			return "image_"+$scope.show_image;
		};
	});
	rexApp.controller('homeContentController', function ($scope) {
		$scope.items=[{url: 'images/heaven.jpg'}, {url: 'images/hell.jpg'}, {url: 'images/archaeology1.jpg'}, {url: 'images/martyrs.jpg'}, {url: 'images/bible1.jpg'}, {url: 'images/heaven.jpg'}, {url: 'images/hell.jpg'}];
		$scope.show_class = 'show_1';
		$scope.exhibit_item_active = 1;
		$scope.msg = 'hiaaaaaaaa';
		$scope.left_url = 'left_Arrow.png';
		$scope.right_url = 'right_Arrow.png';
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

		$scope.exhibit_items = [{message: 'The revelation of God revealed now'}, {message: 'Have a feel of heaven on Earth'}, {message: 'Fire and Anguish like never before'}, {message: 'Better than watching History TV'}, {message: 'Know about how people where persecuted for the Lord'}, {message: 'How much do you know about your bible'},{message: 'Have a feel of heaven on Earth'}, {message: 'Fire and Anguish like never before'}];
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

	rexApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	rexApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
		$scope.btn_show = true;
		$scope.change = function(){
			$scope.btn_show = false;
			var element = document.getElementById('fadeout_button')
			element.classList.add('fade-out');
			var element = document.getElementById('fadein_menu')
			element.classList.add('fade-in');

		}

	});

	rexApp.controller('aboutController', function($scope) {
		$scope.message = 'Rex is about showing the revelation of God to all the people.';
	});

	rexApp.controller('contactController', function($scope) {
		$scope.message = 'Our address is located in Chennai.';
	});

	rexApp.controller("rexExhibitionController", function($scope) {
		$scope.rexActive = 0;
		$scope.exhibition_items=[{heading: 'Heaven', description: 'A wonderful place', hover:'View on TV'},
									{heading: 'Hell', description: 'A Bad place', hover:'View on TV'},
									{heading: 'Archaeology', description: 'A place in history', hover:'View on TV'}
									];
		$scope.getClass = function getClass(ind){
			return "ch-img-"+(ind+1);
		}
		$scope.setActive = function setActive(ind){
			$scope.rexActive = ind;
		}
	});