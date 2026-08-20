# NESTUDEMY
## Udemy: Curso NEST JS de Fernando Herrera




Ejecutable

- Crear vite.config.ts en 01-TypeScript-intro/
```
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/01/'
})
```


- Abrir consola en 01-TypeScript-intro
```
claudio@debian:~/proyectos/nestudemy/01-TypeScript-intro$
```
- Ejecutar
```
yarn build
```
Para copiar el contenido de dist (01-TypeScript-intro/dist) a la carpeta 01 de nginx (/var/www/html/01/) 
- Abrir terminal en 01-TypeScript-intro y ejecutar
```
sudo cp -r dist/* /var/www/html/01/
```
- En el browser 
```
http://localhost/01/
```

