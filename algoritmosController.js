(function(angular) {
  'use strict';
  var misAlgoritmos = angular.module("misAlgoritmos", ["ngSanitize"]);
})(window.angular);

(function(angular) {
	'use strict';

	function algoritmosController($scope) {

		$scope.amountProcesses = 0;
		$scope.quantumTime = 80;
		$scope.transitionTime = 20;
		$scope.processes = [];
		$scope.tailP = [];
		$scope.diagramGratte = [];
		$scope.timeLapsed = 0;
		var run = false;
		var delay;
		
		var llenar = function(){
			$scope.processes = [];			
			$scope.amountProcesses = 3;
			
			var pcs = new Object();
			pcs.id = 0;
			pcs.name = "P0";
			pcs.timeA = 0;
			pcs.q1 = 2;
			pcs.qES1 = 2;
			pcs.q2 = 3;
			pcs.qES2 = 2;
			pcs.q3 = 1;
			pcs.state = "";
			pcs.timeWait = null;
			pcs.timeLapsed = 0;
			$scope.processes.push(pcs);
			
			pcs = new Object();
			pcs.id = 1;
			pcs.name = "P1";
			pcs.timeA = 80;
			pcs.q1 = 3;
			pcs.qES1 = 2;
			pcs.q2 = 3;
			pcs.qES2 = 0;
			pcs.q3 = 0;
			pcs.state = "";
			pcs.timeWait = null;
			pcs.timeLapsed = 0;
			$scope.processes.push(pcs);
			
			pcs = new Object();
			pcs.id = 2;
			pcs.name = "P2";
			pcs.timeA = 300;
			pcs.q1 = 1;
			pcs.qES1 = 3;
			pcs.q2 = 1;
			pcs.qES2 = 2;
			pcs.q3 = 2;
			pcs.state = "";
			pcs.timeWait = null;
			pcs.timeLapsed = 0;
			$scope.processes.push(pcs);
		};

		$scope.changeAmountProcesses = function() {
			debugger;
			
			if ($scope.autoLoad){				
				llenar();
				return;
			}
			
			if (run){
				window.alert("No se puede hacer esto mientras se está simulando!!")
				return;
			}
			if ($scope.amountProcesses < $scope.processes.length){
				if ($scope.amountProcesses == 0){
					$scope.processes = [];
					return;
				}
				$scope.processes.splice($scope.amountProcesses, $scope.processes.length - 1);
				return;
			}			
			for (var i = 0; i < $scope.amountProcesses; i++) {
				if (!$scope.processes[i]){
					var pcs = new Object();
					pcs.id = i;
					pcs.name = "P" + i;
					pcs.timeA = null;
					pcs.q1 = null;
					pcs.qES1 = null;
					pcs.q2 = null;
					pcs.qES2 = null;
					pcs.q3 = null;
					pcs.state = "";
					pcs.timeWait = null;
					pcs.timeLapsed = 0;
					$scope.processes.push(pcs);
				}
			}
		};
		
		//Cambiar Proceso
		var changeProcess = function(process){
			debugger;
			
		};
		
		//Encolar Proceso
		var spooling = function(process){
			debugger;
			$scope.tailP.push(process);			
		};
		
		var paintInDiagram = function (process){
			debugger;
			$scope.diagramGratte.push(process);
		};
		
		$scope.nextStep = function(){
			
		};
		
		//Iniciar Proceso
		$scope.startProcesses = function() {			
			debugger;
			if (run){
				return;
			}
			if ($scope.transitionTime >= $scope.quantumTime){
				window.alert("El tiempo de transición debe ser mucho menor al tiempo de Quantum!!")
				return;
			}
			run = true;
			// angular.forEach($scope.processes, function(process, index){
				// spooling(process);
				// delay = setTimeout(paintInDiagram(process), 3000);
			// });			
		};
		
		//Parar proceso
		$scope.stopProcess = function(){
			$scope.tailP = [];
			$scope.diagramGratte = [];
			$scope.timeLapsed = 0;
			run = false;
		};

	};

	angular.module("misAlgoritmos")
	.controller("algoritmosController", algoritmosController);

})(window.angular);