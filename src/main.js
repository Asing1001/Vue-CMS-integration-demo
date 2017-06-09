import Vue from 'vue'

Vue.directive('demo-widget', {
  bind: async (element, binding) => {
    const res = await fetch('https://jdata.azurewebsites.net/api/files/FoodItem.json');
    const data = await res.json();
    element.innerHTML = data.map(({ imgUrl, name }) => {
      return `<div style="display:inline-block;width:150px"><span>${name}</span><img width="150px" height="150px" src="${imgUrl}" alt=""/></div>`
    })
  }
})

const dataUrl = 'https://jdata.azurewebsites.net/api/files/cmsdemo.json';
Vue.component('cms-subscriber', async (resolve, reject) => {
  const res = await fetch(dataUrl);
  const data = await res.json();
  resolve({
    template: `<div>
                <h3>Content load from : <a href="${dataUrl}">${dataUrl}</a></h3>
                <h3>Content is :</h3>
                ${data.content}
              </div>`,
  })
})

new Vue({
  el: '#app',
})