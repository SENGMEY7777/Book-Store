const crypto = require('crypto');
const book.Model = require('../models/book.Model');

const findAll = async (filters) => {
    return book.Model.findAll(filters);
};

const findById = async (id) => {
    return book.Model.findById(id);
};

const create = async (payload) => {
    const id = 'boo_' + crypto.randomUUID().slice(0, 8);
    return book.Model.create({ id, ...payload });
};

const update = async (id, payload) => {
    const existing = await book.Model.findById(id);
    if (!existing) {
        const error = new Error('Book. not found');
        error.status = 404;
        throw error;
    }
    return book.Model.update(id, payload);
};

const deleteItem = async (id) => {
    return book.Model.delete(id);
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete: deleteItem,
};
