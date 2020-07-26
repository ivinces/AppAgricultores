Tecnología

> json-simple-1.1.1.jar (JSON)

> Driver PostgreSQL JDBC Version 42.2.14 (Conexión Base de Datos)

> Apache NetBeans 12.0 (IDE)


Para el funcionamiento de la aplicación se debe realizar la siguientes configuraciones:

src/Constants

Packages Constants

> Colocar los paths de la carpeta donde se colocaran los archivos nuevos y la ubicación para los archivos procesados.

ConstantsArchivo.java
		
    public final static String path_nuevo="";
    public final static String path_procesado="";

> Colocar las credenciales para la conexión de la base de datos. Nombre de la Base, usuario y clave.

ConstantsDB.java

    public final static String DB="";
    public final static String usuario="";
    public final static String clave="";