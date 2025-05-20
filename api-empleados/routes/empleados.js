const express = require('express');
const router = express.Router();
const Empleado = require('../models/Empleado');

router.post('/', async (req, res) => {
  try {
    const empleado = new Empleado(req.body);
    await empleado.save();
    res.status(201).json(empleado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  const empleados = await Empleado.find();
  res.json(empleados);
});

router.get('/:id', async (req, res) => {
  const empleado = await Empleado.findById(req.params.id);
  res.json(empleado);
});

router.put('/:id', async (req, res) => {
  const empleado = await Empleado.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(empleado);
});

router.delete('/:id', async (req, res) => {
  await Empleado.findByIdAndDelete(req.params.id);
  res.json({ mensaje: 'Empleado eliminado' });
});

module.exports = router;
