(function() {
    var elements;
    var headerElements
    var windowHeight;
  
    function init() {
        elements = document.querySelectorAll('.fade-in-hidden');
        headerElements = document.querySelectorAll('.fade-in-left-hidden');
        windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
        for (var i = 0; i < headerElements.length; i++) {
            var headerElement = headerElements[i];
            var positionFromTop = headerElements[i].getBoundingClientRect().top;
    
            if (positionFromTop - windowHeight <= 0) {
                headerElement.classList.add('fade-in-left-elem');
                headerElement.classList.remove('fade-in-left-hidden');
            }
        }

        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var positionFromTop = elements[i].getBoundingClientRect().top;
    
            if (positionFromTop - windowHeight <= 0) {
                element.classList.add('fade-in-elem');
                element.classList.remove('fade-in-hidden');
            }
        }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
  })();