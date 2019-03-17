var orm = require("../config/orm.js");

var burger = {
    showAll: function () {
        return new Promise(function (resolve, reject) {
            orm.selectAll("burger").then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    add: function (burgerName) {
        return new Promise(function (resolve, reject) {
            orm.insertOne("burger", burgerName).then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    devour: function (burgerId) {
        return new Promise(function (resolve, reject) {
            orm.updateOne("burger", burgerId).then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    }
}

module.exports = burger;