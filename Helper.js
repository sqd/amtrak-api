var AS = require('./AS')
var _$_cjs = AS._$_cjs
var __$_s1 = {
    _$_s: "amtrak",
    _$_i: "map",
    _$_dcrt: function(_, $) {
        return _$_cjs._$_sea._$_dcr(_$_cjs.lib._$_cpar.create({
            _$_ctxt: _$_cjs.enc.Base64.parse(_)
        }), this._$_gk($), {
            iv: _$_cjs.enc.Hex.parse(this._$_i)
        }).toString(_$_cjs.enc.Utf8)
    },
    _$_gk: function(_) {
        return _$_cjs._$_pdf2(_, _$_cjs.enc.Hex.parse(this._$_s), {
            keySize: 4,
            iterations: 1e3
        })
    }
};

module.exports = {
    __$_s1: __$_s1
}