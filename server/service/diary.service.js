const fs = require('fs/promises')

module.exports = {
    getDiaryUser: async (id) => {
        let user;
        await fs.readFile('./dataFile.json')
            .then((data) => {
                data = JSON.parse(data);
                user = data.users.find(user => user.id === id);
            });
        return user.diary;

    },
    addNewDaySummary: async (myId, summary) => {
        let usersArr;
        await fs.readFile('./dataFile.json')
            .then((data) => {
                data = JSON.parse(data);
                usersArr = data;
                let user = usersArr.users.find(user => user.id === myId);
                let index = usersArr.users.indexOf(user);
                usersArr.users[index].diary.push(summary);
            });
        return await fs.writeFile('./dataFile.json', JSON.stringify(usersArr));
    },
    updateDaySummary: async (id, dayId, summary) => {
        let usersArr;
        await fs.readFile('./dataFile.json')
            .then((data) => {
                data = JSON.parse(data);
                usersArr = data;
                let user = usersArr.users.find(user => user.id === id);
                let userIndex = usersArr.users.indexOf(user);
                let day = usersArr.users[userIndex].diary.find(diary => diary.id === dayId);
                let dayIndex = usersArr.users[userIndex].diary.indexOf(day);
                usersArr.users[userIndex].diary[dayIndex] = summary;
            });
        return await fs.writeFile('./dataFile.json', JSON.stringify(usersArr));
    },
    deleteDaySummary: async (id, dayId) => {
        let usersArr;
        await fs.readFile('./dataFile.json')
            .then((data) => {
                data = JSON.parse(data);
                usersArr = data;
                let user = usersArr.users.find(user => user.id === id);
                let userIndex = usersArr.users.indexOf(user);
                let day = usersArr.users[userIndex].diary.find(diary => diary.id === dayId);
                let dayIndex = usersArr.users[userIndex].diary.indexOf(day);
                usersArr.users[userIndex].diary.splice(dayIndex, 1);
            });
        return await fs.writeFile('./dataFile.json', JSON.stringify(usersArr));
    }
}

