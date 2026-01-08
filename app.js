const url = "https://pokeapi.co/api/v2/pokemon/ditto";

const request = new XMLHttpRequest();
request.open("GET", url);
request.addEventListener("load", function () {
  if (this.status >= 200 && this.status < 300) {
    const { abilities } = JSON.parse(this.responseText);
    const abilityUrl = abilities[0]?.ability?.url;

    const request2 = new XMLHttpRequest();
    request2.open("GET", abilityUrl);
    request2.addEventListener("load", function () {
      if (this.status >= 200 && this.status < 300) {
        const { effect_entries } = JSON.parse(this.responseText);
        const desciption = effect_entries.find(
          (item) => item.language.name === "en"
        );
        console.log(desciption.effect);
      }
    });
    request2.send();
  }
});

request.send();
