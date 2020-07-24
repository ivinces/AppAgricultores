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
public class Umbrales {
    float temp_min;
    float temp_max;
    float humedad_min;
    float humedad_max;
    float radiacion_min;
    float radiacion_max;

    public Umbrales(float temp_min, float temp_max, float humedad_min, float humedad_max, float radiacion_min, float radiacion_max) {
        this.temp_min = temp_min;
        this.temp_max = temp_max;
        this.humedad_min = humedad_min;
        this.humedad_max = humedad_max;
        this.radiacion_min = radiacion_min;
        this.radiacion_max = radiacion_max;
    }

    public float getTemp_min() {
        return temp_min;
    }

    public void setTemp_min(float temp_min) {
        this.temp_min = temp_min;
    }

    public float getTemp_max() {
        return temp_max;
    }

    public void setTemp_max(float temp_max) {
        this.temp_max = temp_max;
    }

    public float getHumedad_min() {
        return humedad_min;
    }

    public void setHumedad_min(float humedad_min) {
        this.humedad_min = humedad_min;
    }

    public float getHumedad_max() {
        return humedad_max;
    }

    public void setHumedad_max(float humedad_max) {
        this.humedad_max = humedad_max;
    }

    public float getRadiacion_min() {
        return radiacion_min;
    }

    public void setRadiacion_min(float radiacion_min) {
        this.radiacion_min = radiacion_min;
    }

    public float getRadiacion_max() {
        return radiacion_max;
    }

    public void setRadiacion_max(float radiacion_max) {
        this.radiacion_max = radiacion_max;
    }
    
    
}
