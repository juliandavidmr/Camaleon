# Camaleon

[![Greenkeeper badge](https://badges.greenkeeper.io/juliandavidmr/Camaleon.svg)](https://greenkeeper.io/)

## [**Documentación en Español**](./docs/es.md)

**Camaleon** is a multiplatform installable module, available for Linux, Windows and Mac OS. Quickly obtain, view and test exercises developed in C++ and Java. camaleon uses the V8 engine Google, so you need to install NodeJS.
For more information see [udebug](https://www.udebug.com) and [UVA](https://uva.onlinejudge.org)

## Features

- [x] Problem information
- [x] List of shipments per user
- [x] Test cases for any exercise
- [x] Compilation of C ++ code
- [x] Compilation of Java code
- [ ] Compilation of code C
- [ ] Performance Analysis
- [ ] Analysis of test cases

## Installation

```bash
$ [sudo] npm install -g camaleon
...

$ camaleon -h
```

## Information of an exercise
camaleon provides access basic information of an exercise. The data are provided by uhunt and camaleon.

```bash
# shortcut: camaleon d 100
$ camaleon desc 100
┌─────┬────────┬────────────────────┬───────┬────────┐
│ pid │ number │ title              │ limit │ status │
├─────┼────────┼────────────────────┼───────┼────────┤
│ 36  │ 100    │ The 3n + 1 problem │ 3000  │ 1      │
└─────┴────────┴────────────────────┴───────┴────────┘
```

## Submissions
Consult list of shipments made by a particular user.

```bash
# 706667 is the user ID of uva.
# shortcut: camaleon sb 706667
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

## Test cases
Obtain all test cases available for a given exercise:

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


## Compile code

### Cpp
```bash
$ camaleon c hello.cpp         #=> Shortcut
$ camaleon compile hello.cpp
```

### Java
```bash
$ camaleon c hello.java        #=> Shortcut
$ camaleon compile hello.java
```

### Directory specific
```bash
$ camaleon c folder/hello.cpp
$ camaleon c folder/hello.java
```

### Command help
```bash
$ camaleon help <comando>

# Example:
$ camaleon help submissions
```

**Note:** If the file name contains spaces then use double quotes to specify the file name:
```bash
$ camaleon c "folder/file name.cpp"
```

-----


## Contributing

Camaleon is an open source project. See [CONTRIBUTING](./docs/CONTRIBUTING.md) for details.

## LICENSE

This module is released under the [MIT License] license. @juliandavidmr