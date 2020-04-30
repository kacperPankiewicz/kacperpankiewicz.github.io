var portfolioApp = angular.module('portfolioApp',[]); 
portfolioApp.controller('GalleryListCtrl', function($scope) {
    $scope.galleries = [
{ 'title':'Enigmatyczny park',
 'when':'2004-01-14',
 'thumbnailUrl':'img/angular/1.png'
},
{ 'title':'Deszczowa pora',
 'when':'2002-12-04',
 'thumbnailUrl':'img/angular/2.png'
}
,
{ 'title':'Podwodny raj',
 'when':'2011-01-04',
 'thumbnailUrl':'img/angular/3.png'
}
,
{ 'title':'Łódki',
 'when':'2012-01-04',
 'thumbnailUrl':'img/angular/4.png'
}
,
{ 'title':'Bajkowa łąka',
 'when':'2001-01-04',
 'thumbnailUrl':'img/angular/5.png'
}
,
{ 'title':'Czarna dama',
 'when':'2010-01-04',
 'thumbnailUrl':'img/angular/6.png'
}
];




    $scope.sortList = [
        {
        'label':'Alfabetycznie',
        'value':'title'
        },
        {
        'label':'Chronologicznie',
        'value':'when'
        },
        {
        'label':'Najnowsze',
        'value':'-when'
        } 

        ]; 
$scope.orderProp =$scope.sortList[0]; 
    }); 
portfolioApp.controller('TitleListCtrl',function($scope)
{
    $scope.titles=['Obrazy na sprzedaż'];
});