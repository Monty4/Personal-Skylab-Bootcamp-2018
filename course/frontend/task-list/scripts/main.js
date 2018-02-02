document.getElementsByTagName('form')[0].addEventListener('submit', function(e){
    e.preventDefault();

    var doc = document;
    var qs = doc.querySelector.bind(document); // Pasamos los argumentos al objeto original(document) para poder verlos
    
    var titleInput = qs('input[type="text"]');

    var title = titleInput.value;
    
    var list = qs('ul');

    var item = doc.createElement('li');
    

    //var itemConten = doc.createTextNode(title);
    //item.appendChild(itemConten);

    var itemContent = item.innerHTML = title + '<a href="#"></a>';
    
    console.log(list.appendChild(item));

    titleInput.value = '';
    
    console.log('submmit captured!', title);
})

// https://javascript.info/bubbling-and-capturing
