console.log("log index.js");
var myApp=angular.module('myApp',[]);

myApp.controller('mainController',function($scope,$log,$http,$filter) {
	prodarr=[2373,2374,2365,
			2375,9575,2363,9769,
			2370,2366,2364,2376,
			2380,2369,9623,2381,
			2371,2368,9376]
	  var ltag="12clrg";
	  var prod=-1;
      var urlPart1="https://bug.oraclecorp.com/pls/bug/WEBBUG_REPORTS.do_edit_report?rpt_title=&fcont_arr=";
      var urlPart2="&fid_arr=1&fcont_arr=10%2C11%2C30%2C40&fid_arr=4&fcont_arr=%3D&fid_arr=159&fcont_arr=&fid_arr=122&fcont_arr=AND&fid_arr=136&fcont_arr=&fid_arr=138&fcont_arr=syaddula&fid_arr=30&fcont_arr=INTERNAL%25&fid_arr=200&fcont_arr=&fid_arr=10&fcont_arr=off&fid_arr=157&fcont_arr=off&fid_arr=166&fcont_arr=";
      var urlPart3="&fid_arr=125&fcont_arr=N&fid_arr=165&fcont_arr=N&fid_arr=161&fcont_arr=2&fid_arr=100&cid_arr=2&cid_arr=3&cid_arr=9&cid_arr=8&cid_arr=7&cid_arr=11&cid_arr=6&cid_arr=13&f_count=15&c_count=8&query_type=2";
      $http.get('/bugapis/webapi/resources/countlrg/-1?tag='+ltag)
		.success(function (result){
			$scope.allLRG=result;
			console.log(result);
		})
		.error(function (data, status){
			console.log(data);
		});
      prod=prodarr[1];
	   $http.get('/bugapis/webapi/resources/countlrg/'+prodarr[0]+'?tag='+ltag)
		.success(function (result){
			$scope.apLRG=result;
			$scope.apURL=urlPart1+prodarr[0]+urlPart2;
			console.log(result);
		})
		.error(function (data, status){
			console.log(data);
		});
     
	   $http.get('/bugapis/webapi/resources/countlrg/'+prodarr[1]+'?tag='+ltag)
		.success(function (result){
			$scope.ibyLRG=result;
			$scope.ibyURL=urlPart1+prodarr[1]+urlPart2+ltag+urlPart3;
			console.log(result);
		})
		.error(function (data, status){
			console.log(data);
		});
	 
	   $http.get('/bugapis/webapi/resources/countlrg/'+prodarr[2]+'?tag='+ltag)
		.success(function (result){
			$scope.ceLRG=result;
			$scope.ceURL=urlPart1+prodarr[2]+urlPart2+ltag+urlPart3;
			console.log(result);
		})
		.error(function (data, status){
			console.log(data);
		});
	   
	   $http.get('/bugapis/webapi/resources/countlrg/'+prodarr[3]+'?tag='+ltag)
		.success(function (result){
			$scope.arLRG=result;
			$scope.arURL=urlPart1+prodarr[3]+urlPart2+ltag+urlPart3;
			console.log(result);
		})
		.error(function (data, status){
			console.log(data);
		});
	   
	   $http.get('/bugapis/webapi/resources/countlrg/'+prodarr[4]+'?tag='+ltag)
		.success(function (result){
			$scope.vrmLRG=result;
			$scope.vrmURL=urlPart1+prodarr[4]+urlPart2+ltag+urlPart3;
			console.log(result);
		})
		.error(function (data, status){
			console.log(data);
		});
	   
	   $http.get('/bugapis/webapi/resources/countlrg/'+prodarr[5]+'?tag='+ltag)
		.success(function (result){
			$scope.iexLRG=result;
			$scope.iexURL=urlPart1+prodarr[5]+urlPart2+ltag+urlPart3;
			console.log(result);
		})
		.error(function (data, status){
			console.log(data);
		});
	   
	   $http.get('/bugapis/webapi/resources/countlrg/'+prodarr[6]+'?tag='+ltag)
		.success(function (result){
			$scope.arbLRG=result;
			$scope.arbURL=urlPart1+prodarr[6]+urlPart2+ltag+urlPart3;
			console.log(result);
		})
		.error(function (data, status){
			console.log(data);
		});
	   
	   $http.get('/bugapis/webapi/resources/countlrg/'+prodarr[7]+'?tag='+ltag)
		.success(function (result){
			$scope.glLRG=result;
			$scope.glURL=urlPart1+prodarr[7]+urlPart2+ltag+urlPart3;
			console.log(result);
		})
		.error(function (data, status){
			console.log(data);
		});
	   
	   $http.get('/bugapis/webapi/resources/countlrg/'+prodarr[8]+'?tag='+ltag)
		.success(function (result){
			$scope.zxLRG=result;
			$scope.zxURL=urlPart1+prodarr[8]+urlPart2+ltag+urlPart3;
			console.log(result);
		})
		.error(function (data, status){
			console.log(data);
		});
	   $http.get('/bugapis/webapi/resources/countlrg/'+prodarr[9]+'?tag='+ltag)
		.success(function (result){
			$scope.faLRG=result;
			$scope.faURL=urlPart1+prodarr[9]+urlPart2+ltag+urlPart3;
			console.log(result);
		})
		.error(function (data, status){
			console.log(data);
		});
	   $http.get('/bugapis/webapi/resources/countlrg/'+prodarr[10]+'?tag='+ltag)
		.success(function (result){
			$scope.xlaLRG=result;
			$scope.xlaURL=urlPart1+prodarr[10]+urlPart2+ltag+urlPart3;
			console.log(result);
		})
		.error(function (data, status){
			console.log(data);
		});
	   $http.get('/bugapis/webapi/resources/countlrg/'+prodarr[11]+'?tag='+ltag)
		.success(function (result){
			$scope.jaLRG=result;
			$scope.jaURL=urlPart1+prodarr[11]+urlPart2+ltag+urlPart3;
			console.log(result);
		})
		.error(function (data, status){
			console.log(data);
		});
	   $http.get('/bugapis/webapi/resources/countlrg/'+prodarr[12]+'?tag='+ltag)
		.success(function (result){
			$scope.jeLRG=result;
			$scope.jeURL=urlPart1+prodarr[12]+urlPart2+ltag+urlPart3;
			console.log(result);
		})
		.error(function (data, status){
			console.log(data);
		});
	   $http.get('/bugapis/webapi/resources/countlrg/'+prodarr[13]+'?tag='+ltag)
		.success(function (result){
			$scope.jgLRG=result;
			$scope.jgURL=urlPart1+prodarr[13]+urlPart2+ltag+urlPart3;
			console.log(result);
		})
		.error(function (data, status){
			console.log(data);
		});
	   $http.get('/bugapis/webapi/resources/countlrg/'+prodarr[14]+'?tag='+ltag)
		.success(function (result){
			$scope.jlLRG=result;
			$scope.jlURL=urlPart1+prodarr[14]+urlPart2+ltag+urlPart3;
			console.log(result);
		})
		.error(function (data, status){
			console.log(data);
		});
	   $http.get('/bugapis/webapi/resources/countlrg/'+prodarr[15]+'?tag='+ltag)
		.success(function (result){
			$scope.exmLRG=result;
			$scope.exmURL=urlPart1+prodarr[15]+urlPart2+ltag+urlPart3;
			console.log(result);
		})
		.error(function (data, status){
			console.log(data);
		});
	   $http.get('/bugapis/webapi/resources/countlrg/'+prodarr[16]+'?tag='+ltag)
		.success(function (result){
			$scope.funLRG=result;
			$scope.funURL=urlPart1+prodarr[16]+urlPart2+ltag+urlPart3;
			console.log(result);
		})
		.error(function (data, status){
			console.log(data);
		});
	   
	   $http.get('/bugapis/webapi/resources/countlrg/'+prodarr[17]+'?tag='+ltag)
		.success(function (result){
			$scope.biLRG=result;
			$scope.biURL=urlPart1+prodarr[17]+urlPart2+ltag+urlPart3;
			console.log(result);
		})
		.error(function (data, status){
			console.log(data);
		});
   
});

myApp.directive("tile", function(){
	return {
		templateUrl: 'resources/directives/tile.html',
		replace: true,
		
		
    }
});
