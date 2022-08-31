// Usuarios

const baseDatos =[
    {   usuario: 'DaliaGallegos',
        contraseña: 'Dalia040599',
        nip: 4059,
        cuenta: 850,
    },
    
    {   usuaio: 'DaniGallegos',
        contraseña: 'Dani110985',
        nip: 1109,
        cuenta: 500,},  
    
    
    {   usuario: 'RodrigoZavala',
        contraseña: 'Rod090196',
        nip: 9019,
        cuenta: 900,
    }
    ]

//Variables
const user = document.getElementById('usuario');
const password = document.getElementById ('contraseña');
const entrar = document.getElementById("ingreso");
const saldo = document.getElementById("saldo");


//Funciones


entrar.addEventListener('click', vacio);
    function vacio (){
    if(user.value== 0 ){
        alert('Por favor introduce tu usuario y contraseña');
        return false;
    }
    if(password.value == 0){
        alert('Por favor introduce tu contraseña');
        return false;
    }
}

entrar.addEventListener('click', login);
function login (){
    if (user.value== "DaliaGallegos", contraseña.value== 'Dalia040599')
    {
        alert ('Bienvenida, Dalia Gallegos');
    }
    if (user.value== "DaniGallegos", contraseña.value== 'Dani110985')
    {
        alert ('Bienvenida, Dani Gallegos');
    }
        
    if (user.value== "RodrigoZavala", contraseña.value== 'Rod010996')
    {
        alert ('Bienvenido, Rodrigo Zavala');
    }
    else {
        alert('Usuario y/o contraseña incorrectos');
    }
}

saldo.addEventListener('click',consulta);

function consulta (){
    if (user.value== "DaliaGallegos")
    {
        document.getElementById('saldoDalia').style.display = 'inline';
    }
    if (user.value== "DaniGallegos")
    {
        document.getElementById('saldoDaniela').style.display = 'inline';
    }
    if (user.value== "RodrigoZavala")
    {
        document.getElementById("saldoRodrigo").style.display = 'block';
    }
    }



