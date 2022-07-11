const service = require('../service/diary.service');

module.exports = {
    getDiaryUser: async (req, res, next) => {
        try {
            const id = req.params.id;
            const diary = await service.getDiaryUser(id);
            res.send({ diary })
        }
        catch (error) {
            next(error)
        };
    },
    addNewDaySummary: async (req, res, next) => {
        try {
            const id = req.params.id;
            const summary = req.body;
            await service.addNewDaySummary(id, summary).then(() => {
                res.status(200).json('post day summary successfully')
            })
        }
        catch (error) {
            next(error)
        };
    },
    updateDaySummary: async (req, res, next) => {
        try {
            const id = req.params.id;
            const dayId = req.params.dayId;
            const summary = req.body;
            await service.updateDaySummary(id, dayId, summary).then(() => {
                res.status(200).json('update day summary successfully')
            })
        }
        catch (error) {
            next(error)
        };
    },
    deleteDaySummary: async (req, res, next) => {
        try {
            const id = req.params.id;
            const dayId = req.params.dayId;

            await service.deleteDaySummary(id, dayId).then(() => {
                res.status(200).json({
                    message: `day summary successfully deleted`
                })
            })
        }
        catch (error) {
            next(error)
        };
    }
}


