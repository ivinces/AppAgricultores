const { Router } = require('express');
const router = Router();

const { getCultivo, getCultivoById, createCultivo, updateCultivo, deleteCultivo } = require('../controllers/cultivo.controller');
const { getNodo, getNodoById, createNodo, updateNodo, deleteNodo } = require('../controllers/nodo.controller');
const { getUmbrales, getUmbralesById, createUmbrales, updateUmbrales, deleteUmbrales } = require('../controllers/umbrales.controller');
const { getEstado_Nodo, getEstado_NodoById, createEstado_Nodo, updateEstado_Nodo, deleteEstado_Nodo } = require('../controllers/estado.controller');
const { getRegistros, getRegistrosById, createRegistros, updateRegistros, deleteRegistros } = require('../controllers/registros.controller');
const { getCultivoxNodo, getCultivoxNodoById } = require('../controllers/cult_nodo.controller');
const { getCultivoxUmbrales, getCultivoxUmbralesById } = require('../controllers/cult_umbrales.controller');
const { getCultivoxNodoxRegistros, getCultivoxNodoxRegistrosById, getCultivoxNodoxRegistrosByIdASC } = require('../controllers/cult_nodo_reg.controller');
const { getCultivoxNodoxEstado, getCultivoxNodoxEstadoById, getCultivoxNodoxEstadoxPersonalizado, getCultivoxNodoxEstadoxPersonalizadoById } = require('../controllers/cult_nodo_estado.controller');

router.get('/cultivo', getCultivo);
router.get('/cultivo/:id', getCultivoById);
router.post('/cultivo', createCultivo);
router.put('/cultivo/:id', updateCultivo)
router.delete('/cultivo/:id', deleteCultivo);

router.get('/nodo', getNodo);
router.get('/nodo/:id', getNodoById);
router.post('/nodo', createNodo);
router.put('/nodo/:id', updateNodo)
router.delete('/nodo/:id', deleteNodo);

router.get('/umbrales', getUmbrales);
router.get('/umbrales/:id', getUmbralesById);
router.post('/umbrales', createUmbrales);
router.put('/umbrales/:id', updateUmbrales)
router.delete('/umbrales/:id', deleteUmbrales);

router.get('/estado', getEstado_Nodo);
router.get('/estado/:id', getEstado_NodoById);
router.post('/estado', createEstado_Nodo);
router.put('/estado/:id', updateEstado_Nodo)
router.delete('/estado/:id', deleteEstado_Nodo);

router.get('/registros', getRegistros);
router.get('/registros/:id', getRegistrosById);
router.post('/registros', createRegistros);
router.put('/registros/:id', updateRegistros)
router.delete('/registros/:id', deleteRegistros);

router.get('/cultivoxnodo', getCultivoxNodo);
router.get('/cultivoxnodo/:id', getCultivoxNodoById);

router.get('/cultivoxumbrales', getCultivoxUmbrales);
router.get('/cultivoxumbrales/:id', getCultivoxUmbralesById);

router.get('/cultivoxnodoxregistros', getCultivoxNodoxRegistros);
router.get('/cultivoxnodoxregistros/:id', getCultivoxNodoxRegistrosById);
router.get('/cultivoxnodoxregistrosASC/:id', getCultivoxNodoxRegistrosByIdASC);

router.get('/cultivoxnodoxestados', getCultivoxNodoxEstado);
router.get('/cultivoxnodoxestados/:id', getCultivoxNodoxEstadoById);

router.get('/cultivoxnodoxestadosxper', getCultivoxNodoxEstadoxPersonalizado);
router.get('/cultivoxnodoxestadosxper/:id', getCultivoxNodoxEstadoxPersonalizadoById);

module.exports = router;