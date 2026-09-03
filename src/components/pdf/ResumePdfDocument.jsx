import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { PersonalDetailsPdf } from "./PersonalDetailsPdf";
import { SkillsDetailsPdf } from "./SkillsDetailsPdf";
import { WorkExperiencePdf } from "./WorkExperiencePdf";
import FiraSansRegular from "../../assets/fonts/FiraSans-Regular.ttf";
import { EducationDetailsPdf } from "./EducationDetailsPdf";
import { RESUME_KEYS } from "../../constants/resumeKeys";

// Prevents hyphening words that break
Font.registerHyphenationCallback((word) => [word]);

Font.register({
  family: "fira_sansregular",
  src: FiraSansRegular,
});

const styles = StyleSheet.create({
  page: {
    fontSize: "12pt",
    lineHeight: 1.15,
    padding: "0.75in",
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: "24px",
    fontFamily: "fira_sansregular",
    textOverflow: "none",
  },
  detailColumn: {
    flexDirection: "column",
    flexWrap: "nowrap",
    gap: "24px",
  },
});

export function ResumePdfDocument({ resume }) {
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <View style={[{ flex: 1, minWidth: 0 }, styles.detailColumn]}>
          <PersonalDetailsPdf
            name={resume[RESUME_KEYS.NAME]}
            email={resume[RESUME_KEYS.EMAIL]}
            number={resume[RESUME_KEYS.NUMBER]}
            summary={resume[RESUME_KEYS.SUMMARY]}
          />
          <SkillsDetailsPdf skillsArray={resume[RESUME_KEYS.SKILLS]} />
        </View>

        <View style={[{ flex: 2 }, styles.detailColumn]}>
          <WorkExperiencePdf
            workExperienceArray={resume[RESUME_KEYS.WORK_EXPERIENCE]}
          />
          <EducationDetailsPdf educationArray={resume[RESUME_KEYS.EDUCATION]} />
        </View>
      </Page>
    </Document>
  );
}
