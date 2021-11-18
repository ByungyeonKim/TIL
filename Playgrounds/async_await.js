const delay = (num) => {
  const time = num * 1000;
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(console.log(num)), time);
  });
};

async function run() {
  console.log(1);
  delay(3);
  console.log(2);
}

run();
