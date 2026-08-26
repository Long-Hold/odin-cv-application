import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { GLOBAL_STYLES } from "./globalStyles/globalStyles";

const styles = StyleSheet.create({
  name: {
    fontSize: '22pt',
    whiteSpace: 'nowrap',

    /**
     * I explicitly set a lineHeight of 1 because the name has a larger font size, which
     * expands into the flex gap making it appear like the gap between Name and the next element is smaller
     * than the rest of their siblings.
     */
    lineHeight: 1,
  }
})

export function PersonalDetailsPdf({name, email, number, summary}) {
  return (
    <View style={GLOBAL_STYLES.detailSection}>
      <Text style={styles.name}>{name}</Text>
      <Text>{email}</Text>
      <Text>{number}</Text>
      <Text>{summary}</Text>
    </View>
  )
}