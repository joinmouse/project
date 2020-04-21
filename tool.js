function tool(option) {
    tool.option = option
    return tool
}

tool.do = function() {
    console.log('do...')
    console.log(tool.option)
}

tool.setOption = function(option) {
    tool.option = option
    return tool
}

tool.save = function(data) {
    console.log('save...')
    return new Promise((resolve, reject) => {
        resolve(data)
    })
}

module.exports = tool