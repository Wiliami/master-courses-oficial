//setup crossroads
crossroads.addRoute('/views/index.html')

crossroads.addRoute('logout', function() {
    
});


function getPages() {
    document.querySelector('');
}
    
//setup hasher
function parseHash(newHash, oldHash) {
    crossroads.parse(newHash);
}
hasher.initialized.add(parseHash); //parse initial hash
hasher.changed.add(parseHash); //parse hash changes
hasher.init(); //start listening for history change
    
//update URL fragment generating new history record
hasher.setHash('404.html');