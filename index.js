module.exports = {
    gattDefs: {
        service: [
            { name: 'accelero', uuid: '0xffa0' },
            { name: 'simpleKey', uuid: '0xffe0' }
        ],
        characteristic: [
            {name: 'acceleroEnable', uuid: '0xffa1', params: ['enable'], types: ['uint8']}, 
            {name: 'acceleroRange', uuid: '0xffa2', params: ['range'], types: ['uint16']}, 
            {name: 'acceleroX', uuid: '0xffa3', params: ['x'], types: ['uint8']}, 
            {name: 'acceleroY', uuid: '0xffa4', params: ['y'], types: ['uint8']}, 
            {name: 'acceleroZ', uuid: '0xffa5', params: ['z'], types: ['uint8']}, 
            {name: 'keyPressState', uuid: '0xffe1', params: ['enable'], types: ['uint8']}
        ]
    },
    examine: function (periph, basicInfo) {
        var isMine  = false,
            checkServList = [ '0x1802', '0x1803', '0x1804', '0x180f', '0xffa0', '0xffe0' ],
            count = 0;

        if (basicInfo.devName === 'TI BLE Keyfob' ) {
            for(var hdl in periph.servs) {
                for(var i = 0; i < checkServList.length; i += 1)
                    if (periph.servs[hdl].uuid === checkServList[i]) count += 1;
            }

            if (count === 6)
                isMine  = true;
        }

        return isMine;
    }
};