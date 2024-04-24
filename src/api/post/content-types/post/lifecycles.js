module.exports = {
    afterDelete(event) {
        const { data, where, select, populate } = event.params
        console.log(event)
    }
}