import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const SpeedCheckerApp = () => {
    const imageLink = 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg';
    const downloadSize = 5049999;
    const [isLoading, setIsLoading] = useState(false);
    const [speed, setSpeed] = useState(0);

    const handleSpeedCheck = () => {
        setIsLoading(true);
        const timeStart = new Date().getTime();
        const downloadSrc = {
            uri: `${imageLink}?nn=${timeStart}`,
        };

        Image.prefetch(downloadSrc.uri)
            .then(() => {
                const timeEnd = new Date().getTime();
                const timeDuration = (timeEnd - timeStart) / 1000;
                const loadedBytes = downloadSize * 8;
                const totalSpeed = ((loadedBytes / timeDuration) / 1024 / 1024).toFixed(2);

                setSpeed(parseFloat(totalSpeed));
                setIsLoading(false);
            })
            .catch((error) => {
                console.log('Image prefetch error:', error);
                setIsLoading(false);
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.top}>CHECK YOUR INTERNET SPEED</Text>
            <View style={styles.loaderWidget}>
                {/* <Text style={styles.title}>CHECK YOUR INTERNET SPEED</Text> */}
                <View style={styles.loader}>
                    {isLoading && <Text style={styles.loaderText}>Loading...</Text>}
                    {!isLoading && <Text style={styles.speedText}>{speed.toFixed(2)} Mbps</Text>}
                </View>
                <TouchableOpacity style={styles.button} onPress={handleSpeedCheck}>
                    <Text style={styles.buttonText}>{isLoading ? 'Loading...' : 'CHECK SPEED'}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    Internet Speed Checker | Designed by{' '}
                    <Text style={styles.footerLink}>Satyam</Text>
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '80%',
        flex: 1,
        backgroundColor: '#223140',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loaderWidget: {
        width: 360,
        height: 420,
        alignItems: 'center',
    },
    top: {
        top: 0,
        fontSize: 30,
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

    loader: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        height: 240,
        width: 240,
        borderRadius: 120,
        backgroundColor: '#223140',
        borderWidth: 2,
        borderColor: '#7ed6d4',
    },
    loaderText: {
        color: '#eaeaea',
        fontSize: 20,
        fontWeight: 'bold',
    },
    speedText: {
        color: '#eaeaea',
        fontSize: 64,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 44,
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
        width: 120,
        borderRadius: 60,
        backgroundColor: '#263140',
        shadowColor: 'rgba(1, 182, 190, 0.3)',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 12,
    },
    buttonText: {
        color: '#eaeaea',
        fontSize: 18,
        fontWeight: 'bold',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: '#223140',
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

export default SpeedCheckerApp;