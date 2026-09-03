import { StyleSheet, Font } from "@react-pdf/renderer";
import FiraSansBold from "../../../assets/fonts/FiraSans-Bold.ttf";
import FiraSansMedium from "../../../assets/fonts/FiraSans-Medium.ttf";

Font.register({
  family: "fira_sansbold",
  src: FiraSansBold,
});
Font.register({
  family: "fira_sansmedium",
  src: FiraSansMedium,
});

export const GLOBAL_STYLES = StyleSheet.create({
  detailSection: {
    flexDirection: "column",
    flexWrap: "nowrap",
    gap: "16px",
  },
  entrySection: {
    display: "flex",
    flexDirection: "column",
  },
  subHeadDate: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionHeader: {
    fontFamily: "fira_sansbold",
    fontSize: "18pt",
  },
  entryHeader: {
    fontFamily: "fira_sansbold",
    fontSize: "14pt",
  },
  entrySubHeader: {
    fontFamily: "fira_sansmedium",
    fontSize: "13pt",
  },
  dateText: {
    textAlign: "right",
    fontSize: "11pt",
  },
});
