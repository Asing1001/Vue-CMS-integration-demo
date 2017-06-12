import Vue from "vue";

Vue.directive("demo-widget", {
  bind: async (element, binding) => {
    const res = await fetch(
      "https://jdata.azurewebsites.net/api/files/FoodItem.json"
    );
    const data = await res.json();
    element.innerHTML =
      "<h4>Hi I'm v-demo-widget, this is data I load : </h4>" +
      data.map(({ imgUrl, name }) => {
        return `<div style="display:inline-block;width:150px"><span>${name}</span><img width="150px" height="150px" src="${imgUrl}" alt=""/></div>`;
      });
  }
});

const dataUrl = "https://jdata.azurewebsites.net/api/files/cmsdemo.json";
Vue.component("cms-subscriber", async (resolve, reject) => {
  const res = await fetch(dataUrl);
  document.querySelector(".spinner").style.display = "none";
  const data = await res.json();
  resolve({
    template: `<div style="padding:1em">
                <h3>Content load from : <a href="${dataUrl}">${dataUrl}</a></h3>
                <h3>The content is ...</h3>
                <div style="padding:1em">${data.content}</div>
              </div>`
  });
});

new Vue({
  el: "#app"
});
