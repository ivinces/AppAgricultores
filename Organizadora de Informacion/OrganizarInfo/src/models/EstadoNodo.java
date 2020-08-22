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
public class EstadoNodo {
    
    Date fecha_hora;
    int bateria;
    String categoria;
    Nodo nodo;

    public EstadoNodo(Date fecha_hora, int bateria, Nodo nodo) {
        this.fecha_hora = fecha_hora;
        this.bateria = bateria;
        this.nodo = nodo;
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

    public Nodo getNodo() {
        return nodo;
    }

    public void setNodo(Nodo nodo) {
        this.nodo = nodo;
    }

    
}
