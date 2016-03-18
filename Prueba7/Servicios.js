var servicios = angular.module("servicios", []); //modulo que llamo servicios
servicios.factory("servicioJugadores", function() { //factory para cerar el servicio, y la funcion (o puedo inyectarle algo)
	return { //devuelve el srvicio
		get: function() { //creo el metodo get
			return [
				{name: 'lionel', lastname: 'messi', number:10},
				{name: 'gonzalo', lastname: 'higuain', number:9},
				{name: 'ezequiel', lastname: 'lavezzi', number:8},
				{name: 'angel', lastname: 'di maria', number:7}
			]; //un array de objetos
		}
	};
});