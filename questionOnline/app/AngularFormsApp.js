
var angularFormsApp = angular.module('angularFormsApp', ['ngRoute', 'ui.bootstrap']);

angularFormsApp.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "app/Home.html",
            controller: "HomeController"
        })
        .when("/newEmployeeForm", {
            templateUrl: "app/EmployeeForm/efTemplate.html",
            controller: "efController"
        })
        .when("/updateEmployeeForm/:id", {
            templateUrl: "app/EmployeeForm/efTemplate.html",
            controller: "efController"
        })
        .otherwise({
            redirectTo: "/home"
        });
});

angularFormsApp.controller("HomeController",
    function ($scope, $location, $uibModal, DataService) {
        //configuration of rating
        $scope.max = 10;
        $scope.isReadonly = false;

        $scope.hoveringOver = function (value, name) {
            if (name=='Pharmaprix') {
                $scope.overStarPharmaprix = value;
                $scope.percentPharmaprix = 100 * (value / $scope.max);
            }
            if (name == 'Metro') {
                $scope.overStarMetro = value;
                $scope.percentMetro = 100 * (value / $scope.max);
            }
            if (name == 'Provigo') {
                $scope.overStarProvigo = value;
                $scope.percentProvigo1 = 100 * (value / $scope.max);
            }

        };

        //configuration of carosel
        $scope.myInterval = 3000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        $scope.slides = [
            {
                id: 0,
                text: "Parmaprix",
                image: "http://www.espaceconstruction.com/img/projets/pharmaprix/hd/1.jpg"

            },
            {
                id: 1,
                text: "Metro",
                image: "https://i.cbc.ca/1.4313601.1506704060!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_620/coutu-metro-20170927.jpg"

            },
            {
                id: 2,
                text: "Provigo",
                image: "http://www.whatquebecwants.com/.a/6a00e55096d6b488330192ab4f561a970d-pi"

            }
        ];
        var currIndex = 0;





        $scope.showCreateSurveyForm = function () {
            //$location.path('/newEmployeeForm');

            $uibModal.open({
                templateUrl: 'app/EmployeeForm/efTemplate.html',
                controller: 'efController',
                scope: $scope
            });

        };

        $scope.showUpdateSurveyForm = function (id) {
            //$location.path('/updateEmployeeForm/' + id);
            $scope.id = id;
            $uibModal.open({
                templateUrl: 'app/EmployeeForm/efTemplate.html',
                controller: 'efController',
                scope:$scope
            });


        };

    });