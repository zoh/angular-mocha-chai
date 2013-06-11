/*
var myApp = angular.module('myApp', []);

myApp.factory('Data', function () {
    return {message: 'Iam hello world !'}
});

myApp.factory('Avengers', function () {
    var Avengers = {};

    Avengers.cast = [
        {
            name: "Robert Downey Jr.",
            character: "Tony Stark / Iron Man"
        },
        {
            name: "Chris Evans",
            character: "Steve Rogers / Captain America}"
        },
        {
            name: "Mark Ruffalo",
            character: "Bruce Banner / The Hulk}"
        },
        {
            name: "Chris Hemsworth",
            character: "Thor"
        },
        {
            name: "Scarlett Johansson",
            character: "Natasha Romanoff / Black Widow"
        },
        {
            name: "Jeremy Renner",
            character: "Clint Barton / Hawkeye"
        },
        {
            name: "Tom Hiddleston",
            character: "Loki"
        },
        {
            name: "Clark Gregg",
            character: "Agent Phil Coulson"
        },
        {
            name: "Cobie Smulders",
            character: "Agent Maria Hill"
        },
        {
            name: "Stellan Skarsgard",
            character: "Selvig"
        },
        {
            name: "Samuel L. Jackson",
            character: "Nick Fury"
        },
        {
            name: "Gwyneth Paltrow",
            character: "Pepper Potts"
        },
        {
            name: "Paul Bettany",
            character: "Jarvis (voice)"
        },
        {
            name: "Alexis Denisof",
            character: "The Other"
        },
        {
            name: "Tina Benko",
            character: "NASA Scientist"
        }
    ];

    return Avengers;
});


myApp.filter('reverse', function () {
    return function (text) {
        return text.split('').reverse().join('');
    }
});


function FirstCtrl($scope, Data) {
    $scope.data = Data

    $scope.reversedMessage = function (message) {
        return message.split('').reverse().join('');
    }
}

function AvengersCtrl($scope, Avengers) {
    $scope.avengers = Avengers;
}
*/


//var app = angular.module('superhero', []);
//
//app.directive('superman', function () {
//    return {
//        restrict: "C",
//        link: function () {
//            alert('HER');
//        }
//    }
//});


var app = angular.module('behaviorApp', []);

app.directive('enter', function () {
    return function (scope, element, attrs) {
        element.bind('mouseenter', function () {
            element.addClass(attrs.enter)
        })
    }
});


app.directive('leave', function () {
    return function (scope, element, attrs) {
        element.bind('mouseleave', function () {
            element.removeClass(attrs.enter);
        })
    }
});