import http from "k6/http";
import { sleep } from "k6";

export const options = {
  iterations: 10,
};

export default function () {
  http.get("http://localhost:7878");

  // Sleep for 1 second to simulate real-world usage
  sleep(1);
}
