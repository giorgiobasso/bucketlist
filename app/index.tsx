import { useState } from 'react';
import { Appearance, Button, StyleSheet, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';



export default function Index() {

  const [schemeText, setSchemeText] = useState<string | null | undefined>(null);

  function getScheme() {
    let colorScheme = Appearance.getColorScheme();
    setSchemeText(colorScheme);
  }
  const styles = StyleSheet.create({
    conainer: {
      color: 'green',
    },
  });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.conainer}>Content is in safe area.</Text>

      {schemeText && (
        <Text>Scheme: {schemeText}</Text>
      )}

      <Button title="Press me" onPress={getScheme} />
    </SafeAreaView>
  );



}
