const printDate = function(){
    const date = new Date();
    let day = date.getDate()
    console.log(day)
}
const printMonth = function(){
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    const date = new Date()
    let currentMonth = month[date.getMonth()]
    console.log(currentMonth)
}
const getBatchinfo = function(){
    console.log("Radon, W3D3, the topic for today is Nodejs module system")
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchinfo = getBatchinfo