;(function(tw){

  'use strict';

  angular
    .module('core')
    .controller('AppController',AppController)

  function AppController($scope, $storage){

    this.name = {
      full:"Mohd Danish",
      all:"Mohd Danish",
      first:"Mohd",
      last:"Danish"
    }
    this.birthday= "Jan 1, 1990";
    this.email= "danishmohd3610@gmail.com";
    this.phone= "(+91) 9871637589";
    this.positions = ['Python Lover', 'Software Engineer'];
    this.address = 'Mumbai, India';
    this.headline = "I strive to be an engine, not just the spare-part."
    var container = angular.element(document.getElementById('container'));
    var section2 = angular.element(document.getElementById('section-2'));

    this.toSection2 = function() {
      console.log('test');
      container.scrollTo(section2, 0, 1000);
    }
  }



}).call(this, TweenMax);
