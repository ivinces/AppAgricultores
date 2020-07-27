EJECUTABLE

Luego de las configuraciones iniciales se debe crear el ejecutable .jar.

> Crear OrganizarInfo.jar utilizando NetBeans

	1. Haga clic derecho en el nombre del proyecto
	2. Seleccionar propiedades
	3. Haga clic en embalaje
	4. Compruebe Build JAR después de compilar
	5. Comprobar comprimir archivo JAR
	6. Haga clic en Aceptar para aceptar los cambios.
	7. Haga clic derecho en el nombre de un proyecto
	8. Seleccione Build o Clean y Build

  Se construye el archivo JAR. Para verlo dentro de NetBeans:

	1. Haga clic en la pestaña Archivos
	2. Expandir Nombre del proyecto >> dist

	Nota: si en la carpeta dist existe una carpeta lib si debe copiar el archivo .jar y la caperta lib. Si no se encuentra esta carpeta significa que las librerías estan incluidas en el .jar 

> Al crear el ejecutable se puede ejecutar de las siguientes formas.

1. JAVA(TM) Plataform SE Binary

	- Click derecho al ejecutable.
	- Abrir con -> JAVA(TM) Plataform SE Binary
	
	Nota: Se debe verificar en el administrador de tareas si se esta ejecutando el programa "JAVA(TM) Plataform SE Binary".

2. Run.bat
	Existe el archivo run.bat el cual contiene la siguiente linea 
	
	java -jar OrganizarInfo.jar

	Debe estar en la misma carpeta donde esta el .jar