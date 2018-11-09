const feathers = require('@feathersjs/feathers');
const polka = require('@feathersjs/polka');

const myService = {
    async find(params) {
        return [];
    },
    async get(id, params) {
        return { id, text: `The ${id} precedes me.` }
    },
    async create(data, params) { },
    async update(id, data, params) { },
    async patch(id, data, params) { },
    async remove(id, params) { },
    setup(app, path) { }
}

const app = polka(feathers());
app.oldUse = polka().use;

app.configure(polka.rest());


// app.use('messages', {
//     get(id) {
//         return Promise.resolve({
//             id,
//             text: `The ${id} precedes me.`
//         })
//     }
// });

app.register('/messages', myService);

app.listen(3030).on('listening', () =>
    console.log('Feathers server listening on localhost:3030')
);