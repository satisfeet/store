# satisfeet-store

![screenshot](https://user-images.githubusercontent.com/1780466/46574886-21e44a00-c9ab-11e8-8757-d82b23f32bd0.png)

The node.js powered web application store for satisfeet.

## Installation

Clone the repository:

```
git clone https://github.com/bodokaiser/satisfeet-store.git
```

Install dependencies:

```
npm install
```
  
Load data:

```
make data-create
```

Create directories:

```
mkdir -p srv/stylesheets srv/javascripts
```

Start server:

```
npm start
```

You will get a lot deprecation warning. The initial code from 2014 does not
work anymore due to npm package changes.
