function getvalue() {
  let ADDdetail = [];

  let user = {
    img: prompt("enter ad src"),
    price: prompt("enter ad price"),
    descript: prompt("enter ad Description")
  };

  ADDdetail.push(user);

  ADDdetail.forEach(Add => {
    let ADDbox = document.createElement("div");
    ADDbox.className = "adbox";
    container.appendChild(ADDbox);

    let ADDimg = document.createElement("img");
    ADDimg.className = "imgContainer > img";
    ADDimg.src = Add.img;
    ADDbox.appendChild(ADDimg);

    let ADDdesc = document.createElement("a");
    ADDdesc.className = "desciption";
    ADDdesc.innerText = Add.descript;
    ADDbox.appendChild(ADDdesc);

    let ADDprice = document.createElement("h3");
    ADDprice.className = "price";
    ADDprice.innerText = "$ " + Add.price;
    ADDbox.appendChild(ADDprice);

    let ADDbtn = document.createElement("a");
    ADDbtn.className = "btn";
    ADDbtn.innerText = "Add to craft";
    ADDbox.appendChild(ADDbtn);
  });
}
