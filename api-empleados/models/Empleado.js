const mongoose = require('mongoose');

const EmpleadoSchema = new mongoose.Schema({
  Nombres: { type: String, required: true },
  Apellidos: { type: String, required: true },
  Estado: { type: String, default: 'Activo' },
  Cargo: { type: String },
  Sueldo: { type: Number },
  DUI: { type: String, unique: true },
  NIT: { type: String },
  ISSS: { type: String },
  AFP: { type: String },
  Email: { type: String, unique: true, index: true },
  Direccion: { type: String },
  Fecha_ingreso: { type: String }, 
  Fecha_egreso: { type: String }
});

// Índices para optimizar búsquedas
EmpleadoSchema.index({ Estado: 1 });
EmpleadoSchema.index({ Cargo: 1 });
EmpleadoSchema.index({ Sueldo: 1 });

module.exports = mongoose.model('Empleado', EmpleadoSchema);
