;
((c)=>{
    let users = []
    
    const createUser = () => {
        let id = Math.floor(Math.random() * 1000)
        users.push(id)
        c(`Usuario ${id} creado`)
    }
    const getUsers = () => {
        c('Obteniendo Usuarios')
        c(`Usuarios: ${users}\nTotal de Usuarios: ${users.length}`)
    }

    setInterval(() => {
        c('Enviando Información...')     
        createUser()
        getUsers()  
    }, 5000);
    setInterval(() => {
        c('Enviando Información...')     
        createUser()
        getUsers()  
    }, 2500);

})(console.log)