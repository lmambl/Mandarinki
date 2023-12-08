const router = require('express').Router();
const { User, Avatar, Game } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll({
      include: Avatar,
      attributes: { exclude: ['password'] },
      raw: true,
    });
    // console.log(users, '<<<<<<<<');
    const random = users.sort(() => Math.random() - 0.5).map((el) => el.id);

    const result = [];
    random.forEach((el, ind) => {
      const obj = {};
      if (ind < random.length - 1) {
        obj[el] = random[ind + 1];
      } else {
        obj[el] = random[0];
      }
      result.push(obj);
    });
    result.map(
      async (el) =>
        await Game.create({
          ktoId: Object.keys(el)[0],
          komuId: Object.values(el)[0],
        })
    );
        console.log(result, '----');
    const games = await Game.findAll();
    console.log(games, '<<<<<<<<');
    res.status(200).json({ message: 'ok', games });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});
module.exports = router;
