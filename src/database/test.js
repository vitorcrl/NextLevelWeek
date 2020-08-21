const DataBase = require("./db");
const createProffy = require("./createProffy");

DataBase.then(async (db) => {
  // inserir dados
  proffyValue = {
    name: "Vitor Carlos de Souza",
    avatar: "https://avatars3.githubusercontent.com/u/47866987?s=200&v=4",
    whatsapp: "13991469479",
    bio:
      "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por umadas minhas explosões.",
  };
  classValue = {
    subject: 1,
    cost: "20",
    //o proff id vira pelo banco de dados
  };
  classScheduleValues = [
    //class id vira pelo banco de dados
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220,
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220,
    },
  ];
  // await createProffy(db, { proffyValue, classValue, classScheduleValues });

  //consultar dados inseridos
  //todos os proffys
  const selectedProffys = await db.all("SELECT* FROM proffys");
  // console.log(selectedProffys);

  //consultar as classes de um determinado professor
  //e trazer os seus dados
  const selectClassesAndProffys = await db.all(`
         SELECT classes.*, proffys.*
         FROM proffys
         JOIN classes ON (classes.proffy_id = proffys.id)
         WHERE classes.proffy_id = 1;
     `);
  // console.log(selectClassesAndProffys);

  // o horario que a pessoa trabalha, e das 8h as 18h
  // o horario do time_from e 8h, precisa ser menor ou igual o horario solicitado
  // o time_to precisa ser acima
  const selectClassesSchedules = await db.all(`
  SELECT class_schedule.*
  FROM class_schedule
  WHERE class_schedule.class_id = "1"
  AND class_schedule.weekday = "0"
  AND class_schedule.time_from <= "520"
  AND class_schedule.time_to > "520"
  `);

  //  console.log(selectClassesSchedules);
});
