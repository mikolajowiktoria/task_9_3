var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';

var dinosaur = 'triceratops';

var dinosaurUpperCased = dinosaur.toUpperCase();

var textAfter = text.replace('Velociraptor', dinosaurUpperCased);

console.log(text.length/2);

var partOfText = textAfter.slice(0, text.length/2);

console.log(partOfText); 