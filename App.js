import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, Button, TextInput, StatusBar, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [amount, setAmount] = useState('');
  const [rates, setRates] = useState([]);
  const [result, setResult] = useState();
  const [currency, setCurrency] = useState();

  const fetchUrl = () => {
    fetch("https://api.apilayer.com/exchangerates_data/latest?base=eur&apikey=a6WA7tlRmQisCYNVCqR7HMOeRmFRiVDN")
      .then(response => response.json())
      .then(responseJson => setRates(responseJson.rates))
      .catch(error => {
        Alert.alert('Error', error);
      });
  }

  // Because of an infinite loop monthly fetch limit was exceeded, oops! 
  /*
  useEffect(() => {
    fetchUrl();
  }, []); */

  // Luckily I had some hard coded data!
  useEffect(() => {
    setRates(
      {
        "AED": 3.92631,
        "AFN": 84.449287,
        "ALL": 106.844272,
        "AMD": 412.421528,
        "ANG": 1.926331,
        "AOA": 885.648901,
        "ARS": 374.088456,
        "AUD": 1.65972,
        "AWG": 1.924156,
        "AZN": 1.826661,
        "BAM": 1.959605,
        "BBD": 2.15802,
        "BDT": 117.303931,
        "BGN": 1.958147,
        "BHD": 0.402976,
        "BIF": 3028.080548,
        "BMD": 1.068976,
        "BND": 1.458038,
        "BOB": 7.385098,
        "BRL": 5.17758,
        "BSD": 1.06884,
        "BTC": 3.9173796e-05,
        "BTN": 88.938181,
        "BWP": 14.621459,
        "BYN": 2.69775,
        "BYR": 20951.92282,
        "BZD": 2.154413,
        "CAD": 1.441241,
        "CDF": 2597.610158,
        "CHF": 0.958524,
        "CLF": 0.034354,
        "CLP": 947.924769,
        "CNY": 7.79572,
        "COP": 4185.028996,
        "CRC": 566.597525,
        "CUC": 1.068976,
        "CUP": 28.327855,
        "CVE": 110.799057,
        "CZK": 24.416446,
        "DJF": 190.31042,
        "DKK": 7.45462,
        "DOP": 60.610242,
        "DZD": 146.647482,
        "EGP": 33.03602,
        "ERN": 16.034635,
        "ETB": 58.980724,
        "EUR": 1,
        "FJD": 2.421868,
        "FKP": 0.863042,
        "GBP": 0.862194,
        "GEL": 2.806085,
        "GGP": 0.863042,
        "GHS": 12.298522,
        "GIP": 0.863042,
        "GMD": 64.726519,
        "GNF": 9251.984097,
        "GTQ": 8.41538,
        "GYD": 223.61688,
        "HKD": 8.358123,
        "HNL": 26.563845,
        "HRK": 7.498553,
        "HTG": 144.826471,
        "HUF": 383.932996,
        "IDR": 16435.019642,
        "ILS": 4.082899,
        "IMP": 0.863042,
        "INR": 89.008794,
        "IQD": 1400.358107,
        "IRR": 45164.221318,
        "ISK": 145.242067,
        "JEP": 0.863042,
        "JMD": 165.302312,
        "JOD": 0.757155,
        "JPY": 157.847076,
        "KES": 157.086102,
        "KGS": 94.829065,
        "KHR": 4404.179843,
        "KMF": 493.706687,
        "KPW": 962.078315,
        "KRW": 1415.120946,
        "KWD": 0.330185,
        "KYD": 0.890734,
        "KZT": 505.995937,
        "LAK": 21267.27036,
        "LBP": 16072.049045,
        "LKR": 345.930374,
        "LRD": 199.310345,
        "LSL": 20.289069,
        "LTL": 3.156407,
        "LVL": 0.646613,
        "LYD": 5.174004,
        "MAD": 10.984262,
        "MDL": 19.190635,
        "MGA": 4799.700578,
        "MKD": 61.572349,
        "MMK": 2244.568828,
        "MNT": 3709.178153,
        "MOP": 8.608734,
        "MRO": 381.624125,
        "MUR": 47.942356,
        "MVR": 16.47047,
        "MWK": 1146.477803,
        "MXN": 18.28996,
        "MYR": 5.00708,
        "MZN": 67.612656,
        "NAD": 20.289412,
        "NGN": 838.878553,
        "NIO": 39.092679,
        "NOK": 11.533419,
        "NPR": 142.300649,
        "NZD": 1.806756,
        "OMR": 0.411555,
        "PAB": 1.06888,
        "PEN": 3.968571,
        "PGK": 3.853017,
        "PHP": 60.542541,
        "PKR": 317.512527,
        "PLN": 4.640001,
        "PYG": 7772.273907,
        "QAR": 3.892171,
        "RON": 4.966887,
        "RSD": 117.271989,
        "RUB": 103.423685,
        "RWF": 1279.563858,
        "SAR": 4.009764,
        "SBD": 8.984822,
        "SCR": 13.909835,
        "SDG": 639.635004,
        "SEK": 11.931783,
        "SGD": 1.457008,
        "SHP": 1.300676,
        "SLE": 23.854171,
        "SLL": 21112.269208,
        "SOS": 608.789591,
        "SSP": 642.454018,
        "SRD": 40.884057,
        "STD": 22125.637786,
        "SYP": 13898.610252,
        "SZL": 20.289079,
        "THB": 38.173466,
        "TJS": 11.741353,
        "TMT": 3.752105,
        "TND": 3.368874,
        "TOP": 2.556616,
        "TRY": 28.884682,
        "TTD": 7.240823,
        "TWD": 34.150032,
        "TZS": 2677.511378,
        "UAH": 39.473462,
        "UGX": 4002.640965,
        "USD": 1.068976,
        "UYU": 40.787863,
        "UZS": 13041.502702,
        "VEF": 3573505.975654,
        "VES": 35.774278,
        "VND": 25936.021807,
        "VUV": 129.399907,
        "WST": 2.868181,
        "XAF": 657.236245,
        "XAG": 0.046161,
        "XAU": 0.000554,
        "XCD": 2.88896,
        "XDR": 0.810447,
        "XOF": 657.955645,
        "XPF": 120.039095,
        "YER": 267.59138,
        "ZAR": 20.311339,
        "ZMK": 9622.06135,
        "ZMW": 21.99098,
        "ZWL": 344.209724
      }
    )
  }, []);

  const calculate = () => {
    setResult((amount / rates[currency]).toFixed(2))
  }

  const pickerItems = Object.keys(rates).map(i => (
    <Picker.Item label={i.toString()} value={i} key={i} />
  ));

  return (
    <View style={styles.container}>
      {<StatusBar hidden={true} />}
      <Image
        source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.8gauzRKD5TjkOd8YPM2-tQHaHa&pid=Api&P=0&h=180' }}
        style={{ height: 100, width: 100,  marginBottom: 10 }}
      />
      <Text style={{ fontSize: 20 }}>{result} €</Text>
      <View style={{ flexDirection: "row", margin: 10 }}>
        <TextInput
          style={{ fontSize: 18, width: 120, height: 30, borderBottomWidth: 1 }}
          /* placeholder='amount'  */
          value={amount}
          onChangeText={text => setAmount(text)}
          keyboardType="numeric"
        />
        <Picker
          style={{ fontSize: 18, width: 120, height: 30 }}
          selectedValue={currency}
          onValueChange={(itemValue, itemIndex) =>
            setCurrency(itemValue)
          }>
          {pickerItems}
        </Picker>
      </View>
      <Button title="Convert" onPress={calculate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});