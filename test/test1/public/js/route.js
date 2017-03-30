
			var app=angular.module('app',['ngRoute','naif.base64']);
			app.config(function($routeProvider){
			$routeProvider
			.when("/",{
				templateUrl:"views/frontend/data.html",
				
			})
			});
			
			
	app.controller("controller_reg",function($scope,$http){ 
				
			$scope.save = function(fr){
				
				console.log(fr);
			$http.post('/index/name',fr,function(req,res){ 
			   });	
			}
			
	});
			app.controller("frc2",function($scope,$http){ 	
			var n={c:1};
				console.log('ok');
			$http.post('/index/getname',n).then(function(res,status){
			$scope.f=res.data;
				console.log("retrieve");
				console.log($scope.f);
			//console.log(res.data);
			});
			$scope.search=function(d){
				
				console.log(d.name);
				var inputname=d.name;
				if(inputname.length>2)
				{
					$http.post('/index/getname',{name:inputname}).then(function(res,status){
			$scope.f=res.data;
				console.log("retrieve");
				console.log($scope.f);
			//console.log(res.data);
			});
				}
			
			}
			$scope.submit1 = function(f){
				
				console.log(f);
			$http.post('/index/sname',f,function(req,res){ 
			   });	
			}
		
		});
			