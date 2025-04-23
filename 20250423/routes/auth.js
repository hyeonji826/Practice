const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: 사용자가 회원정보를 입력하여 가입처리
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [userid, password, email, name, phone]
 *             properties:
 *               userid:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: 생성 성공
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: 아이디와 비밀번호 로그인 요청 처리
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [userid, password]
 *             properties:
 *               userid:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: 로그인 성공
 */

/**
 * @swagger
 * /user:
 *   put:
 *     summary: 회원정보 수정
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [userid, email, name, phone]
 *             properties:
 *               userid:
 *                 type: string
 *               email:
 *                 type: string
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       201:
 *         description: 회원정보 수정
 */

/**
 * @swagger
 * /user:
 *   delete:
 *     summary: 회원 탈퇴 처리
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [userid]
 *             properties:
 *               userid:
 *                 type: string
 *     responses:
 *       201:
 *         description: 회원탈퇴
 */


router.post("/signup", (req, res) => {
  const { userid, password, email, name, phone } = req.body;
  res
    .status(200)
    .send(`POST:/signup 회원가입 ${userid} ${password} ${email} ${name} ${phone}`);
});
router.post("/login", (req, res) => {
  const { userid, password } = req.body;
  res.status(201).send(`POST:/login 로그인 ${userid} ${password}`);
});
router.put("/user/:userid", (req, res) => {
  const { userid, name, email, phone } = req.body;
  res
    .status(201)
    .send(`PUT:/user 회원정보 수정 ${userid}  ${email} ${name} ${phone}`);
});
router.delete("/user/:userid", (req, res) => {
  const { userid } = req.body;
  res.status(201).send(`DELETE:/user 회원탈퇴 ${userid}`);
});

module.exports = router;
