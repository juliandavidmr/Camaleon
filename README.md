# uDebug

[**English** (In progress)](./docs/en.md)

uDebug es un módulo instalable multiplataforma, disponible para Linux, Windows y Mac OS.
Permite obtener, visualizar y probar rápidamente ejercicios desarrollados en C++ y Java. *uDebug* corre bajo el motor V8 de Google, por lo tanto es necesario instalar [NodeJS](https://nodejs.org/es) para su ejecución.

## Instalación

### Aún está en proceso de desarrollo, por lo tanto no se encuentra publicado en npm.

```bash
$ [sudo] npm install -g udebug
...

$ udebug -h
# Muestra la ayuda
```

## Consultar información de ejercicio
Udebug permite consultar la información basica de un enunciado. Los datos provienen directamente de UVA Judge y uHunt.

```bash
$ udebug desc 100
$ udebug d 100    #=> Usando atajo
# Donde 100 es el numero del ejercicio según UVA Judge
```

## Consultar mis envíos
Consulte el listado de envíos realizados por un usuario determinado.

```bash
$ udebug submissions 706667
$ udebug s 706667    #=> Usando atajo
# Donde 706667 es el ID del usuario registrado en UVA Judge.
```


## Compilar código

### Cpp
```bash
$ udebug c hola.cpp         #=> Atajo
$ udebug compile hola.cpp
```

### Java
```bash
$ udebug c hola.java        #=> Atajo
$ udebug compile hola.java
```

### Especificar directorio
```bash
$ udebug c carpeta/hola.cpp
$ udebug c carpeta/hola.java
```