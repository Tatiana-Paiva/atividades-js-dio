function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key)
        }
    }
    return admins;

}

const usuarios = new Map();
 usuarios.set('Luiz', 'Admin');
 usuarios.set('Tatiana', 'Admin');
 usuarios.set('Carlos', 'User');
 usuarios.set('Daniela', 'Admin');

 console.log(getAdmins(usuarios));