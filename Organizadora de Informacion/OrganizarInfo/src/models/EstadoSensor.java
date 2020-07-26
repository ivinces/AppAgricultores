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
public class EstadoSensor {
    
    Date fecha_hora;
    int bateria;
    String categoria;
    Sensor sensor;

    public EstadoSensor(Date fecha_hora, int bateria,Sensor sensor) {
        this.fecha_hora = fecha_hora;
        this.bateria = bateria;
        this.sensor = sensor;
    }
    
    public Date getFecha_hora() {
        return fecha_hora;
    }

    public void setFecha_hora(Date fecha_hora) {
        this.fecha_hora = fecha_hora;
    }

    public int getBateria() {
        return bateria;
    }

    public void setBateria(int bateria) {
        this.bateria = bateria;
    }
    
    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public Sensor getSensor() {
        return sensor;
    }

    public void setSensor(Sensor sensor) {
        this.sensor = sensor;
    }
}
