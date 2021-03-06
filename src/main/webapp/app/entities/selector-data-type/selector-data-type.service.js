(function() {
    'use strict';
    angular
        .module('tikonApp')
        .factory('SelectorDataType', SelectorDataType);

    SelectorDataType.$inject = ['$resource'];

    function SelectorDataType ($resource) {
        var resourceUrl =  'api/selector-data-types/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
