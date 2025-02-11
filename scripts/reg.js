
const labels = {
    nombre: document.getElementById('nom-lab'),
    apellido: document.getElementById('ape-lab'),
    email: document.getElementById('email-lab'),
    telefono: document.getElementById('tel-lab'),
    password: document.getElementById('pass-lab'),
    password2: document.getElementById('pass2-lab'),
    p: document.getElementById('errores')
};
const inputs = {
    nombre: document.getElementById('nombre'),
    apellido: document.getElementById('apellido'),
    email: document.getElementById('email'),
    telefono: document.getElementById('telefono'),
    password: document.getElementById('password'),
    password2: document.getElementById('password2')
}

const p = document.getElementById('errores');

function comprobar(){
    const datos = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value,
        password: document.getElementById('password').value,
        password2: document.getElementById('password2').value
    };

    console.log(datos);

    comprobarNombre(datos.nombre);
   
    comprobarEmail(datos.email);
    
    comprobarContraseñas(datos.password, datos.password2);

    p.style.display = 'block';
    p.style.color = 'green';
    p.textContent = 'Registro completado';

    console.log(window.location.href)

    // Redireccionamos a la página principal después de 3 segundos
    setTimeout(() => {location.href='../../html/index.html'}, 3000)

    
}

function comprobarNombre(nombre){
    if(nombre.trim()==""){
        labels.nombre.style.color = "red";
        inputs.nombre.style.border = "red 2px solid";
        p.textContent = 'El nombre no puede estar vacio';
        p.style.display = 'block';
        throw new Error('El nombre no puede estar vacio');
    }if(!nombre.trim()==""){
        labels.nombre.style.color = "black";
        inputs.nombre.style.border = "";
        p.textContent = '';
        p.style.display = 'none';
    }
}

function comprobarEmail(email){
    const emailvalido = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    console.log(emailvalido.test(email));

    if(email.trim()==""){
        labels.email.style.color = "red";
        inputs.email.style.border = "red 2px solid";
        p.textContent = 'El email no puede estar vacio';
        p.style.display = 'block';
        throw new Error('El email no puede estar vacio');
    }if(!emailvalido.test(email)){
        labels.email.style.color = "red";
        inputs.email.style.border = "red 2px solid";
        p.textContent = 'El email no tiene formato email';
        p.style.display = 'block';
        throw new Error('El email no es valido');
    }
    if(!email.trim()==""){
        labels.email.style.color = "black";
        inputs.email.style.border = "black 2px solid";
        p.textContent = '';
        p.style.display = 'none';
    }
}

function comprobarContraseñas(pass, pass2){
    if((pass.trim()=="" || pass2.trim()=="")|| pass.trim()!==pass2.trim()){
        labels.password.style.color = "red";
        labels.password2.style.color = "red";
        inputs.password.style.border = "red 2px solid";
        inputs.password2.style.border = "red 2px solid";
        p.textContent = 'Las contraseñas están vacías o no coinciden';
        p.style.display = 'block';
        throw new Error('Error en las contraseñas');
    }if(pass.trim().length < 6){
        labels.password.style.color = "red";
        labels.password2.style.color = "red";
        inputs.password.style.border = "red 2px solid";
        inputs.password2.style.border = "red 2px solid";
        p.textContent = 'Las contraseñas deben tener al menos 6 caracteres';
        p.style.display = 'block';
        throw new Error('Error en las contraseñas');

    }if(pass.trim()!="" && pass2.trim()!=""){
        labels.password.style.color = "black";
        labels.password2.style.color = "black";
        inputs.password.style.border = "black 2px solid";
        inputs.password2.style.border = "black 2px solid";
        p.textContent = '';
        p.style.display = 'none';
    }
}