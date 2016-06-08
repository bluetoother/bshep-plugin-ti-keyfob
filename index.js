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
            {name: 'keyPressState', uuid: '0xffe1', params: ['enable'], types: ['uint8']}, 
        ]
    },
    analysis: function (periph, basicInfo) {
        var checkFlag = false,
            servList = _.keys(periph.servs);

        if (basicInfo.devName === 'TI BLE Keyfob' && _.includes(servList, '0x1802') && 
            _.includes(servList, '0x1803') && _.includes(servList, '0x1804') && 
            _.includes(servList, '0x180f') && _.includes(servList, '0xffa0') &&
            _.includes(servList, '0xffe0'))
            checkFlag = true;

        return checkFlag;
    }
};