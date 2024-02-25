const Routeruser = require('express').Router()
const controlleruser = require('../controller/usercontroller')
const {checkToken} = require('../controller/authorization')


Routeruser.get('/getusers',checkToken,controlleruser.GetAllUser)
Routeruser.get('/getuser/:id',controlleruser.FindUserById)

Routeruser.get('/getusers',controlleruser.GetAllUser)

Routeruser.post('/signup',controlleruser.addAccount)
Routeruser.post('/login',controlleruser.login)
Routeruser.delete('/deleteuser/:iduser',controlleruser.DeleteUser)
Routeruser.put('/updateuser/:iduser',controlleruser.UpdateUser)

Routeruser.get('/getuserss',controlleruser.GetAllUser)

Routeruser.put('/updateuser1/:id',controlleruser.updateUser1)

Routeruser.get('/oneUser/:id',controlleruser.getUserById)


module.exports= Routeruser