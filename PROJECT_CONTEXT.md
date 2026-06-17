# PROJECT_CONTEXT.md

## Proyecto

**Nombre:** Mara & Víctor

**Dominio:** https://marayvictor.com

**Tipo:** Sitio web para boda

**Estado:** En desarrollo

---

# Objetivo

Crear un sitio web moderno, elegante e interactivo para la boda de Mara y Víctor.

El sitio servirá como:

* Invitación digital
* Portal informativo para invitados
* Blog de preparativos
* Sistema RSVP
* Galería fotográfica
* Recuerdo digital posterior a la boda

---

# Tecnologías

## Frontend

* HTML5
* CSS3
* JavaScript Vanilla

## Backend

Actualmente no requerido.

Posibles opciones futuras:

* Firebase
* Node.js
* Express
* SQLite

## Infraestructura

### VPS

Proveedor: Vultr

Sistema Operativo:

Ubuntu LTS

### Servidor Web

Nginx

### SSL

Let's Encrypt + Certbot

### Control de versiones

Git

Repositorio GitHub:

https://github.com/markezz3/marayvictor

---

# Flujo de trabajo

Desarrollo local:

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

Script de despliegue

↓

Nginx

↓

Producción

---

# Estructura de carpetas

```text
marayvictor/
│
├── index.html
├── historia.html
├── eventos.html
├── galeria.html
├── blog.html
├── rsvp.html
├── contacto.html
│
├── admin/
│   ├── dashboard.html
│   ├── invitados.html
│   └── subir-post.html
│
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   ├── timeline.css
│   │   └── animations.css
│   │
│   ├── js/
│   │   ├── main.js
│   │   ├── countdown.js
│   │   ├── maps.js
│   │   ├── blog.js
│   │   └── firebase.js
│   │
│   ├── img/
│   │   ├── portada/
│   │   ├── noviazgo/
│   │   ├── compromiso/
│   │   ├── despedida/
│   │   └── boda/
│   │
│   └── icons/
│
├── data/
│   ├── historia.json
│   ├── eventos.json
│   └── blog.json
│
└── firebase/
    └── config.js
```

---

# Ubicaciones importantes

## Repositorio local VPS

```text
/home/raulo/websites/marayvictor
```

## Sitio publicado

```text
/var/www/marayvictor
```

## Configuración Nginx

```text
/etc/nginx/sites-available/marayvictor
```

## Enlace habilitado

```text
/etc/nginx/sites-enabled/marayvictor
```

---

# Script de despliegue

Archivo:

```text
/home/raulo/websites/update-marayvictor.sh
```

Función:

1. Actualizar repositorio con git pull
2. Copiar archivos a producción
3. Mantener sincronizado el sitio publicado

Ejemplo:

```bash
./update-marayvictor.sh
```

---

# Funcionalidades planeadas

## Landing Page

* Hero principal
* Cuenta regresiva
* Fecha del evento
* Diseño responsive

## Nuestra Historia

* Línea del tiempo
* Fotografías
* Eventos importantes

## Eventos

* Ceremonia
* Recepción
* Hoteles recomendados
* Código de vestimenta

## Google Maps

* Iglesia
* Salón
* Hoteles

## RSVP

* Confirmación de asistencia
* Acompañantes
* Restricciones alimenticias

## Blog

* Preparativos
* Despedidas
* Fotografías
* Actualizaciones

## Galería

* Compromiso
* Boda
* Fotos posteriores

## Libro de firmas

* Mensajes para los novios

---

# Diseño

Estilo visual deseado:

* Elegante
* Minimalista
* Moderno
* Responsive
* Optimizado para móvil

Paleta inicial:

* Blanco
* Dorado suave
* Negro
* Tonos pastel

Inspiración:

Sitios premium de bodas e invitaciones digitales.

---

# Estado actual

## Completado

* Dominio adquirido
* DNS configurado
* VPS configurado
* Nginx configurado
* SSL activo
* GitHub configurado
* Script de despliegue configurado
* Landing page inicial publicada

## Pendiente

* Diseño definitivo
* Timeline
* Blog
* RSVP
* Dashboard
* Google Maps
* Galería

## Identidad visual definida (Junio 2026)

Paleta aprobada por los novios:

* Verde Olivo
* Marfil (Ivory)
* Burgundy / Vino Profundo
* Champagne
* Dorado Suave

Concepto visual:

* Elegante
* Atemporal
* Romántico
* Femenino
* Sofisticado
* Natural
* Moderno

Inspiración visual:

* Invitaciones premium de boda
* Estilo europeo
* Follaje verde olivo
* Velas cálidas
* Detalles dorados discretos
* Diseño Mobile First

---

# Nota para futuras sesiones

Este proyecto se encuentra en producción desde sus primeras etapas.

Cualquier modificación debe realizarse en el repositorio Git y posteriormente desplegarse mediante:

```bash
git push
```

En el VPS:

```bash
cd /home/raulo/websites
./update-marayvictor.sh
```

Evitar modificaciones manuales directamente en:

```text
/var/www/marayvictor
```

ya que el contenido es sobrescrito durante cada despliegue.

---

Última actualización:

Junio 2026

Primer despliegue exitoso de https://marayvictor.com 💍


Última sesión completada:
Día 2

Estado:
Sitio funcional en desarrollo local.

Pendiente de despliegue:
Timeline Premium
Eventos
Galería
RSVP funcional

Próximo objetivo:
Diseñar sección de Eventos con identidad visual definitiva.
