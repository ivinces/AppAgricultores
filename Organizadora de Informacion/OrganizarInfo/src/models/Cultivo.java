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
public class Cultivo {
    String nombre;
    String descripcion;
    Umbrales umbrales;

    public Cultivo(String nombre, String descripcion, Umbrales umbrales) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.umbrales = umbrales;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Umbrales getUmbrales() {
        return umbrales;
    }

    public void setUmbrales(Umbrales umbrales) {
        this.umbrales = umbrales;
    }
    
    
}
