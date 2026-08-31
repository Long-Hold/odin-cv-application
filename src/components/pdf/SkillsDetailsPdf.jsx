import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { GLOBAL_STYLES } from "./globalStyles/globalStyles";

const styles = StyleSheet.create({
  list: {
    flexDirection: 'column',
    gap: '8px',
  }
})

export function SkillsDetailsPdf({skillsArray}) {
  return (
    <View style={GLOBAL_STYLES.detailSection}>
      <Text style={GLOBAL_STYLES.sectionHeader}>SKILLS</Text>

      <View style={styles.list}>
        {skillsArray.map(entry => 
          <Text key={entry.id}>{entry.skill}</Text>
        )}
      </View>
    </View>
  )
}