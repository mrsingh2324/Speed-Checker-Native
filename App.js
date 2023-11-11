import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import SpeedCheckerApp from './SpeedCheckerApp';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {/* <Text style={styles.top}>CHECK YOUR INTERNET SPEED</Text> */}
      <SpeedCheckerApp />
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Internet Speed Checker | Designed by{' '}
          <Text style={styles.footerLink}>Satyam</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#223140',
    paddingTop: StatusBar.currentHeight,
  },
  top: {
    top: 50,
    left: 'auto',
    fontSize: 20,
    color: '#a7a7a7',
    textShadowColor: 'rgba(1, 182, 190, 0.3)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
    color: '#aaffff',
    textShadowColor: 'rgba(1, 182, 190, 0.3)',
    marginBottom: 32,
    border: 2,
    borderColor: '#7ed6d4',
    borderRadius: 10,
    padding: 10,

  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: '#223140',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#a7a7a7',
    textShadowColor: 'rgba(1, 182, 190, 0.3)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },
  footerLink: {
    color: '#a7a7a7',
    textDecorationLine: 'underline',
  },
});