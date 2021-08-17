const requireComponent = require.context('./', true, /\.vue$/)
const install = (Vue) => {
    if (install.installed) return
    install.installed
    requireComponent.keys().forEach(fileName => {
        const config = requireComponent(fileName)
        const componentName = config.default.name

        Vue.component(componentName, config.default || config)
    })
    //这里自定义指令
    Vue.directive('focus', {
        inserted: function (el) {
            el.focus()
        }
    })
    Vue.directive("switchVal", {
        inserted: function (el, binding, vnode) {
            el.firstElementChild.checked = Boolean(binding.value)
            el.addEventListener("click", () => {
                vnode.context.$data[binding.expression] = el.firstElementChild.checked
            })
        },
        // update: function (el, binding, vnode) {
        //     // binding.value = el.firstElementChild.checked 
        //     // vnode.context.$data[binding.expression] = el.firstElementChild.checked
        //     // console.log(vnode.context.$data[binding.expression]);
        // },
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install
}