let jefe = 5000;
let analista = 4000;
let programador = 3000;
let soporte = 2000;
let asistente = 1500;

class empleado{
    codigo ;
    nombre ;
    apellido ;
    correo ;
    puesto ;

    sueldoBruto(){
        if(this.puesto=="jefe"){
            return jefe;
        }
        
        else if(this.puesto=="analista"){
            return analista;
        }

        else if(this.puesto=="programador"){
            return programador;
        }

        else if(this.puesto=="soporte"){
            return soporte;
        }
        else if(this.puesto=="asistente"){
            return asistente;
        }
    }

    descuento(){
        let sueldoBruto=this.sueldoBruto();
        let descuento =(sueldoBruto*12.5)/100;
        return descuento;
    }

    sueldoNeto(){
        let descuento = this.descuento();
        let sueldoBruto = this.sueldoBruto();
        let total = sueldoBruto-descuento;
        return `el sueldo a pagar es :s/ ${total}`
    }
}

let user = new empleado();

user.codigo = prompt("Escriba su codigo");
user.nombre = prompt ("Escriba aqui su nombre");
user.apellido = prompt ("Escriba aqui su apellido");
user.correo = prompt ("Escriba aqui su correo electronico");
user.puesto = prompt ("Escriba aqui su puesto de trabajo");

alert(user.sueldoNeto());