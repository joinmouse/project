const tool = require('./tool')

// 1、测试tool(option).do()
tool({option: 'test'}).do()

// 2、测试tool.setOption(option).do()
tool.setOption({key: 'new', value: 'new_value'}).do()

// 3、测试tool.save(data).then().catch().finally();
tool.save({save: 'save'}).then(res => {
    console.log(res)
}).catch(e => {
    console.log(e)
}).finally(f => {
    console.log('over')
})
