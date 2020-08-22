/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package models;

import java.util.Date;


/**
 *
 * @author isabe
 */
public class Registros {
    Date fecha_hora;
    float temperatura;
    float radiacion;
    float humedad;
    Nodo nodo;

    public Registros(Date fecha_hora, float temperatura, float radiacion, float humedad, Nodo nodo) {
        this.fecha_hora = fecha_hora;
        this.temperatura = temperatura;
        this.radiacion = radiacion;
        this.humedad = humedad;
        this.nodo = nodo;
    }

    public Date getFecha_hora() {
        return fecha_hora;
    }

    public void setFecha_hora(Date fecha_hora) {
        this.fecha_hora = fecha_hora;
    }

    public float getTemperatura() {
        return temperatura;
    }

    public void setTemperatura(float temperatura) {
        this.temperatura = temperatura;
    }

    public float getRadiacion() {
        return radiacion;
    }

    public void setRadiacion(float radiacion) {
        this.radiacion = radiacion;
    }

    public float getHumedad() {
        return humedad;
    }

    public void setHumedad(float humedad) {
        this.humedad = humedad;
    }

    public Nodo getNodo() {
        return nodo;
    }

    public void setNodo(Nodo nodo) {
        this.nodo = nodo;
    }

    
    
    
}
