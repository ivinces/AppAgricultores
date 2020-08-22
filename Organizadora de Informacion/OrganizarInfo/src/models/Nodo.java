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
public class Nodo {
    String cod_nodo;
    boolean activo;
    double latitud;
    double longitud;
    Cultivo cultivo;

    public Nodo(String cod_nodo, boolean activo, double latitud, double longitud, Cultivo cultivo) {
        this.cod_nodo = cod_nodo;
        this.activo = activo;
        this.latitud = latitud;
        this.longitud = longitud;
        this.cultivo = cultivo;
    }

    public String getCod_nodo() {
        return cod_nodo;
    }

    public void setCod_nodo(String cod_nodo) {
        this.cod_nodo = cod_nodo;
    }

    public boolean isActivo() {
        return activo;
    }

    public void setActivo(boolean activo) {
        this.activo = activo;
    }

    public double getLatitud() {
        return latitud;
    }

    public void setLatitud(double latitud) {
        this.latitud = latitud;
    }

    public double getLongitud() {
        return longitud;
    }

    public void setLongitud(double longitud) {
        this.longitud = longitud;
    }

    public Cultivo getCultivo() {
        return cultivo;
    }

    public void setCultivo(Cultivo cultivo) {
        this.cultivo = cultivo;
    }
    
    
}
