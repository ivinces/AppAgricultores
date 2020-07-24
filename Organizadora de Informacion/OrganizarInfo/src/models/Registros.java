/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package models;

import java.sql.Date;

/**
 *
 * @author isabe
 */
public class Registros {
    Date fecha_hora;
    float valor;
    Sensor sensor;

    public Registros(Date fecha_hora, float valor, Sensor sensor) {
        this.fecha_hora = fecha_hora;
        this.valor = valor;
        this.sensor = sensor;
    }

    public Date getFecha_hora() {
        return fecha_hora;
    }

    public void setFecha_hora(Date fecha_hora) {
        this.fecha_hora = fecha_hora;
    }

    public float getValor() {
        return valor;
    }

    public void setValor(float valor) {
        this.valor = valor;
    }

    public Sensor getSensor() {
        return sensor;
    }

    public void setSensor(Sensor sensor) {
        this.sensor = sensor;
    }
    
    
}
