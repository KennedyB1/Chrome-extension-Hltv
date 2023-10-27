const tryClickingDiv = () => {
   let divToClick = document.querySelector('.pro-mode-toggle.promode-disabled');

   if (divToClick) {
      console.log('Activating Sports mode');
      divToClick.click();
      observer.disconnect();
   }
};

if (document.readyState === "complete" ||
   document.readyState === "loaded" ||
   document.readyState === "interactive") {
   tryClickingDiv();
}

const observer = new MutationObserver(tryClickingDiv);
observer.observe(document.body, { childList: true, subtree: true });
