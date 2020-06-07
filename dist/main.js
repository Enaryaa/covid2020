(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('riot')) :
  typeof define === 'function' && define.amd ? define(['riot'], factory) :
  (global = global || self, factory(global.riot));
}(this, (function (riot) { 'use strict';

  const name = 'cou';

  var App = {
    'css': `app,[is="app"]{ --riot-color: #f04; } app h1,[is="app"] h1{ color: var(--riot-color); border-bottom: 1px solid var(--riot-color); }`,

    'exports': {
      title: `Hello ${ name }!`,

      onMounted(props, state) {
        console.log('HELLO');
        this.getData();
      },

      getData(){
        console.log(api.getAllRoutes());
      }
    },

    'template': function(template, expressionTypes, bindingTypes, getComponent) {
      return template('<h1 expr13="expr13"> </h1><p>Le covid19</p>', [{
        'redundantAttribute': 'expr13',
        'selector': '[expr13]',

        'expressions': [{
          'type': expressionTypes.TEXT,
          'childNodeIndex': 0,

          'evaluate': function(scope) {
            return scope.title;
          }
        }]
      }]);
    },

    'name': 'app'
  };

  riot.component(App)(document.getElementById('root'));

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC5yaW90IiwiLi4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiPGFwcD5cbiAgPGgxPnsgdGl0bGUgfTwvaDE+XG4gIDxwPkxlIGNvdmlkMTk8L3A+XG5cblxuICA8c2NyaXB0PlxuICAgIGNvbnN0IG5hbWUgPSAnY291J1xuICAgIFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIHRpdGxlOiBgSGVsbG8gJHsgbmFtZSB9IWAsXG4gICAgICBvbk1vdW50ZWQocHJvcHMsIHN0YXRlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdIRUxMTycpXG4gICAgICAgIHRoaXMuZ2V0RGF0YSgpO1xuICAgICAgfSxcbiAgICAgIGdldERhdGEoKXtcbiAgICAgICAgY29uc29sZS5sb2coYXBpLmdldEFsbFJvdXRlcygpKVxuICAgICAgfVxuICAgIH1cbiAgPC9zY3JpcHQ+XG5cblxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgLS1yaW90LWNvbG9yOiAjZjA0O1xuICAgIH1cblxuICAgIGgxIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1yaW90LWNvbG9yKTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1yaW90LWNvbG9yKTtcbiAgICB9XG4gIDwvc3R5bGU+XG48L2FwcD5cbiIsImltcG9ydCB7Y29tcG9uZW50fSBmcm9tICdyaW90J1xuaW1wb3J0IEFwcCBmcm9tICcuL2FwcC5yaW90J1xuXG5jb21wb25lbnQoQXBwKShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKSJdLCJuYW1lcyI6WyJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztFQU1JLE1BQU0sT0FBTzs7Ozs7O01BR1gsS0FBSyxFQUFFLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzs7TUFDeEIsU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPO1FBQ25CLElBQUksQ0FBQyxPQUFPLEVBQUU7OztNQUVoQixPQUFPLEVBQUU7UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUU7Ozs7Ozs7Ozs7Ozs7O3lCQWQ5Qjs7Ozs7Ozs7O0FDRVJBLGdCQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7Ozs7In0=
