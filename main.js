let log = console.log

function onLoad() {
    const year = document.getElementById('year-footer')
    let _date = new Date()
    let _year = _date.getUTCFullYear()
    year.innerHTML = _year
}