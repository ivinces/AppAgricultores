Estructura JSON ACEPTADO

> id_nodo: Cada nodo central debe tener un código para identificar el cultivo

> sensor_id: Cada sensor debe tener un código identificador.

> latitude: La latitud de la ubicación GPS del sensor.

> longitude: La longitude de la ubicación GPS del sensor.

> battery: Se envía el numero de batería del sensor. 

> temperature: El numero de la temperatura o puede quedar en blanco si el sensor no tiene esa información.

> radiation: El numero de la radiacion o puede quedar en blanco si el sensor no tiene esa información.

> Humidity: El numero de la humedad o puede quedar en blanco si el sensor no tiene esa información.

> datetime: Fecha y hora de la recolección de datos. Formato yyyy/MM/dd hh:mm:ss


{
"id_nodo": "",

 "data": [
 
      {      
        "sensor_id":"" ,
        "latitude": ,
        "longitude": ,
   	   "battery":"",
	   "temperature":"",
	   "radiation":"",
	   "Humidity":"",
	   "datetime":"",
      },
      {
        "sensor_id":"" ,
        "latitude": ,
        "longitude": ,
   	   "battery":"",
	   "temperature":"",
	   "radiation":"",
	   "Humidity":"",
	   "datetime":"",
      }
    ]
}
