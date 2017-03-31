# Camaleon

**Camaleon** es un módulo instalable multiplataforma, disponible para Linux, Windows y Mac OS.
Permite obtener, visualizar y probar rápidamente ejercicios desarrollados en C++ y Java. *camaleon* corre bajo el motor V8 de Google, por lo tanto es necesario instalar [NodeJS](https://nodejs.org/es) para su ejecución. Para mas información ver [udebug](https://www.udebug.com) and [UVA](https://uva.onlinejudge.org)

## Caracteristicas

- [x] Información de un problema
- [x] Listado de envíos realizados por usuario
- [x] Casos de prueba para cualquier ejercicio
- [x] Compilacion de codigo C++
- [x] Compilacion de codigo Java
- [ ] Compilacion de codigo C
- [ ] Analisis de rendimiento
- [ ] Analisis de casos de prueba

## Instalación

```bash
$ [sudo] npm install -g camaleon
...

$ camaleon -h
# Muestra la ayuda
```

## Consultar información de ejercicio
camaleon permite consultar la información basica de un enunciado. Los datos provienen directamente de UVA Judge y uHunt.

```bash
# Atajo: camaleon d 100
$ camaleon desc 100
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
# Atajo: camaleon sb 123
$ camaleon submissions 706667
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
$ camaleon cs 100
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
$ camaleon c hola.cpp         #=> Atajo
$ camaleon compile hola.cpp
```

### Java
```bash
$ camaleon c hola.java        #=> Atajo
$ camaleon compile hola.java
```

### Especificar directorio
```bash
$ camaleon c carpeta/hola.cpp
$ camaleon c carpeta/hola.java
```

### Comando de ayuda
```bash
$ camaleon help <comando>

# Ejemplo:
$ camaleon help submissions
```

**Nota:** Si el nombre del archivo contiene espacios entonces usar comillas dobles para especificar el nombre del archivo:
```bash
$ camaleon c "carpeta/nombre archivo.cpp"
```


## Probar código **[Aún en desarrollo y no disponible en npm]**
Verifique que el código cumpla con los casos de salida de ejemplo en [camaleon](https://www.camaleon.com/):

```bash
$ camaleon test examples/100.cpp
#=> Resultados de la prueba

```

### Contributing

Camaleon is an open source project. See [CONTRIBUTING](./docs/CONTRIBUTING.md) for details.

### LICENSE

This module is released under the [MIT License] license. @juliandavidmr