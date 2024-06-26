import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import AmazonPay from '../assets/amazon-pay.png';
import SendMoney from '../assets/send-money.jpg';
import ScanQr from '../assets/scan-qr.jpeg';
import PayBills from '../assets/pay-bills.jpeg';
import {RecentSearchData} from '../data/RecentSeacrhData';
import ServicesCard from './ServicesCard';

export default function Services() {
  return (
    //!  sliderın altında resmin üzerine gelen ödeme şekli
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={{paddingRight: 20}}>
      <View style={styles.serviceContainer}>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image style={styles.imgStyle} source={AmazonPay} />
            <Text style={styles.title}>Amazon Pay</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image style={styles.imgStyle} source={SendMoney} />
            <Text style={styles.title}>Send Money</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image style={styles.imgStyle} source={ScanQr} />
            <Text style={styles.title}>Scan Qr</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image style={styles.imgStyle} source={PayBills} />
            <Text style={styles.title}>Pay Bills</Text>
          </View>
        </View>
      </View>
      {/* ödeme şeklinin yanındaki tekli resimler */}
      {/* <View style={styles.outerContainer}>
        <Text style={styles.recentSearch}>title</Text>
        <Image
          source={require('../assets/service1.jpeg')}
          style={styles.serviceImg}
        />
      </View> bunu mapleyecek */}

      {RecentSearchData.map(item => (
        <ServicesCard key={item.id} item={item} />
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: -80,
    paddingHorizontal: 10,
  },
  serviceContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    padding: 10,
    alignItems: 'center',
    paddingTop: 15,
  },
  imgStyle: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  title: {
    fontSize: 10,
    color: '#000000',
    marginTop: 2,
  },
});
