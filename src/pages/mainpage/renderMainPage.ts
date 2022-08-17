import { mainPageTemplate } from "./template";


export function renderMainPage() {
    const $app = document.querySelector('.app');
  
    $app.innerHTML = mainPageTemplate;
};