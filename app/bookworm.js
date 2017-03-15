
var bookworm = angular.module('bookworm', ['mobile-angular-ui']);
bookworm.controller('MainController',function ($scope) {
	var scrollItems = [];
	for(var i = 0;i<200;i++){
		var item = new Object();
		item.name = "数学之美"+i.toString();
		item.img =  "img/bookworm/not-found-book.png";
		item.author = "吴军"+i.toString();
		item.rank = i+1;
		if (i%3==0) {
			item.state = "已读";
			item.stateColor = "#e83";
		}else{
			item.state = "未读";
			item.stateColor = "#6d4";
		}
		
		item.likeNum = i;
		scrollItems.push(item);
	}
	
	$scope.userBg = "img/bookworm/user-bg.png";
	$scope.userPro = "img/bookworm/user-pro.jpg";
	$scope.nickname = "鱼蛋的书单";
	$scope.scrollItems =scrollItems;
});

bookworm.directive('errSrc', function() {
  return {
    link: function(scope, element, attrs) {
      element.bind('error', function() {
        if (attrs.src != attrs.errSrc) {
          attrs.$set('src', attrs.errSrc);
        }
      });
    }
  }
});