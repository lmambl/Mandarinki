const router = require('express').Router();

const authRouter = require('./api/auth.routes');
const apiUsersRouter = require('./api/apiUsers.route');
const apiGamesRoter = require('./api/apiGames.route');

router.use('/api/auth', authRouter);
router.use('/api/users', apiUsersRouter);
router.use('/api/games', apiGamesRoter);

module.exports = router;
