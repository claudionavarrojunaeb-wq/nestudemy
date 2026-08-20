Informational responses (100–199)
Successful responses (200–299)
Redirection messages (300–399)
Client error responses (400–499)
Server error responses (500–599)

| Excepción de NestJS                | HTTP Status | Significado                |
| ---------------------------------- | ----------: | -------------------------- |
| `BadRequestException`              |     **400** | Bad Request                |
| `UnauthorizedException`            |     **401** | Unauthorized               |
| `NotFoundException`                |     **404** | Not Found                  |
| `ForbiddenException`               |     **403** | Forbidden                  |
| `NotAcceptableException`           |     **406** | Not Acceptable             |
| `RequestTimeoutException`          |     **408** | Request Timeout            |
| `ConflictException`                |     **409** | Conflict                   |
| `GoneException`                    |     **410** | Gone                       |
| `HttpVersionNotSupportedException` |     **505** | HTTP Version Not Supported |
| `PayloadTooLargeException`         |     **413** | Payload Too Large          |
| `UnsupportedMediaTypeException`    |     **415** | Unsupported Media Type     |
| `UnprocessableEntityException`     |     **422** | Unprocessable Entity       |
| `InternalServerErrorException`     |     **500** | Internal Server Error      |
| `NotImplementedException`          |     **501** | Not Implemented            |
| `ImATeapotException`               |     **418** | I'm a teapot 🫖            |
| `MethodNotAllowedException`        |     **405** | Method Not Allowed         |
| `BadGatewayException`              |     **502** | Bad Gateway                |
| `ServiceUnavailableException`      |     **503** | Service Unavailable        |
| `GatewayTimeoutException`          |     **504** | Gateway Timeout            |
| `PreconditionFailedException`      |     **412** | Precondition Failed        |

### Ordenados por código HTTP

|  Código | Excepción NestJS                   |
| ------: | ---------------------------------- |
| **400** | `BadRequestException`              |
| **401** | `UnauthorizedException`            |
| **403** | `ForbiddenException`               |
| **404** | `NotFoundException`                |
| **405** | `MethodNotAllowedException`        |
| **406** | `NotAcceptableException`           |
| **408** | `RequestTimeoutException`          |
| **409** | `ConflictException`                |
| **410** | `GoneException`                    |
| **412** | `PreconditionFailedException`      |
| **413** | `PayloadTooLargeException`         |
| **415** | `UnsupportedMediaTypeException`    |
| **418** | `ImATeapotException`               |
| **422** | `UnprocessableEntityException`     |
| **500** | `InternalServerErrorException`     |
| **501** | `NotImplementedException`          |
| **502** | `BadGatewayException`              |
| **503** | `ServiceUnavailableException`      |
| **504** | `GatewayTimeoutException`          |
| **505** | `HttpVersionNotSupportedException` |



### Códigos de estado HTTP

Los códigos HTTP se agrupan por su **primer dígito**:

|  Código | Nombre                | Significado                                      |
| ------: | --------------------- | ------------------------------------------------ |
| **1xx** | ℹ️ Informativos       | La petición fue recibida y está siendo procesada |
| **2xx** | ✅ Éxito               | La petición se procesó correctamente             |
| **3xx** | 🔀 Redirección        | Se necesita una acción adicional                 |
| **4xx** | ❌ Error del cliente   | La petición tiene algún problema                 |
| **5xx** | 💥 Error del servidor | El servidor no pudo procesar una petición válida |

### 1xx — Informativos

|  Código | Estado              | Significado                                                          |
| ------: | ------------------- | -------------------------------------------------------------------- |
| **100** | Continue            | El servidor recibió los headers y el cliente puede continuar         |
| **101** | Switching Protocols | El servidor acepta cambiar de protocolo                              |
| **102** | Processing          | La petición está siendo procesada                                    |
| **103** | Early Hints         | El servidor envía información preliminar antes de la respuesta final |

### 2xx — Éxito

|  Código | Estado                        | Significado                                              |
| ------: | ----------------------------- | -------------------------------------------------------- |
| **200** | OK                            | Petición exitosa                                         |
| **201** | Created                       | Se creó un recurso                                       |
| **202** | Accepted                      | Petición aceptada para procesamiento posterior           |
| **203** | Non-Authoritative Information | Información modificada/proveniente de otra fuente        |
| **204** | No Content                    | Éxito, pero no hay contenido que devolver                |
| **205** | Reset Content                 | Éxito; el cliente debería reiniciar/restablecer la vista |
| **206** | Partial Content               | Se devuelve solo una parte del recurso                   |
| **207** | Multi-Status                  | Varias operaciones tienen diferentes resultados          |
| **208** | Already Reported              | El recurso ya fue reportado                              |
| **226** | IM Used                       | La respuesta contiene modificaciones al recurso          |

### 3xx — Redirecciones

|  Código | Estado             | Significado                                       |
| ------: | ------------------ | ------------------------------------------------- |
| **300** | Multiple Choices   | Hay varias respuestas posibles                    |
| **301** | Moved Permanently  | El recurso cambió permanentemente de URL          |
| **302** | Found              | Redirección temporal                              |
| **303** | See Other          | El resultado está disponible en otra URL          |
| **304** | Not Modified       | El recurso no cambió; puede usarse la caché       |
| **305** | Use Proxy          | Debe utilizarse un proxy *(obsoleto)*             |
| **306** | Unused             | Código reservado/no utilizado                     |
| **307** | Temporary Redirect | Redirección temporal manteniendo el método HTTP   |
| **308** | Permanent Redirect | Redirección permanente manteniendo el método HTTP |

### 4xx — Errores del cliente

|  Código | Estado                          | Significado                                                 |
| ------: | ------------------------------- | ----------------------------------------------------------- |
| **400** | Bad Request                     | Petición mal formada o inválida                             |
| **401** | Unauthorized                    | Falta autenticación válida                                  |
| **402** | Payment Required                | Reservado para futuros usos relacionados con pagos          |
| **403** | Forbidden                       | El servidor entiende la petición pero **rechaza el acceso** |
| **404** | Not Found                       | El recurso no existe/no fue encontrado                      |
| **405** | Method Not Allowed              | El método HTTP no está permitido                            |
| **406** | Not Acceptable                  | El servidor no puede producir una respuesta aceptable       |
| **407** | Proxy Authentication Required   | Se requiere autenticación con el proxy                      |
| **408** | Request Timeout                 | La petición tardó demasiado                                 |
| **409** | Conflict                        | Conflicto con el estado actual del recurso                  |
| **410** | Gone                            | El recurso existió pero fue eliminado permanentemente       |
| **411** | Length Required                 | Falta `Content-Length`                                      |
| **412** | Precondition Failed             | No se cumplió una condición de la petición                  |
| **413** | Content Too Large               | El contenido enviado es demasiado grande                    |
| **414** | URI Too Long                    | La URI es demasiado larga                                   |
| **415** | Unsupported Media Type          | Formato/tipo de contenido no soportado                      |
| **416** | Range Not Satisfiable           | El rango solicitado no puede satisfacerse                   |
| **417** | Expectation Failed              | No se pudo cumplir `Expect`                                 |
| **418** | I'm a teapot 🫖                 | Código humorístico de RFC 2324                              |
| **421** | Misdirected Request             | La petición llegó a un servidor que no puede responderla    |
| **422** | Unprocessable Content           | Sintaxis válida, pero datos semánticamente inválidos        |
| **423** | Locked                          | El recurso está bloqueado                                   |
| **424** | Failed Dependency               | Falló una dependencia necesaria                             |
| **425** | Too Early                       | Riesgo de repetir una petición prematuramente               |
| **426** | Upgrade Required                | Se requiere cambiar/actualizar el protocolo                 |
| **428** | Precondition Required           | El servidor requiere una condición previa                   |
| **429** | Too Many Requests               | Demasiadas peticiones (**rate limiting**)                   |
| **431** | Request Header Fields Too Large | Los headers son demasiado grandes                           |
| **451** | Unavailable For Legal Reasons   | No disponible por motivos legales                           |

### 5xx — Errores del servidor

|  Código | Estado                          | Significado                                               |
| ------: | ------------------------------- | --------------------------------------------------------- |
| **500** | Internal Server Error           | Error interno genérico del servidor                       |
| **501** | Not Implemented                 | El servidor no implementa la funcionalidad solicitada     |
| **502** | Bad Gateway                     | Un servidor intermedio recibió una respuesta inválida     |
| **503** | Service Unavailable             | Servicio temporalmente no disponible                      |
| **504** | Gateway Timeout                 | Un servidor intermedio esperó demasiado por otro servidor |
| **505** | HTTP Version Not Supported      | Versión HTTP no soportada                                 |
| **506** | Variant Also Negotiates         | Error de negociación de contenido                         |
| **507** | Insufficient Storage            | No hay espacio suficiente para completar la operación     |
| **508** | Loop Detected                   | Se detectó un bucle durante el procesamiento              |
| **510** | Not Extended                    | Faltan extensiones necesarias                             |
| **511** | Network Authentication Required | Se requiere autenticación para acceder a la red           |

### Los que más vas a usar en REST / NestJS

|                        Código | Cuándo usarlo                                                     |
| ----------------------------: | ----------------------------------------------------------------- |
|                    **200 OK** | `GET` exitoso, o `PUT/PATCH` exitoso con respuesta                |
|               **201 Created** | `POST` que crea un recurso                                        |
|            **204 No Content** | `DELETE` exitoso sin cuerpo de respuesta                          |
|           **400 Bad Request** | Datos de entrada inválidos                                        |
|          **401 Unauthorized** | Usuario no autenticado / JWT inválido o ausente                   |
|             **403 Forbidden** | Usuario autenticado pero sin permisos                             |
|             **404 Not Found** | Recurso solicitado no existe                                      |
|              **409 Conflict** | Conflicto, por ejemplo email/username duplicado                   |
| **422 Unprocessable Content** | Datos bien formados pero inválidos semánticamente                 |
|     **429 Too Many Requests** | Rate limit excedido                                               |
| **500 Internal Server Error** | Error inesperado del backend                                      |
|           **502 Bad Gateway** | API Gateway/proxy recibió una respuesta inválida de otro servicio |
|   **503 Service Unavailable** | Servicio temporalmente caído/no disponible                        |
|       **504 Gateway Timeout** | Otro servicio tardó demasiado en responder                        |

**Ojo con `401` vs `403`:**

```text
401 → "¿Quién eres?"
      No estás autenticado.

403 → "Sé quién eres, pero no puedes hacer esto."
      Estás autenticado, pero no tienes autorización.
```

En una arquitectura **NestJS + API Gateway + microservicios**, esta diferencia es especialmente importante.
