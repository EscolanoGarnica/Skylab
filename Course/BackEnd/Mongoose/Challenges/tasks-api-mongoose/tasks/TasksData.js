const TaskModel = require('./TaskModel')

class TasksData {


    create(text, done) {
        if(!text)
            throw new Error('no task text provided')

        if(typeof done !== 'boolean')
            throw new Error('task done is not boolean')

        const task = new TaskModel({ id: new Date().getTime(), text, done })

        return new Promise((resolve, reject)=>{
            task.save()
                .then(resolve('Created succesfully'))
                .catch(reject)
        })
    }

    list() {
        return new Promise((resolve, reject) => {
            TaskModel.find()
                .then(resolve)
                .catch(reject)

        })
    }

    retrieve(id) {
        if (!id)
            throw new Error('no task id provided')

        return new Promise((resolve, reject) => {
            TaskModel.findOne({id})
                .then(resolve)
                .catch(reject)
        })
    }    

    update(id, text, done) {
        if (!id)
            throw new Error('no task id provided')

        if(!text)
            throw new Error('no task text provided')

        if(typeof done !== 'boolean')
            throw new Error('task done is not boolean')

        return new Promise((resolve, reject)=>{

            TaskModel.update({id:id}, { text: text, done:done })//primero busca el id y luego actualiza los campos text y done
                .then(()=>TaskModel.findOne({id}).then(resolve))//despues de actualizar se hace un findOne con ese id para ver las modificaciones
                .catch(reject)
        })
    }

    delete(id) {
        if (!id)
            throw new Error('no task id provided')
        
        return new Promise((resolve, reject)=>{
            const query = { id: id};

            TaskModel.remove(query)
                .then(resolve('Deleted succesfully'))
                .catch(reject)
        })
    }
}

module.exports = TasksData