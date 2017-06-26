var WorkerPool = require("../../index");

if (process.isWorker) {
  console.log(process.pid, process.isWorker, "hello world");
}
else {
  var workerPool = new WorkerPool(__filename);
  workerPool.stop(); // Stop worker pool so that parent process can exit gracefully.
}
