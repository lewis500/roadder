angular = require 'angular'
d3 = require 'd3'
_ = require 'lodash'

class Car
	constructor: (@loc)->
		@id = _.uniqueId()
		@vel = 15

	move: (dt)->
		@loc += dt/1000 * @vel

template = '''
	<button ng-click='vm.click()'>Play/Pause</button>
	<svg width='500' height='500'>
		<g class='g-main' transform='translate(250,250)'>
			<circle class='road' r='225' />
			<g class='g-cars'>
				<g class='g-car' ng-repeat='car in vm.cars track by car.id' ng-attr-transform='rotate({{car.loc}})'>
					<rect class='car' width='20' height='10' y='220'/>
				</g>
			</g>
		</g>
	</svg>

'''

class Ctrl
	constructor: (@scope)->
		@cars = _.range 0 , 20
			.map (n)->
				loc = n / 20 * 360
				new Car(loc)
		@pause()
	click: ->
		if @paused then @play() else @pause()

	pause:->
		@paused = true

	play: ->
		@pause()
		d3.timer.flush()
		@paused = false
		last = 0
		d3.timer (elapsed)=>
			dt = elapsed - last
			@cars.forEach (car)->
				car.move dt
			@scope.$evalAsync()
			last = elapsed
			@paused
			
roadDer = ->
	result = 
		scope: {}
		controllerAs: 'vm' #view model
		template: template
		restrict: 'A'
		controller: ['$scope', Ctrl]

angular.module 'mainApp' , []
	.directive 'roadDer', roadDer

