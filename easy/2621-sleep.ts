const sleep = async function (millis: number): Promise<void> {
  return new Promise(function (res) {
    setTimeout(() => res(), millis);
  });
};
