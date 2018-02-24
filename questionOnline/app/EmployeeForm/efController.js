
angularFormsApp.controller('efController', ["$scope", "$window", "$routeParams", "$uibModal", "$uibModalInstance", "DataService", efController]);
function efController($scope, $window, $routeParams, $uibModal, $uibModalInstance, DataService, $uibDateParser) {

        //$scope.employee = DataService.employee;
    if ($routeParams.id || $scope.id) {
            //$scope.employee = DataService.getEmployee($routeParams.id);
            $scope.employee = DataService.getEmployee($scope.id);
        } else {
            $scope.employee = { id: 0 };
        }

        $scope.editableEmployee = angular.copy($scope.employee);

        $scope.salaries = [
            "0~40000",
            "40001~60000",
            "60001~80000",
            "80001~100000"
        ];

        $scope.submitForm = function () {
            if ($scope.editableEmployee.id==0) {
                // insert new employee
                DataService.insertEmployee($scope.editableEmployee);
            } else {
                // update the employee
                DataService.updateEmployee($scope.editableEmployee);
            }
            $scope.employee = angular.copy($scope.editableEmployee);
            //$window.history.back();
            $uibModalInstance.close(true);
        };

        $scope.cancelForm = function () {
            //$window.history.back();
            $uibModalInstance.close(false);
        };

    };