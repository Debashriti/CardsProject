

describe('angularjs homepage todo list', function() {
    it('welcome to magic world', function() {
      browser.get('http://localhost:2020');
      var deckOfCards = element.all(by.xpath('//app-cards'));
     element(by.name('shuffle')).click();
     var shuffledCards = element.all(by.xpath('//app-cards'));
     expect(shuffledCards).not.toEqual(deckOfCards);
  
     element(by.name('count')).sendKeys('5');
     element(by.name('draw')).click();
     var count = element(by.name('count'));

    for (var i= 52; i>52-count, i--;){
        expect(element(by.xpath('//app-cards[i]')));

    }

     element(by.name('sort')).click();
     element(by.name('reset')).click();
     var cardsafterReset =  element.all(by.xpath('//app-cards'));
     expect(cardsafterReset.count()).toEqual(52);

     

    
         }); 
  });
  
  