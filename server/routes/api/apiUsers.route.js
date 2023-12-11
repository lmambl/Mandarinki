const router = require('express').Router();
const { User, Avatar } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll({
      include: Avatar,
      attributes: { exclude: ['password'] },
    });
    res.status(200).json({ message: 'ok', users });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get('/avatar/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const avatar = await Avatar.findOne({
      where: { id: Number(id) },
    });
    res.status(200).json({ message: 'ok', avatar });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.put('/:idUser', async (req, res) => {
  try {
    const { dream } = req.body;
    console.log(dream)
    const user = await User.findOne({ where: { id: req.params.idUser } });
    user.dreams = dream;
    await user.save();
    res.json({ id: user.id, dreams: user.dreams });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
