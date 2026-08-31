import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { GLOBAL_STYLES } from "./globalStyles/globalStyles";

const styles = StyleSheet.create({
  entrySection: {
    display: 'flex',
    flexDirection: 'column',
  },
  subHeadDate: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})

export function WorkExperiencePdf({workExperienceArray}) {
  return (
    <View style={GLOBAL_STYLES.detailSection}>
      <Text style={GLOBAL_STYLES.sectionHeader}>EXPERIENCE</Text>
      {workExperienceArray.map(entry => <WorkExperienceEntry key={entry.id} {...entry}/>)}
    </View>
  )
}

function WorkExperienceEntry({companyName, position, jobDescription, dateRange}) {
  return (
    <View style={styles.entrySection}>
      <Text style={GLOBAL_STYLES.entryHeader}>{companyName}</Text>
      <View style={styles.subHeadDate}>
        <Text style={GLOBAL_STYLES.entrySubHeader}>{position}</Text>
        <Text style={GLOBAL_STYLES.dateText}>{dateRange}</Text>
      </View>
      <Text>{jobDescription}</Text>
    </View>
  )
}