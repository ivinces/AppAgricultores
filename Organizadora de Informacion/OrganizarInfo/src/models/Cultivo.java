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
    String nodo;
    Umbrales umbrales;

    public Cultivo(String nodo) {
        this.nombre = "Cultivo";
        this.descripcion = "Nuevo Cultivo";
        this.nodo = nodo;
        this.umbrales = null;
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

    public String getNodo() {
        return nodo;
    }

    public void setNodo(String nodo) {
        this.nodo = nodo;
    }
    
    
    
}