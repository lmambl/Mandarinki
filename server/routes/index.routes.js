const router = require('express').Router();

const authRouter = require('./api/auth.routes');
const apiUsersRouter = require('./api/apiUsers.route');

router.use('/api/auth', authRouter);
router.use('/api/users', apiUsersRouter);

module.exports = router;
