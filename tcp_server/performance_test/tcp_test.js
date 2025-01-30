import tcp from "k6/x/tcp";
import { check } from "k6";

const conn = tcp.connect("0.0.0.0:7878");

export const options = {
  scenarios: {
    contacts: {
      executor: "constant-vus",
      vus: 1,
      duration: "10s",
      gracefulStop: "0s",
    },
  },
};

export default function () {
  tcp.writeLn(conn, "Test");
  let res = String.fromCharCode(...tcp.read(conn, 1024));
  check(res, {
    "verify 200": (res) => res.includes("200 OK"),
  });
  tcp.close(conn);
}
