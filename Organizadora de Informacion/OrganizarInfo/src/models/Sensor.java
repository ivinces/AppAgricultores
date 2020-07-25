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
    float latitud;
    float longitud;
    String cod_sensor;
    Sensor sensor;

    public Sensor(boolean temperatura, boolean humedad, boolean radiacion, float latitud, float longitud, String cod_sensor, Sensor sensor) {
        this.temperatura = temperatura;
        this.humedad = humedad;
        this.radiacion = radiacion;
        this.latitud = latitud;
        this.longitud = longitud;
        this.cod_sensor = cod_sensor;
        this.sensor = sensor;
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

    public float getLatitud() {
        return latitud;
    }

    public void setLatitud(float latitud) {
        this.latitud = latitud;
    }

    public float getLongitud() {
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

    public Sensor getSensor() {
        return sensor;
    }

    public void setSensor(Sensor sensor) {
        this.sensor = sensor;
    }
    
    
}
