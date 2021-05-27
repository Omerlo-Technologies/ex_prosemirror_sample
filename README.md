# ExProsemirrorSample

Sample application to test [`ExProsemirror`](https://github.com/Omerlo-Technologies/ex_prosemirror) in development.

In order to use this project, read the [`Installation`](#installation) chapter.

## Requirements

- Elixir `1.11`
- Erlang `23.3`
- Node `14.16`

## Installation

1. Close this repo

``` sh
git clone git@github.com:Omerlo-Technologies/ex_prosemirror_sample.git
```


2. Initialize git submodule

``` sh
git submodule update --init
```

3. Install Elixir dependencies

```sh
mix deps.get
```

4. Install assets

``` sh
npm i --prefix apps/ex_prosemirror_sample/assets
```

## Run the app

Go root path and execute `iex -S mix phx.server`.

It will start phoenix from this `ex_prosemirror_sample` app and use the lib `ex_prosemirror` from umbrella.

## Need help?

Contact Alexandre Lepretre (matsa59).
