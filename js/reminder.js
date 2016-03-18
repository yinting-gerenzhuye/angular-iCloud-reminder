var reminder=angular.module('reminder',[]);
reminder.controller('rdCtrl', ['$scope', function($scope){
	//console.log(1);
	$scope.listindex=0;
	var d=localStorage.data;
	$scope.shijianliebiao=d?JSON.parse(d):[];

	$scope.colors=['purple','green','blue','yellow','brow','pink','orange'];
	$scope.showshijian=function(index){
		$scope.listindex=index;
	}

	$scope.addshijian=function(){
		//var i=1;   Math.random()*10
		var data={
			 name:'新增'+($scope.shijianliebiao.length+1),
			 color:$scope.colors[$scope.shijianliebiao.length%7],
			 items:[]

		}
		$scope.shijianliebiao.push(data);
		localStorage.data=JSON.stringify($scope.shijianliebiao);
 	}

 	$scope.delItem=function(){
		//[{a:1},{s:2}]
		var r=[];
		for(var i=0;i<$scope.shijianliebiao.length;i++){
			if(i!=$scope.listindex){
				r.push($scope.shijianliebiao[i]);
			}
 		}
 		$scope.shijianliebiao=r;
		$scope.listindex=0;
		localStorage.data=JSON.stringify($scope.shijianliebiao);
 	}
 	$scope.addTodo=function(){
		var cu=$scope.shijianliebiao[$scope.listindex];
		var data={title:'新条目'+(cu.items.length+1),isDone:false};
		$scope.shijianliebiao[$scope.listindex].items.push();
		cu.items.push(data);
		localStorage.data=JSON.stringify($scope.shijianliebiao);
	}
	$scope.delTodo=function(index){
		var r=[];
		var cu=$scope.shijianliebiao[$scope.listindex];
		for(var i=0;i<cu.items.length;i++){
			if(i!=index){
				r.push(cu.items[i]);
			}
		}
 
		$scope.shijianliebiao[$scope.listindex].items=r;
		localStorage.data=JSON.stringify($scope.shijianliebiao);

	}
	$scope.save=function(){
		localStorage.data=JSON.stringify($scope.shijianliebiao);
 	}

	
}])