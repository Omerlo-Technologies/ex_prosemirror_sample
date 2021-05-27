# ExProsemirrorSample

Sample application to test [`ExProsemirror`](https://github.com/Omerlo-Technologies/ex_prosemirror) in development.

In order to use this project, read the [`Installation`](#installation) chapter.

## Installation

1. Close this repo

``` sh
git clone git@github.com:Omerlo-Technologies/ex_prosemirror_sample.git
```


2. Initialize git submodule

``` sh
git submodule init
git submodule update
```

3. Install assets

``` sh
cd apps/ex_prosemirror_sample/assets
npm i
```

## Run the app

Go root path and execute `iex -S mix phx.server`.

It will start phoenix from this `ex_prosemirror_sample` app and use the lib `ex_prosemirror` from umbrella.

## Need help?

Contact Alexandre Lepretre (matsa59).
