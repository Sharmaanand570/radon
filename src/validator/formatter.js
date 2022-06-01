const trim = function(){
    const text = "      'functionUp' "
    console.log(text.trim())
}

const changetoLowerCase = function(){
    const text = "functionUp"
    console.log(text.toLowerCase())
}

const changetoUpperCase = function(){
    const text = "functionUp"
    console.log(text.toUpperCase())
}

module.exports.trim = trim
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changetoUpperCase = changetoUpperCase