import { _ as s } from './plugin-vue_export-helper.21dcd24c.js'
import { f as e } from './vendor.63d0fee4.js'
var t = '/Project_Flip-Vite/assets/Sky_PC.86981397.png',
    i = '/assets/Shop_Filler_Sky.bbe01c90.png',
    r = '/assets/Product_Temp_A.33165d33.png',
    a = '/assets/Product_Temp_B.495d1121.png',
    o = '/assets/Product_Temp_C.637300fd.png',
    c = '/assets/Shop_Filler_2.9f259c50.png'
const _ = {
        beforeCreate: function () {
            document.body.className = 'shop'
        },
    },
    d = e(
        '<div id="background"><div id="message"><h1 class="absolute font-[poppins] text-white text-[2.6vw] text-left italic tracking-wider pl-[5%] pt-[8%]"> Used to say that there are no limits <br> and that anything is possible. <br> You can achieve anything if you really want to <br> The sky&#39;s the limit </h1><img id="flipping_Custom" src="' +
            t +
            '" class="absolute scale-[.75] right-[10%]"></div><div id="fillers"><img id="background1" src="' +
            i +
            '" class=""><div id="Janky_Product_Cards" class="absolute flex justify-between items-center w-screen scale-[.70]"><img src="' +
            r +
            '" class=""><img src="' +
            a +
            '" class="pb-[2%]"><img src="' +
            o +
            '" class=""></div><img id="background2" src="' +
            c +
            '"></div></div><div class="filler"></div>',
        2
    )
function n(p, l, m, u, v, g) {
    return d
}
var b = s(_, [['render', n]])
export { b as default }
