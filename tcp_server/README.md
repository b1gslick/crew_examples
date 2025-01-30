# Into

This simple example for show how to simple write performance testing for TCP/HTTP
with k6 tools

## Run App

- [install rust](https://www.rust-lang.org/tools/install)

```bash
- cargo run
```

## Run test

- [install k6](https://grafana.com/docs/k6/latest/get-started/running-k6/)

```bash
- k6 run performance_test/tcp_tests.js
```

## For clean tcp

- install xk6

```bash
go install go.k6.io/xk6/cmd/xk6@latest

xk6 build master \
  --with github.com/NAlexandrov/xk6-tcp
```
