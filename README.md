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
$ udebug desc 100    #Nota: udebug d 100 -> Usando atajo
┌─────┬────────┬────────────────────┬───────┬────────┐
│ pid │ number │ title              │ limit │ status │
├─────┼────────┼────────────────────┼───────┼────────┤
│ 36  │ 100    │ The 3n + 1 problem │ 3000  │ 1      │
└─────┴────────┴────────────────────┴───────┴────────┘
```

## Consultar mis envíos
Consulte el listado de envíos realizados por un usuario determinado.

```bash
# 706667 es el ID del usuario registrado en UVA Judge.
$ udebug submissions 706667
┌──────────────┬─────────────────────────┐
│ name         │ user name               │
├──────────────┼─────────────────────────┤
│ Julian David │ anlijudavid@hotmail.com │
└──────────────┴─────────────────────────┘
┌───────────┬─────────┬───────────┬──────┬───────┬──────────────────────────┐
│ Reference │ problem │ result    │ time │ code  │ date                     │
├───────────┼─────────┼───────────┼──────┼───────┼──────────────────────────┤
│ 17787180  │ 2253    │ Accepted  │ 0    │ c++11 │ Thu Aug 04 2016 13:34:37 │
├───────────┼─────────┼───────────┼──────┼───────┼──────────────────────────┤
│ 18144493  │ 3666    │ Accepted  │ 170  │ java  │ Sat Oct 08 2016 11:18:18 │
└───────────┴─────────┴───────────┴──────┴───────┴──────────────────────────┘
...
```

## Casos de prueba
Consulte los casos de prueba disponibles para un ejercicio determinado:

```
$ udebug cs 100
┌───┬────────┬────────┬───────┬───────────┬───────┐
│ # │ Number │ DataID │ User  │ Date      │ Votes │
├───┼────────┼────────┼───────┼───────────┼───────┤
│ 5 │ 3      │ 821829 │ Ryuuk │ Fri Jan … │ 3     │
└───┴────────┴────────┴───────┴───────────┴───────┘
Case  5  by  Ryuuk :
2 1596        ┐
99 9999       │
1 1999        │
340 30100     │
5 6           │= Estos son los casos
7 10          │
1 98746       │
9999 9998     ┘
                  
...
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

### Comando de ayuda
```bash
$ udebug help <comando>

# Ejemplo:
$ udebug help submissions
```