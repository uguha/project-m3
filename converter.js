class Converter{
    apiUrl = 'https://api.exchangerate.host/latest?base={base}&symbols={symbol}';
    async getValue(base, symbol, count){
        let upperSymbol = symbol.toUpperCase();
        let upperBase = base.toUpperCase();

        if (upperBase === upperSymbol){
            return this.formatString(count);
        }
        try {
            let tempUrl = this.apiUrl.replace('{base}', upperBase).replace('{symbol}', upperSymbol);
            let response = await fetch(tempUrl);
            if (response.ok) {
                let json = await response.json();
                let res = json.rates[upperSymbol] * count;
                return this.formatString(res);
            } else {
                alert("Ошибка HTTP: " + response.status);
            }
        } catch (error) {
            alert('Что-то пошло не так!');
        }
    }
    formatString(str){
        str = ''+str;
        let res = str.replace(',','.').match('([0-9]+[.])?[0-9]{0,4}')[0];
        return res
    }
}