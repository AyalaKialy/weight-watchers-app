const fs = require('fs/promises')

module.exports = {
    getAllUsers: async () => {
        return await fs.readFile('./dataFile.json')
            .then(data => JSON.parse(data).users);
    },
    MeansOfIdentification: async (meansOfIdentification) => {
        return await fs.readFile('./dataFile.json')
            .then(data => JSON.parse(data))
            .then(data => data.users.find(user => user.email === meansOfIdentification || user.phone === meansOfIdentification));
    },
    getUserById: async (id) => {
        return await fs.readFile('./dataFile.json')
            .then(data => JSON.parse(data))
            .then(data => data.users.find(user => user.id === id));
    },
    updateUser: async (id, userToUpdate) => {
        let usersArr;
        await fs.readFile('./dataFile.json')
            .then(data => JSON.parse(data))
            .then(data => usersArr = data)
            .then(usersArr => usersArr.users.indexOf(user => user.id === id))
            .then(index => usersArr.users[index + 1] = userToUpdate)
        return await fs.writeFile('./dataFile.json', JSON.stringify(usersArr));
    },
    createUser: async (user) => {
        let usersArr;
        await fs.readFile('./dataFile.json')
            .then(data => JSON.parse(data))
            .then(data => usersArr = data)
            .then(usersArr => usersArr.users.push(user))
        return await fs.writeFile('./dataFile.json', JSON.stringify(usersArr));
    },
    deleteUser: async (id) => {
        let usersArr;
        await fs.readFile('./dataFile.json')
            .then(data => JSON.parse(data))
            .then(data => usersArr = data)
            .then(usersArr => usersArr.users.indexOf(user => user.id === id))
            .then(index => usersArr.users.splice(index, 1))
        return await fs.writeFile('./dataFile.json', JSON.stringify(usersArr));
    }
}

