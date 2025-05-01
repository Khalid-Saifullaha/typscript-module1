{
  // const poorUser={
  //     name: 'Mr. X'
  // }

  // spread operator
  // rest oprator
  // destructuring

  //learn spread operatoe

  const bros1: string[] = ["Mir", "Firoz", "Mizan"];

  const bros2: string[] = ["Tanmoy", "Nahid", "Rahat"];
  bros1.push(...bros2);

  const mentors1 = {
    typescript: "Mezba",

    redux: "Mir",

    dbms: "Mizan",
  };
  const mentors2 = { prisma: "Firoz", next: "Tanmoy", cloud: "Nahid" };
}
