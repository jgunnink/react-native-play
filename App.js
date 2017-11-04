import React from "react"
import { StyleSheet, Text, View } from "react-native"

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Good day!</Text>
				<Text>This is the first app developed by JK in react native.</Text>
				<Text>Shake your phone to open the developer menu.</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
})
