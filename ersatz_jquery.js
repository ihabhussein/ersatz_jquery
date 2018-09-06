let $ = a => {
    if (typeof a == 'function') return window.addEventListener('load', a);

    let _ = (typeof a == 'string')? document.querySelectorAll(a): a;
    return {
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
    };
};
