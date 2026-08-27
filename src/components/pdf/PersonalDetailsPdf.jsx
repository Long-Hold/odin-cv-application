import { View, Text } from "@react-pdf/renderer";
import { GLOBAL_STYLES } from "./globalStyles/globalStyles";
import { measureFitFontSize } from "../../utils/measureFitFontSize";

// Column width in points, from the fixed PDF page layout (not measured live).
const NAME_COLUMN_WIDTH_PT = 172; // TODO: derive from actual page/column math

export function PersonalDetailsPdf({name, email, number, summary}) {
  const fittedNameSize = measureFitFontSize(name, NAME_COLUMN_WIDTH_PT, 22);

  return (
    <View style={GLOBAL_STYLES.detailSection}>
      <Text style={{ fontSize: `${fittedNameSize}pt`, whiteSpace: 'nowrap', lineHeight: 1 }}>
        {name}
      </Text>
      <Text>{email}</Text>
      <Text>{number}</Text>
      <Text>{summary}</Text>
    </View>
  )
}