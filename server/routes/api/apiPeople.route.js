const router = require('express').Router();
const { User, Avatar, Game } = require('../../db/models');

router.get('/', async (req, res) => {
  if (res.locals.user) {
    const people = await Game.findOne({
      where: { ktoId: res.locals.user.id },
      include: { model: User, include: Avatar },
    });

    res.json(people);
  }
});
module.exports = router;
