const createPerson = (name, position, desc, male) => {
  const maleIcon = "../img/icons/male.png";
  const femaleIcon = "../img/icons/female.png";
  const div = document.createElement("div");
  div.classList.add("col-md-3", "col-sm-5");
  div.innerHTML = `
        <div class="thumbnail">
          <img src=${
            male ? maleIcon : femaleIcon
          } class="rounded-circle" style="height: 280px; width: 280px;" alt="" />
          <div class="caption">
            <h5>${name}</h5>
            <p>${position}</p>
            <p class="member-detail" style="font-family: 'Courier New'">
              ${desc}
            </p>
          </div>
        </div>`;
  return div;
};

const sayHello = () => {
  console.log("hi");
};
