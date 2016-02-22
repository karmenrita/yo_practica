var miapp = angular.module('miapp',[]);

miapp.controller('controlador',
	["$scope","$http",function($scope,$http){
	$http.get("datos/empleados.json").success(function(data){
		$scope.empleados = data;
		});
	
}]);