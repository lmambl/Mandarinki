/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
const router = require('express').Router();
const bcrypt = require('bcrypt');

const { User, Avatar, Game } = require('../../db/models');
const { generateTokens } = require('../../utils/authUtils');
const jwtConfig = require('../../config/jwtConfig');

// аутентицикация существующего пользователя
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // проверить, есть ли такой юзер в бд
    const user = await User.findOne({
      where: { email },
      include: Avatar,
    });
    console.log(user);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Такого пользователя не существует',
      });
    }

    //  проверить пароли
    const check = await bcrypt.compare(password, user.password);
    if (!check) {
      return res.status(403).json({
        success: false,
        message: 'Неправильный пароль',
      });
    }

    const userData = {
      id: user.id,
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      avatarId: user.avatarId,
      dreams: user.dreams,
      isAdmin: user.isAdmin,
      Avatar: user.Avatar,
    };

    // сгенерируем jwt токены
    const { accessToken, refreshToken } = generateTokens({
      user: userData,
    });

    // устанавливаем куки
    res.cookie(jwtConfig.access.type, accessToken, {
      maxAge: jwtConfig.access.expiresIn,
      httpOnly: true,
    });
    res.cookie(jwtConfig.refresh.type, refreshToken, {
      maxAge: jwtConfig.refresh.expiresIn,
      httpOnly: true,
    });

    // отправляем ответ
    return res.json({
      success: true,
      user: userData,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
});

// создание нового пользователя
router.post('/register', async (req, res) => {
  const { name, lastName, email, password, avatarId, dreams } = req.body;
  const peoples = await Game.findAll();
  if (peoples.length === 0) {
    if (
      name === '' ||
    lastName === '' ||
    email === '' ||
    password === '' ||
    avatarId === '' ||
    dreams === ''
    ) {
      return res.status(400).json({ success: false, message: 'Заполните все поля' });
    }

    try {
    // если пользователь с таким login уже есть, возвращаем ошибку
      const foundUser = await User.findOne({
        where: { email },
        include: Avatar,
      });
      if (foundUser) {
        return res
          .status(400)
          .json({ success: false, message: 'Такой пользователь уже существует' });
      }

      const hash = await bcrypt.hash(password, 10);
      await User.create({
        name,
        lastName,
        email,
        password: hash,
        avatarId,
        isAdmin: false,
        dreams,
      });

      return res.json({
        success: true,
        message: ' ',
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: error.message });
    }
  } else {
    return res.json({
      message: 'после розыгрыша регестрация невозможна',
    });
  }
});

// при логауте чистим все куки
router.get('/logout', (req, res) => {
  try {
    res.clearCookie(jwtConfig.access.type).clearCookie(jwtConfig.refresh.type);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// проверка активной сессии и отправка информации о пользователе
router.get('/check', (req, res) => {
  if (res.locals.user) {
    res.json({ user: res.locals.user });
  } else {
    res.status(401).json({ message: 'Пользователь не аутентифицирован' });
  }
});
router.get('/avatars', async (req, res) => {
  const avatars = await Avatar.findAll();
  res.json({ avatars });
});
module.exports = router;
