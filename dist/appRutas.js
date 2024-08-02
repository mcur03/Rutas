"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)()
    .use((0, cors_1.default)())
    .use(express_1.default.json())
    .use(express_1.default.urlencoded({ extended: true }));
const PORT = process.env.PORT || 10101;
// 1
app.post('/ruta1/:domicilio', function (request, response) {
    let domicilio = request.params.domicilio;
    let cc = request.query.cc;
    let nombres = request.query.nombres;
    let apellidos = request.query.apellidos;
    return response.status(201).json({
        "Status": "ok params",
        domicilio: domicilio
    });
});
// 2
app.post('/ruta2/:id/:peso', function (request, response) {
    let id = request.params.id;
    let peso = request.params.peso;
    let ancho = request.body.ancho;
    let alto = request.body.alto;
    return response.status(201).json({
        "Status": "ok params",
        id: id, peso: peso, ancho: ancho, alto: alto
    });
});
// 3
app.delete('/ruta3', function (request, response) {
    let cc = request.query.cc;
    let motivo = request.body.motivo;
    let id = request.header("id");
    return response.status(201).json({
        "Status": "ok params",
        cc: cc, motivo: motivo, id: id
    });
});
// 4.
app.put('/ruta4', function (request, response) {
    let cc = request.query.cc;
    let apellidos = request.body.apellidos;
    let domicilio = request.header("domicilio");
    return response.status(201).json({
        "Status": "ok params",
        cc: cc, apellidos: apellidos, domicilio: domicilio
    });
});
// 5. 
app.get('/ruta5/:cantidad/:marca', function (request, response) {
    let precio = request.query.precio;
    let cantidad = request.params.cantidad;
    let marca = request.params.marca;
    let domicilio = request.header("domicilio");
    return response.status(201).json({
        "Status": "ok params",
        precio: precio,
        cantidad: cantidad,
        marca: marca,
        domicilio: domicilio
    });
});
app.listen(PORT, () => {
    console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
    throw new Error(error.message);
});
