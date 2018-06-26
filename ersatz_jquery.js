let $ = arg => {
    if (typeof arg == 'function')
        return window.addEventListener('load', arg);

    let _ = (typeof arg == 'string')? document.querySelectorAll(arg): [arg];
    return {
        on: (ev, cb) => {
            _.forEach(el => el.addEventListener(ev, cb));
            return this;
        },

        show: () => {
            _.forEach(el => el.style.display = '');
            return this;
        },

        hide: () => {
            _.forEach(el => el.style.display = 'none');
            return this;
        },

        css: (k, v) => {
            if (typeof k != 'undefined') _.forEach(el => el.style[k] = v);
            return _[0].style[k];
        },

        text: v => {
            if (typeof v != 'undefined') _.forEach(el => el.innerText = v);
            return _[0].innerText;
        },

        val: v => {
            if (typeof v != 'undefined') _.forEach(el, el.value = v);
            return _[0].value;
        },

        ajax: (url, settings) => {
            let opt = Object.assign({
                method: 'GET', data: null,
            }, settings || {});

            return new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.withCredentials = true;
                xhr.addEventListener("load", () => {
                    let data = {
                        status: xhr.status,
                        statusText: xhr.statusText,
                        result: xhr.response? JSON.parse(xhr.response): null,
                    };
                    xhr.status >= 200 && xhr.status < 300? resolve(data): reject(data);
                });
                xhr.addEventListener("error", reject);
                xhr.open(opt.method, url);
                xhr.send(opt.data);
            });
        },
    };
};
