const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/1 * * * * *', function(){
    console.log('Executando Tarefa 1', new Date().getSeconds(), new Date().getMinutes());
})

setTimeout(function(){
    tarefa1.cancel();
    console.log("Cancelando Tarefa 1")
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 10
regra.second = 30
regra.minute = 36

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando tarefa 2!', new Date().getSeconds());
})