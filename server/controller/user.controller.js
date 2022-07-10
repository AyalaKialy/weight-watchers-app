const service = require('../service/user.service');

module.exports = {
    getAllUsers: async (req, res, next) => {
        try {
            if (req.query.meansOfIdentification) {
                const meansOfIdentification = req.query.meansOfIdentification;
                const user = await service.MeansOfIdentification(meansOfIdentification);
                res.send(user)
            }
            else {
                const users = await service.getAllUsers();
                res.send(users);
            }
        }
        catch (error) {
            next(error)
        };
    },
    getAllOrderByUserId: async (req, res, next) => {
        try {
            const userId = req.params.id;
            const id = await userModel.findOne({ _id: userId }).populate({ path: 'allOrdersByUserId', select: 'userID date amount products' });
            await res.send(id);
        }
        catch (error) {
            next(error)
        }
    },
    getUserById: async (req, res, next) => {
        try {
            const id = req.params.id;
            const user = await service.getUserById(id);
            res.send({ user })
        }
        catch (error) {
            next(error)
        };
    },
    updateUser: async (req, res) => {
        try {
            const id = req.params.id;
            const user = req.body;
            await service.updateUser(id, user).then(() => {
                res.status(200).json('put user successfully')
            })
        }
        catch (error) {
            next(error)
        };
    },
    createUser: async (req, res, next) => {
        try {
            const user = req.body;
            await service.createUser(user).then(() => {
                res.status(200).json('post user successfully')
            })
        }
        catch (error) {
            next(error)
        };
    },
    deleteUser: async (req, res, next) => {
        try {
            const id = req.params.id;
            await service.deleteUser(id).then(() => {
                res.status(200).json({
                    message: `user deleted`
                })
            })
        }
        catch (error) {
            next(error)
        };
    }
}


