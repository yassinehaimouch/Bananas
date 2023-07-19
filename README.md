### Setup

Runtime requirements

- ruby 3.2.2
- nodejs 18.14.0

We use [asdf](https://github.com/asdf-vm/asdf) to manage runtime dependencies. You can skip this step if you manage it on your own.

```
asdf install
```

Next, install the app dependencies:

```
bundle
yarn
```

### Running the app

A few processes are required to serve the app and compile the JS and CSS assets. These scripts are defined in the `Procfile`. You can either run them manually in the terminal or use [foreman](https://github.com/ddollar/foreman) or [overmind](https://github.com/DarthSim/overmind) to simplify the execution:

```
PORT=3000 overmind start
```

Navigate to http://127.0.0.1:3000 to see the application running.
