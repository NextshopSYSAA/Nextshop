const {User} = require ('../database/sequalise')


const getalluser =()=>{
    return User.findAll()
}
const findUser = (email) => {
    return User.findOne({where:({email: email})})
}
const finduserbyid =(id)=>{
    return User.findOne({where : ({iduser : id})})
}
const saveUser = (data) => {
  User.create(data)
}
const deleteuser=(id)=>{
    return User.destroy({
        where: { iduser:id }
      })
}
const updateuser=(id,body)=>{
    return User.update(body,{where:{iduser:id}})
    

}

const getone=(id)=>{
    return User.findOne({where:{iduser:id}})
}

module.exports={
    getalluser : getalluser,
    findUser : findUser,
    saveUser : saveUser,
    deleteuser : deleteuser,
    updateuser : updateuser,
    finduserbyid :finduserbyid,
    getone:getone
}