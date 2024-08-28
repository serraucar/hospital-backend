import express from 'express';
import Patient from '../models/Patient';

const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const patients = await Patient.findAll();
        res.json(patients);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Bilinmeyen bir hata oluştu' });
        }
    }
});


router.post('/', async (req, res) => {
    try {
        const patient = await Patient.create(req.body);
        res.status(201).json(patient);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Bilinmeyen bir hata oluştu' });
        }
    }
});

export default router;
