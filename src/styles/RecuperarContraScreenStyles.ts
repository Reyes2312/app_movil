import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    logo: {
        width: 160,
        height: 160,
        marginBottom: 32,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#0000FF',
        borderRadius: 12,
        marginBottom: 16,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF',
        width: '80%',
    },
    inputIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    input: {
        flex: 1,
        paddingVertical: 12,
        fontSize: 20,
        color: '#000',
    },
    button: {
        backgroundColor: '#0000FF',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 4,
        marginTop: 20,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
    },
});

export default styles;
