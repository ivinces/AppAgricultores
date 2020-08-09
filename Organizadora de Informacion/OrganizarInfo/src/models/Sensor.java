/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package models;

/**
 *
 * @author isabe
 */
public class Sensor {
    boolean temperatura;
    boolean humedad;
    boolean radiacion;
    double latitud;
    double longitud;
    String cod_sensor;
    Cultivo cultivo;
    boolean activo;

    public Sensor(double latitud, double longitud, String cod_sensor, Cultivo cultivo) {
        this.temperatura = false;
        this.humedad = false;
        this.radiacion = false;
        this.latitud = latitud;
        this.longitud = longitud;
        this.cod_sensor = cod_sensor;
        this.cultivo = cultivo;
        this.activo=true;
    }

    public boolean isTemperatura() {
        return temperatura;
    }

    public void setTemperatura(boolean temperatura) {
        this.temperatura = temperatura;
    }

    public boolean isHumedad() {
        return humedad;
    }

    public void setHumedad(boolean humedad) {
        this.humedad = humedad;
    }

    public boolean isRadiacion() {
        return radiacion;
    }

    public void setRadiacion(boolean radiacion) {
        this.radiacion = radiacion;
    }

    public double getLatitud() {
        return latitud;
    }

    public void setLatitud(float latitud) {
        this.latitud = latitud;
    }

    public double getLongitud() {
        return longitud;
    }

    public void setLongitud(float longitud) {
        this.longitud = longitud;
    }

    public String getCod_sensor() {
        return cod_sensor;
    }

    public void setCod_sensor(String cod_sensor) {
        this.cod_sensor = cod_sensor;
    }

    public Cultivo getCultivo() {
        return cultivo;
    }

    public void setCultivo(Cultivo cultivo) {
        this.cultivo = cultivo;
    } 

    public boolean isActivo() {
        return activo;
    }

    public void setActivo(boolean activo) {
        this.activo = activo;
    }
    
    
}
