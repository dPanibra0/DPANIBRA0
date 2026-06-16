---
title: ¿Mainframe sigue vivo?
description: Mi primera impresión sobre COBOL, IBM Z y por qué el mainframe sigue siendo relevante en la actualidad.
publishDate: 2026-06-27
tag: MAINFRAME
draft: false
cover:
  src: https://mhlzixj98t0wnclm.public.blob.vercel-storage.com/blog/realidad-detras-de-cobol-e-ibm-z.jpg
  alt: Imagen editorial de procesos y observabilidad operativa
---
Arquitectura hexagonal y clean architecture no son un fin en sí mismo. Sirven cuando el dominio necesita protección frente a cambios frecuentes en transporte, persistencia o integraciones externas.

## Lo que resuelven bien

Separar reglas de negocio de frameworks y adaptadores permite que el core del sistema evolucione con menos fricción. Esa separación mejora tres cosas:

- pruebas más directas sobre casos de uso,
- reemplazo más seguro de integraciones,
- y contratos más claros entre dominio, aplicación e infraestructura.

En contextos enterprise, donde un servicio suele vivir años y conectarse con varias plataformas, esa claridad termina pagando dividendos operativos.

## El costo real

No es una decisión gratis. Aparecen más capas, interfaces, ensamblaje y disciplina técnica. En equipos pequeños o productos muy tempranos, ese costo puede sentirse como velocidad perdida.

Por eso conviene evitar el reflejo de sobrearquitecturar todo. Un flujo simple no necesita la misma sofisticación que un módulo financiero o una integración crítica.

## Cuando compensa

Suele compensar en módulos donde hay al menos una de estas condiciones:

- reglas de negocio sensibles,
- varias integraciones externas,
- necesidad de testing estable en el tiempo,
- o alta probabilidad de cambio en persistencia y contratos.

En esos casos, el esfuerzo inicial deja de ser ceremonial y pasa a ser una inversión en mantenibilidad.

## Cierre

La clave no es aplicar hexagonal en todo el sistema. La clave es usarla donde el negocio necesita margen para evolucionar sin reescribir cada vez que cambia un adaptador.
