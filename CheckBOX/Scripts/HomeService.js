(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('ReportCtrl', ['$scope', function ($scope) {

          //  $scope.portalIdEnabled = true;

            $scope.reporttypes = [
                { id: 1, code: 'a', symbol: 'Active', name: 'Active' },
                { id: 2, code: 'p', symbol: 'Pending', name: 'Pending' },
                { id: 3, code: 'r', symbol: 'Reject', name: 'Reject' },
                { id: 4, code: 's', symbol: 'Submit', name: 'Submit' }
            ];
            
            $scope.options = [];

            $scope.selectAll = false;

            $scope.toggleTypes = function (index) {
                $scope.reporttypes[index].checked = !$scope.reporttypes[index].checked;
                if (!$scope.reporttypes[index].checked) {
                    $scope.selectAll = false;
                }
            };

            $scope.toggleAll = function () {
                var checked = $scope.selectAll;
                for (var i = 0; i < $scope.reporttypes.length; i++) {
                    $scope.options[i] = checked;
                    $scope.reporttypes[i].checked = checked;
                }
            };
            
            // get Selected Checkbox Id
            $scope.getSelectedId = function () {
                var selectedIds = [];
                angular.forEach($scope.reporttypes, function (reporttype) {
                    if ($scope.options[$scope.reporttypes.indexOf(reporttype)]) {
                        selectedIds.push(reporttype.id);
                    }
                });
                return selectedIds;
            };

            $scope.sendSelectedId = function () {
                var selectedIds = $scope.getSelectedId();
                console.log("Selected IDs:", selectedIds);
                
            };
 
            $scope.InitFunction = function () {
                console.log("Success!")
            }
        }]);
})();