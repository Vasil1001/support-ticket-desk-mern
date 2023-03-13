import { Router } from 'express';
const router = Router();

router.post('/', (req, res) => {
    res.send('Register Route')
})

export default router