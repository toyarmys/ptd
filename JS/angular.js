var app = angular.module('myModule', []);

app.controller('myController',function($scope){
	$scope.list = [
		{ID: 1, 
		 title:'PROJECT 01',
		 img:'image/1.png',
		 content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
		},
		{ID: 2, 
		 title:'PROJECT 02',
		 img:'image/1.png',
		 content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
		},
		{ID: 3, 
		 title:'PROJECT 03',
		 img:'image/1.png',
		 content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
		},
		{ID: 4, 
		 title:'PROJECT 04',
		 img:'image/1.png',
		 content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
		},
		{ID: 5, 
		 title:'PROJECT 05',
		 img:'image/1.png',
		 content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
		},
		{ID: 6, 
		 title:'PROJECT 06',
		 img:'image/1.png',
		 content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
		},
		{ID: 7, 
		 title:'PROJECT 07',
		 img:'image/1.png',
		 content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
		},
		{ID: 8, 
		 title:'PROJECT 08',
		 img:'image/1.png',
		 content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
		},
		{ID: 9, 
		 title:'PROJECT 09',
		 img:'image/1.png',
		 content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
		},
		{ID: 10, 
		 title:'PROJECT 10',
		 img:'image/1.png',
		 content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
		},
	];

	$scope.limit = 4;
})