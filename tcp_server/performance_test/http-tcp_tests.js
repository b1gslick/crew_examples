import http from "k6/http";
import { sleep, check } from "k6";

export const options = {
  iterations: 10,
};

export default function () {
  const resp = http.get("http://localhost:7878");

  check(resp, {
    "verify 200": (res) => res.status === 200,
    "verify ms": (res) => res.timings.duration < 10.0,
  });
  // Sleep for 1 second to simulate real-world usage
  sleep(1);
}
