angular.module('app', []);
function footerCtrl($rootScope) {}

angular.module('app').controller('footerCtrl', footerCtrl);
angular.module('app').directive("footerContent", function () {
	return {
		restrict: "E",
		templateUrl: 'app/footer/footer.html'
	};
});
function sectionCtrl($rootScope, $window) {
	let vm = this;
}

angular.module('app').controller('sectionCtrl', sectionCtrl);
angular.module('app').directive("sectionContent", function () {
	return {
		restrict: "E",
		templateUrl: 'app/section/section.html'
	};
});
function headerCtrl($rootScope) {}

angular.module('app').controller('headerCtrl', headerCtrl);
angular.module('app').directive("headerContent", function () {
	return {
		restrict: "E",
		templateUrl: 'app/header/header.html'
	};
});