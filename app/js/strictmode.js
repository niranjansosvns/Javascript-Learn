function strict1(str) {
    'use strict';
    return eval(str); // str will be treated as strict mode code
  }
  function strict2(f, str) {
    'use strict';
    return f(str); // not eval(...): str is strict if and only
                   // if it invokes strict mode
  }
  function nonstrict(str) {
    return eval(str); // str is strict if and only 
                      // if it invokes strict mode
  }
  
  strict1("'Strict mode code!'");
  strict1("'use strict'; 'Strict mode code!'");
  strict2(eval, "'Non-strict code.'");
  strict2(eval, "'use strict'; 'Strict mode code!'");
  nonstrict("'Non-strict code.'");
  nonstrict("'use strict'; 'Strict mode code!'");