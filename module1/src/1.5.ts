// Reference Type --> Object

const user: {
  //   company: "Programming Hero"; //type--> literal types
  readonly company: "Programming Hero";
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarried: boolean;
} = {
  company: "Programming Hero",
  firstName: "Khalid",
  lastName: "Saifullaha",
  isMarried: true,
};

// user.company='Ph'
