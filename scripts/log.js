const labels = {
    email: document.getElementById('email-lab'),
    password: document.getElementById('pass-lab'),
    p: document.getElementById('errores')
};
const inputs = {
    email: document.getElementById('email'),
    password: document.getElementById('password')
}

const p = document.getElementById('errores');

function comprobar(){
    const datos = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
    };
    console.log(datos);

    comprobarEmail(datos.email);
    
    comprobarContraseñas(datos.password);

    p.style.display = 'block';
    p.style.color = 'green';
    p.textContent = 'Registro completado';



    // Redireccionamos a la página principal después de 3 segundos
    setTimeout(() => {location.href='../../html/index.html'}, 3000)

}


function comprobarEmail(email){
    const emailvalido = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

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

function comprobarContraseñas(pass){
    if(pass.trim()==""){
        labels.password.style.color = "red";
        inputs.password.style.border = "red 2px solid";
        p.textContent = 'Las contraseñas están vacías o no coinciden';
        p.style.display = 'block';
        throw new Error('Error en las contraseñas');
    }if(pass.trim().length < 6){
        labels.password.style.color = "red";
        inputs.password.style.border = "red 2px solid";
        p.textContent = 'Las contraseñas deben tener al menos 6 caracteres';
        p.style.display = 'block';
        throw new Error('Error en las contraseñas');

    }if(pass.trim()!=""){
        labels.password.style.color = "black";
        p.textContent = '';
        p.style.display = 'none';
    }
}