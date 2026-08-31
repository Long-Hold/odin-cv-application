import { View, Text, Font } from "@react-pdf/renderer";
import { GLOBAL_STYLES } from "./globalStyles/globalStyles";
import { measureFitFontSize } from "../../utils/measureFitFontSize";
import FiraSansBold from "../../assets/fonts/FiraSans-Bold.ttf";

Font.register({
  family: 'fira_sansbold',
  src: FiraSansBold,
});

// Column width in points, from the fixed PDF page layout (not measured live).
const NAME_COLUMN_WIDTH_PT = 172; // TODO: derive from actual page/column math

export function PersonalDetailsPdf({name, email, number, summary}) {
  const fittedNameSize = measureFitFontSize(name, NAME_COLUMN_WIDTH_PT, 22);

  return (
    <View style={GLOBAL_STYLES.detailSection}>
      <Text style={{ 
        fontFamily: 'fira_sansbold', 
        fontSize: `${fittedNameSize}pt`, 
        whiteSpace: 'nowrap', 
        lineHeight: 1 }}>
        {name}
      </Text>
      <Text>{email}</Text>
      <Text>{number}</Text>
      <Text>{summary}</Text>
    </View>
  )
}