﻿
angularFormsApp.factory('DataService',
    function () {
        var getEmployee = function (id) {
            if (id == 123) {
                return {
                    id: 123,
                    fullName: "Milton Waddams",
                    email:'abc@123.com',
                    notes: "The ideal employee.  Just don't touch his red stapler.",
                    salary: "60001~80000",
                    dateHired: "11/11/1979",
                    ratePharmaprix: 10,
                    rateMetro: 8,
                    rateProvigo:3,
                    perkCar: true,
                    perkStock: false,
                    perkSixWeeks: true,
                    payrollType: "none"
                };
            }
            return undefined;
        };

        var insertEmployee = function (newEmployee) {
            return true;
        };

        var updateEmployee = function (employee) {
            return true;
        };

        return {
            insertEmployee: insertEmployee,
            updateEmployee: updateEmployee,
            getEmployee: getEmployee
        };
    });