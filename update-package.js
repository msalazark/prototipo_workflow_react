const fs = require('fs');
const path = require('path');

// Leer el archivo package.json
const packageJsonPath = path.join(process.cwd(), 'package.json');
const packageJson = require(packageJsonPath);

// Añadir la nueva devDependency si no existe
if (!packageJson.devDependencies) {
  packageJson.devDependencies = {};
}
if (!packageJson.devDependencies['@babel/plugin-proposal-private-property-in-object']) {
  packageJson.devDependencies['@babel/plugin-proposal-private-property-in-object'] = '^7.21.0';
}

// Escribir los cambios de vuelta al archivo
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log('package.json ha sido actualizado con éxito.');