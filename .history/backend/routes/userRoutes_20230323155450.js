/**
 * @swagger
 * /api/v1/auth:
 *   post:
 *     tags:
 *       - Auth
 *     name: Register User
 *     summary: Register a new user
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         description: The user to create.
 *         schema:
 *           type: object
 *           required:
 *             - name
 *             - email
 *             - password
 *           properties:
 *             name:
 *               type: string
 *             email:
 *               type: string
 *             password:
 *               type: string
 *             role:
 *               type: string
 *     responses:
 *       200:
 *         description: User created
 *       5XX:
 *         description: Unexpected error.
 */
