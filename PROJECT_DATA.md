# PROJECT_DATA.md

## Proyecto

Nombre: Mara & Víctor

Tipo: Sitio web para boda

Estado: Producción (versión inicial)

---

# Dominio

Dominio principal:

marayvictor.com

Dominio WWW:

[www.marayvictor.com](http://www.marayvictor.com)

URL producción:

https://marayvictor.com

---

# VPS

Proveedor:

Vultr

Sistema operativo:

Ubuntu LTS

IP pública:

45.32.196.163

---

# GitHub

Repositorio:

https://github.com/markezz3/marayvictor

Usuario GitHub:

markezz3

Repositorio local VPS:

/home/raulo/websites/marayvictor

---

# Rutas importantes

## Código fuente VPS

/home/raulo/websites/marayvictor

## Sitio publicado

/var/www/marayvictor

## Script despliegue

/home/raulo/websites/update-marayvictor.sh

---

# Nginx

Configuración:

/etc/nginx/sites-available/marayvictor

Sitio habilitado:

/etc/nginx/sites-enabled/marayvictor

Directorio web:

/var/www/marayvictor

---

# SSL

Proveedor:

Let's Encrypt

Herramienta:

Certbot

Certificados esperados:

/etc/letsencrypt/live/marayvictor.com/

---

# DNS

Proveedor DNS:

GoDaddy

Registro principal:

Tipo: A

Nombre: @

Valor: 45.32.196.163

Registro WWW:

Tipo: CNAME

Nombre: www

Valor: marayvictor.com

---

# Despliegue

Flujo:

VS Code (Windows)
↓
Git Commit
↓
Git Push
↓
GitHub
↓
VPS
↓
update-marayvictor.sh
↓
/var/www/marayvictor
↓
Nginx
↓
Producción

---

# Comandos frecuentes

## Entrar al VPS

ssh root@45.32.196.163

## Ir al proyecto

cd /home/raulo/websites/marayvictor

## Actualizar desde GitHub

git pull

## Ejecutar despliegue

cd /home/raulo/websites

./update-marayvictor.sh

## Verificar Nginx

nginx -t

## Recargar Nginx

systemctl reload nginx

---

# Estructura de despliegue

Desarrollo:

/home/raulo/websites/marayvictor

Producción:

/var/www/marayvictor

IMPORTANTE:

Nunca editar directamente archivos dentro de:

/var/www/marayvictor

Las modificaciones deben realizarse en:

/home/raulo/websites/marayvictor

y posteriormente desplegarse mediante:

./update-marayvictor.sh

---

# Estado actual

Dominio configurado: Sí

DNS configurado: Sí

GitHub configurado: Sí

VPS configurado: Sí

Nginx configurado: Sí

SSL configurado: Sí

Landing Page publicada: Sí

---

# Último despliegue conocido

Fecha aproximada:

Junio 2026

Resultado:

Sitio publicado correctamente en:

https://marayvictor.com

Mostrando:

"Mara ❤️ Víctor - Próximamente"

---

# Notas para futuras conversaciones

Si una IA pierde contexto del proyecto, asumir:

Dominio = marayvictor.com

Repositorio = github.com/markezz3/marayvictor

VPS = 45.32.196.163

Código fuente = /home/raulo/websites/marayvictor

Producción = /var/www/marayvictor

Script despliegue = /home/raulo/websites/update-marayvictor.sh

Servidor web = Nginx

SSL = Let's Encrypt

Proveedor DNS = GoDaddy

Proveedor VPS = Vultr

## Actualizacion 17 JUN 26

### Estado funcional actual

Versión actual:

V2 / V3 Inicial

Secciones implementadas:

* Hero principal
* Cuenta regresiva
* Nuestra Historia
* Timeline
* Frase principal
* Información del evento (placeholder)
* RSVP (placeholder)
* Footer

Archivos activos:

index.html

assets/css/style.css

assets/js/countdown.js

assets/js/main.js

Imágenes utilizadas:

assets/img/hero.jpg
(Fotografía del anillo)

assets/img/historia.jpg
(Fotografía de Mara y Víctor)

Enfoque de desarrollo:

Mobile First

Objetivo principal:

Crear una invitación digital premium optimizada para dispositivos móviles.
