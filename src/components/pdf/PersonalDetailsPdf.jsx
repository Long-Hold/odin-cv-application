import { View, Text, Font } from "@react-pdf/renderer";
import { GLOBAL_STYLES } from "./globalStyles/globalStyles";
import { measureFitFontSize } from "../../utils/measureFitFontSize";
import FiraSansBold from "../../assets/fonts/FiraSans-Bold.ttf";

Font.register({
  family: "fira_sansbold",
  src: FiraSansBold,
});

// First column width in pt, derived from ResumePdfDocument's `styles.page`:
// (8.5in page − 2×0.75in padding − 24px gap×0.75 px→pt) × (flex 1 / total flex 3)
// = (612 − 108 − 18) × (1/3) = 162pt
// Keep in sync if page padding, gap, or column flex ratios change in ResumePdfDocument.jsx.
const FIRST_COLUMN_WIDTH_PT = 162;

export function PersonalDetailsPdf({ name, email, number, summary }) {
  const fittedNameSize = measureFitFontSize(name, FIRST_COLUMN_WIDTH_PT, 22);

  return (
    <View style={GLOBAL_STYLES.detailSection}>
      <Text
        style={{
          fontFamily: "fira_sansbold",
          fontSize: `${fittedNameSize}pt`,
          whiteSpace: "nowrap",
          lineHeight: 1,
        }}
      >
        {name}
      </Text>
      <Text>{email}</Text>
      <Text>{number}</Text>
      <Text>{summary}</Text>
    </View>
  );
}
