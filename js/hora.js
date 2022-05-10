let getDate = () => {
  return (
    new Date().getUTCDate() +
    "/" +
    new Date().getMonth() +
    1 +
    "/" +
    new Date().getDay()
  );
};

let getHours = () => {
  return (
    new Date().getHours() +
    ":" +
    new Date().getMinutes() +
    ":" +
    new Date().getSeconds()
  );
};

let getReloj = () => {
  setInterval(() => {
    document.write(`<h3>Hoy es ${getDate()} y la hora es ${getHours()}</h3>`);
  }, 1000);
};
