import { View, Text } from "@react-pdf/renderer";
import { GLOBAL_STYLES } from "./globalStyles/globalStyles";

export function EducationDetailsPdf({ educationArray }) {
  return (
    <View style={GLOBAL_STYLES.detailSection}>
      <Text style={GLOBAL_STYLES.sectionHeader}>EDUCATION</Text>
      {educationArray.map((entry) => (
        <EducationEntry key={entry.id} {...entry} />
      ))}
    </View>
  );
}

function EducationEntry({ schoolName, degree, dateRange }) {
  return (
    <View style={GLOBAL_STYLES.entrySection}>
      <Text style={GLOBAL_STYLES.entryHeader}>{degree}</Text>
      <View style={GLOBAL_STYLES.subHeadDate}>
        <Text>{schoolName}</Text>
        <Text>{dateRange}</Text>
      </View>
    </View>
  );
}
