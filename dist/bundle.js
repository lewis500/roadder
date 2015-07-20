(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Car, Ctrl, _, angular, d3, roadDer, template;

angular = require('angular');

d3 = require('d3');

_ = require('lodash');

Car = (function() {
  function Car(loc1) {
    this.loc = loc1;
    this.id = _.uniqueId();
    this.vel = 15;
  }

  Car.prototype.move = function(dt) {
    return this.loc += dt / 1000 * this.vel;
  };

  return Car;

})();

template = '<button ng-click=\'vm.click()\'>Play/Pause</button>\n<svg width=\'500\' height=\'500\'>\n	<g class=\'g-main\' transform=\'translate(250,250)\'>\n		<circle class=\'road\' r=\'225\' />\n		<g class=\'g-cars\'>\n			<g class=\'g-car\' ng-repeat=\'car in vm.cars track by car.id\' ng-attr-transform=\'rotate({{car.loc}})\'>\n				<rect class=\'car\' width=\'20\' height=\'10\' y=\'220\'/>\n			</g>\n		</g>\n	</g>\n</svg>\n';

Ctrl = (function() {
  function Ctrl(scope) {
    this.scope = scope;
    this.cars = _.range(0, 20).map(function(n) {
      var loc;
      loc = n / 20 * 360;
      return new Car(loc);
    });
    this.pause();
  }

  Ctrl.prototype.click = function() {
    if (this.paused) {
      return this.play();
    } else {
      return this.pause();
    }
  };

  Ctrl.prototype.pause = function() {
    return this.paused = true;
  };

  Ctrl.prototype.play = function() {
    var last;
    this.pause();
    d3.timer.flush();
    this.paused = false;
    last = 0;
    return d3.timer((function(_this) {
      return function(elapsed) {
        var dt;
        dt = elapsed - last;
        _this.cars.forEach(function(car) {
          return car.move(dt);
        });
        _this.scope.$evalAsync();
        last = elapsed;
        return _this.paused;
      };
    })(this));
  };

  return Ctrl;

})();

roadDer = function() {
  var result;
  return result = {
    scope: {},
    controllerAs: 'vm',
    template: template,
    restrict: 'A',
    controller: ['$scope', Ctrl]
  };
};

angular.module('mainApp', []).directive('roadDer', roadDer);



},{"angular":undefined,"d3":undefined,"lodash":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbGV3aXMvUmVzZWFyY2gvcm9hZGRlci9hcHAvYXBwLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUE7O0FBQUEsT0FBQSxHQUFVLE9BQUEsQ0FBUSxTQUFSOztBQUNWLEVBQUEsR0FBSyxPQUFBLENBQVEsSUFBUjs7QUFDTCxDQUFBLEdBQUksT0FBQSxDQUFRLFFBQVI7O0FBRUU7RUFDUSxhQUFDLElBQUQ7SUFBQyxJQUFDLENBQUEsTUFBRDtJQUNiLElBQUMsQ0FBQSxFQUFELEdBQU0sQ0FBQyxDQUFDLFFBQUYsQ0FBQTtJQUNOLElBQUMsQ0FBQSxHQUFELEdBQU87RUFGSzs7Z0JBSWIsSUFBQSxHQUFNLFNBQUMsRUFBRDtXQUNMLElBQUMsQ0FBQSxHQUFELElBQVEsRUFBQSxHQUFHLElBQUgsR0FBVSxJQUFDLENBQUE7RUFEZDs7Ozs7O0FBR1AsUUFBQSxHQUFXOztBQWVMO0VBQ1EsY0FBQyxLQUFEO0lBQUMsSUFBQyxDQUFBLFFBQUQ7SUFDYixJQUFDLENBQUEsSUFBRCxHQUFRLENBQUMsQ0FBQyxLQUFGLENBQVEsQ0FBUixFQUFZLEVBQVosQ0FDUCxDQUFDLEdBRE0sQ0FDRixTQUFDLENBQUQ7QUFDSixVQUFBO01BQUEsR0FBQSxHQUFNLENBQUEsR0FBSSxFQUFKLEdBQVM7YUFDWCxJQUFBLEdBQUEsQ0FBSSxHQUFKO0lBRkEsQ0FERTtJQUlSLElBQUMsQ0FBQSxLQUFELENBQUE7RUFMWTs7aUJBTWIsS0FBQSxHQUFPLFNBQUE7SUFDTixJQUFHLElBQUMsQ0FBQSxNQUFKO2FBQWdCLElBQUMsQ0FBQSxJQUFELENBQUEsRUFBaEI7S0FBQSxNQUFBO2FBQTZCLElBQUMsQ0FBQSxLQUFELENBQUEsRUFBN0I7O0VBRE07O2lCQUdQLEtBQUEsR0FBTSxTQUFBO1dBQ0wsSUFBQyxDQUFBLE1BQUQsR0FBVTtFQURMOztpQkFHTixJQUFBLEdBQU0sU0FBQTtBQUNMLFFBQUE7SUFBQSxJQUFDLENBQUEsS0FBRCxDQUFBO0lBQ0EsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFULENBQUE7SUFDQSxJQUFDLENBQUEsTUFBRCxHQUFVO0lBQ1YsSUFBQSxHQUFPO1dBQ1AsRUFBRSxDQUFDLEtBQUgsQ0FBUyxDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsT0FBRDtBQUNSLFlBQUE7UUFBQSxFQUFBLEdBQUssT0FBQSxHQUFVO1FBQ2YsS0FBQyxDQUFBLElBQUksQ0FBQyxPQUFOLENBQWMsU0FBQyxHQUFEO2lCQUNiLEdBQUcsQ0FBQyxJQUFKLENBQVMsRUFBVDtRQURhLENBQWQ7UUFFQSxLQUFDLENBQUEsS0FBSyxDQUFDLFVBQVAsQ0FBQTtRQUNBLElBQUEsR0FBTztlQUNQLEtBQUMsQ0FBQTtNQU5PO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFUO0VBTEs7Ozs7OztBQWFQLE9BQUEsR0FBVSxTQUFBO0FBQ1QsTUFBQTtTQUFBLE1BQUEsR0FDQztJQUFBLEtBQUEsRUFBTyxFQUFQO0lBQ0EsWUFBQSxFQUFjLElBRGQ7SUFFQSxRQUFBLEVBQVUsUUFGVjtJQUdBLFFBQUEsRUFBVSxHQUhWO0lBSUEsVUFBQSxFQUFZLENBQUMsUUFBRCxFQUFXLElBQVgsQ0FKWjs7QUFGUTs7QUFRVixPQUFPLENBQUMsTUFBUixDQUFlLFNBQWYsRUFBMkIsRUFBM0IsQ0FDQyxDQUFDLFNBREYsQ0FDWSxTQURaLEVBQ3VCLE9BRHZCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImFuZ3VsYXIgPSByZXF1aXJlICdhbmd1bGFyJ1xuZDMgPSByZXF1aXJlICdkMydcbl8gPSByZXF1aXJlICdsb2Rhc2gnXG5cbmNsYXNzIENhclxuXHRjb25zdHJ1Y3RvcjogKEBsb2MpLT5cblx0XHRAaWQgPSBfLnVuaXF1ZUlkKClcblx0XHRAdmVsID0gMTVcblxuXHRtb3ZlOiAoZHQpLT5cblx0XHRAbG9jICs9IGR0LzEwMDAgKiBAdmVsXG5cbnRlbXBsYXRlID0gJycnXG5cdDxidXR0b24gbmctY2xpY2s9J3ZtLmNsaWNrKCknPlBsYXkvUGF1c2U8L2J1dHRvbj5cblx0PHN2ZyB3aWR0aD0nNTAwJyBoZWlnaHQ9JzUwMCc+XG5cdFx0PGcgY2xhc3M9J2ctbWFpbicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjUwLDI1MCknPlxuXHRcdFx0PGNpcmNsZSBjbGFzcz0ncm9hZCcgcj0nMjI1JyAvPlxuXHRcdFx0PGcgY2xhc3M9J2ctY2Fycyc+XG5cdFx0XHRcdDxnIGNsYXNzPSdnLWNhcicgbmctcmVwZWF0PSdjYXIgaW4gdm0uY2FycyB0cmFjayBieSBjYXIuaWQnIG5nLWF0dHItdHJhbnNmb3JtPSdyb3RhdGUoe3tjYXIubG9jfX0pJz5cblx0XHRcdFx0XHQ8cmVjdCBjbGFzcz0nY2FyJyB3aWR0aD0nMjAnIGhlaWdodD0nMTAnIHk9JzIyMCcvPlxuXHRcdFx0XHQ8L2c+XG5cdFx0XHQ8L2c+XG5cdFx0PC9nPlxuXHQ8L3N2Zz5cblxuJycnXG5cbmNsYXNzIEN0cmxcblx0Y29uc3RydWN0b3I6IChAc2NvcGUpLT5cblx0XHRAY2FycyA9IF8ucmFuZ2UgMCAsIDIwXG5cdFx0XHQubWFwIChuKS0+XG5cdFx0XHRcdGxvYyA9IG4gLyAyMCAqIDM2MFxuXHRcdFx0XHRuZXcgQ2FyKGxvYylcblx0XHRAcGF1c2UoKVxuXHRjbGljazogLT5cblx0XHRpZiBAcGF1c2VkIHRoZW4gQHBsYXkoKSBlbHNlIEBwYXVzZSgpXG5cblx0cGF1c2U6LT5cblx0XHRAcGF1c2VkID0gdHJ1ZVxuXG5cdHBsYXk6IC0+XG5cdFx0QHBhdXNlKClcblx0XHRkMy50aW1lci5mbHVzaCgpXG5cdFx0QHBhdXNlZCA9IGZhbHNlXG5cdFx0bGFzdCA9IDBcblx0XHRkMy50aW1lciAoZWxhcHNlZCk9PlxuXHRcdFx0ZHQgPSBlbGFwc2VkIC0gbGFzdFxuXHRcdFx0QGNhcnMuZm9yRWFjaCAoY2FyKS0+XG5cdFx0XHRcdGNhci5tb3ZlIGR0XG5cdFx0XHRAc2NvcGUuJGV2YWxBc3luYygpXG5cdFx0XHRsYXN0ID0gZWxhcHNlZFxuXHRcdFx0QHBhdXNlZFxuXHRcdFx0XG5yb2FkRGVyID0gLT5cblx0cmVzdWx0ID0gXG5cdFx0c2NvcGU6IHt9XG5cdFx0Y29udHJvbGxlckFzOiAndm0nICN2aWV3IG1vZGVsXG5cdFx0dGVtcGxhdGU6IHRlbXBsYXRlXG5cdFx0cmVzdHJpY3Q6ICdBJ1xuXHRcdGNvbnRyb2xsZXI6IFsnJHNjb3BlJywgQ3RybF1cblxuYW5ndWxhci5tb2R1bGUgJ21haW5BcHAnICwgW11cblx0LmRpcmVjdGl2ZSAncm9hZERlcicsIHJvYWREZXJcblxuIl19
