export default {
    bind(el, bindings, vnode) {
        console.log('bind');
        el.style.color = 'green'
    },
    inserted(el, bindings, vnode) {
        console.log('inserted');

    },
    update(el, bindings, vnode, olvVnode){
        console.log('update');

    },
    componentUpdated(el, bindings, vnode, olvVnode) {
        console.log('componentUpdated');

    },
    unbind(){
        console.log('unbind');
    }

}