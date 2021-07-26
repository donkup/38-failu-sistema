const _data = require('./lib/data');

_data.read('user', 'petras', (err, data) => {
    if (err || !data) {
        console.log('Nepavyko perskaityti failo...');
        return false;
    }

    const obj = JSON.parse(data);
    console.log(obj);
})


const pazymiai = [10, 2, 8, 4, 6, 1555, 1555];
_data.create('marks', 'kazysona', pazymiai, (err) => {
    if (err) {
        console.log(err);
        return false;
    }

    console.log('Failas sekmingai sukurtas!');

    _data.read('marks', 'kazysona', (err, data) => {
        if (err || !data) {
            console.log('Nepavyko perskaityti Kazio failo...');
            return false;
        }

        const obj = JSON.parse(data);
        console.log(obj);
    })
});
