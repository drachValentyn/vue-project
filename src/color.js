export default {
    bind(el, bindings, vnode) {
        //el.style.color = 'green'



        const fontMod = bindings.modifiers['font'];

        if (fontMod){
            el.style.fontSize = '50px'
        }

        const delayMod = bindings.modifiers['delay'];

        let delay = 0;
        if(delayMod){
            delay = 1000
        }
        setTimeout(()=>{

            const arg = bindings.arg;
            el.style[arg] = bindings.value;

        }, delay);

    }

}