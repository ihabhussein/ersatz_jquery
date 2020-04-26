let $ = a => {
    if (typeof a == 'function') return window.addEventListener('load', a);

    let _ = (typeof a == 'string')? document.querySelectorAll(a): a;
    return new Proxy({
        on: (ev, cb) => {
            _.forEach(el => el.addEventListener(ev, cb));
            return $(_);
        },

        show: () => {
            _.forEach(el => el.style.display = '');
            return $(_);
        },

        hide: () => {
            _.forEach(el => el.style.display = 'none');
            return $(_);
        },

        css: (k, v) => {
            if (typeof k == 'undefined') return _[0].style;
            if (typeof v == 'undefined') return _[0].style[k];
            _.forEach(el => el.style[k] = v);
            return $(_);
        },

        prop: (p, v) => {
            if (typeof p == 'undefined') return $(_);
            if (typeof v == 'undefined') return $(_);
            _.forEach(el => v === false? el.removeAttribute(p): el.setAttribute(p, v));
            return $(_);
        },

        text: v => {
            if (typeof v == 'undefined') return _[0].innerText;
            _.forEach(el => el.innerText = v);
            return $(_);
        },

        html: v => {
            if (typeof v == 'undefined') return _[0].innerHTML;
            _.forEach(el => el.innerHTML = v);
            return $(_);
        },

        val: v => {
            if (typeof v == 'undefined') return _[0].value;
            _.forEach(el, el.value = v);
            return $(_);
        },

        _apply: p => {
            if (typeof _[0][p] === 'function') {
                return function() {
                    _.forEach(el => el[p](...arguments));
                    return $(_);
                }
            } else {
                return _[0][p];
            }
        },
    }, {
        get: (obj, prop) => {
            return prop in obj? obj[prop]: obj._apply(prop);
        }
    });
};
