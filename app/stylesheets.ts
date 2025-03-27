import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "GlobalDefault",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20
  },
  subTitle: {
    fontSize: 15,
    fontFamily: "GlobalDefault",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
    marginTop: 5
  },
  input: {
    borderWidth: 2,
    fontFamily: "GlobalDefault",
    borderColor: 'grey',
    padding: 10,
    marginBottom: 10,
    borderRadius: 7
  },
  primaryButton: {
    backgroundColor: "#171717",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    width: 200,
    marginBottom: 5,
    marginTop: 5
  },
  primaryButtonText: {
    color: "white",
    fontSize: 14,
    fontFamily: "GlobalDefault"
  },
  secondayButton: {
    backgroundColor: "#E6E6E6",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    width: 200
  },
  secondayButtonText: {
    color: "black" ,
    fontSize: 14,
    fontFamily: "GlobalDefault"
  },
  baseText: {
    fontSize: 14,
    fontFamily: "GlobalDefault",
    marginTop: 5,
    marginBottom: 5
  },
  errorBox: {
    fontSize: 14,
    fontFamily: "GlobalDefault",
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#ffb3ab",
    color: "#bf3424",
    borderRadius: 8,
    padding: 10
  },
});

export default styles;
