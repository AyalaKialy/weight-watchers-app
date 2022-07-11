const service = require('../service/meeting.service');

module.exports = {
    getAllMeetings: async (req, res, next) => {
        try {
                const meetings = await service.getAllMeetings();
                res.send(meetings);
        }
        catch (error) {
            next(error)
        };
    },
    getMeetingById: async (req, res, next) => {
        try {
            const id = req.params.id;
            const meetings = await service.getMeetingById(id);
            res.send(meetings);
        }
        catch (error) {
            next(error)
        }
    },
    updateMeeting: async (req, res, next) => {
        try {
            const id = req.params.id;
            const meetingToUpdate = req.body;
            await service.updateMeeting(id, meetingToUpdate).then(() => {
                res.status(200).json('put meetings successfully')
            })
        }
        catch (error) {
            next(error)
        };
    },
    createMeeting: async (req, res, next) => {
        try {
            const meetings = req.body;
            await service.createMeeting(meetings).then(() => {
                res.status(200).json('post meetings successfully')
            })
        }
        catch (error) {
            next(error)
        };
    },
    deleteMeeting: async (req, res, next) => {
        try {
            const date = req.params.date;
            await service.deleteMeeting(date).then(() => {
                res.status(200).json({
                    message: `meeting deleted`
                })
            })
        }
        catch (error) {
            next(error)
        };
    }
}


