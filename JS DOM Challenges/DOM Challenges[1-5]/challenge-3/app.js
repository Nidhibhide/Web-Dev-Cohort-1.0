const JsObj = [
  {
    input: "nameInput",
    output: "nameDisplay",
  },
  {
    input: "jobInput",
    output: "jobDisplay",
  },
  {
    input: "ageInput",
    output: "ageDisplay",
  },

  {
    input: "bioInput",
    output: "bioDisplay",
  },
];

JsObj.forEach(({ input, output }) => {
  let Input = document.getElementById(input);
  let Output = document.getElementById(output);

  Input.addEventListener("input", () => {
    Output.innerText = `${Input.value}`;
  });
});
