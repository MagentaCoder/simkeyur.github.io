window.onload = () => {
    'use strict';

    let installable = true;
    if (!('serviceWorker' in navigator)){
      installable = false;
    }

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js');
    }
    
    let installButton = document.createElement('button');
    let prompt;
    window.addEventListener('beforeinstallprompt', function(e){
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      prompt = e;
    });

    installButton.addEventListener('click', function(){
       prompt.prompt();
    })

    window.addEventListener('appinstalled', async function(e) {
       installButton.style.display = "none";
    });
    
}



